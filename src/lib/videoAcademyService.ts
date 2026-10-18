import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { EducationalVideo, StudentVideoProgress, VideoFilterOptions, VideoSourceType } from '../types';
import { INITIAL_VIDEOS } from '../data/initialVideos';

const STORAGE_KEY_VIDEOS = 'vietdiscovery_educational_videos';
const STORAGE_KEY_PROGRESS = 'vietdiscovery_student_video_progress';

/**
 * Robust YouTube and Multi-Platform Video URL Parser
 * Converts arbitrary YouTube URLs into privacy-enhanced, child-safe embeds (youtube-nocookie.com)
 * without autoplay, external recommendations, or tracking cookies.
 */
export function parseVideoUrl(inputUrl: string): {
  isValid: boolean;
  embedUrl: string;
  thumbnailUrl: string;
  platform: 'youtube' | 'vimeo' | 'direct' | 'other';
  videoId?: string;
  errorMessage?: string;
} {
  if (!inputUrl || typeof inputUrl !== 'string') {
    return {
      isValid: false,
      embedUrl: '',
      thumbnailUrl: '',
      platform: 'other',
      errorMessage: 'Vui lòng cung cấp đường dẫn video hợp lệ.'
    };
  }

  const cleanUrl = inputUrl.trim();

  // 1. YouTube standard URL parser
  // Handles: watch?v=ID, youtu.be/ID, embed/ID, shorts/ID, /v/ID
  const ytMatch = cleanUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/i
  );

  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return {
      isValid: true,
      platform: 'youtube',
      videoId,
      // Privacy-enhanced mode, rel=0 (no external recommendations), modestbranding, playsinline, no autoplay
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };
  }

  // 2. Vimeo Parser
  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/)(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    const videoId = vimeoMatch[1];
    return {
      isValid: true,
      platform: 'vimeo',
      videoId,
      embedUrl: `https://player.vimeo.com/video/${videoId}?dnt=1&app_id=122963`,
      thumbnailUrl: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80'
    };
  }

  // 3. Direct MP4 / WebM / HLS stream
  if (cleanUrl.match(/\.(mp4|webm|ogg|m3u8)(\?.*)?$/i)) {
    return {
      isValid: true,
      platform: 'direct',
      embedUrl: cleanUrl,
      thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    };
  }

  // 4. Already an embed URL
  if (cleanUrl.includes('/embed/')) {
    return {
      isValid: true,
      platform: 'other',
      embedUrl: cleanUrl,
      thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    };
  }

  return {
    isValid: false,
    embedUrl: '',
    thumbnailUrl: '',
    platform: 'other',
    errorMessage: 'Định dạng URL chưa được hỗ trợ. Hãy nhập link YouTube (Watch/Shorts/Share) hoặc video trực tuyến.'
  };
}

/**
 * Load all educational videos from Supabase Cloud or Local Storage Cache
 */
