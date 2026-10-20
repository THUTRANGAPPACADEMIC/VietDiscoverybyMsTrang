// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — TEACHER VOCABULARY IMAGE MANAGER SERVICE
// Manages authentic photography, educational illustrations & WebP optimization
// Strict Rules:
// 1. Only label "REAL PHOTO" if genuine photograph.
// 2. Abstract terms use clear educational illustrations.
// 3. Unverified items remain as "Needs Review" placeholders.
// ==============================================================================

import { localStore } from './supabase';
import { GRADE_1_LESSONS } from '../data/curriculum/lessonsGrade1';
import { GRADE_2_LESSONS } from '../data/curriculum/lessonsGrade2';
import { GRADE_3_LESSONS } from '../data/curriculum/lessonsGrade3';
import { GRADE_4_LESSONS } from '../data/curriculum/lessonsGrade4';
import { GRADE_5_LESSONS } from '../data/curriculum/lessonsGrade5';
import { 
  VOCABULARY_VISUALS_REGISTRY, 
  normalizeVocabKey, 
  VocabularyVisualMetadata 
} from '../data/vocabularyVisualsRegistry';

export const VOCAB_STORAGE_KEY = 'custom_vocabulary_images';
export const VOCAB_UPDATE_EVENT = 'vietdiscovery_vocab_images_updated';

export type VocabPhotoType = 'real_photo' | 'illustration' | 'placeholder';
export type VocabReviewStatus = 'approved' | 'needs_review';
export type VocabFitMode = 'cover' | 'contain';
export type VocabAspectRatio = '4:3' | '16:9' | '1:1';

export interface TeacherVocabCardItem {
  id: string; // unique key: grade_lesson_word
  word: string;
  normalizedKey: string;
  grade: 1 | 2 | 3 | 4 | 5;
  gradeBand: string;
  lessonId: string;
  lessonNumber: number;
  lessonTitleEn: string;
  lessonTitleVi: string;
  meaningVi: string;
  meaningEn: string;
  ipa: string;
  exampleSentenceEn: string;
  exampleSentenceVi: string;
  category: 'landmark' | 'geography' | 'food' | 'culture' | 'wildlife' | 'nature' | 'architecture' | 'abstract';
  imageUrl: string;
  thumbnailUrl: string;
  isPlaceholder: boolean;
  isRealPhoto: boolean;
  fitMode: VocabFitMode;
  aspectRatio: VocabAspectRatio;
  author: string;
  source: string;
  license: string;
  attributionText: string;
  status: VocabReviewStatus;
  isTeacherUploaded: boolean;
  updatedAt?: string;
  notes?: string;
}

export interface VocabManagerStats {
  totalWords: number;
  approvedCount: number;
  needsReviewCount: number;
  realPhotoCount: number;
  illustrationCount: number;
  byGrade: Record<number, { total: number; approved: number; needsReview: number }>;
}

/**
 * Get all teacher custom image overrides from localStorage
 */
export function getCustomVocabOverrides(): Record<string, Partial<TeacherVocabCardItem>> {
  return localStore.get<Record<string, Partial<TeacherVocabCardItem>>>(VOCAB_STORAGE_KEY, {});
}

/**
 * Load all 100 core curriculum vocabulary words across Grades 1-5
 * Merges official curriculum + authoritative visuals registry + teacher custom overrides
 */
