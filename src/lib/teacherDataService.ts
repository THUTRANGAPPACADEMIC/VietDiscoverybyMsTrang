import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { StudentRosterItem, ClassRoom, GradeLevel, GradeBand } from '../types';
import { INITIAL_CLASSES } from '../data/initialClasses';

export interface TeacherDataLoadResult {
  success: boolean;
  students: StudentRosterItem[];
  classes: ClassRoom[];
  totalStudents: number;
  activeLearners: number;
  totalStars: number;
  averageScore: number;
  errorMessage?: string;
  isCloudVerified: boolean;
  needsRpcSetup?: boolean;
}

/**
 * Purge legacy hardcoded mock roster (197 students) from LocalStorage
 * Ensures genuine clean baseline on teacher dashboard.
 */
export function purgeLegacyMockRoster(): void {
  try {
    const cachedStudents = localStore.get<any[]>('students', []);
    if (Array.isArray(cachedStudents) && (cachedStudents.length >= 190 || cachedStudents.some(s => s.id === 'STU-2201' && s.totalStars === 200))) {
      console.info('[TeacherDataService] Purging legacy 197 mock students from localStore.');
      localStore.remove('students');
    }
  } catch {
    // Ignore storage errors
  }
}

/**
 * Fetch authentic teacher classes and student roster from Supabase
 * Enforces server-side authorization via secure RPC; zero fake students.
 *
 * @param includeAccessCodes - true when rendering Student Access Cards in protected Class Management; false for Evidence Center & public analytics.
 */
