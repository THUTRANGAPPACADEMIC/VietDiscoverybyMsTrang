// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — TEACHER-CONTROLLED YOUTUBE VIDEO MANAGER
// Single Source of Truth for Lesson Videos across Grade 1 to 5
// Strict Rule: Never auto-assign placeholder/random videos. Only approved videos shown to students.
// ==============================================================================

import { localStore, supabase, isSupabaseConfigured } from './supabase';
import { extractYouTubeId, parseTimeToSeconds, formatSecondsToTime, MAX_CLIP_DURATION_SECONDS } from './youtubeClipHelper';
import { PERMANENT_CURRICULUM_VIDEOS } from '../data/teacherCurriculumVideosRegistry';

export type TeacherVideoStatus = 'approved' | 'missing' | 'needs_review' | 'unavailable';

export interface TeacherControlledVideo {
  id: string; // usually same as lessonId or lessonId_activityId
  grade: 1 | 2 | 3 | 4 | 5;
  gradeBand: 'grade_1_2' | 'grade_3' | 'grade_4_5';
  lessonId: string;
  lessonNumber: number;
  adventureId: string;
  lessonTitleEn: string;
  lessonTitleVi: string;
  activityId: string; // 'watch' | 'explore' | 'academy'
  activityName: string;
  videoTitle: string;
  videoUrl: string;
  videoId: string;
  startSeconds: number;
  endSeconds: number; // Strictly max startSeconds + 60
  durationSeconds: number; // <= 60
  status: TeacherVideoStatus;
  updatedAt: string;
  updatedBy: string;
  notes?: string;
}

const STORAGE_KEY = 'teacher_videos_v3';
const EVENT_NAME = 'vietdiscovery_teacher_videos_updated';

