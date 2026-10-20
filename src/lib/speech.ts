// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — CENTRAL SPEECH & JENNY NEURAL AUDIO ENGINE
// Dual-Engine: 1) Studio Pre-rendered Microsoft Jenny Neural MP3 Cache (0ms latency, 0 VNĐ)
//              2) Intelligent General American SpeechSynthesis Fallback
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary (Grades 1–5)
// ==============================================================================

import { backgroundMusic } from './backgroundMusic';
import { getJennyAudioUrl, normalizeAudioKey } from '../data/jennyAudioRegistry';

export interface SpeechPlayOptions {
  slow?: boolean;
  pitch?: number;
  rate?: number;
  lang?: 'en-US' | 'en-GB';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (error: any) => void;
}

let cachedVoices: SpeechSynthesisVoice[] = [];
let currentActiveAudio: HTMLAudioElement | null = null;

// Ensure voices are loaded asynchronously across Chrome, Safari, Edge, Android
export const getAvailableVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const immediate = window.speechSynthesis.getVoices();
    if (immediate.length > 0) {
      cachedVoices = immediate;
      resolve(immediate);
      return;
    }

    const handleVoicesChanged = () => {
      const updated = window.speechSynthesis.getVoices();
      if (updated.length > 0) {
        cachedVoices = updated;
        window.speechSynthesis.onvoiceschanged = null;
        resolve(updated);
      }
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    // Fallback timeout in case onvoiceschanged does not fire
    setTimeout(() => {
      const fallback = window.speechSynthesis.getVoices();
      cachedVoices = fallback;
      resolve(fallback);
    }, 400);
  });
};

// Dictionary of common Vietnamese place names and cultural terms phoneticized for clear General American speech synthesis
export const VIETNAMESE_TO_AMERICAN_PHONETICS: Record<string, string> = {
  'Hạ Long': 'Hah Long',
  'Ha Long': 'Hah Long',
  'Hà Nội': 'Hah Noy',
  'Hanoi': 'Hah Noy',
  'Hội An': 'Hoy Ahn',
  'Hoi An': 'Hoy Ahn',
  'Đà Nẵng': 'Dah Nahng',
  'Da Nang': 'Dah Nahng',
  'Huế': 'Hway',
  'Hue': 'Hway',
  'Hồ Hoàn Kiếm': 'Hwan Kee-em Lake',
  'Hoan Kiem': 'Hwan Kee-em',
  'Tháp Rùa': 'Turtle Tower',
  'Nha Trang': 'Nyah Trang',
  'Phú Quốc': 'Foo Kwok',
  'Phu Quoc': 'Foo Kwok',
  'Đà Lạt': 'Dah Laht',
  'Da Lat': 'Dah Laht',
  'Sa Pa': 'Sah Pah',
  'Sapa': 'Sah Pah',
  'Fansipan': 'Fahn-see-pahn',
  'Tràng An': 'Chahng Ahn',
  'Trang An': 'Chahng Ahn',
  'Ninh Bình': 'Ning Bing',
  'Ninh Binh': 'Ning Bing',
  'Phong Nha': 'Fong Nyah',
  'Sơn Đoòng': 'Shon Doong',
  'Son Doong': 'Shon Doong',
  'Bà Nà': 'Bah Nah',
  'Ba Na': 'Bah Nah',
  'Mê Kông': 'May-kong',
  'Mekong': 'May-kong',
  'Cần Thơ': 'Kuhn Ter',
  'Can Tho': 'Kuhn Ter',
  'Bến Thành': 'Ben Tahn',
  'Ben Thanh': 'Ben Tahn',
  'Thăng Long': 'Tahng Long',
  'Thang Long': 'Tahng Long',
  'Văn Miếu': 'Temple of Literature',
  'Bánh mì': 'Bahn mee',
  'Banh mi': 'Bahn mee',
  'Phở': 'Fuh',
  'Pho': 'Fuh',
  'Áo dài': 'Ow zye',
  'Ao dai': 'Ow zye',
  'Cát Bà': 'Kaht Bah',
  'Cat Ba': 'Kaht Bah'
};

