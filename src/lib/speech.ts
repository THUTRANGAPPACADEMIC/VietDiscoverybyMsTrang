// Web Speech API for English-First Educational Pronunciation
// Audio Engine with Async Voice Loading, Safe English Voice Selection & Slow Mode

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

// Ensure voices are loaded asynchronously across Chrome, Safari, Edge, Android
export const getAvailableVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
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

// Select best natural English voice (US or GB)
export const selectBestEnglishVoice = async (preferredLang: 'en-US' | 'en-GB' = 'en-US'): Promise<SpeechSynthesisVoice | null> => {
  const voices = await getAvailableVoices();
  if (!voices.length) return null;

  // 1. First priority: High-quality Natural / Neural / Cloud English voices
  const naturalEnglish = voices.find(v => {
    const isEn = v.lang.toLowerCase().startsWith('en');
    const name = v.name.toLowerCase();
    return isEn && (
      name.includes('natural') || 
      name.includes('google') || 
      name.includes('samantha') || 
      name.includes('jenny') || 
      name.includes('aria') || 
      name.includes('guy') || 
      name.includes('karen') ||
      name.includes('daniel')
    );
  });
  if (naturalEnglish) return naturalEnglish;

  // 2. Second priority: Exact language match (e.g., en-US or en-GB)
  const exactMatch = voices.find(v => v.lang.toLowerCase().replace('_', '-') === preferredLang.toLowerCase());
  if (exactMatch) return exactMatch;

  // 3. Third priority: Any English voice
  const anyEnglish = voices.find(v => v.lang.toLowerCase().startsWith('en'));
  if (anyEnglish) return anyEnglish;

  // NEVER return a Vietnamese or non-English voice for English speech!
  return null;
};

// Play English speech with strict language enforcement
export const playEnglishSpeech = async (
  text: string,
  options: SpeechPlayOptions = {}
): Promise<boolean> => {
  if (!('speechSynthesis' in window)) {
    console.warn('[VietDiscovery Audio] Web Speech API is not supported on this device/browser.');
    options.onError?.(new Error('Trình duyệt không hỗ trợ Web Speech API.'));
    return false;
  }

  // Cancel any ongoing speech immediately
  window.speechSynthesis.cancel();

  const cleanText = text.trim();
  if (!cleanText) return false;

  const targetLang = options.lang || 'en-US';
  const voice = await selectBestEnglishVoice(targetLang);

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = targetLang;
  
  // Rate: Slow mode for Grade 1-2 or learners (0.68), Normal elementary friendly rate (0.86)
  if (options.slow) {
    utterance.rate = 0.68;
  } else if (options.rate) {
    utterance.rate = options.rate;
  } else {
    utterance.rate = 0.86;
  }

  utterance.pitch = options.pitch ?? 1.05;

  if (voice) {
    utterance.voice = voice;
  } else {
    console.warn(`[VietDiscovery Audio] No dedicated English voice found. SpeechSynthesis will use default ${targetLang} language definition.`);
  }

  if (options.onStart) {
    utterance.onstart = options.onStart;
  }

  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }

  if (options.onError) {
    utterance.onerror = (e) => {
      // Ignore user-initiated cancellation
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      console.error('[VietDiscovery Audio] Speech synthesis error:', e);
      options.onError?.(e);
    };
  }

  window.speechSynthesis.speak(utterance);
  return true;
};

// Stop speech helper
export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// Backward-compatible playSpeech helper
export const playSpeech = (
  text: string, 
  langOrOnEnd?: string | (() => void), 
  callback?: () => void
) => {
  const lang = typeof langOrOnEnd === 'string' ? langOrOnEnd : 'en-US';
  const onEnd = typeof langOrOnEnd === 'function' ? langOrOnEnd : callback;

  // If language is English, route to playEnglishSpeech for guaranteed English voice
  if (lang.startsWith('en')) {
    playEnglishSpeech(text, {
      lang: lang as 'en-US' | 'en-GB',
      onEnd
    });
    return;
  }

  // Vietnamese route (only for Vietnamese words when explicitly asked)
  if (!('speechSynthesis' in window)) return;
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