export async function getEducationalVideos(
  options?: VideoFilterOptions,
  isStaffViewer: boolean = false
): Promise<EducationalVideo[]> {
  let allVideos: EducationalVideo[] = [];

  // 1. Try fetching from Supabase Cloud
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('educational_videos')
        .select('*')
        .order('is_teacher_created', { ascending: false })
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        allVideos = data.map(item => ({
          id: item.id,
          titleEn: item.title_en || item.titleEn,
          titleVi: item.title_vi || item.titleVi,
          videoUrl: item.video_url || item.videoUrl,
          embedUrl: item.embed_url || item.embedUrl,
          sourceType: item.source_type || item.sourceType || 'curated_youtube',
          channelOrAuthor: item.channel_or_author || item.channelOrAuthor || 'VietDiscovery',
          grade: item.grade || 1,
          gradeLevel: item.grade_level || item.gradeLevel || `Grade ${item.grade || 1}`,
          gradeBand: item.grade_band || item.gradeBand || `grade_${item.grade || 1}`,
          topic: item.topic || 'General Discovery',
          difficulty: item.difficulty || 'Pre-A1 Starter',
          learningObjectivesEn: item.learning_objectives_en || item.learningObjectivesEn || [],
          learningObjectivesVi: item.learning_objectives_vi || item.learningObjectivesVi || [],
          descriptionEn: item.description_en || item.descriptionEn || '',
          descriptionVi: item.description_vi || item.descriptionVi || '',
          durationMinutes: item.duration_minutes || item.durationMinutes || 5,
          thumbnailUrl: item.thumbnail_url || item.thumbnailUrl || '',
          status: item.status || 'published',
          isTeacherCreated: item.is_teacher_created ?? item.isTeacherCreated ?? false,
          allowEmbedding: item.allow_embedding ?? item.allowEmbedding ?? true,
          notes: item.notes,
          createdAt: item.created_at || item.createdAt || new Date().toISOString(),
          updatedAt: item.updated_at || item.updatedAt || new Date().toISOString(),
          questions: item.questions || [],
          provinceCode: item.province_code || item.provinceCode,
          provinceName: item.province_name || item.provinceName,
          learningAdventure: item.learning_adventure || item.learningAdventure,
          listeningTask: item.listening_task || item.listeningTask,
          speakingTask: item.speaking_task || item.speakingTask,
          applyTask: item.apply_task || item.applyTask,
          startSeconds: item.start_seconds || item.startSeconds,
          endSeconds: item.end_seconds || item.endSeconds
        }));

        // Cache cloud videos locally
        localStore.set(STORAGE_KEY_VIDEOS, allVideos);
      }
    } catch (err) {
      console.warn('[VideoAcademy] Supabase fetch error, falling back to local store:', err);
    }
  }

  // 2. High-availability local fallback
  if (allVideos.length === 0) {
    const cached = localStore.get<EducationalVideo[]>(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
    allVideos = cached && cached.length > 0 ? cached : INITIAL_VIDEOS;
    // Ensure cache has initial seed if empty
    if (!cached || cached.length === 0) {
      localStore.set(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
    }
  }

  // 3. Filter for student view: ONLY show approved or published videos!
  let filtered = allVideos;
  if (!isStaffViewer) {
    filtered = filtered.filter(v => v.status === 'published' || v.status === 'approved');
  }

  // 4. Apply optional filters
  if (options) {
    if (options.grade && options.grade !== 'all') {
      filtered = filtered.filter(v => v.grade === options.grade);
    }
    if (options.provinceCode && options.provinceCode !== 'all') {
      filtered = filtered.filter(v => v.provinceCode === options.provinceCode);
    }
    if (options.learningAdventure && options.learningAdventure !== 'all') {
      filtered = filtered.filter(v => v.learningAdventure === options.learningAdventure);
    }
    if (options.status && options.status !== 'all') {
      filtered = filtered.filter(v => v.status === options.status);
    }
    if (options.sourceType && options.sourceType !== 'all') {
      filtered = filtered.filter(v => v.sourceType === options.sourceType);
    }
    if (options.difficulty && options.difficulty !== 'all') {
      filtered = filtered.filter(v => v.difficulty === options.difficulty);
    }
    if (options.onlyTeacherCreated) {
      filtered = filtered.filter(v => v.isTeacherCreated);
    }
    if (options.topic && options.topic !== 'all') {
      filtered = filtered.filter(v => v.topic.toLowerCase().includes(options.topic!.toLowerCase()));
    }
    if (options.searchQuery && options.searchQuery.trim()) {
      const q = options.searchQuery.trim().toLowerCase();
      filtered = filtered.filter(v => 
        v.titleEn.toLowerCase().includes(q) ||
        v.titleVi.toLowerCase().includes(q) ||
        v.topic.toLowerCase().includes(q) ||
        (v.provinceName && v.provinceName.toLowerCase().includes(q)) ||
        v.descriptionEn.toLowerCase().includes(q) ||
        v.descriptionVi.toLowerCase().includes(q)
      );
    }
  }

  // 5. Prioritize Teacher-created content
  return filtered.sort((a, b) => {
    if (a.isTeacherCreated && !b.isTeacherCreated) return -1;
    if (!a.isTeacherCreated && b.isTeacherCreated) return 1;
    return a.grade - b.grade;
  });
}

/**
 * Add a new educational video by URL with pre-validation
 */
export async function addEducationalVideo(
  videoInput: Partial<EducationalVideo> & { videoUrl: string; titleEn: string; titleVi: string; grade: 1 | 2 | 3 | 4 | 5 }
): Promise<{ success: boolean; video?: EducationalVideo; error?: string }> {
  const parsed = parseVideoUrl(videoInput.videoUrl);
  if (!parsed.isValid) {
    return {
      success: false,
      error: parsed.errorMessage || 'Đường dẫn video không hợp lệ hoặc không hỗ trợ nhúng.'
    };
  }

  const newVideo: EducationalVideo = {
    id: 'vid-' + Date.now(),
    titleEn: videoInput.titleEn.trim(),
    titleVi: videoInput.titleVi.trim(),
    videoUrl: videoInput.videoUrl.trim(),
    embedUrl: parsed.embedUrl,
    sourceType: videoInput.sourceType || 'curated_youtube',
    channelOrAuthor: videoInput.channelOrAuthor || 'Giáo viên Thu Trang',
    grade: videoInput.grade,
    gradeLevel: `Grade ${videoInput.grade}`,
    gradeBand: `grade_${videoInput.grade}` as any,
    topic: videoInput.topic || 'General Discovery',
    difficulty: videoInput.difficulty || 'Pre-A1 Starter',
    learningObjectivesEn: videoInput.learningObjectivesEn || [],
    learningObjectivesVi: videoInput.learningObjectivesVi || [],
    descriptionEn: videoInput.descriptionEn || '',
    descriptionVi: videoInput.descriptionVi || '',
    durationMinutes: videoInput.durationMinutes || 5,
    thumbnailUrl: videoInput.thumbnailUrl || parsed.thumbnailUrl,
    status: videoInput.status || 'draft', // Defaults to draft so teacher can review before publishing!
    isTeacherCreated: videoInput.isTeacherCreated ?? (videoInput.sourceType === 'teacher_youtube'),
    allowEmbedding: true,
    notes: videoInput.notes,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questions: videoInput.questions || [],
    provinceCode: videoInput.provinceCode,
    provinceName: videoInput.provinceName,
    learningAdventure: videoInput.learningAdventure,
    listeningTask: videoInput.listeningTask,
    speakingTask: videoInput.speakingTask,
    applyTask: videoInput.applyTask,
    startSeconds: videoInput.startSeconds,
    endSeconds: videoInput.endSeconds
  };

  // 1. Update Local Storage Cache
  const currentList = localStore.get<EducationalVideo[]>(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
  const updatedList = [newVideo, ...currentList];
  localStore.set(STORAGE_KEY_VIDEOS, updatedList);

  // 2. Sync to Supabase if connected
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('educational_videos').insert({
        id: newVideo.id,
        title_en: newVideo.titleEn,
        title_vi: newVideo.titleVi,
        video_url: newVideo.videoUrl,
        embed_url: newVideo.embedUrl,
        source_type: newVideo.sourceType,
        channel_or_author: newVideo.channelOrAuthor,
        grade: newVideo.grade,
        grade_level: newVideo.gradeLevel,
        grade_band: newVideo.gradeBand,
        topic: newVideo.topic,
        difficulty: newVideo.difficulty,
        learning_objectives_en: newVideo.learningObjectivesEn,
        learning_objectives_vi: newVideo.learningObjectivesVi,
        description_en: newVideo.descriptionEn,
        description_vi: newVideo.descriptionVi,
        duration_minutes: newVideo.durationMinutes,
        thumbnail_url: newVideo.thumbnailUrl,
        status: newVideo.status,
        is_teacher_created: newVideo.isTeacherCreated,
        allow_embedding: newVideo.allowEmbedding,
        notes: newVideo.notes,
        questions: newVideo.questions,
        province_code: newVideo.provinceCode,
        province_name: newVideo.provinceName,
        learning_adventure: newVideo.learningAdventure,
        listening_task: newVideo.listeningTask,
        speaking_task: newVideo.speakingTask,
        apply_task: newVideo.applyTask
      });
    } catch (err) {
      console.warn('[VideoAcademy] Supabase insert warning (cached locally):', err);
    }
  }

  return { success: true, video: newVideo };
}