export function getAllCurriculumVocabularies(): TeacherVocabCardItem[] {
  const overrides = getCustomVocabOverrides();
  const allCurriculumLessons = [
    ...GRADE_1_LESSONS,
    ...GRADE_2_LESSONS,
    ...GRADE_3_LESSONS,
    ...GRADE_4_LESSONS,
    ...GRADE_5_LESSONS,
  ];

  const result: TeacherVocabCardItem[] = [];

  allCurriculumLessons.forEach(lesson => {
    const gradeNum = parseInt(lesson.gradeLevel.replace(/\D/g, ''), 10) as 1 | 2 | 3 | 4 | 5 || 1;
    
    (lesson.vocabulary || []).forEach(v => {
      const normKey = normalizeVocabKey(v.word);
      const uniqueId = `g${gradeNum}_${lesson.id}_${normKey}`;
      const regMeta: VocabularyVisualMetadata | undefined = VOCABULARY_VISUALS_REGISTRY[normKey];
      const custom = overrides[normKey] || overrides[uniqueId];

      // Determine active attributes
      const activeImageUrl = custom?.imageUrl !== undefined ? custom.imageUrl : (regMeta?.imageUrl || '');
      const activeIsPlaceholder = custom?.isPlaceholder !== undefined 
        ? custom.isPlaceholder 
        : (regMeta ? (Boolean(regMeta.isPlaceholder) || !regMeta.imageUrl) : !activeImageUrl);

      // Real Photo vs Illustration classification:
      // Category landmark, geography, food, culture, wildlife, nature are physical/photographic.
      // Category abstract is typically illustration unless specified.
      const defaultCategory = regMeta?.category || (v as any).category || 'abstract';
      const isPhysicalCategory = ['landmark', 'geography', 'food', 'culture', 'wildlife', 'nature', 'architecture'].includes(defaultCategory);
      
      const activeIsRealPhoto = custom?.isRealPhoto !== undefined
        ? custom.isRealPhoto
        : (regMeta?.isRealPhoto !== undefined ? regMeta.isRealPhoto : (Boolean(regMeta && !regMeta.isPlaceholder && isPhysicalCategory)));

      const activeStatus: VocabReviewStatus = custom?.status !== undefined
        ? custom.status
        : (activeIsPlaceholder ? 'needs_review' : 'approved');

      result.push({
        id: uniqueId,
        word: v.word,
        normalizedKey: normKey,
        grade: gradeNum,
        gradeBand: lesson.gradeBand,
        lessonId: lesson.id,
        lessonNumber: lesson.lessonNumber,
        lessonTitleEn: lesson.titleEn,
        lessonTitleVi: lesson.titleVi,
        meaningVi: v.meaningVi,
        meaningEn: v.meaningEn,
        ipa: v.ipa || regMeta?.ukIpa || regMeta?.usIpa || '',
        exampleSentenceEn: (v as any).exampleSentenceEn || (v as any).exampleEn || regMeta?.exampleSentenceEn || '',
        exampleSentenceVi: (v as any).exampleSentenceVi || (v as any).exampleVi || regMeta?.exampleSentenceVi || '',
        category: defaultCategory,
        imageUrl: activeImageUrl,
        thumbnailUrl: custom?.thumbnailUrl || activeImageUrl || regMeta?.thumbnailUrl || '',
        isPlaceholder: activeIsPlaceholder,
        isRealPhoto: activeIsRealPhoto,
        fitMode: custom?.fitMode || 'cover',
        aspectRatio: custom?.aspectRatio || '4:3',
        author: custom?.author || regMeta?.author || 'VietDiscovery Educational Archive',
        source: custom?.source || regMeta?.source || 'VietDiscovery Curriculum Team',
        license: custom?.license || regMeta?.license || 'Educational Standard License',
        attributionText: custom?.attributionText || regMeta?.attributionText || 'VietDiscovery by Ms. Trang',
        status: activeStatus,
        isTeacherUploaded: Boolean(custom?.isTeacherUploaded),
        updatedAt: custom?.updatedAt,
        notes: custom?.notes
      });
    });
  });

  return result;
}

/**
 * Compute statistics for Teacher Dashboard
 */
export function getVocabManagerStats(): VocabManagerStats {
  const items = getAllCurriculumVocabularies();
  const stats: VocabManagerStats = {
    totalWords: items.length,
    approvedCount: 0,
    needsReviewCount: 0,
    realPhotoCount: 0,
    illustrationCount: 0,
    byGrade: {
      1: { total: 0, approved: 0, needsReview: 0 },
      2: { total: 0, approved: 0, needsReview: 0 },
      3: { total: 0, approved: 0, needsReview: 0 },
      4: { total: 0, approved: 0, needsReview: 0 },
      5: { total: 0, approved: 0, needsReview: 0 }
    }
  };

  items.forEach(item => {
    const g = item.grade;
    stats.byGrade[g].total++;

    if (item.status === 'approved' && !item.isPlaceholder && item.imageUrl) {
      stats.approvedCount++;
      stats.byGrade[g].approved++;
      if (item.isRealPhoto) {
        stats.realPhotoCount++;
      } else {
        stats.illustrationCount++;
      }
    } else {
      stats.needsReviewCount++;
      stats.byGrade[g].needsReview++;
    }
  });

  return stats;
}