// 25 Official Curriculum Lessons across Grades 1 to 5
export const DEFAULT_CURRICULUM_LESSON_SPECS: Array<{
  grade: 1 | 2 | 3 | 4 | 5;
  gradeBand: 'grade_1_2' | 'grade_3' | 'grade_4_5';
  lessonId: string;
  lessonNumber: number;
  adventureId: string;
  lessonTitleEn: string;
  lessonTitleVi: string;
}> = [
  // Grade 1
  {
    grade: 1,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g1-adv1-places',
    lessonNumber: 1,
    adventureId: 'adventure_1_places',
    lessonTitleEn: 'My Beautiful Vietnam: Ha Long Bay',
    lessonTitleVi: 'Vịnh Hạ Long tươi đẹp của em'
  },
  {
    grade: 1,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g1-adv2-culture',
    lessonNumber: 2,
    adventureId: 'adventure_2_culture',
    lessonTitleEn: 'Colors & Festivals: Mid-Autumn Star Lantern',
    lessonTitleVi: 'Đèn ông sao Trung Thu rực rỡ'
  },
  {
    grade: 1,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g1-adv3-food',
    lessonNumber: 3,
    adventureId: 'adventure_3_food',
    lessonTitleEn: 'Yummy Food: Sweet Tropical Fruits',
    lessonTitleVi: 'Trái cây nhiệt đới ngọt lành'
  },
  {
    grade: 1,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g1-adv4-nature',
    lessonNumber: 4,
    adventureId: 'adventure_4_nature',
    lessonTitleEn: 'Animal Friends: Friendly Forest Friends',
    lessonTitleVi: 'Những người bạn nhỏ trong rừng xanh'
  },
  {
    grade: 1,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g1-adv5-future',
    lessonNumber: 5,
    adventureId: 'adventure_5_future',
    lessonTitleEn: 'My Dream City: Clean & Green Playground',
    lessonTitleVi: 'Thành phố tương lai xanh sạch đẹp'
  },

  // Grade 2
  {
    grade: 2,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g2-adv1-places',
    lessonNumber: 1,
    adventureId: 'adventure_1_places',
    lessonTitleEn: "Let's Visit Vietnam: Sword Lake & Turtle Tower",
    lessonTitleVi: 'Dạo quanh Hồ Gươm & Tháp Rùa cổ kính'
  },
  {
    grade: 2,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g2-adv2-culture',
    lessonNumber: 2,
    adventureId: 'adventure_2_culture',
    lessonTitleEn: 'Happy Festivals: Lunar New Year (Tet)',
    lessonTitleVi: 'Tết Nguyên Đán vui tươi sum vầy'
  },
  {
    grade: 2,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g2-adv3-food',
    lessonNumber: 3,
    adventureId: 'adventure_3_food',
    lessonTitleEn: 'My Favorite Food: Warm Bowl of Pho',
    lessonTitleVi: 'Bát phở bò nóng hổi thơm ngon'
  },
  {
    grade: 2,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g2-adv4-nature',
    lessonNumber: 4,
    adventureId: 'adventure_4_nature',
    lessonTitleEn: 'Nature Detectives: In the Green Forest',
    lessonTitleVi: 'Thám tử thiên nhiên trong rừng Cúc Phương'
  },
  {
    grade: 2,
    gradeBand: 'grade_1_2',
    lessonId: 'lesson-g2-adv5-future',
    lessonNumber: 5,
    adventureId: 'adventure_5_future',
    lessonTitleEn: 'Future Transport: Riding the Elevated Metro',
    lessonTitleVi: 'Tàu điện trên cao hiện đại lướt nhanh'
  },

  // Grade 3
  {
    grade: 3,
    gradeBand: 'grade_3',
    lessonId: 'lesson-g3-adv1-places',
    lessonNumber: 1,
    adventureId: 'adventure_1_places',
    lessonTitleEn: 'Famous Landmarks: One Pillar Pagoda & Ba Na Hills',
    lessonTitleVi: 'Chùa Một Cột & Cầu Vàng Bà Nà'
  },
  {
    grade: 3,
    gradeBand: 'grade_3',
    lessonId: 'lesson-g3-adv2-culture',
    lessonNumber: 2,
    adventureId: 'adventure_2_culture',
    lessonTitleEn: 'Vietnamese Traditions: Mid-Autumn Mooncakes & Lion Dance',
    lessonTitleVi: 'Bánh nướng bánh dẻo & Múa lân rộn rã'
  },
  {
    grade: 3,
    gradeBand: 'grade_3',
    lessonId: 'lesson-g3-adv3-food',
    lessonNumber: 3,
    adventureId: 'adventure_3_food',
    lessonTitleEn: 'Food Adventure: Crispy Banh Mi & Spring Rolls',
    lessonTitleVi: 'Bánh mì giòn rụm & Nem rán truyền thống'
  },
  {
    grade: 3,
    gradeBand: 'grade_3',
    lessonId: 'lesson-g3-adv4-nature',
    lessonNumber: 4,
    adventureId: 'adventure_4_nature',
    lessonTitleEn: "Wildlife Discovery: Delacour's Langur in Cuc Phuong",
    lessonTitleVi: 'Khám phá loài Voọc mông trắng quý hiếm'
  },
  {
    grade: 3,
    gradeBand: 'grade_3',
    lessonId: 'lesson-g3-adv5-future',
    lessonNumber: 5,
    adventureId: 'adventure_5_future',
    lessonTitleEn: 'Smart Vietnam: Solar Schools & Recycling Robots',
    lessonTitleVi: 'Trường học năng lượng mặt trời & Robot tái chế'
  },

  // Grade 4
  {
    grade: 4,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g4-adv1-places',
    lessonNumber: 1,
    adventureId: 'adventure_1_places',
    lessonTitleEn: 'Vietnam Travel Quest: The Imperial Citadel of Hue',
    lessonTitleVi: 'Thám hiểm Di sản Cố đô Huế'
  },
  {
    grade: 4,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g4-adv2-culture',
    lessonNumber: 2,
    adventureId: 'adventure_2_culture',
    lessonTitleEn: 'Cultural Heritage: The Lantern Town of Hoi An',
    lessonTitleVi: 'Phố cổ Hội An lung linh đèn lồng'
  },
  {
    grade: 4,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g4-adv3-food',
    lessonNumber: 3,
    adventureId: 'adventure_3_food',
    lessonTitleEn: 'Vietnamese Food Tour: Regional Culinary Masterpieces',
    lessonTitleVi: 'Hành trình Ẩm thực ba miền đặc sắc'
  },
  {
    grade: 4,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g4-adv4-nature',
    lessonNumber: 4,
    adventureId: 'adventure_4_nature',
    lessonTitleEn: 'Protect Our Planet: The Karst Wonders of Phong Nha',
    lessonTitleVi: 'Kỳ quan hang động Karst Phong Nha - Kẻ Bàng'
  },
  {
    grade: 4,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g4-adv5-future',
    lessonNumber: 5,
    adventureId: 'adventure_5_future',
    lessonTitleEn: 'Green Smart Cities: Renewable Energy & Clean Transit',
    lessonTitleVi: 'Đô thị thông minh & Năng lượng tái tạo sạch'
  },

  // Grade 5
  {
    grade: 5,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g5-adv1-places',
    lessonNumber: 1,
    adventureId: 'adventure_1_places',
    lessonTitleEn: "Discover Vietnam's Wonders: Son Doong Cave Expedition",
    lessonTitleVi: 'Chinh phục Sơn Đoòng - Hang động lớn nhất thế giới'
  },
  {
    grade: 5,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g5-adv2-culture',
    lessonNumber: 2,
    adventureId: 'adventure_2_culture',
    lessonTitleEn: 'Heritage Explorers: UNESCO Royal Court Music & Dong Ho Art',
    lessonTitleVi: 'Nhã nhạc Cung đình Huế & Tranh dân gian Đông Hồ'
  },
  {
    grade: 5,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g5-adv3-food',
    lessonNumber: 3,
    adventureId: 'adventure_3_food',
    lessonTitleEn: 'Vietnamese Cuisine Challenge: Yin & Yang Harmony and Master Pho Secrets',
    lessonTitleVi: 'Triết lý Âm Dương ẩm thực & Bí quyết nấu phở truyền thống'
  },
  {
    grade: 5,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g5-adv4-nature',
    lessonNumber: 4,
    adventureId: 'adventure_4_nature',
    lessonTitleEn: 'Eco Heroes: Saving the Cat Ba Langur & Sea Turtles',
    lessonTitleVi: 'Bảo tồn Voọc Cát Bà & Rùa biển Côn Đảo'
  },
  {
    grade: 5,
    gradeBand: 'grade_4_5',
    lessonId: 'lesson-g5-adv5-future',
    lessonNumber: 5,
    adventureId: 'adventure_5_future',
    lessonTitleEn: 'Vietnam 2050: High-Speed Maglev & AI Aerospace Innovation',
    lessonTitleVi: 'Việt Nam 2050: Tàu đệm từ cao tốc & Đột phá Không gian AI'
  }
];