/**
 * Update an existing educational video
 */
export async function updateEducationalVideo(video: EducationalVideo): Promise<boolean> {
  // 1. Update Local Storage Cache
  const currentList = localStore.get<EducationalVideo[]>(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
  const updatedList = currentList.map(v => v.id === video.id ? { ...video, updatedAt: new Date().toISOString() } : v);
  localStore.set(STORAGE_KEY_VIDEOS, updatedList);

  // 2. Sync to Supabase
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase
        .from('educational_videos')
        .update({
          title_en: video.titleEn,
          title_vi: video.titleVi,
          video_url: video.videoUrl,
          embed_url: video.embedUrl,
          source_type: video.sourceType,
          channel_or_author: video.channelOrAuthor,
          grade: video.grade,
          grade_level: video.gradeLevel,
          grade_band: video.gradeBand,
          topic: video.topic,
          difficulty: video.difficulty,
          learning_objectives_en: video.learningObjectivesEn,
          learning_objectives_vi: video.learningObjectivesVi,
          description_en: video.descriptionEn,
          description_vi: video.descriptionVi,
          duration_minutes: video.durationMinutes,
          thumbnail_url: video.thumbnailUrl,
          status: video.status,
          is_teacher_created: video.isTeacherCreated,
          allow_embedding: video.allowEmbedding,
          notes: video.notes,
          questions: video.questions,
          province_code: video.provinceCode,
          province_name: video.provinceName,
          learning_adventure: video.learningAdventure,
          listening_task: video.listeningTask,
          speaking_task: video.speakingTask,
          apply_task: video.applyTask,
          updated_at: new Date().toISOString()
        })
        .eq('id', video.id);
    } catch (err) {
      console.warn('[VideoAcademy] Supabase update warning:', err);
    }
  }

  return true;
}