/**
 * Client-side Canvas Image Optimizer to WebP / Lightweight JPEG
 * Keeps maximum dimension <= 1024px and compressed size under ~150KB
 */
export async function optimizeImageToWebP(file: File, maxDimension: number = 960, quality: number = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(readerEvent.target?.result as string);
          return;
        }

        // Draw crisp image
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Try WebP first (modern browsers), fallback to JPEG
        try {
          const webpDataUrl = canvas.toDataURL('image/webp', quality);
          if (webpDataUrl.startsWith('data:image/webp')) {
            resolve(webpDataUrl);
            return;
          }
        } catch {
          // ignore and fallback
        }

        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => reject(new Error('Không thể tải file ảnh để tối ưu.'));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Lỗi khi đọc file ảnh.'));
    reader.readAsDataURL(file);
  });
}

/**
 * Save or update teacher vocabulary image override
 */
export function saveTeacherVocabularyImage(params: {
  word: string;
  imageUrl: string;
  isRealPhoto: boolean;
  category?: 'landmark' | 'geography' | 'food' | 'culture' | 'wildlife' | 'nature' | 'architecture' | 'abstract';
  fitMode?: VocabFitMode;
  aspectRatio?: VocabAspectRatio;
  author?: string;
  source?: string;
  license?: string;
  attributionText?: string;
  status: VocabReviewStatus;
  notes?: string;
}): { success: boolean; message: string } {
  const normKey = normalizeVocabKey(params.word);
  if (!normKey) {
    return { success: false, message: 'Từ vựng không hợp lệ.' };
  }

  const overrides = getCustomVocabOverrides();
  const cleanUrl = (params.imageUrl || '').trim();
  const isPlaceholder = !cleanUrl || params.status === 'needs_review';

  overrides[normKey] = {
    word: params.word,
    normalizedKey: normKey,
    imageUrl: cleanUrl,
    thumbnailUrl: cleanUrl,
    isPlaceholder: isPlaceholder,
    isRealPhoto: params.isRealPhoto,
    category: params.category,
    fitMode: params.fitMode || 'cover',
    aspectRatio: params.aspectRatio || '4:3',
    author: params.author || 'Cô Trần Thị Thu Trang',
    source: params.source || 'Tải lên bởi Giáo viên (Teacher Upload)',
    license: params.license || 'Educational Standard License',
    attributionText: params.attributionText || 'VietDiscovery by Ms. Trang',
    status: params.status,
    isTeacherUploaded: true,
    updatedAt: new Date().toISOString(),
    notes: params.notes
  };

  localStore.set(VOCAB_STORAGE_KEY, overrides);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(VOCAB_UPDATE_EVENT, { detail: { word: params.word, normKey } }));
  }

  const statusLabel = params.status === 'approved' ? 'Đã phê duyệt hiển thị (Approved)' : 'Đã lưu bản nháp (Needs Review)';
  return {
    success: true,
    message: `Đã lưu ảnh cho từ "${params.word}" thành công (${statusLabel})!`
  };
}

/**
 * Remove teacher override and restore registry default
 */
export function removeTeacherVocabularyImage(word: string): boolean {
  const normKey = normalizeVocabKey(word);
  if (!normKey) return false;

  const overrides = getCustomVocabOverrides();
  if (overrides[normKey]) {
    delete overrides[normKey];
    localStore.set(VOCAB_STORAGE_KEY, overrides);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(VOCAB_UPDATE_EVENT, { detail: { word, normKey } }));
    }
    return true;
  }
  return false;
}