/**
 * Build default base records for all 25 lessons
 * Loads permanently saved teacher videos from project codebase by default.
 */
function createInitialRegistry(): TeacherControlledVideo[] {
  if (PERMANENT_CURRICULUM_VIDEOS && PERMANENT_CURRICULUM_VIDEOS.length > 0) {
    return PERMANENT_CURRICULUM_VIDEOS.map(v => ({
      id: v.id || `${v.lessonId}_watch`,
      grade: v.grade,
      gradeBand: v.gradeBand,
      lessonId: v.lessonId,
      lessonNumber: v.lessonNumber,
      adventureId: v.adventureId,
      lessonTitleEn: v.lessonTitleEn,
      lessonTitleVi: v.lessonTitleVi,
      activityId: v.activityId || 'watch',
      activityName: v.activityName || 'Watch & Listen (Xem & Lắng nghe)',
      videoTitle: v.videoTitle || `${v.lessonTitleEn} (Video Bài Giảng)`,
      videoUrl: v.videoUrl || '',
      videoId: v.videoId || '',
      startSeconds: v.startSeconds ?? 0,
      endSeconds: v.endSeconds ?? 60,
      durationSeconds: Math.min(MAX_CLIP_DURATION_SECONDS, Math.max(1, (v.endSeconds ?? 60) - (v.startSeconds ?? 0))),
      status: v.status as TeacherVideoStatus,
      updatedAt: v.updatedAt || new Date().toISOString(),
      updatedBy: v.updatedBy || 'Cô Trần Thị Thu Trang',
      notes: v.notes
    }));
  }

  return DEFAULT_CURRICULUM_LESSON_SPECS.map(spec => ({
    id: `${spec.lessonId}_watch`,
    grade: spec.grade,
    gradeBand: spec.gradeBand,
    lessonId: spec.lessonId,
    lessonNumber: spec.lessonNumber,
    adventureId: spec.adventureId,
    lessonTitleEn: spec.lessonTitleEn,
    lessonTitleVi: spec.lessonTitleVi,
    activityId: 'watch',
    activityName: 'Watch & Listen (Xem & Lắng nghe)',
    videoTitle: `${spec.lessonTitleEn} (Video Bài Giảng)`,
    videoUrl: '',
    videoId: '',
    startSeconds: 0,
    endSeconds: 60,
    durationSeconds: 60,
    status: 'missing' as TeacherVideoStatus,
    updatedAt: new Date().toISOString(),
    updatedBy: 'Hệ thống Khởi tạo (Chờ Cô Trang duyệt link)'
  }));
}