/**
 * Remove / Delete a video
 */
export async function deleteEducationalVideo(videoId: string): Promise<boolean> {
  // 1. Update Local Storage Cache
  const currentList = localStore.get<EducationalVideo[]>(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
  const updatedList = currentList.filter(v => v.id !== videoId);
  localStore.set(STORAGE_KEY_VIDEOS, updatedList);

  // 2. Remove from Supabase
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('educational_videos').delete().eq('id', videoId);
    } catch (err) {
      console.warn('[VideoAcademy] Supabase delete warning:', err);
    }
  }

  return true;
}

/**
 * Set video status (draft, approved, published, archived)
 */
export async function setVideoStatus(videoId: string, status: 'draft' | 'approved' | 'published' | 'archived'): Promise<boolean> {
  const currentList = localStore.get<EducationalVideo[]>(STORAGE_KEY_VIDEOS, INITIAL_VIDEOS);
  const target = currentList.find(v => v.id === videoId);
  if (!target) return false;

  target.status = status;
  return updateEducationalVideo(target);
}

/**
 * Save Student Video Quiz Score and Completion
 */
export async function saveStudentVideoProgress(progress: StudentVideoProgress): Promise<void> {
  // 1. Save locally
  const currentProgressMap = localStore.get<Record<string, StudentVideoProgress>>(STORAGE_KEY_PROGRESS, {});
  const existing = currentProgressMap[progress.videoId] || { attempts: 0, starsEarned: 0 };

  const updatedProgress: StudentVideoProgress = {
    ...existing,
    ...progress,
    attempts: (existing.attempts || 0) + 1,
    starsEarned: Math.max(existing.starsEarned || 0, progress.starsEarned || 0),
    lastAttemptAt: new Date().toISOString()
  };

  currentProgressMap[progress.videoId] = updatedProgress;
  localStore.set(STORAGE_KEY_PROGRESS, currentProgressMap);

  // 2. Save to Supabase Cloud if online
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('student_video_progress').upsert({
        video_id: progress.videoId,
        student_id: progress.studentId,
        student_name: progress.studentName,
        class_code: progress.classCode,
        watched: progress.watched,
        completed_at: progress.completedAt || new Date().toISOString(),
        quiz_score: progress.quizScore,
        quiz_total: progress.quizTotal,
        attempts: updatedProgress.attempts,
        stars_earned: updatedProgress.starsEarned,
        answered_questions: progress.answeredQuestions
      });
    } catch (err) {
      console.warn('[VideoAcademy] Supabase progress upsert warning:', err);
    }
  }
}

/**
 * Get all video progress for a student
 */
export function getStudentVideoProgressMap(): Record<string, StudentVideoProgress> {
  return localStore.get<Record<string, StudentVideoProgress>>(STORAGE_KEY_PROGRESS, {});
}