/**
 * Phonetically preprocess text for General American English speech synthesis.
 * Ensures Vietnamese landmarks and cultural terms are pronounced cleanly by American voices.
 */
export function normalizeForAmericanSpeech(text: string): string {
  if (!text) return '';
  let result = text;
  for (const [vietnamese, phonetic] of Object.entries(VIETNAMESE_TO_AMERICAN_PHONETICS)) {
    const regex = new RegExp(`\\b${vietnamese}\\b`, 'gi');
    result = result.replace(regex, phonetic);
  }
  return result;
}

// Select best natural General American English voice
export const selectBestEnglishVoice = async (preferredLang: 'en-US' | 'en-GB' = 'en-US'): Promise<SpeechSynthesisVoice | null> => {
  const voices = await getAvailableVoices();
  if (!voices.length) return null;

  // 1. Primary priority: High-quality General American (US) Child-friendly / Natural voices (Jenny Neural prioritized)
  if (preferredLang === 'en-US') {
    const americanPreferred = voices.find(v => {
      const isUs = v.lang.toLowerCase() === 'en-us' || v.lang.toLowerCase() === 'en_us';
      const name = v.name.toLowerCase();
      return isUs && (
        name.includes('jenny') || 
        name.includes('natural') || 
        name.includes('google us english') || 
        name.includes('samantha') || 
        name.includes('aria') || 
        name.includes('guy') || 
        name.includes('zira') ||
        name.includes('alex')
      );
    });
    if (americanPreferred) return americanPreferred;
  }

  // 2. High-quality Natural / Neural / Cloud English voices generally
  const naturalEnglish = voices.find(v => {
    const isEn = v.lang.toLowerCase().startsWith('en');
    const name = v.name.toLowerCase();
    return isEn && (
      name.includes('jenny') || 
      name.includes('natural') || 
      name.includes('google') || 
      name.includes('samantha') || 
      name.includes('aria') || 
      name.includes('guy') || 
      name.includes('karen') ||
      name.includes('daniel')
    );
  });
  if (naturalEnglish) return naturalEnglish;

  // 3. Exact language match (e.g., en-US or en-GB)
  const exactMatch = voices.find(v => v.lang.toLowerCase().replace('_', '-') === preferredLang.toLowerCase());
  if (exactMatch) return exactMatch;

  // 4. Any English voice
  const anyEnglish = voices.find(v => v.lang.toLowerCase().startsWith('en'));
  if (anyEnglish) return anyEnglish;

  // NEVER return a Vietnamese or non-English voice for English speech!
  return null;
};

/**
 * Fallback Web Speech API execution with strict General American voice selection
 */