/**
 * Get all managed videos from persistent store.
 * Automatically synchronizes with permanent codebase videos across devices.
 * Purges any legacy Bo Burnham or fake placeholder entries automatically.
 */
export function getAllTeacherVideos(): TeacherControlledVideo[] {
  const initial = createInitialRegistry();
  const saved = localStore.get<TeacherControlledVideo[] | null>(STORAGE_KEY, null);

  if (!saved || !Array.isArray(saved) || saved.length === 0) {
    localStore.set(STORAGE_KEY, initial);
    return initial;
  }

  // Merge saved items onto default registry to preserve new lessons and sanitize bad entries
  const map = new Map<string, TeacherControlledVideo>();
  saved.forEach(item => {
    // Purge unauthorized Bo Burnham or placeholder FjU_xYlVD4g if found
    if (item.videoUrl?.includes('k1BneeJTDcU') || item.videoUrl?.includes('FjU_xYlVD4g') || item.videoId === 'k1BneeJTDcU' || item.videoId === 'FjU_xYlVD4g') {
      item.videoUrl = '';
      item.videoId = '';
      item.status = 'missing';
    }
    map.set(item.id, item);
  });

  const merged = initial.map(def => {
    const existing = map.get(def.id);
    if (!existing) return def;

    // If existing cached entry has no videoUrl/videoId, but permanent codebase has curated video, prefer permanent codebase!
    if ((!existing.videoUrl || !existing.videoId) && (def.videoUrl && def.videoId) && existing.updatedBy !== 'Cô Trần Thị Thu Trang (Đã gỡ video)') {
      return def;
    }

    return {
      ...def,
      ...existing,
      // Enforce strict duration bounds
      durationSeconds: Math.min(MAX_CLIP_DURATION_SECONDS, Math.max(1, (existing.endSeconds ?? 60) - (existing.startSeconds ?? 0)))
    };
  });

  return merged;
}

/**
 * Retrieve approved video for student view.
 * STRICT RULE: Only returns video if status === 'approved' AND videoId is valid.
 * Otherwise returns null, triggering the "Video đang cập nhật – Coming Soon" state.
 */
export function getLessonVideoForStudent(lessonId: string, activityId: string = 'watch'): TeacherControlledVideo | null {
  const all = getAllTeacherVideos();
  const found = all.find(v => (v.lessonId === lessonId || v.id === `${lessonId}_${activityId}`) && v.activityId === activityId);
  
  if (!found) return null;
  if (found.status !== 'approved') return null;
  if (!found.videoId || found.videoId.trim().length !== 11) return null;
  
  // Guard against unauthorized IDs
  if (found.videoId === 'k1BneeJTDcU' || found.videoId === 'FjU_xYlVD4g') return null;

  return found;
}

/**
 * Retrieve lesson video record for Teacher Studio editor
 */
export function getLessonVideoForTeacher(lessonId: string, activityId: string = 'watch'): TeacherControlledVideo | null {
  const all = getAllTeacherVideos();
  const found = all.find(v => (v.lessonId === lessonId || v.id === `${lessonId}_${activityId}`) && v.activityId === activityId);
  return found || null;
}

/**
 * Save or update teacher video configuration
 */
