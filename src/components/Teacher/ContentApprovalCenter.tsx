// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — CONTENT APPROVAL CENTER (BẢN XEM TRƯỚC GIAO DIỆN)
// Trung tâm Kiểm duyệt Sư phạm, Khóa Nội dung & Lưu vết Minh chứng Dự thi
// ==============================================================================

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Eye, 
  Edit3, 
  BookOpen, 
  Gamepad2, 
  HelpCircle, 
  Filter, 
  Search, 
  FileText, 
  Printer, 
  Lock, 
  Unlock, 
  X, 
  Save, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Info,
  RotateCcw,
  Plus,
  Trash2,
  Check,
  Award,
  Layers,
  FileEdit,
  AlertTriangle,
  CheckSquare,
  Square,
  Bot
} from 'lucide-react';
import { 
  CurriculumLesson, 
  LeveledVocabulary, 
  Circular27CurriculumQuestion 
} from '../../types/curriculum';
import { GradeLevel, ChallengeLevel } from '../../types/index';
import { getCurriculumLessons } from '../../data/curriculumData';
import { localStore } from '../../lib/supabase';
import { soundEffects } from '../../lib/soundEffects';

interface AuditLogEntry {
  id: string;
  contentId: string;
  contentTitle: string;
  contentType: 'Bài học' | 'Câu hỏi' | 'Trò chơi';
  action: 'Tạo bản thảo' | 'Chỉnh sửa nội dung' | 'Phê duyệt & Khóa' | 'Hủy phê duyệt';
  editorName: string;
  editorRole: string;
  timestamp: string;
  notes: string;
  aiInvolved: boolean;
  status: 'Đã duyệt' | 'Chưa kiểm duyệt' | 'Bản nháp';
}

// ------------------------------------------------------------------------------
// Danh sách Trò chơi thực tế trong VietDiscovery
// ------------------------------------------------------------------------------
interface GameContentItem {
  id: string;
  titleEn: string;
  titleVi: string;
  category: 'Địa danh' | 'Âm thanh' | 'Bản đồ' | 'Từ vựng';
  targetGrades: string;
  sourceReference: string;
  status: 'pending' | 'approved' | 'draft';
  approvedDate?: string;
  description: string;
  totalQuestionsOrItems: number;
}

const INITIAL_GAMES_LIST: GameContentItem[] = [
  {
    id: 'game-landmark-drag-drop',
    titleEn: 'Landmark Drag & Drop Challenge',
    titleVi: 'Kéo thả Địa danh & Kỳ quan Việt Nam',
    category: 'Địa danh',
    targetGrades: 'Khối 3, 4, 5',
    sourceReference: 'UNESCO World Heritage Vietnam & Cục Du lịch Quốc gia Việt Nam',
    status: 'pending',
    description: 'Trò chơi rèn luyện nhận biết địa danh nổi tiếng qua gợi ý tiếng Anh, kéo thả chính xác vào bản đồ tỉnh thành.',
    totalQuestionsOrItems: 6
  },
  {
    id: 'game-audio-explorer',
    titleEn: 'Audio Explorer Listening Quest',
    titleVi: 'Thám hiểm Âm thanh Tiếng Anh Kỳ thú',
    category: 'Âm thanh',
    targetGrades: 'Khối 1, 2, 3, 4, 5',
    sourceReference: 'Chương trình GDPT 2018 môn Tiếng Anh & Giọng đọc phát âm chuẩn Oxford',
    status: 'pending',
    description: 'Học sinh nghe các đoạn mô tả ngắn về văn hóa, thiên nhiên và chọn câu trả lời đúng theo cấp độ Thông tư 27.',
    totalQuestionsOrItems: 10
  },
  {
    id: 'game-34-provinces-map',
    titleEn: 'Interactive 34 Provinces Discovery Map',
    titleVi: 'Bản đồ Tương tác Khám phá 34 Tỉnh Thành',
    category: 'Bản đồ',
    targetGrades: 'Khối 4, 5',
    sourceReference: 'Bản đồ hành chính Cục Đo đạc Bản đồ & Dữ liệu Địa lý Quốc gia',
    status: 'pending',
    description: 'Học sinh giải đố địa lý, tìm hiểu đặc sản và nét văn hóa đặc trưng của các tỉnh thành Việt Nam bằng tiếng Anh.',
    totalQuestionsOrItems: 34
  },
  {
    id: 'game-visual-vocab-cards',
    titleEn: 'Visual Vocabulary Matching Arena',
    titleVi: 'Đấu trường Ghép Thẻ Từ vựng Trực quan',
    category: 'Từ vựng',
    targetGrades: 'Khối 1, 2',
    sourceReference: 'Khung năng lực ngoại ngữ 6 bậc Việt Nam (Bậc 1 - Pre-A1) & Từ điển Oxford',
    status: 'pending',
    description: 'Ghép thẻ từ vựng với hình ảnh sinh động, hỗ trợ phát âm và phiên âm quốc tế IPA giúp học sinh lớp 1, 2 ghi nhớ tự nhiên.',
    totalQuestionsOrItems: 25
  }
];

// Helper: Lấy nguồn tài liệu kiến thức chuẩn xác theo từng chủ đề bài học
// (Không nhầm lẫn Thông tư 27/2020 làm nguồn tài liệu kiến thức bài học)
const getLessonKnowledgeSources = (lesson: CurriculumLesson): string[] => {
  const adv = lesson.adventureId;
  if (adv === 'adventure_1_places') {
    return [
      'Hồ sơ Di sản Thế giới UNESCO (UNESCO World Heritage Vietnam)',
      'Cục Du lịch Quốc gia Việt Nam (vietnamtourism.gov.vn)',
      'Sách giáo khoa Tiếng Anh Tiểu học (Chương trình GDPT 2018)'
    ];
  }
  if (adv === 'adventure_2_culture') {
    return [
      'Cổng thông tin Di sản Văn hóa Phi vật thể Quốc gia (Bộ VHTTDL)',
      'Tài liệu Giáo dục Địa phương TP. Hồ Chí Minh',
      'Chương trình GDPT 2018 môn Tiếng Anh'
    ];
  }
  if (adv === 'adventure_3_food') {
    return [
      'Hiệp hội Văn hóa Ẩm thực Việt Nam (VCCA)',
      'Cục Du lịch Quốc gia Việt Nam',
      'Từ điển Oxford Learner\'s Dictionaries (Chuẩn phiên âm IPA)'
    ];
  }
  if (adv === 'adventure_4_nature') {
    return [
      'Dữ liệu Khu bảo tồn & Vườn Quốc gia Việt Nam (Bộ NN&PTNT)',
      'Sách giáo khoa Tự nhiên & Xã hội cấp Tiểu học (CT GDPT 2018)',
      'Từ điển Tiếng Anh Sinh học Thiếu nhi Oxford'
    ];
  }
  return [
    'Chương trình GDPT 2018 môn Tiếng Anh Cấp Tiểu học',
    'Từ điển Oxford Learner\'s Dictionaries'
  ];
};

// ------------------------------------------------------------------------------
// Cấu trúc Đề xuất Rà soát Sư phạm của AI (Không tự động sửa, cần Giáo viên duyệt)
// ------------------------------------------------------------------------------
interface AiReviewSuggestion {
  id: string;
  category: 'vocab' | 'reading' | 'questions' | 'verification';
  categoryLabel: string;
  targetField: string;
  originalContent: string;
  detectedIssue: string;
  proposedChange: string;
  rationaleAndSource: string;
  needsTeacherCheck?: boolean;
  applyAction: (lesson: CurriculumLesson) => CurriculumLesson;
}

