import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// Mock localStorage
const store = new Map();
globalThis.localStorage = {
  getItem: (key) => store.get(key) || null,
  setItem: (key, val) => store.set(key, String(val)),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear()
};

if (!globalThis.crypto?.subtle) {
  globalThis.crypto = crypto.webcrypto;
}

import {
  parseVideoUrl,
  getEducationalVideos,
  addEducationalVideo,
  updateEducationalVideo,
  deleteEducationalVideo,
  setVideoStatus,
  saveStudentVideoProgress,
  getStudentVideoProgressMap
} from '../src/lib/videoAcademyService.ts';

import { INITIAL_VIDEOS } from '../src/data/initialVideos.ts';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    failed++;
  }
}

async function runVideoAcademyTests() {
  console.log('===============================================================');
  console.log('🎬 VIETDISCOVERY VIDEO LEARNING ACADEMY TEST SUITE');
  console.log('===============================================================');

  console.log('\n📌 1. YOUTUBE & MULTI-SOURCE URL PARSER & PRIVACY SANITIZATION');
  await test('Parse standard YouTube watch URL to youtube-nocookie embed', () => {
    const res = parseVideoUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    assert(res.isValid, 'Should be valid');
    assert(res.platform === 'youtube', 'Platform should be youtube');
    assert(res.videoId === 'dQw4w9WgXcQ', `VideoId mismatch: ${res.videoId}`);
    assert(res.embedUrl.includes('youtube-nocookie.com/embed/dQw4w9WgXcQ'), 'Must use youtube-nocookie');
    assert(res.embedUrl.includes('rel=0'), 'Must disable external recommendations (rel=0)');
    assert(!res.embedUrl.includes('autoplay=1'), 'Never autoplay videos');
  });

  await test('Parse YouTube youtu.be short URL', () => {
    const res = parseVideoUrl('https://youtu.be/kYJzX2eQ9h4');
    assert(res.isValid, 'Should be valid');
    assert(res.videoId === 'kYJzX2eQ9h4', `VideoId: ${res.videoId}`);
    assert(res.thumbnailUrl === 'https://img.youtube.com/vi/kYJzX2eQ9h4/hqdefault.jpg', 'Thumbnail check');
  });

  await test('Parse YouTube Shorts URL', () => {
    const res = parseVideoUrl('https://www.youtube.com/shorts/3n8e6wY8n74');
    assert(res.isValid, 'Should be valid');
    assert(res.videoId === '3n8e6wY8n74', `VideoId: ${res.videoId}`);
  });

  await test('Parse direct MP4 stream URL', () => {
    const res = parseVideoUrl('https://cdn.vietdiscovery.edu.vn/videos/halong_bay.mp4');
    assert(res.isValid, 'Should be valid');
    assert(res.platform === 'direct', 'Platform should be direct');
    assert(res.embedUrl === 'https://cdn.vietdiscovery.edu.vn/videos/halong_bay.mp4', 'Embed URL');
  });

  await test('Reject invalid or broken URLs with friendly error', () => {
    const res = parseVideoUrl('not-a-valid-url-at-all');
    assert(!res.isValid, 'Should be invalid');
    assert(res.errorMessage, 'Must provide friendly error message');
  });

  console.log('\n📌 2. CURRICULUM-ALIGNED VERIFIED VIDEO DATASET');
  await test('INITIAL_VIDEOS contains verified videos for Grade 1 through 5', () => {
    const grades = new Set(INITIAL_VIDEOS.map(v => v.grade));
    assert(grades.has(1), 'Must have Grade 1');
    assert(grades.has(2), 'Must have Grade 2');
    assert(grades.has(3), 'Must have Grade 3');
    assert(grades.has(4), 'Must have Grade 4');
    assert(grades.has(5), 'Must have Grade 5');
  });

  await test('Supports all 3 video types: teacher_youtube, curated_youtube, ai_generated', () => {
    const types = new Set(INITIAL_VIDEOS.map(v => v.sourceType));
    assert(types.has('teacher_youtube'), 'Must support teacher_youtube');
    assert(types.has('curated_youtube'), 'Must support curated_youtube');
    assert(types.has('ai_generated'), 'Must support ai_generated');
  });

  await test('Every video has bilingual descriptions and verified questions', () => {
    for (const v of INITIAL_VIDEOS) {
      assert(v.titleEn && v.titleEn.length > 3, `TitleEn missing for ${v.id}`);
      assert(v.titleVi && v.titleVi.length > 3, `TitleVi missing for ${v.id}`);
      assert(v.descriptionEn && v.descriptionEn.length > 10, `DescEn missing for ${v.id}`);
      assert(v.descriptionVi && v.descriptionVi.length > 10, `DescVi missing for ${v.id}`);
      assert(v.questions && v.questions.length >= 1, `Questions missing for ${v.id}`);
      for (const q of v.questions) {
        assert(q.questionEn, `QuestionEn missing in ${v.id}`);
        assert(q.questionVi, `QuestionVi missing in ${v.id}`);
        assert(q.options.length >= 2, `Options < 2 in ${v.id}`);
        assert(q.correctIndex >= 0 && q.correctIndex < q.options.length, `CorrectIndex out of bounds in ${v.id}`);
      }
    }
  });

  await test('Teacher-created videos are correctly prioritized and flagged', () => {
    const teacherVids = INITIAL_VIDEOS.filter(v => v.isTeacherCreated);
    assert(teacherVids.length >= 5, `Expected at least 5 teacher-created videos, got ${teacherVids.length}`);
    for (const tv of teacherVids) {
      assert(tv.sourceType === 'teacher_youtube', 'Teacher vids must be teacher_youtube');
      assert(tv.channelOrAuthor.includes('Trang'), 'Teacher vids must attribute to Ms. Trang');
    }
  });

  console.log('\n📌 3. TEACHER REVIEW GATE & APPROVAL WORKFLOW');
  await test('Student view only returns approved videos (hides unapproved drafts)', async () => {
    // Add an unapproved draft video
    const draftRes = await addEducationalVideo({
      videoUrl: 'https://www.youtube.com/watch?v=draft123456',
      titleEn: 'Pending Draft Lesson',
      titleVi: 'Bài học chờ kiểm duyệt',
      grade: 3,
      status: 'draft'
    });
    assert(draftRes.success, 'Draft video should be added');

    // Fetch for student (isStaffViewer: false)
    const studentVideos = await getEducationalVideos(undefined, false);
    const foundInStudentView = studentVideos.find(v => v.id === draftRes.video.id);
    assert(!foundInStudentView, 'Unapproved draft video MUST NOT be visible to students');

    // Fetch for teacher (isStaffViewer: true)
    const teacherVideos = await getEducationalVideos(undefined, true);
    const foundInTeacherView = teacherVideos.find(v => v.id === draftRes.video.id);
    assert(foundInTeacherView, 'Teacher MUST be able to view and review draft videos');
    assert(foundInTeacherView.status === 'draft', 'Status should be draft');

    // Teacher approves the video
    await setVideoStatus(draftRes.video.id, 'approved');
    const updatedStudentVideos = await getEducationalVideos(undefined, false);
    const foundAfterApproval = updatedStudentVideos.find(v => v.id === draftRes.video.id);
    assert(foundAfterApproval, 'Video must become visible to students once approved by teacher');

    // Clean up test video
    await deleteEducationalVideo(draftRes.video.id);
  });

  console.log('\n📌 4. ADD & REMOVE VIDEO BY URL');
  await test('Teacher can add a new video by URL with auto embed sanitization', async () => {
    const res = await addEducationalVideo({
      videoUrl: 'https://youtu.be/customVid99',
      titleEn: 'Custom Da Nang Tour',
      titleVi: 'Chuyến tham quan Đà Nẵng',
      grade: 4,
      sourceType: 'teacher_youtube',
      channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
      topic: 'Bridges & Coast',
      difficulty: 'A1 Elementary',
      descriptionEn: 'Discover the bridges of Da Nang city.',
      descriptionVi: 'Khám phá những cây cầu ấn tượng tại Đà Nẵng.',
      durationMinutes: 6,
      status: 'approved'
    });

    assert(res.success, `Add video failed: ${res.error}`);
    assert(res.video.embedUrl.includes('youtube-nocookie.com/embed/customVid99'), 'Sanitized embed');
    assert(res.video.thumbnailUrl === 'https://img.youtube.com/vi/customVid99/hqdefault.jpg', 'Thumbnail');

    // Verify it is in the list
    const list = await getEducationalVideos(undefined, true);
    const found = list.find(v => v.id === res.video.id);
    assert(found, 'Added video should be in list');

    // Teacher can delete video
    await deleteEducationalVideo(res.video.id);
    const afterDelete = await getEducationalVideos(undefined, true);
    assert(!afterDelete.find(v => v.id === res.video.id), 'Deleted video should no longer exist');
  });

  console.log('\n📌 5. FILTERING, SEARCH & GRADE DIFFERENTIATION');
  await test('Filter videos by Grade (e.g. Grade 4)', async () => {
    const g4Videos = await getEducationalVideos({ grade: 4 }, false);
    assert(g4Videos.length > 0, 'Should find Grade 4 videos');
    for (const v of g4Videos) {
      assert(v.grade === 4, `Expected Grade 4, got ${v.grade}`);
    }
  });

  await test('Filter videos by Source Type (teacher_youtube)', async () => {
    const teacherVids = await getEducationalVideos({ sourceType: 'teacher_youtube' }, false);
    assert(teacherVids.length > 0, 'Should find teacher videos');
    for (const v of teacherVids) {
      assert(v.sourceType === 'teacher_youtube', 'SourceType mismatch');
    }
  });

  await test('Search videos by keyword (e.g. "Ha Long")', async () => {
    const searchVids = await getEducationalVideos({ searchQuery: 'Ha Long' }, false);
    assert(searchVids.length > 0, 'Should match Ha Long videos');
    for (const v of searchVids) {
      const match = v.titleEn.includes('Ha Long') || v.titleVi.includes('Hạ Long') || v.topic.includes('Ha Long');
      assert(match, `Video does not match search: ${v.titleEn}`);
    }
  });

  console.log('\n📌 6. STUDENT PROGRESS TRACKING & STAR REWARDS');
  await test('Save student video quiz progress and award stars', async () => {
    const sampleProgress = {
      videoId: 'vid-g4-01',
      studentId: '168',
      studentName: 'Lê Hoàng Khôi',
      classCode: '5.6',
      watched: true,
      quizScore: 100,
      quizTotal: 2,
      attempts: 1,
      starsEarned: 25,
      completedAt: new Date().toISOString()
    };

    await saveStudentVideoProgress(sampleProgress);

    const progressMap = getStudentVideoProgressMap();
    const saved = progressMap['vid-g4-01'];
    assert(saved, 'Progress must be saved in map');
    assert(saved.watched === true, 'Watched should be true');
    assert(saved.quizScore === 100, 'Score should be 100');
    assert(saved.starsEarned === 25, 'Stars should be 25');
  });

  console.log('\n===============================================================');
  console.log(`📊 VIDEO ACADEMY TEST RESULTS: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
  console.log('===============================================================');

  if (failed > 0) process.exit(1);
}

runVideoAcademyTests();