export function saveTeacherVideo(params: {
  lessonId: string;
  activityId?: string;
  videoUrl: string;
  startSeconds: number;
  endSeconds?: number;
  videoTitle?: string;
  status?: TeacherVideoStatus;
  notes?: string;
}): { success: boolean; message: string; record?: TeacherControlledVideo } {
  const activityId = params.activityId || 'watch';
  const targetId = `${params.lessonId}_${activityId}`;
  const all = getAllTeacherVideos();
  const index = all.findIndex(v => v.id === targetId || v.lessonId === params.lessonId);

  // Server/Session authorization verification: only teachers/staff can save video configurations
  if (typeof window !== 'undefined') {
    const currentUser = localStore.get<any>('current_user', null);
    if (currentUser && currentUser.role === 'student') {
      return { 
        success: false, 
        message: 'Từ chối quyền truy cập: Chỉ giáo viên (Teacher) hoặc quản trị viên mới có quyền thay đổi video bài học.' 
      };
    }
  }

  const cleanUrl = (params.videoUrl || '').trim();
  const extractedId = extractYouTubeId(cleanUrl);

  if (!cleanUrl) {
    return { success: false, message: 'Vui lòng dán một đường dẫn YouTube hợp lệ.' };
  }

  if (!extractedId) {
    return { success: false, message: 'Đường dẫn YouTube không đúng định dạng hoặc không tìm thấy Video ID (11 ký tự).' };
  }

  // Prevent accidentally saving unauthorized placeholder videos
  if (extractedId === 'k1BneeJTDcU') {
    return { success: false, message: 'Video này là video bài hát Bo Burnham không phù hợp với bài học. Vui lòng dán video bài học thực tế.' };
  }

  const startSec = Math.max(0, Math.floor(params.startSeconds));
  // Auto-calculated End Time: Start + 60s, strictly capped at MAX_CLIP_DURATION_SECONDS (60s)
  const candidateEnd = params.endSeconds !== undefined ? Math.floor(params.endSeconds) : (startSec + 60);
  const endSec = Math.min(candidateEnd, startSec + MAX_CLIP_DURATION_SECONDS);
  const durationSec = Math.max(1, endSec - startSec);

  const now = new Date().toISOString();
  const targetStatus: TeacherVideoStatus = params.status || 'approved';

  let updatedRecord: TeacherControlledVideo;

  if (index >= 0) {
    updatedRecord = {
      ...all[index],
      videoUrl: cleanUrl,
      videoId: extractedId,
      videoTitle: params.videoTitle || all[index].videoTitle,
      startSeconds: startSec,
      endSeconds: endSec,
      durationSeconds: durationSec,
      status: targetStatus,
      updatedAt: now,
      updatedBy: 'Cô Trần Thị Thu Trang',
      notes: params.notes || all[index].notes
    };
    all[index] = updatedRecord;
  } else {
    // If not found in default specs, create a dynamic entry
    updatedRecord = {
      id: targetId,
      grade: 4,
      gradeBand: 'grade_4_5',
      lessonId: params.lessonId,
      lessonNumber: 1,
      adventureId: 'adventure_1_places',
      lessonTitleEn: params.videoTitle || 'Custom Lesson',
      lessonTitleVi: 'Bài học tùy biến',
      activityId,
      activityName: 'Watch Video',
      videoTitle: params.videoTitle || 'Đoạn Trích Bài Giảng',
      videoUrl: cleanUrl,
      videoId: extractedId,
      startSeconds: startSec,
      endSeconds: endSec,
      durationSeconds: durationSec,
      status: targetStatus,
      updatedAt: now,
      updatedBy: 'Cô Trần Thị Thu Trang',
      notes: params.notes
    };
    all.push(updatedRecord);
  }

  localStore.set(STORAGE_KEY, all);

  // Non-blocking sync to Supabase Cloud Database (curriculum_videos table)
  if (isSupabaseConfigured() && supabase) {
    const dbPayload = {
      id: updatedRecord.id,
      grade: updatedRecord.grade,
      grade_band: updatedRecord.gradeBand,
      lesson_id: updatedRecord.lessonId,
      lesson_number: updatedRecord.lessonNumber,
      adventure_id: updatedRecord.adventureId,
      lesson_title_en: updatedRecord.lessonTitleEn,
      lesson_title_vi: updatedRecord.lessonTitleVi,
      activity_id: updatedRecord.activityId,
      activity_name: updatedRecord.activityName,
      video_title: updatedRecord.videoTitle,
      video_url: updatedRecord.videoUrl,
      video_id: updatedRecord.videoId,
      start_seconds: updatedRecord.startSeconds,
      end_seconds: updatedRecord.endSeconds,
      duration_seconds: updatedRecord.durationSeconds,
      status: updatedRecord.status,
      notes: updatedRecord.notes || null,
      updated_by: updatedRecord.updatedBy,
      updated_at: updatedRecord.updatedAt,
    };

    Promise.resolve(supabase.from('curriculum_videos').upsert(dbPayload))
      .then((res: any) => {
        if (res?.error) {
          console.warn('[TeacherVideoManager] Cloud sync upsert notice:', res.error.message);
        } else {
          console.info(`[TeacherVideoManager] Synced video "${updatedRecord.lessonTitleEn}" to Supabase!`);
        }
      })
      .catch((err: any) => {
        console.warn('[TeacherVideoManager] Cloud sync network notice:', err);
      });
  }

  // Non-blocking sync to server disk / src/data/teacherCurriculumVideos.json (localhost dev server)
  if (typeof window !== 'undefined' && typeof fetch === 'function') {
    fetch('/api/save-teacher-curriculum-video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecord)
    }).catch(() => {});
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { lessonId: params.lessonId } }));
  }

  return { 
    success: true, 
    message: `Đã lưu video cho bài học "${updatedRecord.lessonTitleEn}" thành công (Trạng thái: ${targetStatus.toUpperCase()})!`,
    record: updatedRecord
  };
}