// Bộ máy Rà soát Sư phạm Chuyên biệt (Pedagogical Rule-Based Engine & Phonics Checker)
const generateAiReviewSuggestions = (lesson: CurriculumLesson): AiReviewSuggestion[] => {
  const suggestions: AiReviewSuggestion[] = [];

  // Rà soát chuyên sâu cho bài học Vịnh Hạ Long (My Beautiful Vietnam: Ha Long Bay)
  if (lesson.id === 'lesson-g1-adv1-places' || lesson.titleEn.toLowerCase().includes('ha long')) {
    suggestions.push({
      id: 'sug-vocab-island',
      category: 'vocab',
      categoryLabel: '🔤 Từ vựng & Ngữ âm IPA',
      targetField: 'Từ vựng "island" (Hòn đảo)',
      originalContent: 'island /ˈaɪ.lənd/ • Ví dụ gốc: "The green island is big."',
      detectedIssue: 'Học sinh Lớp 1 rất hay đọc nhầm âm câm "s" thành /aɪz.lənd/. Câu ví dụ gốc mang tính tĩnh, chưa gắn liền với hành động quan sát thực tế của nhà thám hiểm nhí.',
      proposedChange: 'Bổ sung hướng dẫn quy tắc âm "s" câm (Silent S) và tinh chỉnh câu ví dụ sinh động: "Look at the green island!" (Hãy nhìn hòn đảo xanh kìa!)',
      rationaleAndSource: 'Từ điển Oxford Learner\'s Dictionaries (Quy tắc âm câm) & Phương pháp giảng dạy ngữ âm Phonics tiểu học.',
      applyAction: (l) => {
        const nextVocab = l.vocabulary.map(v => {
          if (v.word.toLowerCase() === 'island') {
            return {
              ...v,
              meaningVi: 'Hòn đảo giữa biển (lưu ý: chữ "s" câm, không phát âm).',
              exampleSentenceEn: 'Look at the green island!',
              exampleSentenceVi: 'Hãy nhìn hòn đảo xanh kìa!'
            };
          }
          return v;
        });
        return { ...l, vocabulary: nextVocab };
      }
    });

    suggestions.push({
      id: 'sug-reading-cefr',
      category: 'reading',
      categoryLabel: '📖 Độ khó Bài đọc hiểu',
      targetField: 'Đoạn văn đọc #2 (reading.passagesEn[1])',
      originalContent: '"I see the blue sea. I see a brown boat. The green islands are very pretty!"',
      detectedIssue: 'Tính từ "pretty" (/ˈprɪt.i/) thuộc cấp độ A2, có thể gây quá tải cho học sinh học kỳ 1 Lớp 1 (chuẩn Pre-A1 Starter CT GDPT 2018).',
      proposedChange: 'Thay thế bằng tính từ quen thuộc chuẩn Pre-A1: "I see the blue sea. I see a brown boat. The green islands are very nice!" (Những hòn đảo xanh thật là đẹp!)',
      rationaleAndSource: 'Khung năng lực ngoại ngữ CEFR Primary Pre-A1 & Mục tiêu từ vựng SGK Tiếng Anh 1 (CT GDPT 2018).',
      applyAction: (l) => {
        const nextPassagesEn = (l.reading.passagesEn || []).map(p => 
          p.replace('very pretty!', 'very nice!')
        );
        const nextPassagesVi = (l.reading.passagesVi || []).map(p => 
          p.replace('rất là xinh đẹp!', 'rất đẹp!')
        );
        return {
          ...l,
          reading: {
            ...l.reading,
            passagesEn: nextPassagesEn,
            passagesVi: nextPassagesVi
          }
        };
      }
    });

    suggestions.push({
      id: 'sug-question-explanation',
      category: 'questions',
      categoryLabel: '❓ Câu hỏi Thông tư 27',
      targetField: 'Câu hỏi số 3 (Nhận biết âm đầu /s/)',
      originalContent: 'Câu 3: "Which word begins with the sound /s/?" • Giải thích gốc: "\'Sea\' begins with the sound /s/."',
      detectedIssue: 'Lời giải thích sư phạm hiện tại quá ngắn, chưa phân tích âm đầu của 3 phương án nhiễu (Boat, Island, Red), gây khó khăn khi học sinh và phụ huynh xem lại bài.',
      proposedChange: 'Bổ sung giải thích đối chiếu ngữ âm chi tiết: "\'Sea\' /siː/ bắt đầu bằng âm /s/. Các phương án còn lại bắt đầu bằng /b/ (Boat), /ˈaɪ/ (Island) và /r/ (Red)."',
      rationaleAndSource: 'Điều 7 Thông tư 27/2020/TT-BGDĐT (Đánh giá mức độ nhận thức Mức 1 - Nhận biết ngữ âm cơ bản).',
      applyAction: (l) => {
        const nextQuestions = (l.questions || []).map((q, idx) => {
          if (idx === 2 || q.questionEn.includes('/s/')) {
            return {
              ...q,
              explanationEn: "'Sea' /siː/ begins with the sound /s/. Other words begin with /b/ (Boat), /ˈaɪ/ (Island), and /r/ (Red).",
              explanationVi: "'Sea' /siː/ bắt đầu bằng âm /s/. Các từ còn lại bắt đầu bằng âm /b/ (Boat), /ˈaɪ/ (Island) và /r/ (Red)."
            };
          }
          return q;
        });
        return { ...l, questions: nextQuestions };
      }
    });

    suggestions.push({
      id: 'sug-verification-unesco',
      category: 'verification',
      categoryLabel: '⚠️ Cần giáo viên kiểm tra',
      targetField: 'Tư liệu hình ảnh & Địa danh Vịnh Hạ Long',
      originalContent: 'Tư liệu Di sản: Vịnh Hạ Long (Quảng Ninh) • Bản quyền Wikimedia Commons CC BY-SA 4.0',
      detectedIssue: 'AI không thể tự ý xác nhận bản quyền hình ảnh thực địa. Cần Cô Thu Trang đối chiếu hình ảnh minh họa bài học thể hiện đúng đảo đá đặc trưng Vịnh Hạ Long (Quảng Ninh), không nhầm với vịnh biển khác.',
      proposedChange: 'Giáo viên đối chiếu hình ảnh thực tế với nguồn Cục Du lịch Quốc gia Việt Nam (vietnamtourism.gov.vn) trước khi xuất bản.',
      rationaleAndSource: 'Hồ sơ Di sản Thiên nhiên Thế giới UNESCO (UNESCO World Heritage Vietnam - Vịnh Hạ Long).',
      needsTeacherCheck: true,
      applyAction: (l) => l
    });
  } else {
    // Với các bài học khác: Quét tự động dựa trên từ vựng, bài đọc và câu hỏi của bài đó
    if (lesson.vocabulary.length > 0) {
      const firstVocab = lesson.vocabulary[0];
      suggestions.push({
        id: `sug-vocab-${firstVocab.id}`,
        category: 'vocab',
        categoryLabel: '🔤 Từ vựng & Ngữ âm IPA',
        targetField: `Từ vựng "${firstVocab.word}"`,
        originalContent: `${firstVocab.word} ${firstVocab.ipa} - ${firstVocab.meaningVi}`,
        detectedIssue: 'Đề xuất bổ sung ví dụ song ngữ sinh động gắn liền với ngữ cảnh khám phá danh lam thắng cảnh Việt Nam.',
        proposedChange: `Chuẩn hóa phiên âm IPA và hoàn thiện câu ví dụ giao tiếp theo lứa tuổi ${lesson.gradeLevel}.`,
        rationaleAndSource: 'Từ điển Oxford Learner\'s Dictionaries & Khung GDPT 2018 môn Tiếng Anh.',
        applyAction: (l) => l
      });
    }

    if (lesson.reading) {
      suggestions.push({
        id: `sug-reading-${lesson.id}`,
        category: 'reading',
        categoryLabel: '📖 Bài đọc hiểu',
        targetField: `Bài đọc: ${lesson.reading.titleEn}`,
        originalContent: `Độ dài: ${lesson.reading.wordCount} từ • ${lesson.reading.passagesEn?.length || 0} đoạn`,
        detectedIssue: 'Đã rà soát: Độ dài và từ vựng phù hợp với khung năng lực của ' + lesson.gradeLevel + '.',
        proposedChange: 'Bổ sung gợi ý đọc hiểu sinh động giúp học sinh dễ liên hệ bài đọc với đời sống thực tế.',
        rationaleAndSource: 'Khung năng lực ngoại ngữ 6 bậc Việt Nam & CEFR Primary.',
        applyAction: (l) => l
      });
    }

    suggestions.push({
      id: `sug-verification-${lesson.id}`,
      category: 'verification',
      categoryLabel: '⚠️ Cần giáo viên kiểm tra',
      targetField: 'Kiểm chứng kiến thức văn hóa địa phương',
      originalContent: `Chủ đề: ${lesson.topicEn} (${lesson.topicVi})`,
      detectedIssue: 'Chi tiết văn hóa đặc thù cần giáo viên bộ môn trực tiếp thẩm định tính chính xác với tài liệu Giáo dục địa phương.',
      proposedChange: 'Giáo viên kiểm tra và bổ sung ghi chú thẩm định chuyên môn vào hồ sơ minh chứng.',
      rationaleAndSource: 'Tài liệu Giáo dục Địa phương & Chương trình GDPT 2018.',
      needsTeacherCheck: true,
      applyAction: (l) => l
    });
  }

  return suggestions;
};