export async function fetchTeacherRealRosterAndClasses(
  includeAccessCodes: boolean = true,
  classFilter: string = 'All'
): Promise<TeacherDataLoadResult> {
  // Always clean out legacy mock roster
  purgeLegacyMockRoster();

  if (!isSupabaseConfigured() || !supabase) {
    return {
      success: false,
      students: [],
      classes: INITIAL_CLASSES.map(c => ({ ...c, studentCount: 0 })),
      totalStudents: 0,
      activeLearners: 0,
      totalStars: 0,
      averageScore: 0,
      isCloudVerified: false,
      errorMessage: 'Hệ thống chưa kết nối cơ sở dữ liệu Supabase. Vui lòng kiểm tra cấu hình mạng hoặc biến môi trường.'
    };
  }

  try {
    // 1. Fetch Class Summaries with dynamic student count from Supabase
    let loadedClasses: ClassRoom[] = [];
    let classesError: string | undefined;

    const { data: classRows, error: classRpcErr } = await supabase.rpc('get_teacher_classes_summary');

    if (classRpcErr) {
      console.warn('[TeacherDataService] get_teacher_classes_summary error:', classRpcErr.code, classRpcErr.message);
      classesError = classRpcErr.message;
    } else if (Array.isArray(classRows) && classRows.length > 0) {
      loadedClasses = classRows.map((r: any) => ({
        id: 'cls-' + r.class_code.replace('.', ''),
        name: r.class_name || `Lớp ${r.class_code}`,
        code: r.class_code,
        gradeLevel: (r.grade_level as GradeLevel) || 'Grade 4',
        gradeBand: (r.grade_band as GradeBand) || 'grade_4_5',
        studentCount: Number(r.student_count) || 0,
        teacherId: 'teacher-trang',
        teacherName: r.teacher_name || 'Cô Trần Thị Thu Trang',
        activeAssignments: 3,
        schoolYear: r.school_year || '2026-2027'
      }));
    }

    // 2. Fetch Authentic Student Roster with progress from Supabase
    let loadedStudents: StudentRosterItem[] = [];
    let studentsError: string | undefined;
    let needsRpcSetup = false;

    const { data: studentRows, error: studentRpcErr } = await supabase.rpc('get_teacher_student_roster', {
      p_class_code: classFilter === 'All' ? null : classFilter,
      p_include_access_codes: includeAccessCodes
    });

    if (studentRpcErr) {
      console.warn('[TeacherDataService] get_teacher_student_roster error:', studentRpcErr.code, studentRpcErr.message);
      studentsError = studentRpcErr.message;
      if (studentRpcErr.code === 'PGRST202' || studentRpcErr.message.includes('Could not find the function')) {
        needsRpcSetup = true;
      }
    } else if (Array.isArray(studentRows)) {
      loadedStudents = studentRows.map((s: any) => ({
        id: s.student_id,
        studentCode: s.student_code,
        name: s.full_name,
        classId: s.class_id,
        classCode: s.class_code,
        className: s.class_name,
        gradeLevel: (s.grade_level as GradeLevel) || 'Grade 4',
        gradeBand: (s.grade_band as GradeBand) || 'grade_4_5',
        accessCode: includeAccessCodes ? s.access_code : '******',
        accessCodeHash: '',
        failedPinAttempts: 0,
        isLocked: false,
        completedDestinations: Number(s.completed_destinations) || 0,
        totalStars: Number(s.total_stars) || 0,
        averageScore: Number(s.average_quiz_score) || 0,
        lastActive: s.last_active || 'Chưa có hoạt động',
        status: (s.status as 'online' | 'offline') || 'offline',
        avatar: s.avatar || 'fa-user-graduate'
      }));
    }

    // If either RPC failed, return structured warning and zero fake students
    if (studentRpcErr || classRpcErr) {
      if (
        studentRpcErr?.code === 'PGRST202' || 
        classRpcErr?.code === 'PGRST202' ||
        studentRpcErr?.message?.includes('Could not find the function') || 
        classRpcErr?.message?.includes('Could not find the function')
      ) {
        needsRpcSetup = true;
      }
      return {
        success: false,
        students: [],
        classes: INITIAL_CLASSES.map(c => ({ ...c, studentCount: 0 })),
        totalStudents: 0,
        activeLearners: 0,
        totalStars: 0,
        averageScore: 0,
        isCloudVerified: false,
        needsRpcSetup,
        errorMessage: needsRpcSetup
          ? 'Máy chủ Supabase Production chưa được cài đặt hàm API giáo viên an toàn (get_teacher_classes_summary & get_teacher_student_roster). Thầy/Cô vui lòng chạy script supabase_production_teacher_roster_rpc.sql trên Supabase Production SQL Editor.'
          : `Lỗi truy xuất dữ liệu từ Supabase Production: ${studentsError || classesError}`
      };
    }

    // If classes were loaded from RPC, sync student counts with actual students loaded
    if (loadedClasses.length > 0 && loadedStudents.length > 0) {
      loadedClasses = loadedClasses.map(cls => {
        const matchingStudents = loadedStudents.filter(s => s.classCode === cls.code || s.classId === cls.id);
        return {
          ...cls,
          studentCount: matchingStudents.length > 0 ? matchingStudents.length : cls.studentCount
        };
      });
    }
 else if (loadedClasses.length === 0 && loadedStudents.length > 0) {
      // Build classes dynamically from students if class RPC was not installed
      const classMap = new Map<string, number>();
      loadedStudents.forEach(s => {
        classMap.set(s.classCode, (classMap.get(s.classCode) || 0) + 1);
      });
      loadedClasses = INITIAL_CLASSES.map(c => ({
        ...c,
        studentCount: classMap.get(c.code) || 0
      }));
    } else if (loadedClasses.length === 0) {
      loadedClasses = INITIAL_CLASSES.map(c => ({ ...c, studentCount: 0 }));
    }

    // Compute live aggregated metrics
    const totalStudents = loadedStudents.length > 0 
      ? loadedStudents.length 
      : loadedClasses.reduce((sum, c) => sum + (c.studentCount || 0), 0);

    const activeLearners = loadedStudents.filter(s => s.totalStars > 0 || s.completedDestinations > 0).length;
    const totalStars = loadedStudents.reduce((sum, s) => sum + (s.totalStars || 0), 0);
    const scoredStudents = loadedStudents.filter(s => s.averageScore > 0);
    const averageScore = scoredStudents.length > 0
      ? Math.round(scoredStudents.reduce((sum, s) => sum + s.averageScore, 0) / scoredStudents.length)
      : 0;

    return {
      success: true,
      students: loadedStudents,
      classes: loadedClasses,
      totalStudents,
      activeLearners,
      totalStars,
      averageScore,
      isCloudVerified: true
    };
  } catch (err: any) {
    console.error('[TeacherDataService] Unexpected exception:', err);
    return {
      success: false,
      students: [],
      classes: INITIAL_CLASSES.map(c => ({ ...c, studentCount: 0 })),
      totalStudents: 0,
      activeLearners: 0,
      totalStars: 0,
      averageScore: 0,
      isCloudVerified: false,
      errorMessage: `Lỗi kết nối máy chủ Supabase: ${err?.message || 'Không xác định'}`
    };
  }
}