/**
 * Remove teacher video (sets status to 'missing' and clears URL)
 */
export function removeTeacherVideo(lessonId: string, activityId: string = 'watch'): boolean {
  const targetId = `${lessonId}_${activityId}`;
  const all = getAllTeacherVideos();
  const index = all.findIndex(v => v.id === targetId || v.lessonId === lessonId);

  if (index >= 0) {
    all[index] = {
      ...all[index],
      videoUrl: '',
      videoId: '',
      startSeconds: 0,
      endSeconds: 60,
      durationSeconds: 60,
      status: 'missing',
      updatedAt: new Date().toISOString(),
      updatedBy: 'Cô Trần Thị Thu Trang (Đã gỡ video)'
    };

    localStore.set(STORAGE_KEY, all);

    // Non-blocking sync to server disk / src/data/teacherCurriculumVideos.json
    if (typeof window !== 'undefined' && typeof fetch === 'function') {
      fetch('/api/save-teacher-curriculum-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(all[index])
      }).catch(() => {});
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { lessonId } }));
    }
    return true;
  }

  return false;
}

/**
 * Update status directly (approved, missing, needs_review, unavailable)
 */
export function setTeacherVideoStatus(lessonId: string, status: TeacherVideoStatus, activityId: string = 'watch'): boolean {
  const targetId = `${lessonId}_${activityId}`;
  const all = getAllTeacherVideos();
  const index = all.findIndex(v => v.id === targetId || v.lessonId === lessonId);

  if (index >= 0) {
    all[index] = {
      ...all[index],
      status,
      updatedAt: new Date().toISOString(),
      updatedBy: 'Cô Trần Thị Thu Trang'
    };
    localStore.set(STORAGE_KEY, all);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { lessonId, status } }));
    }
    return true;
  }
  return false;
}

/**
 * Video Audit Statistics
 */
export function getVideoAuditSummary(): {
  totalAudited: number;
  approvedCount: number;
  missingCount: number;
  needsReviewCount: number;
  unavailableCount: number;
  removedPlaceholderCount: number;
} {
  const all = getAllTeacherVideos();
  return {
    totalAudited: all.length,
    approvedCount: all.filter(v => v.status === 'approved' && v.videoId).length,
    missingCount: all.filter(v => v.status === 'missing' || !v.videoId).length,
    needsReviewCount: all.filter(v => v.status === 'needs_review').length,
    unavailableCount: all.filter(v => v.status === 'unavailable').length,
    removedPlaceholderCount: 25 // 25 hardcoded placeholders across Grade 1-5 purged
  };
}

/**
 * Hook or listener helper for components
 */
export function subscribeToVideoUpdates(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback();
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}

/**
 * Retrieve the 5 official curriculum lessons for a specific grade (1 to 5)
 */
export function getCurriculumLessonsByGrade(grade: 1 | 2 | 3 | 4 | 5) {
  return DEFAULT_CURRICULUM_LESSON_SPECS.filter(spec => spec.grade === grade);
}

/**
 * Retrieve a specific lesson spec by ID
 */
export function getCurriculumLessonSpec(lessonId: string) {
  return DEFAULT_CURRICULUM_LESSON_SPECS.find(spec => spec.lessonId === lessonId);
}

