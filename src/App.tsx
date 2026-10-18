import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GradeNumber } from './data/gradePathwaysData';
import { StaffAuthModal } from './components/StaffAuthModal';
import { AboutCreatorModal } from './components/AboutCreatorModal';
import { MagicalAdventureFooter } from './components/MagicalAdventureFooter';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { StudentLandingLoginPage } from './components/Student/StudentLandingLoginPage';
import { AdventureLoadingFallback } from './components/Student/AdventureLoadingFallback';

// Lazy-loaded routes & views for optimized initial bundle
const LearningHub = React.lazy(() => 
  import('./components/Student/LearningHub').then(m => ({ default: m.LearningHub }))
);
const GradeDashboard = React.lazy(() => 
  import('./components/Student/GradeDashboard').then(m => ({ default: m.GradeDashboard }))
);
const TeachingStudio = React.lazy(() => 
  import('./components/Teacher/TeachingStudio').then(m => ({ default: m.TeachingStudio }))
);
const AdminConsole = React.lazy(() => 
  import('./components/Admin/AdminConsole').then(m => ({ default: m.AdminConsole }))
);
import { ContentApprovalCenter } from './components/Teacher/ContentApprovalCenter';
import { HaLongAdventurePreview } from './components/Student/HaLongAdventurePreview';
import { VoiceUpgradePreview } from './components/Student/VoiceUpgradePreview';

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
import { syncStudentProgress, loadStudentProgress, resolveStudentGrade, logoutStudent } from './lib/studentAuth';
import { 
  parseAuthUrl, 
  exchangeAuthCode, 
  setAuthSession, 
  cleanAuthUrlParams, 
  resolveStaffProfile 
} from './lib/staffAuth';
import { TeacherAcceptInviteModal } from './components/TeacherAcceptInviteModal';
import { MAP_METADATA } from './data/administrativeData';
import { Lock, ShieldCheck, Sparkles, School } from 'lucide-react';