const fallbackWebSpeech = async (
  cleanText: string,
  options: SpeechPlayOptions
): Promise<boolean> => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('[VietDiscovery Audio] Web Speech API is not supported on this device/browser.');
    options.onError?.(new Error('Trình duyệt không hỗ trợ Web Speech API.'));
    return false;
  }

  window.speechSynthesis.cancel();

  // Enforce General American (en-US)
  const targetLang = 'en-US';
  const voice = await selectBestEnglishVoice(targetLang);

  const spokenText = normalizeForAmericanSpeech(cleanText);

  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = targetLang;
  
  // Rate: Slow mode for Grade 1-2 or learners (0.75), Normal elementary friendly rate (0.88)
  if (options.slow) {
    utterance.rate = 0.75;
  } else if (options.rate) {
    utterance.rate = options.rate;
  } else {
    utterance.rate = 0.88;
  }

  utterance.pitch = options.pitch ?? 1.05;

  if (voice) {
    utterance.voice = voice;
  } else {
    console.warn(`[VietDiscovery Audio] Notice: Using system speech fallback for: "${cleanText.substring(0, 30)}..."`);
  }

  // Automatically duck background music so English speech is crystal clear
  backgroundMusic.duck('speech');

  utterance.onstart = () => {
    backgroundMusic.duck('speech');
    options.onStart?.();
  };

  utterance.onend = () => {
    backgroundMusic.unduck('speech');
    options.onEnd?.();
  };

  utterance.onerror = (e) => {
    backgroundMusic.unduck('speech');
    if (e.error === 'canceled' || e.error === 'interrupted') return;
    console.error('[VietDiscovery Audio] Speech synthesis error:', e);
    options.onError?.(e);
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

/**
 * Play English speech with primary Microsoft Jenny Neural static audio lookup,
 * falling back gracefully to American SpeechSynthesis if unmapped.
 */
export const playEnglishSpeech = async (
  text: string,
  options: SpeechPlayOptions = {}
): Promise<boolean> => {
  const cleanText = text.trim();
  if (!cleanText) return false;

  // Cancel any active static audio or browser speech immediately
  stopSpeech();

  // 1. Check Jenny Neural Audio Registry for authentic studio MP3
  const jennyUrl = getJennyAudioUrl(cleanText);
  if (jennyUrl) {
    try {
      backgroundMusic.duck('speech');
      const audio = new Audio(jennyUrl);
      currentActiveAudio = audio;

      // Rate control: Grade 1-2 / Slow mode (0.85x), Normal (1.0x)
      if (options.slow) {
        audio.playbackRate = 0.85;
      } else if (options.rate) {
        audio.playbackRate = options.rate;
      }

      audio.onplay = () => {
        backgroundMusic.duck('speech');
        options.onStart?.();
      };

      audio.onended = () => {
        backgroundMusic.unduck('speech');
        currentActiveAudio = null;
        options.onEnd?.();
      };

      audio.onerror = (err) => {
        backgroundMusic.unduck('speech');
        currentActiveAudio = null;
        console.warn(`[Jenny Audio Engine] Static MP3 error on ${jennyUrl}, falling back to Web Speech:`, err);
        fallbackWebSpeech(cleanText, options);
      };

      await audio.play();
      return true;
    } catch (err) {
      console.warn('[Jenny Audio Engine] Audio playback failed, falling back to Web Speech:', err);
      return fallbackWebSpeech(cleanText, options);
    }
  }

  // 2. If not pre-rendered in registry, use Web Speech API with strict General American voice selection
  return fallbackWebSpeech(cleanText, options);
};

/**
 * Stop any active audio and speech immediately
 */
export const stopSpeech = () => {
  backgroundMusic.unduck('speech');
  if (currentActiveAudio) {
    try {
      currentActiveAudio.pause();
      currentActiveAudio.currentTime = 0;
    } catch {}
    currentActiveAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Check if a given text or word has an authentic pre-rendered Jenny Neural MP3 audio
 */
export const isJennyAudioReady = (text: string): boolean => {
  return Boolean(getJennyAudioUrl(text));
};

export { getJennyAudioUrl, normalizeAudioKey };

// Backward-compatible playSpeech helper
export const playSpeech = (
  text: string, 
  langOrOnEnd?: string | (() => void), 
  callback?: () => void
) => {
  const lang = typeof langOrOnEnd === 'string' ? langOrOnEnd : 'en-US';
  const onEnd = typeof langOrOnEnd === 'function' ? langOrOnEnd : callback;

  // If language is English, route to playEnglishSpeech for guaranteed Jenny Neural voice
  if (lang.startsWith('en')) {
    playEnglishSpeech(text, {
      lang: 'en-US',
      onEnd
    });
    return;
  }

  // Vietnamese route (only for Vietnamese words when explicitly asked)
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.92;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang.toLowerCase().startsWith('vi'));
  if (viVoice) utterance.voice = viVoice;

  if (onEnd) utterance.onend = onEnd;

  window.speechSynthesis.speak(utterance);
};
