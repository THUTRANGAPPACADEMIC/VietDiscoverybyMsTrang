import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LearningHub } from './components/Student/LearningHub';
import { TeachingStudio } from './components/Teacher/TeachingStudio';
import { AdminConsole } from './components/Admin/AdminConsole';
import { StudentAuthModal } from './components/StudentAuthModal';
import { StaffAuthModal } from './components/StaffAuthModal';
import { AboutCreatorModal } from './components/AboutCreatorModal';
import { MagicalAdventureFooter } from './components/MagicalAdventureFooter';
import { 
  UserProfile, 
  DestinationProgress, 
  ClassRoom, 
  StudentRosterItem, 
  MaterialItem, 
  AssignmentItem,
  GradeBand 
} from './types';
import { DESTINATIONS } from './data/destinations';
import { INITIAL_CLASSES, INITIAL_STUDENTS, INITIAL_MATERIALS } from './data/initialClasses';
import { localStore, supabase, isSupabaseConfigured } from './lib/supabase';
import { syncStudentProgress, loadStudentProgress } from './lib/studentAuth';
import { MAP_METADATA } from './data/administrativeData';
import { Lock, ShieldCheck, Sparkles, School } from 'lucide-react';

export const App: React.FC = () => {
  // Current logged in user (defaults to Class 4.1 student for immediate exploration)
  const [user, setUser] = useState<UserProfile | null>(() => {
    return localStore.get<UserProfile | null>('current_user', {
      id: 'STU-4101',
      studentCode: 'STU-4101',
      fullName: 'Nguyễn Minh Khôi',
      role: 'student',
      classId: 'cls-41',
      className: 'Class 4.1 - Heritage Navigators',
      classCode: '4.1',
      gradeLevel: 'Grade 4',
      gradeBand: 'grade_4_5',
      stars: 310,
      avatar: 'fa-user-graduate'
    });
  });

  // Modals
  const [isStudentAuthOpen, setIsStudentAuthOpen] = useState(false);
  const [isStaffAuthOpen, setIsStaffAuthOpen] = useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);

  // View sections: 'student' | 'teacher' | 'admin'
  const [activeSection, setActiveSection] = useState<'student' | 'teacher' | 'admin'>('student');
  const [activeStudentTab, setActiveStudentTab] = useState<'explore' | 'games' | 'passport' | 'progress'>('explore');
  const [activeTeacherTab, setActiveTeacherTab] = useState<'materials' | 'classes' | 'progress' | 'assessment' | 'ai'>('materials');

  // Teacher / Admin student experience previewer override
  const [previewGradeBand, setPreviewGradeBand] = useState<GradeBand | undefined>(undefined);

  // Persistence States
  const [progressMap, setProgressMap] = useState<Record<string, DestinationProgress>>(() => {
    return localStore.get<Record<string, DestinationProgress>>('progress_map', {
      halong: {
        destinationId: 'halong',
        completedSteps: { vocabulary: true, reading: true, listening: true, speaking: true, quiz: true },
        quizScore: 100,
        totalQuestions: 4,
        attempts: 1,
        starsEarned: 50,
        lastAttemptDate: 'Yesterday'
      }
    });
  });

  const [classes, setClasses] = useState<ClassRoom[]>(() => {
    return localStore.get<ClassRoom[]>('classes', INITIAL_CLASSES);
  });

  const [students, setStudents] = useState<StudentRosterItem[]>(() => {
    return localStore.get<StudentRosterItem[]>('students', INITIAL_STUDENTS);
  });

  const [materials, setMaterials] = useState<MaterialItem[]>(() => {
    return localStore.get<MaterialItem[]>('materials', INITIAL_MATERIALS);
  });

  // Calculate dynamic total stars
  const earnedStars = Object.values(progressMap).reduce((acc, p) => acc + (p.starsEarned || 0), 0);
  const totalStars = (user?.stars || 0) + earnedStars;

  // Strict Route Guard: prevent student role from ever accessing teacher or admin screens
  useEffect(() => {
    if (user?.role === 'student' && activeSection !== 'student') {
      setActiveSection('student');
    }
  }, [user, activeSection]);

  // Save to local storage on changes
  useEffect(() => {
    localStore.set('progress_map', progressMap);
  }, [progressMap]);

  useEffect(() => {
    localStore.set('classes', classes);
  }, [classes]);

  useEffect(() => {
    localStore.set('students', students);
  }, [students]);

  useEffect(() => {
    localStore.set('materials', materials);
  }, [materials]);

  useEffect(() => {
    if (user) {
      localStore.set('current_user', user);
    }
  }, [user]);

  // Automatically restore saved progress from cloud/local storage on student login
  useEffect(() => {
    if (user?.id && user.role === 'student') {
      loadStudentProgress(user.id).then(cloudProgress => {
        if (cloudProgress && Object.keys(cloudProgress).length > 0) {
          setProgressMap(prev => ({ ...prev, ...cloudProgress }));
        }
      });
    }
  }, [user?.id]);

  // Update progress handler with automatic cloud synchronization
  const handleUpdateProgress = async (destId: string, score: number, starsEarned: number) => {
    const updatedEntry: DestinationProgress = {
      destinationId: destId,
      completedSteps: { vocabulary: true, reading: true, listening: true, speaking: true, quiz: true },
      quizScore: score,
      totalQuestions: 4,
      attempts: (progressMap[destId]?.attempts || 0) + 1,
      starsEarned: (progressMap[destId]?.starsEarned || 0) + starsEarned,
      lastAttemptDate: 'Vừa xong'
    };

    setProgressMap(prev => ({
      ...prev,
      [destId]: updatedEntry
    }));

    // Auto-save to Supabase & local cache
    if (user?.id) {
      await syncStudentProgress(user.id, destId, updatedEntry);
    }
  };

  // Teacher actions
  const handleAddClass = (newClass: ClassRoom) => {
    setClasses(prev => [newClass, ...prev]);
  };

  const handleUploadRoster = (newStudents: StudentRosterItem[]) => {
    setStudents(prev => {
      const merged = [...prev];
      newStudents.forEach(stu => {
        const idx = merged.findIndex(s => s.studentCode === stu.studentCode || s.id === stu.id);
        if (idx >= 0) {
          merged[idx] = stu;
        } else {
          merged.unshift(stu);
        }
      });
      return merged;
    });
  };

  const handleAssignTask = (newAsg: AssignmentItem) => {
    setClasses(prev => prev.map(c => c.id === newAsg.classId ? { ...c, activeAssignments: c.activeAssignments + 1 } : c));
  };

  const handleAddMaterial = (newMat: MaterialItem) => {
    setMaterials(prev => [newMat, ...prev]);
  };

  const handleDeleteMaterial = (id: string) => {
    setMaterials(prev => prev.filter(m => m.id !== id));
  };

  const handleTogglePublish = (id: string) => {
    setMaterials(prev => prev.map(m => m.id === id ? { ...m, isPublished: !m.isPublished } : m));
  };

  const handleAwardBonusStars = (studentId: string, stars: number) => {
    setStudents(prev => prev.map(s => s.id === studentId ? { ...s, totalStars: s.totalStars + stars } : s));
    alert(`Awarded +${stars} bonus stars to student!`);
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured() && supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setPreviewGradeBand(undefined);
    setActiveSection('student');
  };

  // Filter classes & students based on teacher role (teachers only see their assigned classes)
  const accessibleClasses = user?.role === 'admin'
    ? classes
    : user?.role === 'teacher'
    ? classes.filter(c => c.teacherId === 'teacher-trang' || c.teacherName.includes('Trang'))
    : [];

  const accessibleStudents = user?.role === 'admin'
    ? students
    : user?.role === 'teacher'
    ? students.filter(s => accessibleClasses.some(c => c.id === s.classId))
    : [];

  return (
    <div 
      className="min-h-screen max-w-full overflow-x-hidden flex flex-col text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900 pb-20 sm:pb-0 relative"
      style={{
        backgroundColor: '#dbeafe',
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.85) 0%, transparent 28%),
          radial-gradient(circle at 85% 12%, rgba(255, 255, 255, 0.75) 0%, transparent 32%),
          radial-gradient(circle at 50% 60%, rgba(224, 242, 254, 0.6) 0%, transparent 55%),
          linear-gradient(180deg, #bae6fd 0%, #e0f2fe 35%, #ecfdf5 100%)
        `
      }}
    >
      
      {/* Top Main Navigation Header */}
      <Header
        currentRole={user?.role || 'student'}
        user={user}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeStudentTab={activeStudentTab}
        setActiveStudentTab={setActiveStudentTab}
        activeTeacherTab={activeTeacherTab}
        setActiveTeacherTab={setActiveTeacherTab}
        previewGradeBand={previewGradeBand}
        onOpenStudentAuth={() => setIsStudentAuthOpen(true)}
        onLogout={handleLogout}
        totalStars={totalStars}
        onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* STUDENT LEARNING HUB */}
        {activeSection === 'student' && (
          <LearningHub
            user={user}
            destinations={DESTINATIONS}
            progressMap={progressMap}
            activeTab={activeStudentTab}
            totalStars={totalStars}
            previewGradeBand={previewGradeBand}
            onUpdateProgress={handleUpdateProgress}
            onSelectTab={setActiveStudentTab}
            onEarnStars={(stars) => {
              if (user) {
                setUser({
                  ...user,
                  stars: (user.stars || 0) + stars
                });
              }
            }}
          />
        )}

        {/* TEACHER TEACHING STUDIO (Strictly Protected) */}
        {activeSection === 'teacher' && user && user.role !== 'student' && (
          <TeachingStudio
            activeTab={activeTeacherTab}
            classes={accessibleClasses}
            students={accessibleStudents}
            materials={materials}
            destinations={DESTINATIONS}
            onAddClass={handleAddClass}
            onAssignTask={handleAssignTask}
            onAddMaterial={handleAddMaterial}
            onDeleteMaterial={handleDeleteMaterial}
            onTogglePublish={handleTogglePublish}
            onAwardBonusStars={handleAwardBonusStars}
            onPreviewGradeBand={(band) => {
              setPreviewGradeBand(band);
              setActiveSection('student');
            }}
            onUploadRoster={handleUploadRoster}
          />
        )}

        {/* ADMIN CONSOLE (Strictly Protected for Admins) */}
        {activeSection === 'admin' && user && user.role === 'admin' && (
          <AdminConsole
            classes={classes}
            students={students}
            materials={materials}
            onUpdateStudents={setStudents}
            onUpdateClasses={setClasses}
          />
        )}

      </main>

      {/* Global Magical Adventure 3D Footer */}
      <MagicalAdventureFooter
        activeStudentTab={activeStudentTab}
        setActiveStudentTab={setActiveStudentTab}
        onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
        onOpenStaffAuth={() => setIsStaffAuthOpen(true)}
        totalStars={totalStars}
      />

      {/* About Creator & Pedagogy Modal */}
      <AboutCreatorModal
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
      />

      {/* Student Authentication Modal */}
      <StudentAuthModal
        isOpen={isStudentAuthOpen}
        classes={classes}
        students={students}
        onClose={() => setIsStudentAuthOpen(false)}
        onStudentLoginSuccess={(studentUser, progress) => {
          setUser(studentUser);
          if (progress && Object.keys(progress).length > 0) {
            setProgressMap(prev => ({ ...prev, ...progress }));
          }
          setPreviewGradeBand(undefined);
          setActiveSection('student');
        }}
      />

      {/* Discrete Staff / Admin Authentication Modal */}
      <StaffAuthModal
        isOpen={isStaffAuthOpen}
        onClose={() => setIsStaffAuthOpen(false)}
        onStaffLoginSuccess={(staffUser) => {
          setUser(staffUser);
          if (staffUser.role === 'admin') {
            setActiveSection('admin');
          } else {
            setActiveSection('teacher');
          }
        }}
      />

      {/* Mobile Bottom Navigation Bar (Smartphones: 320px - 640px) */}
      {activeSection === 'student' && (
        <MobileBottomNav
          activeStudentTab={activeStudentTab}
          setActiveStudentTab={setActiveStudentTab}
        />
      )}

    </div>
  );
};