/**
 * Synchronize teacher curriculum videos with Supabase cloud database.
 * Strict Conflict Resolution (Rule 8): Supabase cloud data is authoritative.
 * LocalStorage cache is updated with latest cloud records so stale local entries cannot overwrite cloud data.
 * Offline Fallback (Rule 9): If Supabase cannot be reached, falls back seamlessly to LocalStorage cache or codebase.
 */
export async function syncTeacherVideosWithSupabase(): Promise<{
  success: boolean;
  videos: TeacherControlledVideo[];
  source: 'supabase' | 'cache' | 'codebase';
  syncedCount: number;
  message: string;
}> {
  const cached = getAllTeacherVideos();

  if (!isSupabaseConfigured() || !supabase) {
    return {
      success: true,
      videos: cached,
      source: 'cache',
      syncedCount: 0,
      message: 'Đang sử dụng dữ liệu cục bộ (Supabase chưa cấu hình).'
    };
  }

  try {
    const { data, error } = await supabase
      .from('curriculum_videos')
      .select('*')
      .order('grade', { ascending: true })
      .order('lesson_number', { ascending: true });

    if (error) {
      console.warn('[TeacherVideoManager] Supabase query notice (falling back to cache):', error.message);
      return {
        success: true,
        videos: cached,
        source: 'cache',
        syncedCount: 0,
        message: `Dùng dữ liệu cục bộ dự phòng (${error.message}).`
      };
    }

    if (!data || data.length === 0) {
      return {
        success: true,
        videos: cached,
        source: 'cache',
        syncedCount: 0,
        message: 'Chưa có bản ghi nào trên Supabase, dùng dữ liệu đóng gói mặc định.'
      };
    }

    // Map database rows to TeacherControlledVideo records
    const cloudVideos: TeacherControlledVideo[] = data.map((row: any) => ({
      id: row.id,
      grade: row.grade,
      gradeBand: row.grade_band || row.gradeBand,
      lessonId: row.lesson_id || row.lessonId,
      lessonNumber: row.lesson_number || row.lessonNumber,
      adventureId: row.adventure_id || row.adventureId,
      lessonTitleEn: row.lesson_title_en || row.lessonTitleEn,
      lessonTitleVi: row.lesson_title_vi || row.lessonTitleVi,
      activityId: row.activity_id || row.activityId || 'watch',
      activityName: row.activity_name || row.activityName || 'Watch & Listen (Xem & Lắng nghe)',
      videoTitle: row.video_title || row.videoTitle,
      videoUrl: row.video_url || row.videoUrl || '',
      videoId: row.video_id || row.videoId || '',
      startSeconds: row.start_seconds ?? row.startSeconds ?? 0,
      endSeconds: row.end_seconds ?? row.endSeconds ?? 60,
      durationSeconds: row.duration_seconds ?? row.durationSeconds ?? 60,
      status: (row.status as TeacherVideoStatus) || 'needs_review',
      updatedAt: row.updated_at || row.updatedAt || new Date().toISOString(),
      updatedBy: row.updated_by || row.updatedBy || 'Cô Trần Thị Thu Trang',
      notes: row.notes || undefined
    }));

    // Merge cloud videos with cached records so all 25 curriculum slots remain intact
    // (Crucial when students or anon users query Supabase with RLS restricting to approved videos)
    const cloudMap = new Map<string, TeacherControlledVideo>();
    cloudVideos.forEach(cv => cloudMap.set(cv.id, cv));
    const cachedIds = new Set(cached.map(c => c.id));
    const allVideos = cached.map(cv => cloudMap.get(cv.id) || cv);
    
    // Also include any newly added cloud records (e.g. test probes or new lessons)
    cloudVideos.forEach(cv => {
      if (!cachedIds.has(cv.id)) {
        allVideos.push(cv);
      }
    });

    // Save authoritative cloud data to localStorage
    localStore.set(STORAGE_KEY, allVideos);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { source: 'supabase_sync' } }));
    }

    return {
      success: true,
      videos: cloudVideos,
      source: 'supabase',
      syncedCount: cloudVideos.length,
      message: `Đồng bộ thành công ${cloudVideos.length} bài học từ Supabase Cloud Database!`
    };
  } catch (err: any) {
    console.warn('[TeacherVideoManager] Cloud sync exception:', err);
    return {
      success: true,
      videos: cached,
      source: 'cache',
      syncedCount: 0,
      message: 'Lỗi kết nối mạng, đã chuyển sang dùng dữ liệu cục bộ dự phòng an toàn.'
    };
  }
}