export const App: React.FC = () => {
  // Current logged in user (null by default if no authenticated session exists in storage)
  const [user, setUser] = useState<UserProfile | null>(() => {
    const cached = localStore.get<UserProfile | null>('current_user', null);
    if (cached && cached.role === 'student') {
      const resolved = resolveStudentGrade(cached);
      return {
        ...cached,
        gradeLevel: resolved.gradeLevel,
        gradeBand: resolved.gradeBand
      };
    }
    return cached;
  });

  // Modals
  const [isStaffAuthOpen, setIsStaffAuthOpen] = useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);

  // Teacher Invitation / Password Setup Modal
  const [inviteModalState, setInviteModalState] = useState<{
    isOpen: boolean;
    mode: 'setup' | 'error' | 'success';
    userEmail?: string;
    errorTitle?: string;
    errorMessage?: string;
  }>({
    isOpen: false,
    mode: 'setup'
  });

  // View sections: 'student' | 'teacher' | 'admin'
  const [activeSection, setActiveSection] = useState<'student' | 'teacher' | 'admin'>(() => {
    const cached = localStore.get<UserProfile | null>('current_user', null);
    if (cached && cached.role === 'teacher') return 'teacher';
    if (cached && (cached.role === 'admin' || cached.role === 'super_admin')) return 'admin';
    return 'student';
  });
  const [activeStudentTab, setActiveStudentTab] = useState<'explore' | 'games' | 'videos' | 'passport' | 'progress'>('explore');
  const [activeTeacherTab, setActiveTeacherTab] = useState<'approval' | 'curriculum' | 'materials' | 'videos' | 'classes' | 'progress' | 'assessment' | 'ai' | 'clip_selector'>('approval');

  // Teacher / Admin student experience previewer override
  const [previewGradeBand, setPreviewGradeBand] = useState<GradeBand | undefined>(undefined);

  // Client-Side Browser Routing (/grade/1 to /grade/5, /)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
  });

  // Listen for browser forward/back button navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    try {
      window.history.pushState({}, '', path);
    } catch {
      // Fallback
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if currently on a grade dashboard route: /grade/1 to /grade/5
  const gradeRouteMatch = currentPath.match(/^\/grade\/([1-5])\/?$/);
  const activeGradeNum: GradeNumber | null = gradeRouteMatch 
    ? (parseInt(gradeRouteMatch[1], 10) as GradeNumber) 
    : null;

  // Check if currently on isolated preview route for Content Approval Center
  const isApprovalPreviewRoute = currentPath === '/preview-approval' || currentPath === '/preview/approval-center';

  // Check if currently on isolated preview route for Ha Long Bay Adventure trial lesson
  const isHaLongPreviewRoute = currentPath === '/preview-halong-adventure' || currentPath === '/preview/halong-adventure';

  // Check if currently on isolated preview route for Premium AI Voice Upgrade
  const isVoicePreviewRoute = currentPath === '/preview-voice' || currentPath === '/preview/voice' || currentPath === '/preview/voice-demo';

  // Persistence States
  const [progressMap, setProgressMap] = useState<Record<string, DestinationProgress>>(() => {
    const cachedUser = localStore.get<UserProfile | null>('current_user', null);
    const storageKey = cachedUser?.id ? `progress_map_${cachedUser.id}` : 'progress_map';
    const cached = localStore.get<Record<string, DestinationProgress>>(storageKey, localStore.get<Record<string, DestinationProgress>>('progress_map', {}));
    // Purge legacy mock data if present in local storage
    if (cached && cached.halong && cached.halong.starsEarned === 50 && cached.halong.lastAttemptDate === 'Yesterday') {
      const { halong, ...rest } = cached;
      localStore.set(storageKey, rest);
      localStore.set('progress_map', rest);
      return rest;
    }
    return cached || {};
  });

  const [classes, setClasses] = useState<ClassRoom[]>(() => {
    localStore.remove('classes');
    return INITIAL_CLASSES.map(c => ({ ...c, studentCount: 0 }));
  });

  const [students, setStudents] = useState<StudentRosterItem[]>(() => {
    localStore.remove('students');
    return [];
  });

  const [materials, setMaterials] = useState<MaterialItem[]>(() => {
    return localStore.get<MaterialItem[]>('materials', INITIAL_MATERIALS);
  });

  // Cloud synchronization status (only true when verified cloud sync succeeded)
  const [isCloudSynced, setIsCloudSynced] = useState<boolean>(false);

  // Dynamic total stars: for students, single source of truth is user.stars, backed by verified progressMap
  // Using Math.max prevents any double-counting while ensuring immediate UI update when stars are earned
  const progressStars = Object.values(progressMap).reduce((acc, p) => acc + (p.starsEarned || 0), 0);
  const totalStars = user
    ? (isCloudSynced && typeof user.stars === 'number' ? user.stars : Math.max(user.stars ?? 0, progressStars))
    : progressStars;

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

  // Listen for Supabase invitation tokens, PKCE codes, recovery hashes, or auth errors
  useEffect(() => {
    const client = supabase;
    if (!isSupabaseConfigured() || !client) return;

    let isMounted = true;

    const processAuthTokens = async () => {
      const urlState = parseAuthUrl();

      // Case 1: Error in URL (e.g. otp_expired, access_denied)
      if (urlState.hasError) {
        if (!isMounted) return;
        setInviteModalState({
          isOpen: true,
          mode: 'error',
          errorTitle: urlState.errorTitle,
          errorMessage: urlState.errorMessage
        });
        cleanAuthUrlParams();
        return;
      }

      // Case 2: PKCE code exchange
      if (urlState.code) {
        const res = await exchangeAuthCode(urlState.code);
        if (!isMounted) return;
        cleanAuthUrlParams();
        if (res.success && res.session?.user) {
          setInviteModalState({
            isOpen: true,
            mode: 'setup',
            userEmail: res.session.user.email
          });
        } else {
          setInviteModalState({
            isOpen: true,
            mode: 'error',
            errorTitle: 'Mã xác thực không hợp lệ',
            errorMessage: res.error || 'Mã xác thực từ email đã hết hạn hoặc không hợp lệ.'
          });
        }
        return;
      }

      // Case 3: Implicit tokens in hash
      if (urlState.accessToken && urlState.refreshToken) {
        const res = await setAuthSession(urlState.accessToken, urlState.refreshToken);
        if (!isMounted) return;
        cleanAuthUrlParams();
        if (res.success && res.session?.user) {
          setInviteModalState({
            isOpen: true,
            mode: 'setup',
            userEmail: res.session.user.email
          });
        }
        return;
      }

      // Case 4: Dedicated /accept-invitation or /auth/callback route
      if (urlState.isInvite || urlState.isRecovery || currentPath === '/accept-invitation' || currentPath === '/auth/callback') {
        const { data: { session } } = await client.auth.getSession();
        if (!isMounted) return;
        if (session?.user) {
          setInviteModalState({
            isOpen: true,
            mode: 'setup',
            userEmail: session.user.email
          });
          cleanAuthUrlParams();
        }
      }
    };

    processAuthTokens();

    // Listen for auth state events (e.g. PASSWORD_RECOVERY, SIGNED_IN)
    const { data: { subscription } } = client.auth.onAuthStateChange(async (event, session) => {
      if (!isMounted) return;

      if (event === 'PASSWORD_RECOVERY') {
        if (session?.user) {
          setInviteModalState({
            isOpen: true,
            mode: 'setup',
            userEmail: session.user.email
          });
        }
      } else if (event === 'SIGNED_IN' && session?.user) {
        const urlState = parseAuthUrl();
        if (urlState.isInvite || urlState.isRecovery || currentPath === '/accept-invitation' || currentPath === '/auth/callback') {
          setInviteModalState({
            isOpen: true,
            mode: 'setup',
            userEmail: session.user.email
          });
          cleanAuthUrlParams();
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [currentPath]);

  // Automatically restore saved progress from cloud/local storage on student login
  useEffect(() => {
    if (user?.id && user.role === 'student') {
      loadStudentProgress(user.id).then(({ data: cloudProgress, isCloudSynced: synced }) => {
        if (cloudProgress && typeof cloudProgress === 'object') {
          setProgressMap(cloudProgress);
        }
        setIsCloudSynced(synced);

        // Calculate genuine stars earned from verified destination progress
        const verifiedProgressStars = Object.values(cloudProgress || {}).reduce(
          (acc, p) => acc + (p.starsEarned || 0), 
          0
        );

        // Sanitize and reconcile user.stars if it was corrupted or double-counted previously in localStorage
        setUser(prev => {
          if (!prev) return null;
          const targetStars = synced ? verifiedProgressStars : (verifiedProgressStars > 0 ? verifiedProgressStars : (prev.stars || 0));
          if (prev.stars !== targetStars) {
            const updated = { ...prev, stars: targetStars };
            localStore.set('current_user', updated);
            return updated;
          }
          return prev;
        });
      });
    } else {
      setIsCloudSynced(false);
    }
  }, [user?.id]);

  // Update progress handler with automatic cloud synchronization
  const handleUpdateProgress = async (
    destId: string, 
    score?: number, 
    starsEarned?: number, 
    stepUpdates?: Partial<DestinationProgress['completedSteps']>
  ) => {
    const existing = progressMap[destId];
    const finalStars = Math.max(existing?.starsEarned || 0, starsEarned || 0);
    const existingSteps = existing?.completedSteps || {
      vocabulary: false,
      reading: false,
      listening: false,
      speaking: false,
      quiz: false
    };

    const nextSteps = {
      ...existingSteps,
      ...(stepUpdates || {})
    };

    // Only update quizScore if a quiz step is explicitly completed or valid quiz score provided
    const isQuizUpdate = Boolean(stepUpdates?.quiz) || (stepUpdates === undefined && typeof score === 'number' && score > 0);
    const finalScore = isQuizUpdate
      ? (score !== undefined ? score : (existing?.quizScore || 0))
      : (existing?.quizScore || 0);

    const updatedEntry: DestinationProgress = {
      destinationId: destId,
      completedSteps: nextSteps,
      quizScore: finalScore,
      totalQuestions: 4,
      attempts: (existing?.attempts || 0) + 1,
      starsEarned: finalStars,
      lastAttemptDate: 'Vừa xong'
    };

    const nextProgressMap = {
      ...progressMap,
      [destId]: updatedEntry
    };
    setProgressMap(nextProgressMap);

    // Auto-save to Supabase & local cache
    if (user?.id) {
      const studentKey = `progress_map_${user.id}`;
      localStore.set(studentKey, nextProgressMap);
      localStore.set('progress_map', nextProgressMap);

      const nextTotalStars = Object.values(nextProgressMap).reduce((acc, p) => acc + (p.starsEarned || 0), 0);
      setUser(prev => {
        if (!prev) return null;
        const updated = { ...prev, stars: Math.max(prev.stars || 0, nextTotalStars) };
        localStore.set('current_user', updated);
        return updated;
      });

      const { isCloudSynced: synced, serverTotalStars, verifiedStars } = await syncStudentProgress(user.id, destId, updatedEntry);
      setIsCloudSynced(synced);
      if (synced) {
        if (typeof verifiedStars === 'number' && verifiedStars !== updatedEntry.starsEarned) {
          setProgressMap(prev => ({
            ...prev,
            [destId]: {
              ...prev[destId],
              starsEarned: verifiedStars
            }
          }));
        }
        if (typeof serverTotalStars === 'number') {
          setUser(prev => {
            if (!prev) return null;
            const updated = { ...prev, stars: serverTotalStars };
            localStore.set('current_user', updated);
            return updated;
          });
        }
      }
    }
  };

  // Game progress handler with cloud synchronization & state persistence
  const handleSaveGameProgress = async (gameId: string, progress: DestinationProgress) => {
    const existing = progressMap[gameId];
    // Replay protection: preserve greatest stars earned
    const finalStars = Math.max(existing?.starsEarned || 0, progress.starsEarned || 0);
    const updatedEntry: DestinationProgress = {
      ...progress,
      starsEarned: finalStars
    };

    const nextProgressMap = {
      ...progressMap,
      [gameId]: updatedEntry
    };
    setProgressMap(nextProgressMap);

    // Save to student-scoped cache & global cache
    if (user?.id) {
      const studentKey = `progress_map_${user.id}`;
      localStore.set(studentKey, nextProgressMap);
      localStore.set('progress_map', nextProgressMap);

      // Reconcile total verified stars across all activities
      const totalVerifiedStars = Object.values(nextProgressMap).reduce(
        (acc, p) => acc + (p.starsEarned || 0),
        0
      );
      setUser(prev => {
        if (!prev) return null;
        const newStars = Math.max(prev.stars || 0, totalVerifiedStars);
        const updated = { ...prev, stars: newStars };
        localStore.set('current_user', updated);
        return updated;
      });

      // Synchronize with Supabase Cloud via Session RPC
      const { isCloudSynced: synced, serverTotalStars, verifiedStars } = await syncStudentProgress(user.id, gameId, updatedEntry);
      setIsCloudSynced(synced);
      if (synced) {
        if (typeof verifiedStars === 'number' && verifiedStars !== updatedEntry.starsEarned) {
          setProgressMap(prev => ({
            ...prev,
            [gameId]: {
              ...prev[gameId],
              starsEarned: verifiedStars
            }
          }));
        }
        if (typeof serverTotalStars === 'number') {
          setUser(prev => {
            if (!prev) return null;
            const updated = { ...prev, stars: serverTotalStars };
            localStore.set('current_user', updated);
            return updated;
          });
        }
      }
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
    const currentId = user?.id;
    await logoutStudent(currentId);
    localStore.remove('current_user');
    localStore.remove('session_token');
    localStore.remove('progress_map');
    if (currentId) {
      localStore.remove(`progress_map_${currentId}`);
      for (let g = 1; g <= 5; g++) {
        localStore.remove(`grade_progress_${currentId}_g${g}`);
        localStore.remove(`grade_badges_${currentId}_g${g}`);
        localStore.remove(`grade_game_attempts_${currentId}_g${g}`);
      }
    }
    for (let g = 1; g <= 5; g++) {
      localStore.remove(`grade_progress_guest_g${g}`);
      localStore.remove(`grade_badges_guest_g${g}`);
      localStore.remove(`grade_game_attempts_guest_g${g}`);
    }
    setProgressMap({});
    setUser(null);
    setIsCloudSynced(false);
    setPreviewGradeBand(undefined);
    setActiveSection('student');
  };

  // Filter classes & students based on teacher role (teachers only see their assigned classes; admin & super_admin see all)
  const isSuperOrAdmin = user?.role === 'admin' || user?.role === 'super_admin';
  const accessibleClasses = isSuperOrAdmin
    ? classes
    : user?.role === 'teacher'
    ? classes.filter(c => c.teacherId === 'teacher-trang' || c.teacherName.includes('Trang'))
    : [];

  const accessibleStudents = isSuperOrAdmin
    ? students
    : user?.role === 'teacher'
    ? students.filter(s => accessibleClasses.some(c => c.id === s.classId))
    : [];

  // Dedicated Read-Only UI Preview Route for Content Approval Center (Protected: Local Dev or Staff only)
  if (isApprovalPreviewRoute && (import.meta.env.DEV || (user && user.role !== 'student'))) {
    return (
      <div 
        className="min-h-screen max-w-full overflow-x-hidden flex flex-col text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900 pb-16 relative"
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
        {/* Top Preview Bar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-300 shadow-sm py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-1.5 rounded-xl bg-amber-100 border border-amber-300">🛡️</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-black text-amber-900 tracking-wider">
                    Chế độ Xem Trước Giao Diện (UI Preview Only)
                  </span>
                  <span className="px-2 py-0.2 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-extrabold border border-emerald-300">
                    Không cần đăng nhập
                  </span>
                </div>
                <div className="text-sm font-black text-slate-800">
                  Trung tâm Phê duyệt & Kiểm soát Chất lượng Nội dung — VietDiscovery by Ms. Trang
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer transition-colors shrink-0"
            >
              <span>← Quay lại Trang Chủ / Đăng Nhập</span>
            </button>
          </div>
        </header>

        {/* Content Approval Center Component */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ContentApprovalCenter />
        </main>
      </div>
    );
  }

  // Dedicated Read-Only UI Preview Route for Ha Long Bay Adventure trial lesson (Protected: Local Dev or Staff only)
  if (isHaLongPreviewRoute && (import.meta.env.DEV || (user && user.role !== 'student'))) {
    return (
      <div 
        className="min-h-screen max-w-full overflow-x-hidden flex flex-col text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900 pb-16 relative"
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
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <HaLongAdventurePreview onBackToHome={() => navigateTo('/')} />
        </main>
      </div>
    );
  }

  // Dedicated Read-Only UI Preview Route for Premium AI Voice Upgrade (Protected: Local Dev or Staff only)
  if (isVoicePreviewRoute && (import.meta.env.DEV || (user && user.role !== 'student'))) {
    return (
      <div 
        className="min-h-screen max-w-full overflow-x-hidden flex flex-col text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900 pb-16 relative"
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
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <VoiceUpgradePreview onBackToHome={() => navigateTo('/')} />
        </main>
      </div>
    );
  }

  // When no authenticated session exists, display full-screen 3D adventure login landing page
  if (!user) {
    return (
      <div className="min-h-screen w-full relative">
        <StudentLandingLoginPage
          onLoginSuccess={(studentUser, progress) => {
            const resolved = resolveStudentGrade(studentUser);
            const normalizedUser: UserProfile = {
              ...studentUser,
              gradeLevel: resolved.gradeLevel,
              gradeBand: resolved.gradeBand
            };
            setUser(normalizedUser);
            const cleanProgress = (progress && typeof progress === 'object') ? progress : {};
            setProgressMap(cleanProgress);
            const studentKey = studentUser.id ? `progress_map_${studentUser.id}` : 'progress_map';
            localStore.set(studentKey, cleanProgress);
            localStore.set('progress_map', cleanProgress);
            setIsCloudSynced(Boolean(localStore.get<string | null>('session_token', null)));
            setPreviewGradeBand(undefined);
            setActiveSection('student');
          }}
          onOpenStaffAuth={() => setIsStaffAuthOpen(true)}
          onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
        />

        {/* Discrete Staff / Admin Authentication Modal */}
        <StaffAuthModal
          isOpen={isStaffAuthOpen}
          onClose={() => setIsStaffAuthOpen(false)}
          onOpenPreview={() => navigateTo('/preview-approval')}
          onStaffLoginSuccess={(staffUser) => {
            setUser(staffUser);
            if (staffUser.role === 'admin' || staffUser.role === 'super_admin') {
              setActiveSection('admin');
            } else {
              setActiveSection('teacher');
            }
          }}
        />

        {/* Teacher Invitation Acceptance & Initial Password Setup Modal */}
        <TeacherAcceptInviteModal
          isOpen={inviteModalState.isOpen}
          mode={inviteModalState.mode}
          userEmail={inviteModalState.userEmail}
          errorTitle={inviteModalState.errorTitle}
          errorMessage={inviteModalState.errorMessage}
          onClose={() => setInviteModalState(prev => ({ ...prev, isOpen: false }))}
          onOpenStaffLogin={() => setIsStaffAuthOpen(true)}
          onSuccess={(staffUser) => {
            setInviteModalState(prev => ({ ...prev, mode: 'success' }));
            setTimeout(() => {
              setUser(staffUser);
              setInviteModalState(prev => ({ ...prev, isOpen: false }));
              if (staffUser.role === 'admin' || staffUser.role === 'super_admin') {
                setActiveSection('admin');
              } else {
                setActiveSection('teacher');
              }
            }, 1200);
          }}
        />

        {/* About Creator & Pedagogy Modal */}
        <AboutCreatorModal
          isOpen={isCreatorModalOpen}
          onClose={() => setIsCreatorModalOpen(false)}
        />

        {/* Persistent Floating Piano Background Music Player */}
        <FloatingMusicPlayer />
      </div>
    );
  }

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
        setActiveStudentTab={(tab) => {
          setActiveStudentTab(tab);
          if (activeGradeNum !== null) {
            navigateTo('/');
          }
        }}
        activeTeacherTab={activeTeacherTab}
        setActiveTeacherTab={setActiveTeacherTab}
        previewGradeBand={previewGradeBand}
        onOpenStudentAuth={handleLogout}
        onLogout={handleLogout}
        totalStars={totalStars}
        isCloudSynced={isCloudSynced}
        onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <React.Suspense fallback={<AdventureLoadingFallback message="Opening your magical learning adventure..." subMessage="Đang tải hành trình khám phá..." />}>
          {/* STUDENT LEARNING HUB & GRADE DASHBOARD ROUTES (/grade/1 to /grade/5) */}
          {activeSection === 'student' && (
            activeGradeNum !== null ? (
              <GradeDashboard
                gradeNum={activeGradeNum}
                user={user}
                progressMap={progressMap}
                onNavigateHome={() => navigateTo('/')}
                onNavigateGrade={(g) => navigateTo(`/grade/${g}`)}
                onUpdateProgress={handleUpdateProgress}
              />
            ) : (
              <LearningHub
                user={user}
                destinations={DESTINATIONS}
                progressMap={progressMap}
                activeTab={activeStudentTab}
                totalStars={totalStars}
                previewGradeBand={previewGradeBand}
                onUpdateProgress={handleUpdateProgress}
                onSaveGameProgress={handleSaveGameProgress}
                onSelectTab={setActiveStudentTab}
                onNavigateGrade={(g) => navigateTo(`/grade/${g}`)}
                onEarnStars={(stars) => {
                  if (user && stars > 0) {
                    setUser(prev => {
                      if (!prev) return null;
                      const updated = {
                        ...prev,
                        stars: (prev.stars || 0) + stars
                      };
                      localStore.set('current_user', updated);
                      return updated;
                    });
                  }
                }}
              />
            )
          )}

          {/* TEACHER TEACHING STUDIO (Strictly Protected) */}
          {activeSection === 'teacher' && user && user.role !== 'student' && (
            <TeachingStudio
              activeTab={activeTeacherTab}
              onSelectTab={setActiveTeacherTab}
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

          {/* ADMIN CONSOLE (Strictly Protected for Admins and Super Admin) */}
          {activeSection === 'admin' && user && (user.role === 'admin' || user.role === 'super_admin') && (
            <AdminConsole
              classes={classes}
              students={students}
              materials={materials}
              onUpdateStudents={setStudents}
              onUpdateClasses={setClasses}
            />
          )}
        </React.Suspense>
      </main>

      {/* Global Magical Adventure 3D Footer */}
      <MagicalAdventureFooter
        activeStudentTab={activeStudentTab}
        setActiveStudentTab={(tab) => {
          setActiveStudentTab(tab);
          if (activeGradeNum !== null) {
            navigateTo('/');
          }
        }}
        onOpenCreatorModal={() => setIsCreatorModalOpen(true)}
        onOpenStaffAuth={() => setIsStaffAuthOpen(true)}
        totalStars={totalStars}
      />

      {/* About Creator & Pedagogy Modal */}
      <AboutCreatorModal
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
      />



      {/* Discrete Staff / Admin Authentication Modal */}
      <StaffAuthModal
        isOpen={isStaffAuthOpen}
        onClose={() => setIsStaffAuthOpen(false)}
        onStaffLoginSuccess={(staffUser) => {
          setUser(staffUser);
          if (staffUser.role === 'admin' || staffUser.role === 'super_admin') {
            setActiveSection('admin');
          } else {
            setActiveSection('teacher');
          }
        }}
      />

      {/* Teacher Invitation Acceptance & Initial Password Setup Modal */}
      <TeacherAcceptInviteModal
        isOpen={inviteModalState.isOpen}
        mode={inviteModalState.mode}
        userEmail={inviteModalState.userEmail}
        errorTitle={inviteModalState.errorTitle}
        errorMessage={inviteModalState.errorMessage}
        onClose={() => setInviteModalState(prev => ({ ...prev, isOpen: false }))}
        onOpenStaffLogin={() => setIsStaffAuthOpen(true)}
        onSuccess={(staffUser) => {
          setInviteModalState(prev => ({ ...prev, mode: 'success' }));
          setTimeout(() => {
            setUser(staffUser);
            setInviteModalState(prev => ({ ...prev, isOpen: false }));
            if (staffUser.role === 'admin' || staffUser.role === 'super_admin') {
              setActiveSection('admin');
            } else {
              setActiveSection('teacher');
            }
          }, 1200);
        }}
      />

      {/* Mobile Bottom Navigation Bar (Smartphones: 320px - 640px) */}
      {activeSection === 'student' && (
        <MobileBottomNav
          activeStudentTab={activeStudentTab}
          setActiveStudentTab={(tab) => {
            setActiveStudentTab(tab);
            if (activeGradeNum !== null) {
              navigateTo('/');
            }
          }}
        />
      )}

      {/* Persistent Floating Piano Background Music Player */}
      <FloatingMusicPlayer />

    </div>
  );
};