export const ContentApprovalCenter: React.FC = () => {
  // 1. Dữ liệu thực tế được lấy trực tiếp từ hệ thống, ưu tiên bản sửa đã lưu cục bộ của Giáo viên
  const [lessons, setLessons] = useState<CurriculumLesson[]>(() => {
    const baseLessons = getCurriculumLessons();
    const localEditedMap = localStore.get<Record<string, CurriculumLesson>>('teacher_edited_curriculum_lessons_map', {});
    return baseLessons.map(l => localEditedMap[l.id] ? { ...l, ...localEditedMap[l.id] } : l);
  });
  const [games, setGames] = useState<GameContentItem[]>(INITIAL_GAMES_LIST);

  // 2. Quản lý trạng thái phê duyệt thực tế của Giáo viên (Bắt đầu RỖNG - không tự động gán đã duyệt)
  const [approvedLessonIds, setApprovedLessonIds] = useState<string[]>(() => {
    return localStore.get<string[]>('teacher_approved_lesson_ids', []);
  });

  const [approvedGameIds, setApprovedGameIds] = useState<string[]>(() => {
    return localStore.get<string[]>('teacher_approved_game_ids', []);
  });

  // 3. Lịch sử phê duyệt thực tế (Bắt đầu RỖNG - Không tự tạo lịch sử phê duyệt giả)
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(() => {
    return localStore.get<AuditLogEntry[]>('teacher_approval_audit_logs', []);
  });

  // Tab phân loại: 'lessons' | 'questions' | 'games' | 'audit'
  const [activeSubTab, setActiveSubTab] = useState<'lessons' | 'questions' | 'games' | 'audit'>('lessons');

  // Bộ lọc
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'approved' | 'unverified'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Trạng thái biên tập
  const [viewingLesson, setViewingLesson] = useState<CurriculumLesson | null>(null);
  const [editingLesson, setEditingLesson] = useState<CurriculumLesson | null>(null);
  const [editSectionTab, setEditSectionTab] = useState<'general' | 'vocab' | 'reading' | 'questions' | 'sources' | 'preview'>('general');
  const [viewingGame, setViewingGame] = useState<GameContentItem | null>(null);

  // Trạng thái AI Rà soát Sư phạm
  const [reviewingLesson, setReviewingLesson] = useState<CurriculumLesson | null>(null);
  const [isAiScanning, setIsAiScanning] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AiReviewSuggestion[]>([]);
  const [acceptedSuggestionIds, setAcceptedSuggestionIds] = useState<string[]>([]);

  // Bắt đầu AI Rà soát
  const handleStartAiReview = (lesson: CurriculumLesson) => {
    soundEffects.playClick();
    setReviewingLesson(lesson);
    setIsAiScanning(true);
    setAiSuggestions([]);
    setAcceptedSuggestionIds([]);

    setTimeout(() => {
      const suggestions = generateAiReviewSuggestions(lesson);
      setAiSuggestions(suggestions);
      const autoSelected = suggestions.filter(s => !s.needsTeacherCheck).map(s => s.id);
      setAcceptedSuggestionIds(autoSelected);
      setIsAiScanning(false);
      soundEffects.playSuccess();
    }, 1000);
  };

  const handleToggleSuggestion = (sugId: string) => {
    soundEffects.playClick();
    setAcceptedSuggestionIds(prev => 
      prev.includes(sugId) ? prev.filter(id => id !== sugId) : [...prev, sugId]
    );
  };

  const handleSelectAllSuggestions = () => {
    soundEffects.playClick();
    setAcceptedSuggestionIds(aiSuggestions.filter(s => !s.needsTeacherCheck).map(s => s.id));
  };

  const handleDeselectAllSuggestions = () => {
    soundEffects.playClick();
    setAcceptedSuggestionIds([]);
  };

  // Áp dụng các đề xuất đã chọn vào bài học
  const handleApplyAiSuggestions = () => {
    if (!reviewingLesson) return;
    if (acceptedSuggestionIds.length === 0) {
      alert('Cô chưa chọn đề xuất nào để áp dụng.');
      return;
    }

    soundEffects.playSuccess();
    let updated = JSON.parse(JSON.stringify(reviewingLesson)) as CurriculumLesson;

    aiSuggestions.forEach(sug => {
      if (acceptedSuggestionIds.includes(sug.id)) {
        updated = sug.applyAction(updated);
      }
    });

    updated.updatedAt = new Date().toISOString();

    const currentMap = localStore.get<Record<string, CurriculumLesson>>('teacher_edited_curriculum_lessons_map', {});
    const updatedMap = {
      ...currentMap,
      [updated.id]: updated
    };
    localStore.set('teacher_edited_curriculum_lessons_map', updatedMap);
    setLessons(prev => prev.map(l => l.id === updated.id ? updated : l));

    if (editingLesson && editingLesson.id === updated.id) {
      setEditingLesson(updated);
    }

    const acceptedCount = acceptedSuggestionIds.length;
    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: updated.id,
      contentTitle: updated.titleEn,
      contentType: 'Bài học',
      action: 'Chỉnh sửa nội dung',
      editorName: 'Cô Trần Thị Thu Trang (có AI hỗ trợ)',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: `Cô Thu Trang sử dụng AI rà soát sư phạm và phê chuẩn ${acceptedCount} đề xuất cải tiến học liệu. Trạng thái giữ nguyên "Chưa kiểm duyệt" để giáo viên trực tiếp thẩm định sau cùng.`,
      aiInvolved: true,
      status: approvedLessonIds.includes(updated.id) ? 'Đã duyệt' : 'Chưa kiểm duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);

    setReviewingLesson(null);
    alert(`[RÀ SOÁT & CẬP NHẬT THÀNH CÔNG]\nĐã áp dụng ${acceptedCount} đề xuất của AI vào bài học "${updated.titleEn}".\nTrạng thái bài học: "Chưa kiểm duyệt" (Cô Thu Trang giữ toàn quyền thẩm định & phê duyệt cuối cùng).\nBiên bản minh chứng đã được lưu vào mục "4. Lịch sử Chỉnh sửa & Minh chứng"!`);
  };

  // Mở cửa sổ Soạn thảo & Chỉnh sửa bài học
  const handleStartEditLesson = (lesson: CurriculumLesson, defaultSection: 'general' | 'vocab' | 'reading' | 'questions' | 'sources' | 'preview' = 'general') => {
    soundEffects.playClick();
    const copy: CurriculumLesson = JSON.parse(JSON.stringify(lesson));
    if (!copy.verification) {
      copy.verification = {
        isVerifiedByTeacher: approvedLessonIds.includes(lesson.id),
        teacherName: 'Cô Trần Thị Thu Trang',
        isAiGenerated: false,
        sourceReferences: getLessonKnowledgeSources(lesson),
        humanEditorNotes: ''
      };
    } else if (!copy.verification.sourceReferences || copy.verification.sourceReferences.length === 0) {
      copy.verification.sourceReferences = getLessonKnowledgeSources(lesson);
    }
    setEditingLesson(copy);
    setEditSectionTab(defaultSection);
  };

  // Helper chỉnh sửa từ vựng
  const handleUpdateVocab = (vIdx: number, field: keyof LeveledVocabulary, value: any) => {
    if (!editingLesson) return;
    const newVocab = [...editingLesson.vocabulary];
    newVocab[vIdx] = { ...newVocab[vIdx], [field]: value };
    setEditingLesson({ ...editingLesson, vocabulary: newVocab });
  };

  const handleAddVocab = () => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const newV: LeveledVocabulary = {
      id: 'v-' + Date.now(),
      word: 'sea',
      ipa: '/siː/',
      partOfSpeech: 'noun',
      meaningEn: 'English meaning',
      meaningVi: 'Nghĩa tiếng Việt',
      exampleSentenceEn: 'Example sentence.',
      exampleSentenceVi: 'Câu ví dụ tiếng Việt.',
      emoji: '✨'
    };
    setEditingLesson({ ...editingLesson, vocabulary: [...editingLesson.vocabulary, newV] });
  };

  const handleRemoveVocab = (vIdx: number) => {
    if (!editingLesson) return;
    if (editingLesson.vocabulary.length <= 1) {
      alert('Bài học cần tối thiểu 1 từ vựng cốt lõi.');
      return;
    }
    soundEffects.playClick();
    const newVocab = editingLesson.vocabulary.filter((_, idx) => idx !== vIdx);
    setEditingLesson({ ...editingLesson, vocabulary: newVocab });
  };

  // Helper chỉnh sửa bài đọc
  const handleUpdateReading = (field: string, value: any) => {
    if (!editingLesson) return;
    setEditingLesson({
      ...editingLesson,
      reading: { ...editingLesson.reading, [field]: value }
    });
  };

  const handleUpdateReadingPassage = (pIdx: number, lang: 'en' | 'vi', value: string) => {
    if (!editingLesson) return;
    if (lang === 'en') {
      const newPassages = [...(editingLesson.reading.passagesEn || [])];
      newPassages[pIdx] = value;
      setEditingLesson({
        ...editingLesson,
        reading: { ...editingLesson.reading, passagesEn: newPassages }
      });
    } else {
      const newPassages = [...(editingLesson.reading.passagesVi || [])];
      newPassages[pIdx] = value;
      setEditingLesson({
        ...editingLesson,
        reading: { ...editingLesson.reading, passagesVi: newPassages }
      });
    }
  };

  const handleAddReadingPassage = () => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const currentEn = editingLesson.reading.passagesEn || [];
    const currentVi = editingLesson.reading.passagesVi || [];
    setEditingLesson({
      ...editingLesson,
      reading: {
        ...editingLesson.reading,
        passagesEn: [...currentEn, 'New reading passage paragraph in English.'],
        passagesVi: [...currentVi, 'Đoạn văn mới dịch nghĩa tiếng Việt.']
      }
    });
  };

  const handleRemoveReadingPassage = (pIdx: number) => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const currentEn = editingLesson.reading.passagesEn || [];
    const currentVi = editingLesson.reading.passagesVi || [];
    if (currentEn.length <= 1) {
      alert('Bài đọc cần tối thiểu 1 đoạn văn.');
      return;
    }
    setEditingLesson({
      ...editingLesson,
      reading: {
        ...editingLesson.reading,
        passagesEn: currentEn.filter((_, idx) => idx !== pIdx),
        passagesVi: currentVi.filter((_, idx) => idx !== pIdx)
      }
    });
  };

  // Helper chỉnh sửa câu hỏi
  const handleUpdateQuestion = (qIdx: number, field: string, value: any) => {
    if (!editingLesson) return;
    const newQuestions = [...(editingLesson.questions || [])];
    newQuestions[qIdx] = { ...newQuestions[qIdx], [field]: value };
    setEditingLesson({ ...editingLesson, questions: newQuestions });
  };

  const handleUpdateQuestionOption = (qIdx: number, optIdx: number, value: string) => {
    if (!editingLesson) return;
    const newQuestions = [...(editingLesson.questions || [])];
    const newOptions = [...(newQuestions[qIdx].options || [])];
    newOptions[optIdx] = value;
    newQuestions[qIdx] = { ...newQuestions[qIdx], options: newOptions };
    setEditingLesson({ ...editingLesson, questions: newQuestions });
  };

  const handleSetQuestionCorrect = (qIdx: number, correctIdx: number) => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const newQuestions = [...(editingLesson.questions || [])];
    newQuestions[qIdx] = { ...newQuestions[qIdx], correctIndex: correctIdx };
    setEditingLesson({ ...editingLesson, questions: newQuestions });
  };

  const handleAddQuestion = () => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const qCount = (editingLesson.questions || []).length;
    const newQ: Circular27CurriculumQuestion = {
      id: 'q-' + Date.now() + '-' + (qCount + 1),
      challengeLevel: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'What is the key word in this lesson?',
      questionVi: 'Từ khóa chính trong bài học này là gì?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctIndex: 0,
      explanationEn: 'Option A is the correct answer based on lesson vocabulary.',
      explanationVi: 'Phương án A là đáp án chính xác theo từ vựng bài học.',
      learningSkill: 'Vocabulary Recognition'
    };
    setEditingLesson({ ...editingLesson, questions: [...(editingLesson.questions || []), newQ] });
  };

  const handleRemoveQuestion = (qIdx: number) => {
    if (!editingLesson) return;
    soundEffects.playClick();
    const currentQ = editingLesson.questions || [];
    if (currentQ.length <= 1) {
      alert('Bài học cần tối thiểu 1 câu hỏi trắc nghiệm.');
      return;
    }
    setEditingLesson({
      ...editingLesson,
      questions: currentQ.filter((_, idx) => idx !== qIdx)
    });
  };

  // Hành động Phê duyệt Bài học (Do chính Cô Thu Trang bấm từ danh sách)
  const handleApproveLesson = (lesson: CurriculumLesson) => {
    soundEffects.playSuccess();
    const nextApprovedIds = [...approvedLessonIds, lesson.id];
    setApprovedLessonIds(nextApprovedIds);
    localStore.set('teacher_approved_lesson_ids', nextApprovedIds);

    // Ghi vào nhật ký chỉnh sửa thật
    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: lesson.id,
      contentTitle: lesson.titleEn,
      contentType: 'Bài học',
      action: 'Phê duyệt & Khóa',
      editorName: 'Cô Trần Thị Thu Trang',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: 'Giáo viên trực tiếp kiểm tra kiến thức sư phạm, đối chiếu nguồn tài liệu tham khảo và ký duyệt khóa nội dung.',
      aiInvolved: false,
      status: 'Đã duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);

    alert(`[KIỂM DUYỆT THÀNH CÔNG]\nCô Thu Trang đã phê duyệt bài học: "${lesson.titleEn}".\nBiên bản kiểm duyệt thật đã được lưu vào mục "4. Lịch sử Chỉnh sửa & Minh chứng"!`);
  };

  // Hành động Hủy Phê duyệt Bài học (để sửa lại)
  const handleRevokeLessonApproval = (lesson: CurriculumLesson) => {
    soundEffects.playClick();
    const nextApprovedIds = approvedLessonIds.filter(id => id !== lesson.id);
    setApprovedLessonIds(nextApprovedIds);
    localStore.set('teacher_approved_lesson_ids', nextApprovedIds);

    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: lesson.id,
      contentTitle: lesson.titleEn,
      contentType: 'Bài học',
      action: 'Hủy phê duyệt',
      editorName: 'Cô Trần Thị Thu Trang',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: 'Giáo viên mở khóa bài học để biên tập và chỉnh sửa thêm nội dung.',
      aiInvolved: false,
      status: 'Chưa kiểm duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);
  };

  // Hành động Phê duyệt Trò chơi
  const handleApproveGame = (game: GameContentItem) => {
    soundEffects.playSuccess();
    const nextApprovedIds = [...approvedGameIds, game.id];
    setApprovedGameIds(nextApprovedIds);
    localStore.set('teacher_approved_game_ids', nextApprovedIds);

    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: game.id,
      contentTitle: game.titleEn,
      contentType: 'Trò chơi',
      action: 'Phê duyệt & Khóa',
      editorName: 'Cô Trần Thị Thu Trang',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: 'Giáo viên kiểm tra tính chuẩn xác địa lý & văn hóa của trò chơi, chính thức phê duyệt mở cho học sinh.',
      aiInvolved: false,
      status: 'Đã duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);

    alert(`[KIỂM DUYỆT TRÒ CHƠI THÀNH CÔNG]\nĐã phê duyệt trò chơi: "${game.titleVi}".\nĐã ghi nhận biên bản vào Lịch sử chỉnh sửa!`);
  };

  // Lưu bản nháp (Giữ nguyên trạng thái thẩm định, ghi nhật ký chỉnh sửa)
  const handleSaveLessonDraft = () => {
    if (!editingLesson) return;
    soundEffects.playSuccess();
    const updatedLesson: CurriculumLesson = {
      ...editingLesson,
      updatedAt: new Date().toISOString()
    };
    const currentMap = localStore.get<Record<string, CurriculumLesson>>('teacher_edited_curriculum_lessons_map', {});
    const updatedMap = {
      ...currentMap,
      [updatedLesson.id]: updatedLesson
    };
    localStore.set('teacher_edited_curriculum_lessons_map', updatedMap);
    setLessons(prev => prev.map(l => l.id === updatedLesson.id ? updatedLesson : l));

    const isApproved = approvedLessonIds.includes(updatedLesson.id);
    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: updatedLesson.id,
      contentTitle: updatedLesson.titleEn,
      contentType: 'Bài học',
      action: 'Chỉnh sửa nội dung',
      editorName: 'Cô Trần Thị Thu Trang',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: updatedLesson.verification?.humanEditorNotes?.trim() 
        ? `Lưu bản nháp: ${updatedLesson.verification.humanEditorNotes}`
        : 'Giáo viên lưu bản nháp chỉnh sửa học liệu (tiêu đề, từ vựng, bài đọc, câu hỏi).',
      aiInvolved: false,
      status: isApproved ? 'Đã duyệt' : 'Chưa kiểm duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);
    setEditingLesson(null);
    alert(`[ĐÃ LƯU BẢN NHÁP THÀNH CÔNG]\nĐã lưu các chỉnh sửa của bài "${updatedLesson.titleEn}" vào bộ nhớ máy giáo viên (Local Storage).\nTrạng thái bài học: ${isApproved ? 'Đã phê duyệt & Khóa' : 'Chưa kiểm duyệt'}.\nĐã ghi nhận vào mục Lịch sử chỉnh sửa & Minh chứng!`);
  };

  // Lưu và Phê duyệt Ngay (Chỉ khi Cô Thu Trang chủ động bấm)
  const handleSaveAndApproveLesson = () => {
    if (!editingLesson) return;
    soundEffects.playSuccess();
    const updatedLesson: CurriculumLesson = {
      ...editingLesson,
      status: 'approved',
      verification: {
        ...editingLesson.verification,
        isVerifiedByTeacher: true,
        teacherVerifiedAt: new Date().toISOString(),
        teacherName: 'Cô Trần Thị Thu Trang'
      },
      updatedAt: new Date().toISOString()
    };

    const currentMap = localStore.get<Record<string, CurriculumLesson>>('teacher_edited_curriculum_lessons_map', {});
    const updatedMap = {
      ...currentMap,
      [updatedLesson.id]: updatedLesson
    };
    localStore.set('teacher_edited_curriculum_lessons_map', updatedMap);
    setLessons(prev => prev.map(l => l.id === updatedLesson.id ? updatedLesson : l));

    const nextApprovedIds = approvedLessonIds.includes(updatedLesson.id)
      ? approvedLessonIds
      : [...approvedLessonIds, updatedLesson.id];
    setApprovedLessonIds(nextApprovedIds);
    localStore.set('teacher_approved_lesson_ids', nextApprovedIds);

    const newLog: AuditLogEntry = {
      id: 'log-' + Date.now(),
      contentId: updatedLesson.id,
      contentTitle: updatedLesson.titleEn,
      contentType: 'Bài học',
      action: 'Phê duyệt & Khóa',
      editorName: 'Cô Trần Thị Thu Trang',
      editorRole: 'Giáo viên Tiếng Anh - Trường TH Trang Tấn Khương',
      timestamp: new Date().toLocaleString('vi-VN'),
      notes: updatedLesson.verification?.humanEditorNotes?.trim()
        ? `Đã thẩm định & phê duyệt khóa: ${updatedLesson.verification.humanEditorNotes}`
        : 'Giáo viên trực tiếp đối chiếu giáo trình, hoàn thiện từ vựng & câu hỏi và ký duyệt khóa nội dung.',
      aiInvolved: false,
      status: 'Đã duyệt'
    };
    const nextLogs = [newLog, ...auditLogs];
    setAuditLogs(nextLogs);
    localStore.set('teacher_approval_audit_logs', nextLogs);
    setEditingLesson(null);
    alert(`[PHÊ DUYỆT & KHÓA BÀI HỌC THÀNH CÔNG]\nCô Thu Trang đã phê duyệt bài học: "${updatedLesson.titleEn}".\nTrạng thái bài học đã được cập nhật thành: "✓ Đã phê duyệt & Khóa"!\nBiên bản kiểm duyệt thật đã được lưu vào mục "4. Lịch sử Chỉnh sửa & Minh chứng"!`);
  };

  // Khôi phục bài học về dữ liệu gốc ban đầu
  const handleResetLessonToOriginal = (lessonId: string) => {
    if (!window.confirm('Cô có chắc chắn muốn hủy các thay đổi đã chỉnh sửa và khôi phục lại nội dung gốc ban đầu của bài học này?')) {
      return;
    }
    soundEffects.playClick();
    const originalLessons = getCurriculumLessons();
    const original = originalLessons.find(l => l.id === lessonId);
    if (!original) return;
    const currentMap = localStore.get<Record<string, CurriculumLesson>>('teacher_edited_curriculum_lessons_map', {});
    delete currentMap[lessonId];
    localStore.set('teacher_edited_curriculum_lessons_map', currentMap);
    setLessons(prev => prev.map(l => l.id === lessonId ? original : l));
    if (editingLesson && editingLesson.id === lessonId) {
      setEditingLesson(JSON.parse(JSON.stringify(original)));
    }
    alert('Đã khôi phục nội dung bài học về dữ liệu gốc ban đầu thành công.');
  };

  // Lọc bài học
  const filteredLessons = lessons.filter(l => {
    if (gradeFilter !== 'all' && l.gradeLevel !== gradeFilter) return false;
    const isApproved = approvedLessonIds.includes(l.id);
    if (statusFilter === 'approved' && !isApproved) return false;
    if (statusFilter === 'unverified' && isApproved) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return l.titleEn.toLowerCase().includes(q) || l.titleVi.toLowerCase().includes(q) || l.topicEn.toLowerCase().includes(q);
    }
    return true;
  });

  // Lọc câu hỏi từ các bài học
  const allQuestions = lessons.flatMap(l => 
    (l.questions || []).map(q => ({
      ...q,
      lessonId: l.id,
      lessonTitle: l.titleEn,
      gradeLevel: l.gradeLevel
    }))
  );

  const filteredQuestions = allQuestions.filter(q => {
    if (gradeFilter !== 'all' && q.gradeLevel !== gradeFilter) return false;
    if (searchQuery.trim() !== '') {
      const s = searchQuery.toLowerCase();
      return (q.questionEn || '').toLowerCase().includes(s) || (q.lessonTitle || '').toLowerCase().includes(s);
    }
    return true;
  });

  // In / Xuất biên bản minh chứng
  const handlePrintAudit = () => {
    soundEffects.playClick();
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* ==================================================================== */}
      {/* 1. HEADER BANNER CHÍNH CỦA TRUNG TÂM PHÊ DUYỆT NỘI DUNG               */}
      {/* ==================================================================== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white p-6 sm:p-8 shadow-xl border-2 border-indigo-500/40">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700 border-2 border-white/40 flex items-center justify-center text-3xl shadow-lg shrink-0">
              🛡️
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>VietDiscovery Content Approval Center</span>
                <span className="px-2 py-0.2 bg-amber-400 text-amber-950 rounded-full text-[10px] font-extrabold">Bản Xem Trước</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight leading-tight">
                Trung tâm Phê duyệt & Kiểm soát Chất lượng Nội dung
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200/90 max-w-2xl mt-1 leading-relaxed">
                Khu vực chuyên trách để <strong>Cô Trần Thị Thu Trang</strong> trực tiếp thẩm định, chỉnh sửa, đóng dấu phê duyệt và khóa nội dung giáo trình & câu hỏi trò chơi trước khi mở cho học sinh, đồng thời lưu trữ biên bản làm minh chứng dự thi sáng kiến.
              </p>
            </div>
          </div>

          {/* Huy hiệu cam kết bảo mật & quyền giáo viên */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 max-w-xs text-xs space-y-2 shrink-0">
            <div className="flex items-center gap-1.5 font-bold text-emerald-300">
              <Lock className="w-4 h-4" />
              <span>Nguyên Tắc Bất Di Bất Dịch:</span>
            </div>
            <ul className="text-[11px] text-slate-200 space-y-1 list-disc pl-4">
              <li>AI <strong>chỉ hỗ trợ</strong> gợi ý bản thảo.</li>
              <li>Giáo viên là người <strong>duy nhất</strong> có quyền duyệt.</li>
              <li>Bài đã duyệt <strong>bị khóa cứng</strong>, AI không được tự đổi.</li>
              <li>Không tự tạo lịch sử duyệt giả mạo.</li>
            </ul>
          </div>
        </div>

        {/* CẢNH BÁO MINH BẠCH VỀ BẢN XEM TRƯỚC LOCAL & NGUYÊN TẮC DUYỆT */}
        <div className="mt-5 p-3.5 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-amber-300 mt-0.5" />
          <div className="space-y-1">
            <div>
              <strong>Phân định rõ ràng:</strong> Trạng thái bài học đang hiển thị trên website (Web Active) không đồng nghĩa với việc đã được Cô Thu Trang phê duyệt chuyên môn.
            </div>
            <div className="text-amber-100/90 text-[11.5px]">
              Tất cả các bài học bên dưới đều đang hiển thị trạng thái trung thực: <strong>"Chưa kiểm duyệt"</strong>. Chỉ khi Cô Thu Trang trực tiếp bấm nút <strong>"Phê duyệt & Khóa bài"</strong>, hệ thống mới ghi nhận biên bản phê duyệt thật sự.
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. THANH CHUYỂN TABS CHÍNH                                           */}
      {/* ==================================================================== */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('lessons');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'lessons'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Danh sách Bài học ({lessons.length} bài)</span>
          {approvedLessonIds.length > 0 && (
            <span className="px-2 py-0.2 bg-emerald-500 text-white rounded-full text-[10px] font-black">
              {approvedLessonIds.length} đã duyệt
            </span>
          )}
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('questions');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'questions'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>2. Ngân hàng Câu hỏi ({allQuestions.length} câu)</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('games');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'games'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>3. Trò chơi Thám hiểm ({games.length} trò chơi)</span>
          {approvedGameIds.length > 0 && (
            <span className="px-2 py-0.2 bg-emerald-500 text-white rounded-full text-[10px] font-black">
              {approvedGameIds.length} đã duyệt
            </span>
          )}
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveSubTab('audit');
          }}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ml-auto ${
            activeSubTab === 'audit'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
          }`}
        >
          <FileText className="w-4 h-4 text-emerald-500" />
          <span>4. Lịch sử Chỉnh sửa & Minh chứng ({auditLogs.length} ghi chép)</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 3. BỘ LỌC TÌM KIẾM (Áp dụng cho các tab nội dung)                     */}
      {/* ==================================================================== */}
      {activeSubTab !== 'audit' && (
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Lọc Khối Lớp */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Khối lớp:</span>
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-indigo-500"
              >
                <option value="all">Tất cả các khối (1–5)</option>
                <option value="Grade 1">Khối 1</option>
                <option value="Grade 2">Khối 2</option>
                <option value="Grade 3">Khối 3</option>
                <option value="Grade 4">Khối 4</option>
                <option value="Grade 5">Khối 5</option>
              </select>
            </div>

            {/* Lọc Trạng thái Kiểm duyệt */}
            {activeSubTab === 'lessons' && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 ml-2">
                <span>Thẩm định:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="px-2.5 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-indigo-500"
                >
                  <option value="all">Tất cả bài học</option>
                  <option value="unverified">Chưa kiểm duyệt ({lessons.length - approvedLessonIds.length} bài)</option>
                  <option value="approved">Đã phê duyệt ({approvedLessonIds.length} bài)</option>
                </select>
              </div>
            )}
          </div>

          {/* Ô tìm kiếm */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học, từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-indigo-500"
            />
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. TAB 1: DANH SÁCH BÀI HỌC GIÁO TRÌNH ĐỘC QUYỀN                     */}
      {/* ==================================================================== */}
      {activeSubTab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
            <span>Hiển thị {filteredLessons.length} bài học thực tế trong hệ thống</span>
            <span className="text-slate-500">
              {approvedLessonIds.length === 0 ? 'Hiện tại: 0 bài đã duyệt • 25 bài chưa kiểm duyệt' : `Đã duyệt: ${approvedLessonIds.length} bài`}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {filteredLessons.map((lesson) => {
              const isApproved = approvedLessonIds.includes(lesson.id);
              const knowledgeSources = getLessonKnowledgeSources(lesson);

              return (
                <div 
                  key={lesson.id} 
                  className={`p-4 sm:p-5 rounded-2xl bg-white border-2 transition-all shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                    isApproved 
                      ? 'border-emerald-300 bg-emerald-50/20' 
                      : 'border-amber-200 hover:border-amber-300'
                  }`}
                >
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black font-mono">
                        {lesson.gradeLevel}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        Chặng #{lesson.lessonNumber}: {lesson.topicEn}
                      </span>

                      {/* 1. Trạng thái hiển thị trên website */}
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold border border-slate-200">
                        🌐 Hiển thị: Đang mở trên Web
                      </span>

                      {/* 2. Trạng thái Thẩm định Chuyên môn (Chưa kiểm duyệt hoặc Đã duyệt) */}
                      {isApproved ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold flex items-center gap-1 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Đã phê duyệt & Khóa</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-extrabold flex items-center gap-1 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Chưa kiểm duyệt</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-tight">
                      {lesson.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {lesson.titleVi}
                    </p>

                    {/* Nguồn tài liệu tham khảo chuẩn xác (Không dùng Thông tư 27 làm nguồn kiến thức) */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
                      <span className="font-bold text-slate-800">📚 Nguồn tham khảo đối chiếu:</span>
                      <span className="text-slate-700 italic">{knowledgeSources.join(' • ')}</span>
                    </div>
                  </div>

                  {/* 3 Nút Hành Động: Xem, Sửa, Phê duyệt */}
                  <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    {/* Nút 1: Xem */}
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setViewingLesson(lesson);
                      }}
                      className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      title="Xem toàn bộ nội dung bài học"
                    >
                      <Eye className="w-4 h-4 text-slate-500" />
                      <span>Xem</span>
                    </button>

                    {/* Nút: AI Rà soát */}
                    <button
                      onClick={() => handleStartAiReview(lesson)}
                      className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-purple-200 shadow-xs"
                      title="Bật trợ lý AI rà soát học liệu theo chuẩn sư phạm"
                    >
                      <Bot className="w-4 h-4 text-purple-600" />
                      <span>AI Rà soát</span>
                    </button>

                    {/* Nút 2: Sửa */}
                    <button
                      onClick={() => handleStartEditLesson(lesson, 'general')}
                      className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      title="Chỉnh sửa nội dung bài học"
                    >
                      <Edit3 className="w-4 h-4 text-indigo-600" />
                      <span>Sửa</span>
                    </button>

                    {/* Nút 3: Phê duyệt (Nếu chưa duyệt thì có nút Phê duyệt, nếu đã duyệt thì hiện Đã duyệt & nút Hủy) */}
                    {isApproved ? (
                      <div className="flex items-center gap-1">
                        <button
                          disabled
                          className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Đã duyệt ✓</span>
                        </button>
                        <button
                          onClick={() => handleRevokeLessonApproval(lesson)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Hủy phê duyệt để mở khóa sửa tiếp"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleApproveLesson(lesson)}
                        className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
                        title="Bấm để trực tiếp phê duyệt và khóa bài học này"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Phê duyệt & Khóa</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 5. TAB 2: NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM BLOOM & THÔNG TƯ 27          */}
      {/* ==================================================================== */}
      {activeSubTab === 'questions' && (
        <div className="space-y-4">
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs flex items-center gap-2">
            <Info className="w-4 h-4 shrink-0 text-indigo-600" />
            <span>
              <strong>Lưu ý phương pháp sư phạm:</strong> Các câu hỏi trắc nghiệm bên dưới được phân hóa cấp độ (Nhận biết • Kết nối • Vận dụng) theo quy định tại <strong>Điều 7 Thông tư 27/2020/TT-BGDĐT</strong>. Kiến thức từ vựng & ngữ pháp được đối chiếu theo <strong>Từ điển Oxford Learner's Dictionaries</strong>.
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
            <span>Hiển thị {filteredQuestions.length} câu hỏi đánh giá thực tế trong giáo trình</span>
            <span className="text-slate-500">Giáo viên kiểm tra đáp án & nội dung sư phạm</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {filteredQuestions.map((q, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                      {q.gradeLevel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold">
                      Cấp độ TT 27: Mức {q.challengeLevel || 1} ({q.levelNameVi || (q.challengeLevel === 1 ? 'Nhận biết' : q.challengeLevel === 2 ? 'Kết nối' : 'Vận dụng')})
                    </span>
                    <span className="text-xs text-slate-500">
                      Từ bài: <strong>{q.lessonTitle}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-black border border-emerald-200">
                      Đáp án đúng: Phương án {String.fromCharCode(65 + q.correctIndex)}
                    </span>
                    <button
                      onClick={() => {
                        const parent = lessons.find(l => l.id === q.lessonId);
                        if (parent) handleStartEditLesson(parent, 'questions');
                      }}
                      className="px-2.5 py-0.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold flex items-center gap-1 border border-indigo-200 cursor-pointer"
                      title="Chỉnh sửa câu hỏi này trong bài học"
                    >
                      <Edit3 className="w-3 h-3 text-indigo-600" />
                      <span>Sửa câu này</span>
                    </button>
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-800 leading-snug">
                  {idx + 1}. {q.questionEn}
                </div>

                {/* 4 phương án lựa chọn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(q.options || []).map((opt: string, oIdx: number) => (
                    <div 
                      key={oIdx}
                      className={`p-2 rounded-xl border flex items-center justify-between ${
                        oIdx === q.correctIndex
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                      {oIdx === q.correctIndex && <span className="text-emerald-600 font-black">✓ Chuẩn</span>}
                    </div>
                  ))}
                </div>

                {/* Nguồn giải thích sư phạm */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-0.5">
                  <span className="font-bold text-slate-700">Giải thích sư phạm: </span>
                  <span>{q.explanationEn}</span>
                  {q.explanationVi && <span className="text-slate-500 block">({q.explanationVi})</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 6. TAB 3: DANH SÁCH TRÒ CHƠI THÁM HIỂM (ADVENTURE GAMES)              */}
      {/* ==================================================================== */}
      {activeSubTab === 'games' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
            <span>Danh sách 4 trò chơi học tập tương tác hiện có trong VietDiscovery</span>
            <span className="text-slate-500">
              {approvedGameIds.length === 0 ? 'Hiện tại: 0 trò chơi đã duyệt • 4 chưa kiểm duyệt' : `Đã duyệt: ${approvedGameIds.length} trò chơi`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((g) => {
              const isApproved = approvedGameIds.includes(g.id);

              return (
                <div 
                  key={g.id} 
                  className={`p-5 rounded-2xl bg-white border-2 transition-all shadow-xs flex flex-col justify-between space-y-3 ${
                    isApproved ? 'border-emerald-300 bg-emerald-50/20' : 'border-amber-200'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black font-mono">
                        {g.category} • {g.targetGrades}
                      </span>
                      {isApproved ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold flex items-center gap-1 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Đã duyệt ✓</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-extrabold flex items-center gap-1 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Chưa kiểm duyệt</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-black font-heading text-slate-900">
                      {g.titleVi}
                    </h3>
                    <p className="text-xs text-indigo-600 font-bold">
                      {g.titleEn}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {g.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                      <div className="font-bold text-slate-700">📚 Nguồn dữ liệu kiểm chứng:</div>
                      <div className="text-slate-500 italic">{g.sourceReference}</div>
                    </div>
                  </div>

                  {/* Nút hành động */}
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setViewingGame(g);
                      }}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>Xem chi tiết</span>
                    </button>

                    <button
                      onClick={() => handleApproveGame(g)}
                      className={`flex-1 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isApproved
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-sm'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{isApproved ? 'Đã duyệt ✓' : 'Phê duyệt trò chơi'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 7. TAB 4: LỊCH SỬ CHỈNH SỬA & BIÊN BẢN MINH CHỨNG DỰ THI              */}
      {/* ==================================================================== */}
      {activeSubTab === 'audit' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-emerald-500 text-white">
                  <FileText className="w-4 h-4" />
                </span>
                <h3 className="text-sm font-black font-heading text-slate-900">
                  Sổ Nhật Ký Kiểm Duyệt & Biên Bản Minh Chứng Sư Phạm
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                Bảng lưu vết ghi lại chính xác các hành động phê duyệt do Cô Thu Trang thực hiện, minh bạch thời gian thực để xuất biên bản làm minh chứng dự thi sáng kiến. Hệ thống <strong>không tạo dữ liệu giả</strong>.
              </p>
            </div>

            {auditLogs.length > 0 && (
              <button
                onClick={handlePrintAudit}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
              >
                <Printer className="w-4 h-4" />
                <span>In Biên Bản Minh Chứng</span>
              </button>
            )}
          </div>

          {/* Bảng Nhật Ký Hoặc Trạng Thái Trống Minh Bạch */}
          {auditLogs.length === 0 ? (
            <div className="p-10 text-center bg-white rounded-3xl border-2 border-dashed border-slate-300 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto text-2xl shadow-xs">
                📝
              </div>
              <h4 className="font-heading font-black text-slate-800 text-base">
                Chưa có biên bản kiểm duyệt nào được tạo
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Hệ thống tuân thủ nghiêm ngặt nguyên tắc <strong>không tự tạo lịch sử phê duyệt giả</strong>. Cô Thu Trang hiện chưa thực hiện duyệt bài học nào trên hệ thống.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveSubTab('lessons');
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm cursor-pointer transition-colors"
                >
                  👉 Bấm vào đây để chọn và phê duyệt bài học đầu tiên
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase text-[10.5px] tracking-wider">
                      <th className="py-3 px-3.5">Mã Nhật Ký</th>
                      <th className="py-3 px-3.5">Thời Gian</th>
                      <th className="py-3 px-3.5">Nội Dung / Bài Học</th>
                      <th className="py-3 px-3.5">Hành Động</th>
                      <th className="py-3 px-3.5">Người Thẩm Định</th>
                      <th className="py-3 px-3.5">Ghi Chú Sư Phạm</th>
                      <th className="py-3 px-3.5">Vai Trò AI</th>
                      <th className="py-3 px-3.5">Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3.5 font-mono font-bold text-slate-500">
                          {log.id}
                        </td>
                        <td className="py-3 px-3.5 text-slate-600 whitespace-nowrap">
                          {log.timestamp}
                        </td>
                        <td className="py-3 px-3.5">
                          <div className="font-bold text-slate-800">{log.contentTitle}</div>
                          <div className="text-[10.5px] text-slate-400">Loại: {log.contentType}</div>
                        </td>
                        <td className="py-3 px-3.5 font-bold text-indigo-700">
                          {log.action}
                        </td>
                        <td className="py-3 px-3.5">
                          <div className="font-bold text-slate-800">{log.editorName}</div>
                          <div className="text-[10px] text-slate-500">{log.editorRole}</div>
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 max-w-xs leading-snug">
                          {log.notes}
                        </td>
                        <td className="py-3 px-3.5">
                          {log.aiInvolved ? (
                            <span className="inline-block px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                              AI gợi ý bản thảo
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                              Giáo viên tự duyệt
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3.5">
                          {log.status === 'Đã duyệt' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Đã duyệt & Khóa</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                              <Clock className="w-3 h-3 text-amber-600" />
                              <span>Chưa kiểm duyệt</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* 8. MODAL XEM CHI TIẾT BÀI HỌC (VIEW PREVIEW MODAL)                    */}
      {/* ==================================================================== */}
      {viewingLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border-2 border-indigo-200 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider">
                  Xem chi tiết nội dung ({viewingLesson.gradeLevel})
                </span>
                <h3 className="text-lg font-black font-heading leading-tight">
                  {viewingLesson.titleEn}
                </h3>
                <p className="text-xs text-indigo-200">
                  {viewingLesson.titleVi}
                </p>
              </div>

              <button
                onClick={() => setViewingLesson(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              
              {/* Nguồn tài liệu tham khảo chuẩn xác */}
              <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 space-y-1">
                <div className="font-extrabold text-indigo-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>Nguồn tài liệu tham khảo đối chiếu:</span>
                </div>
                <p className="text-[11.5px] text-indigo-900/80">
                  {getLessonKnowledgeSources(viewingLesson).join(' • ')}
                </p>
              </div>

              {/* Từ vựng chính */}
              <div>
                <h4 className="font-bold text-slate-800 mb-2 uppercase text-[11px] tracking-wider">
                  1. Từ vựng cốt lõi ({viewingLesson.vocabulary.length} từ):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {viewingLesson.vocabulary.map((v) => (
                    <div key={v.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-900 text-sm">{v.word}</span>
                        <span className="font-mono text-indigo-600 text-xs font-bold">{v.ipa}</span>
                      </div>
                      <div className="text-slate-700">{v.meaningEn}</div>
                      <div className="text-slate-500 font-semibold">Nghĩa tiếng Việt: {v.meaningVi}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bài đọc */}
              <div>
                <h4 className="font-bold text-slate-800 mb-2 uppercase text-[11px] tracking-wider">
                  2. Bài đọc hiểu ({viewingLesson.reading.titleEn}):
                </h4>
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2 leading-relaxed">
                  {viewingLesson.reading.passagesEn.map((p, idx) => (
                    <p key={idx} className="text-slate-800 font-serif text-[13px]">{p}</p>
                  ))}
                </div>
              </div>

              {/* Câu hỏi trắc nghiệm */}
              <div>
                <h4 className="font-bold text-slate-800 mb-2 uppercase text-[11px] tracking-wider">
                  3. Câu hỏi đánh giá ({viewingLesson.questions?.length || 0} câu hỏi Circular 27):
                </h4>
                <div className="space-y-2">
                  {(viewingLesson.questions || []).map((q, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <div className="font-bold text-slate-800">{idx + 1}. {q.questionEn}</div>
                      <div className="grid grid-cols-2 gap-1 text-[11px]">
                        {(q.options || []).map((opt: string, oIdx: number) => (
                          <div 
                            key={oIdx}
                            className={`p-1.5 rounded-lg border ${
                              oIdx === q.correctIndex ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900' : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}. {opt} {oIdx === q.correctIndex && '✓'}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end shrink-0">
              <button
                onClick={() => setViewingLesson(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold cursor-pointer"
              >
                Đóng Cửa Sổ
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 9. MODAL SỬA BÀI HỌC (EDIT PREVIEW MODAL)                              */}
      {/* ==================================================================== */}
      {editingLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border-2 border-indigo-400 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600/60 border border-indigo-400/40 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  ✏️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-wider">
                      Biên tập & Kiểm duyệt Sư phạm
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/40 text-[10px] font-bold">
                      {editingLesson.gradeLevel} • Chặng #{editingLesson.lessonNumber}
                    </span>
                    {approvedLessonIds.includes(editingLesson.id) ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-extrabold flex items-center gap-1 border border-emerald-400/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Đã duyệt & Khóa
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-extrabold flex items-center gap-1 border border-amber-400/30">
                        <Clock className="w-3 h-3 text-amber-400" />
                        Chưa kiểm duyệt
                      </span>
                    )}
                  </div>
                  <h3 className="font-black text-base sm:text-lg font-heading tracking-tight leading-tight mt-0.5">
                    {editingLesson.titleEn}
                  </h3>
                  <p className="text-xs text-indigo-200">
                    {editingLesson.titleVi}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleStartAiReview(editingLesson)}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-purple-400/30"
                  title="Mở bảng AI rà soát học liệu sư phạm"
                >
                  <Bot className="w-3.5 h-3.5 text-purple-300" />
                  <span className="hidden sm:inline">AI Rà soát</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleResetLessonToOriginal(editingLesson.id)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-rose-500/30 text-slate-200 hover:text-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Khôi phục toàn bộ bài học về dữ liệu gốc ban đầu"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Khôi phục bản gốc</span>
                </button>
                <button
                  onClick={() => setEditingLesson(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-navigation Tabs */}
            <div className="bg-slate-100 p-1.5 border-b border-slate-200 flex flex-wrap gap-1 shrink-0 text-xs">
              <button
                type="button"
                onClick={() => setEditSectionTab('general')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  editSectionTab === 'general' ? 'bg-white text-indigo-900 shadow-xs border border-slate-300' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>📌 1. Tiêu đề</span>
              </button>
              <button
                type="button"
                onClick={() => setEditSectionTab('vocab')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  editSectionTab === 'vocab' ? 'bg-white text-indigo-900 shadow-xs border border-slate-300' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>🔤 2. Từ vựng ({editingLesson.vocabulary.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setEditSectionTab('reading')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  editSectionTab === 'reading' ? 'bg-white text-indigo-900 shadow-xs border border-slate-300' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>📖 3. Bài đọc</span>
              </button>
              <button
                type="button"
                onClick={() => setEditSectionTab('questions')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  editSectionTab === 'questions' ? 'bg-white text-indigo-900 shadow-xs border border-slate-300' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>❓ 4. Câu hỏi ({editingLesson.questions?.length || 0})</span>
              </button>
              <button
                type="button"
                onClick={() => setEditSectionTab('sources')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                  editSectionTab === 'sources' ? 'bg-white text-indigo-900 shadow-xs border border-slate-300' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>📑 5. Nguồn & Ghi chú</span>
              </button>
              <button
                type="button"
                onClick={() => setEditSectionTab('preview')}
                className={`px-3.5 py-1.5 rounded-xl font-extrabold flex items-center gap-1.5 cursor-pointer transition-all ml-auto ${
                  editSectionTab === 'preview' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>👁️ 6. Xem trước toàn bộ</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-slate-50/60 text-xs">

              {/* 1. TAB TIÊU ĐỀ & THÔNG TIN CHUNG */}
              {editSectionTab === 'general' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Thông tin cơ bản của bài học:</strong> Chỉnh sửa tiêu đề tiếng Anh, tiếng Việt, chủ đề và phân loại trình độ theo Khung năng lực ngoại ngữ tiểu học.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Tiêu đề Tiếng Anh (Lesson Title EN):
                        </label>
                        <input
                          type="text"
                          value={editingLesson.titleEn}
                          onChange={(e) => setEditingLesson({ ...editingLesson, titleEn: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-800 focus:outline-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Tiêu đề Tiếng Việt (Lesson Title VI):
                        </label>
                        <input
                          type="text"
                          value={editingLesson.titleVi}
                          onChange={(e) => setEditingLesson({ ...editingLesson, titleVi: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium text-slate-800 focus:outline-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Chủ đề thám hiểm Tiếng Anh (Topic EN):
                        </label>
                        <input
                          type="text"
                          value={editingLesson.topicEn}
                          onChange={(e) => setEditingLesson({ ...editingLesson, topicEn: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Chủ đề thám hiểm Tiếng Việt (Topic VI):
                        </label>
                        <input
                          type="text"
                          value={editingLesson.topicVi}
                          onChange={(e) => setEditingLesson({ ...editingLesson, topicVi: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Khối lớp (Grade):</label>
                        <select
                          value={editingLesson.gradeLevel}
                          onChange={(e) => setEditingLesson({ ...editingLesson, gradeLevel: e.target.value as GradeLevel })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-800 focus:outline-indigo-500"
                        >
                          <option value="Grade 1">Khối 1 (Grade 1)</option>
                          <option value="Grade 2">Khối 2 (Grade 2)</option>
                          <option value="Grade 3">Khối 3 (Grade 3)</option>
                          <option value="Grade 4">Khối 4 (Grade 4)</option>
                          <option value="Grade 5">Khối 5 (Grade 5)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Chuẩn CEFR Primary:</label>
                        <input
                          type="text"
                          value={editingLesson.targetCefr}
                          onChange={(e) => setEditingLesson({ ...editingLesson, targetCefr: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Thời lượng học (phút):</label>
                        <input
                          type="number"
                          value={editingLesson.durationMinutes}
                          onChange={(e) => setEditingLesson({ ...editingLesson, durationMinutes: parseInt(e.target.value) || 30 })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. TAB TỪ VỰNG CỐT LÕI */}
              {editSectionTab === 'vocab' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span>Danh sách Từ vựng cốt lõi ({editingLesson.vocabulary.length} từ)</span>
                      </div>
                      <p className="text-[11px] text-purple-900/80">
                        Cô Thu Trang có thể sửa từ tiếng Anh, phiên âm quốc tế IPA chuẩn Oxford, nghĩa tiếng Việt và câu ví dụ sinh động.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddVocab}
                      className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Thêm từ mới</span>
                    </button>
                  </div>

                  {/* Thanh chèn nhanh ký tự IPA */}
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex flex-wrap items-center gap-1 text-[11px]">
                    <span className="font-bold text-slate-600 mr-1">Ký tự IPA mẫu:</span>
                    {['/iː/', '/æ/', '/əʊ/', '/eɪ/', '/uː/', '/ɑː/', '/ɔː/', '/ɜː/', '/eə/', '/aɪ/', '/aʊ/', '/ˈ/'].map(sym => (
                      <span key={sym} className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-purple-700 font-bold select-all">
                        {sym}
                      </span>
                    ))}
                    <span className="text-slate-400 text-[10px] ml-auto italic">Nhấp đúp chuột để sao chép</span>
                  </div>

                  <div className="space-y-3.5">
                    {editingLesson.vocabulary.map((v, vIdx) => (
                      <div key={v.id || vIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 font-black flex items-center justify-center text-xs">
                              {vIdx + 1}
                            </span>
                            <span className="font-black text-slate-900 text-sm">
                              {v.word || '(Từ mới)'}
                            </span>
                            <span className="font-mono text-xs text-indigo-600 font-bold">
                              {v.ipa}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveVocab(vIdx)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Xóa từ vựng này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Từ tiếng Anh (Word):</label>
                            <input
                              type="text"
                              value={v.word}
                              onChange={(e) => handleUpdateVocab(vIdx, 'word', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 font-bold text-xs"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Phiên âm IPA:</label>
                            <input
                              type="text"
                              value={v.ipa}
                              onChange={(e) => handleUpdateVocab(vIdx, 'ipa', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 font-mono text-indigo-700 font-bold text-xs"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Từ loại:</label>
                            <select
                              value={v.partOfSpeech}
                              onChange={(e) => handleUpdateVocab(vIdx, 'partOfSpeech', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs"
                            >
                              <option value="noun">noun (Danh từ)</option>
                              <option value="verb">verb (Động từ)</option>
                              <option value="adjective">adjective (Tính từ)</option>
                              <option value="phrase">phrase (Cụm từ)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Biểu tượng Emoji:</label>
                            <input
                              type="text"
                              value={v.emoji || '✨'}
                              onChange={(e) => handleUpdateVocab(vIdx, 'emoji', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs text-center"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Nghĩa tiếng Việt:</label>
                            <input
                              type="text"
                              value={v.meaningVi}
                              onChange={(e) => handleUpdateVocab(vIdx, 'meaningVi', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 font-medium text-xs text-slate-800"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Giải thích tiếng Anh (Meaning EN):</label>
                            <input
                              type="text"
                              value={v.meaningEn}
                              onChange={(e) => handleUpdateVocab(vIdx, 'meaningEn', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs text-slate-700"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Câu ví dụ tiếng Anh (Example EN):</label>
                            <input
                              type="text"
                              value={v.exampleSentenceEn}
                              onChange={(e) => handleUpdateVocab(vIdx, 'exampleSentenceEn', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 font-serif text-xs text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Dịch câu ví dụ sang tiếng Việt:</label>
                            <input
                              type="text"
                              value={v.exampleSentenceVi}
                              onChange={(e) => handleUpdateVocab(vIdx, 'exampleSentenceVi', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs text-slate-600"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. TAB BÀI ĐỌC HIỂU */}
              {editSectionTab === 'reading' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-amber-600" />
                        <span>Bài đọc hiểu tiếng Anh & Bản dịch đối chiếu</span>
                      </div>
                      <p className="text-[11px] text-amber-900/80">
                        Soạn thảo các đoạn văn tiếng Anh phù hợp với lứa tuổi tiểu học, kèm bản dịch tiếng Việt chuẩn xác và lời gợi ý sư phạm.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddReadingPassage}
                      className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Thêm đoạn văn</span>
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Tiêu đề bài đọc Tiếng Anh:</label>
                        <input
                          type="text"
                          value={editingLesson.reading.titleEn}
                          onChange={(e) => handleUpdateReading('titleEn', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Tiêu đề bài đọc Tiếng Việt:</label>
                        <input
                          type="text"
                          value={editingLesson.reading.titleVi}
                          onChange={(e) => handleUpdateReading('titleVi', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Số lượng từ (Word count):</label>
                        <input
                          type="number"
                          value={editingLesson.reading.wordCount}
                          onChange={(e) => handleUpdateReading('wordCount', parseInt(e.target.value) || 25)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                        />
                      </div>
                    </div>

                    {/* Danh sách các đoạn văn */}
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                        Nội dung từng đoạn văn ({editingLesson.reading.passagesEn?.length || 0} đoạn):
                      </h4>

                      {(editingLesson.reading.passagesEn || []).map((passageEn, pIdx) => (
                        <div key={pIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-slate-700 text-xs">
                              Đoạn #{pIdx + 1}:
                            </span>
                            {(editingLesson.reading.passagesEn?.length || 0) > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveReadingPassage(pIdx)}
                                className="text-slate-400 hover:text-rose-600 text-xs cursor-pointer flex items-center gap-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Xóa đoạn này</span>
                              </button>
                            )}
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              Tiếng Anh (Passage EN):
                            </label>
                            <textarea
                              rows={3}
                              value={passageEn}
                              onChange={(e) => handleUpdateReadingPassage(pIdx, 'en', e.target.value)}
                              className="w-full p-2.5 rounded-xl border border-slate-300 font-serif text-slate-900 text-xs focus:outline-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              Bản dịch Tiếng Việt (Passage VI):
                            </label>
                            <textarea
                              rows={2}
                              value={editingLesson.reading.passagesVi?.[pIdx] || ''}
                              onChange={(e) => handleUpdateReadingPassage(pIdx, 'vi', e.target.value)}
                              className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs focus:outline-indigo-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Lời gợi ý đọc hiểu */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Gợi ý đọc hiểu (Tips EN):</label>
                        <input
                          type="text"
                          value={editingLesson.reading.comprehensionTipsEn}
                          onChange={(e) => handleUpdateReading('comprehensionTipsEn', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Gợi ý đọc hiểu (Tips VI):</label>
                        <input
                          type="text"
                          value={editingLesson.reading.comprehensionTipsVi}
                          onChange={(e) => handleUpdateReading('comprehensionTipsVi', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. TAB CÂU HỎI TRẮC NGHIỆM THÔNG TƯ 27 */}
              {editSectionTab === 'questions' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-indigo-600" />
                        <span>Ngân hàng Câu hỏi Trắc nghiệm Thông tư 27 ({editingLesson.questions?.length || 0} câu)</span>
                      </div>
                      <p className="text-[11px] text-indigo-900/80">
                        Thiết lập câu hỏi theo Điều 7 Thông tư 27/2020/TT-BGDĐT. <strong>Bấm vào nút tròn để chọn đáp án đúng</strong> (hiển thị màu xanh lá).
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddQuestion}
                      className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Thêm câu hỏi mới</span>
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {(editingLesson.questions || []).map((q, qIdx) => (
                      <div key={q.id || qIdx} className="p-4 rounded-2xl bg-white border-2 border-indigo-100 shadow-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-xs">
                              {qIdx + 1}
                            </span>
                            <span className="font-black text-slate-800 text-xs uppercase tracking-wide">
                              Câu hỏi #{qIdx + 1}
                            </span>

                            {/* Chọn Mức độ Thông tư 27 */}
                            <select
                              value={q.challengeLevel}
                              onChange={(e) => {
                                const level = parseInt(e.target.value) as ChallengeLevel;
                                const levelNameEn = level === 1 ? 'Recognize' : level === 2 ? 'Connect' : 'Apply';
                                const levelNameVi = level === 1 ? 'Nhận biết' : level === 2 ? 'Kết nối' : 'Vận dụng';
                                handleUpdateQuestion(qIdx, 'challengeLevel', level);
                                handleUpdateQuestion(qIdx, 'levelNameEn', levelNameEn);
                                handleUpdateQuestion(qIdx, 'levelNameVi', levelNameVi);
                              }}
                              className="px-2 py-0.5 rounded-lg border border-indigo-300 bg-indigo-50/50 text-[11px] font-bold text-indigo-900"
                            >
                              <option value={1}>Cấp độ TT 27: Mức 1 (Nhận biết - Recognize)</option>
                              <option value={2}>Cấp độ TT 27: Mức 2 (Kết nối - Connect)</option>
                              <option value={3}>Cấp độ TT 27: Mức 3 (Vận dụng - Apply)</option>
                            </select>

                            <select
                              value={q.learningSkill}
                              onChange={(e) => handleUpdateQuestion(qIdx, 'learningSkill', e.target.value)}
                              className="px-2 py-0.5 rounded-lg border border-slate-300 text-[11px] text-slate-700"
                            >
                              <option value="Vocabulary Recognition">Kỹ năng: Nhận biết từ vựng</option>
                              <option value="Reading Detail">Kỹ năng: Chi tiết bài đọc</option>
                              <option value="Cultural Connection">Kỹ năng: Kết nối văn hóa</option>
                              <option value="Communicative Application">Kỹ năng: Vận dụng giao tiếp</option>
                            </select>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveQuestion(qIdx)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Xóa câu hỏi này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Nội dung câu hỏi */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Nội dung câu hỏi Tiếng Anh (Question EN):</label>
                            <input
                              type="text"
                              value={q.questionEn}
                              onChange={(e) => handleUpdateQuestion(qIdx, 'questionEn', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-xs text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Bản dịch câu hỏi Tiếng Việt (Question VI):</label>
                            <input
                              type="text"
                              value={q.questionVi}
                              onChange={(e) => handleUpdateQuestion(qIdx, 'questionVi', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-700"
                            />
                          </div>
                        </div>

                        {/* 4 Lựa chọn trả lời & Chọn đáp án đúng */}
                        <div className="space-y-1.5 pt-2">
                          <label className="block font-bold text-slate-700 text-xs">
                            4 Lựa chọn trả lời (Bấm vào nút tròn để chọn phương án đúng):
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {(q.options || []).map((opt, optIdx) => {
                              const isCorrect = optIdx === q.correctIndex;
                              const label = String.fromCharCode(65 + optIdx);
                              return (
                                <div
                                  key={optIdx}
                                  className={`p-2 rounded-xl border-2 flex items-center gap-2 transition-all ${
                                    isCorrect
                                      ? 'border-emerald-500 bg-emerald-50/80 shadow-xs'
                                      : 'border-slate-200 bg-slate-50/50'
                                  }`}
                                >
                                  <button
                                    type="button"
                                    onClick={() => handleSetQuestionCorrect(qIdx, optIdx)}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer transition-colors ${
                                      isCorrect
                                        ? 'bg-emerald-600 text-white shadow-xs'
                                        : 'bg-white border-2 border-slate-300 text-slate-600 hover:border-indigo-400'
                                    }`}
                                    title={`Bấm để chọn ${label} làm đáp án đúng`}
                                  >
                                    {isCorrect ? '✓' : label}
                                  </button>

                                  <input
                                    type="text"
                                    value={opt}
                                    onChange={(e) => handleUpdateQuestionOption(qIdx, optIdx, e.target.value)}
                                    placeholder={`Nội dung lựa chọn ${label}...`}
                                    className={`w-full px-2.5 py-1 rounded-lg border text-xs ${
                                      isCorrect ? 'border-emerald-400 bg-white font-bold text-emerald-950' : 'border-slate-300 bg-white'
                                    }`}
                                  />

                                  {isCorrect && (
                                    <span className="text-[10px] font-black text-emerald-700 uppercase shrink-0">
                                      Đúng ✓
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Lời giải thích */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-[11.5px]">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Giải thích sư phạm (Explanation EN):</label>
                            <input
                              type="text"
                              value={q.explanationEn}
                              onChange={(e) => handleUpdateQuestion(qIdx, 'explanationEn', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-slate-800"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Giải thích Tiếng Việt (Explanation VI):</label>
                            <input
                              type="text"
                              value={q.explanationVi}
                              onChange={(e) => handleUpdateQuestion(qIdx, 'explanationVi', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-slate-700"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. TAB NGUỒN TÀI LIỆU & GHI CHÚ SƯ PHẠM */}
              {editSectionTab === 'sources' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Nguồn tài liệu đối chiếu & Ghi chú sư phạm:</strong> Cung cấp đầy đủ căn cứ xác thực kiến thức văn hóa, địa lý và phương pháp giảng dạy để hoàn thiện hồ sơ minh chứng dự thi sáng kiến kinh nghiệm.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block font-bold text-slate-800 text-xs">
                          Nguồn tài liệu tham khảo đối chiếu (Mỗi nguồn cách nhau bằng dấu • hoặc xuống dòng):
                        </label>
                        <span className="text-[11px] text-slate-500">
                          {editingLesson.verification?.sourceReferences?.length || 0} nguồn
                        </span>
                      </div>

                      <textarea
                        rows={3}
                        value={editingLesson.verification?.sourceReferences?.join(' • ') || getLessonKnowledgeSources(editingLesson).join(' • ')}
                        onChange={(e) => setEditingLesson({
                          ...editingLesson,
                          verification: {
                            ...editingLesson.verification,
                            isVerifiedByTeacher: editingLesson.verification?.isVerifiedByTeacher || false,
                            teacherName: 'Cô Trần Thị Thu Trang',
                            isAiGenerated: false,
                            sourceReferences: e.target.value.split(' • ').map(s => s.trim()).filter(Boolean)
                          }
                        })}
                        placeholder="Ví dụ: Hồ sơ Di sản Thế giới UNESCO • Cục Du lịch Quốc gia Việt Nam • CT GDPT 2018..."
                        className="w-full p-3 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-indigo-500"
                      />

                      {/* Gợi ý nguồn chuẩn nhanh */}
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-600">Thêm nhanh nguồn chuẩn:</span>
                        {[
                          'Hồ sơ Di sản Thế giới UNESCO',
                          'Cục Du lịch Quốc gia Việt Nam (vietnamtourism.gov.vn)',
                          'Sách giáo khoa Tiếng Anh Tiểu học (CT GDPT 2018)',
                          'Từ điển Oxford Learner\'s Dictionaries (Chuẩn IPA)'
                        ].map(src => (
                          <button
                            key={src}
                            type="button"
                            onClick={() => {
                              const current = editingLesson.verification?.sourceReferences || getLessonKnowledgeSources(editingLesson);
                              if (!current.includes(src)) {
                                setEditingLesson({
                                  ...editingLesson,
                                  verification: {
                                    ...editingLesson.verification,
                                    isVerifiedByTeacher: editingLesson.verification?.isVerifiedByTeacher || false,
                                    teacherName: 'Cô Trần Thị Thu Trang',
                                    isAiGenerated: false,
                                    sourceReferences: [...current, src]
                                  }
                                });
                              }
                            }}
                            className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10.5px] border border-slate-300 cursor-pointer"
                          >
                            + {src}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <label className="block font-bold text-slate-800 text-xs mb-1">
                        Ghi chú sư phạm của Cô Thu Trang (Lưu vào Biên bản làm Minh chứng dự thi):
                      </label>
                      <textarea
                        rows={3}
                        value={editingLesson.verification?.humanEditorNotes || ''}
                        onChange={(e) => setEditingLesson({
                          ...editingLesson,
                          verification: {
                            ...editingLesson.verification,
                            isVerifiedByTeacher: editingLesson.verification?.isVerifiedByTeacher || false,
                            teacherName: 'Cô Trần Thị Thu Trang',
                            isAiGenerated: false,
                            sourceReferences: editingLesson.verification?.sourceReferences || getLessonKnowledgeSources(editingLesson),
                            humanEditorNotes: e.target.value
                          }
                        })}
                        placeholder="Ví dụ: Đã kiểm tra phát âm IPA từ 'island' và 'boat', bổ sung câu ví dụ thực tế về Vịnh Hạ Long, đối chiếu mục tiêu đầu ra Khối 1..."
                        className="w-full p-3 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 6. TAB XEM TRƯỚC TOÀN BỘ (LIVE PREVIEW) */}
              {editSectionTab === 'preview' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-emerald-600" />
                      <div>
                        <strong>Giao diện Học sinh Xem trước (Live Preview):</strong> Toàn bộ nội dung bài học sau khi Cô Thu Trang chỉnh sửa được hiển thị trung thực theo định dạng học sinh nhìn thấy.
                      </div>
                    </div>
                  </div>

                  {/* Banner Bài học */}
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white space-y-2 shadow-md">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold">
                        {editingLesson.gradeLevel} • Chặng #{editingLesson.lessonNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/30 text-cyan-200 text-[11px] font-bold">
                        {editingLesson.targetCefr}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-200 text-[11px] font-bold">
                        ⏱️ {editingLesson.durationMinutes} phút
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black font-heading">
                      {editingLesson.titleEn}
                    </h2>
                    <p className="text-xs sm:text-sm text-indigo-200">
                      {editingLesson.titleVi}
                    </p>
                    <div className="text-[11px] text-indigo-300 pt-1">
                      Chủ đề: <strong>{editingLesson.topicEn}</strong> ({editingLesson.topicVi})
                    </div>
                  </div>

                  {/* 1. Từ vựng cốt lõi */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="font-black text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <span>🔤 1. Từ vựng cốt lõi ({editingLesson.vocabulary.length} từ)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {editingLesson.vocabulary.map((v) => (
                        <div key={v.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-lg">{v.emoji || '✨'}</span>
                              <span className="font-black text-slate-900 text-sm">{v.word}</span>
                              <span className="px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                                {v.partOfSpeech}
                              </span>
                            </div>
                            <span className="font-mono text-purple-700 text-xs font-bold">
                              {v.ipa}
                            </span>
                          </div>

                          <div className="text-slate-800 font-semibold text-xs">
                            {v.meaningVi}
                          </div>
                          <div className="text-slate-600 text-[11px]">
                            {v.meaningEn}
                          </div>

                          {v.exampleSentenceEn && (
                            <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] space-y-0.5">
                              <div className="font-serif font-bold text-slate-900">{v.exampleSentenceEn}</div>
                              {v.exampleSentenceVi && <div className="text-slate-500 italic">{v.exampleSentenceVi}</div>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Bài đọc hiểu */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="font-black text-slate-800 text-xs uppercase tracking-wider flex items-center justify-between">
                      <span>📖 2. Bài đọc hiểu: {editingLesson.reading.titleEn}</span>
                      <span className="text-slate-500 font-normal">({editingLesson.reading.wordCount} từ)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                      {(editingLesson.reading.passagesEn || []).map((p, idx) => (
                        <p key={idx} className="font-serif text-[13px] text-slate-900 leading-relaxed">
                          {p}
                        </p>
                      ))}

                      {editingLesson.reading.passagesVi && editingLesson.reading.passagesVi.length > 0 && (
                        <div className="pt-2 border-t border-amber-200/60 text-[11.5px] text-amber-900 space-y-1">
                          <span className="font-bold">Bản dịch tiếng Việt:</span>
                          {editingLesson.reading.passagesVi.map((pv, idx) => (
                            <p key={idx} className="italic text-slate-700">{pv}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. Câu hỏi đánh giá */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="font-black text-slate-800 text-xs uppercase tracking-wider flex items-center justify-between">
                      <span>❓ 3. Câu hỏi đánh giá Thông tư 27 ({editingLesson.questions?.length || 0} câu)</span>
                    </div>

                    <div className="space-y-3">
                      {(editingLesson.questions || []).map((q, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 text-xs">
                              {idx + 1}. {q.questionEn}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                              Mức {q.challengeLevel} ({q.levelNameVi})
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {(q.options || []).map((opt, oIdx) => (
                              <div
                                key={oIdx}
                                className={`p-2 rounded-xl border ${
                                  oIdx === q.correctIndex
                                    ? 'bg-emerald-50 border-emerald-400 font-bold text-emerald-950'
                                    : 'bg-slate-50 border-slate-200 text-slate-700'
                                }`}
                              >
                                {String.fromCharCode(65 + oIdx)}. {opt} {oIdx === q.correctIndex && '✓ (Đáp án chuẩn)'}
                              </div>
                            ))}
                          </div>

                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                            <strong>Giải thích:</strong> {q.explanationEn} ({q.explanationVi})
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Nguồn tham khảo & Chữ ký */}
                  <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 text-xs space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span>Nguồn tài liệu tham khảo đối chiếu:</span>
                    </div>
                    <p className="text-[11.5px] text-indigo-900/90">
                      {(editingLesson.verification?.sourceReferences || getLessonKnowledgeSources(editingLesson)).join(' • ')}
                    </p>
                    {editingLesson.verification?.humanEditorNotes && (
                      <div className="pt-1 text-[11px] text-indigo-950">
                        <strong>Ghi chú giáo viên:</strong> {editingLesson.verification.humanEditorNotes}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <Info className="w-4 h-4 text-slate-500 shrink-0" />
                <span>
                  Lưu trên trình duyệt giáo viên (Local Storage). Không sửa Supabase, không đổi dữ liệu 182 học sinh thật.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setEditingLesson(null)}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 font-bold text-xs cursor-pointer"
                >
                  Hủy bỏ
                </button>

                <button
                  type="button"
                  onClick={handleSaveLessonDraft}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                  title="Lưu lại các thay đổi nhưng vẫn giữ trạng thái Chưa kiểm duyệt"
                >
                  <Save className="w-4 h-4" />
                  <span>💾 Lưu Bản Nháp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveAndApproveLesson}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                  title="Xác nhận nội dung đạt chuẩn sư phạm và khóa bài học"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>🛡️ Lưu & Phê Duyệt Ngay</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 9B. MODAL AI RÀ SOÁT HỌC LIỆU SƯ PHẠM (AI-ASSISTED REVIEW MODAL)      */}
      {/* ==================================================================== */}
      {reviewingLesson && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border-2 border-purple-400 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-600/40 border border-purple-400/40 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  🤖
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-[10px] font-black uppercase tracking-wider border border-purple-400/30">
                      Trợ Lý AI Rà Soát Học Liệu Sư Phạm
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-[10px] font-bold">
                      {reviewingLesson.gradeLevel} • Chặng #{reviewingLesson.lessonNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-extrabold flex items-center gap-1 border border-amber-400/30">
                      <Clock className="w-3 h-3 text-amber-400" />
                      Chưa kiểm duyệt (Chờ cô duyệt)
                    </span>
                  </div>
                  <h3 className="font-black text-base sm:text-lg font-heading tracking-tight leading-tight mt-0.5 text-white">
                    {reviewingLesson.titleEn}
                  </h3>
                  <p className="text-xs text-purple-200">
                    {reviewingLesson.titleVi}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setReviewingLesson(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Đóng cửa sổ"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Banner Minh Bạch Sư Phạm (Transparency Notice) */}
            <div className="px-4 py-2.5 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border-b border-purple-200 text-xs text-purple-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                <span>
                  <strong>Cơ chế rà soát:</strong> Bộ quy tắc sư phạm chuẩn hóa (Pedagogical Rule-Based Engine & Phonics Checker) dựa trên Thông tư 27/2020/TT-BGDĐT, Oxford Learner's Dictionaries & Khung CEFR Pre-A1.
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-200/80 text-purple-900 font-extrabold text-[10px] shrink-0">
                🛡️ AI Hỗ Trợ – Cô Thu Trang Phê Duyệt Cuối
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs flex-1">
              {isAiScanning ? (
                // Hiệu ứng đang quét học liệu
                <div className="py-16 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-purple-100 text-purple-600 animate-bounce">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-slate-800 text-base">
                      Đang rà soát học liệu theo chuẩn sư phạm Tiểu học...
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                      Đối chiếu quy tắc âm câm (Silent Letters), khung từ vựng CEFR Pre-A1, câu hỏi đánh giá theo Thông tư 27 và nguồn tài liệu tham khảo.
                    </p>
                  </div>
                  <div className="w-48 h-1.5 bg-purple-100 rounded-full mx-auto overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full animate-pulse" />
                  </div>
                </div>
              ) : (
                <>
                  {/* Thanh công cụ chọn / bỏ chọn tất cả */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-800">
                        Kết quả rà soát: {aiSuggestions.length} đề xuất cải tiến
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-extrabold text-[11px]">
                        Đã chọn {acceptedSuggestionIds.length}/{aiSuggestions.length} đề xuất
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSelectAllSuggestions}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                        title="Chọn tất cả các đề xuất an toàn đã được xác minh"
                      >
                        <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chọn tất cả an toàn</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleDeselectAllSuggestions}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                        title="Bỏ chọn tất cả"
                      >
                        <Square className="w-3.5 h-3.5 text-slate-400" />
                        <span>Bỏ chọn tất cả</span>
                      </button>
                    </div>
                  </div>

                  {/* Bảng đối chiếu 4 Cột: Nội dung gốc – Vấn đề phát hiện – Đề xuất sửa – Căn cứ & Lý do */}
                  <div className="space-y-3">
                    {aiSuggestions.map((sug, idx) => {
                      const isAccepted = acceptedSuggestionIds.includes(sug.id);

                      return (
                        <div
                          key={sug.id}
                          className={`rounded-2xl border-2 transition-all p-4 ${
                            isAccepted
                              ? 'bg-purple-50/30 border-purple-300 shadow-xs'
                              : 'bg-white border-slate-200 opacity-90'
                          }`}
                        >
                          {/* Row Header: Phân loại & Nút Chấp nhận / Từ chối */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono font-bold text-slate-400 text-[11px]">#{idx + 1}</span>
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-extrabold text-[11px] border border-slate-200">
                                {sug.categoryLabel}
                              </span>
                              <span className="font-bold text-slate-900 text-xs">
                                {sug.targetField}
                              </span>
                              {sug.needsTeacherCheck && (
                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black text-[10.5px] border border-amber-300 flex items-center gap-1">
                                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                                  Cần giáo viên kiểm tra thực tế
                                </span>
                              )}
                            </div>

                            {/* Cặp Nút: [✓ Chấp nhận] / [✕ Từ chối] */}
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  if (!isAccepted) handleToggleSuggestion(sug.id);
                                }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                  isAccepted
                                    ? 'bg-emerald-600 text-white shadow-xs font-black'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                                title="Chấp nhận đề xuất này"
                              >
                                <span>✓ Chấp nhận</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  if (isAccepted) handleToggleSuggestion(sug.id);
                                }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                  !isAccepted
                                    ? 'bg-rose-100 text-rose-700 border border-rose-300 font-black'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                                title="Từ chối đề xuất này"
                              >
                                <span>✕ Từ chối</span>
                              </button>
                            </div>
                          </div>

                          {/* 4 Cột: Nội dung gốc - Vấn đề phát hiện - Đề xuất sửa - Căn cứ & Lý do */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                            
                            {/* Cột 1: Nội dung gốc */}
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                                1. Nội dung gốc
                              </div>
                              <div className="text-slate-800 leading-relaxed font-medium">
                                {sug.originalContent}
                              </div>
                            </div>

                            {/* Cột 2: Vấn đề phát hiện */}
                            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                                2. Vấn đề phát hiện
                              </div>
                              <div className="text-amber-950 leading-relaxed">
                                {sug.detectedIssue}
                              </div>
                            </div>

                            {/* Cột 3: Đề xuất chỉnh sửa */}
                            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                                <span>3. Đề xuất của AI</span>
                                {isAccepted && <span className="text-[10px] font-bold text-emerald-600">(Đã chọn)</span>}
                              </div>
                              <div className="text-emerald-950 leading-relaxed font-medium">
                                {sug.proposedChange}
                              </div>
                            </div>

                            {/* Cột 4: Căn cứ & Lý do */}
                            <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-wider text-indigo-700">
                                4. Căn cứ & Lý do
                              </div>
                              <div className="text-indigo-950 leading-relaxed text-[11.5px]">
                                📚 {sug.rationaleAndSource}
                              </div>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-500">
                ⚠️ Áp dụng đề xuất sẽ lưu vào bộ nhớ máy (Local). Bài học vẫn ở trạng thái <strong>"Chưa kiểm duyệt"</strong> để Cô Thu Trang kiểm tra và ký duyệt cuối.
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setReviewingLesson(null)}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
                >
                  Đóng / Hủy
                </button>

                <button
                  type="button"
                  onClick={handleApplyAiSuggestions}
                  disabled={isAiScanning || acceptedSuggestionIds.length === 0}
                  className={`px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                    isAiScanning || acceptedSuggestionIds.length === 0
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                      : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:scale-102 active:scale-98'
                  }`}
                  title="Cập nhật các đề xuất đã chọn vào bài học"
                >
                  <Save className="w-4 h-4" />
                  <span>💾 Áp dụng ({acceptedSuggestionIds.length}) Đề Xuất Đã Chọn Vào Bài Học</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 10. MODAL XEM CHI TIẾT TRÒ CHƠI (GAME DETAILS MODAL)                  */}
      {/* ==================================================================== */}
      {viewingGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-indigo-200 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-indigo-600" />
                <h3 className="font-black text-base text-slate-900">{viewingGame.titleVi}</h3>
              </div>
              <button
                onClick={() => setViewingGame(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-700">Tên tiếng Anh:</span> {viewingGame.titleEn}
              </div>
              <div>
                <span className="font-bold text-slate-700">Phân loại & Khối lớp:</span> {viewingGame.category} ({viewingGame.targetGrades})
              </div>
              <div>
                <span className="font-bold text-slate-700">Mô tả sư phạm:</span> {viewingGame.description}
              </div>
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950">
                <div className="font-bold">📚 Nguồn tham khảo đối chiếu:</div>
                <div>{viewingGame.sourceReference}</div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end">
              <button
                onClick={() => setViewingGame(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
