// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — SPEECH RECOGNITION & SPEAKING ASSESSMENT ENGINE
// Web Speech API + Web Audio Volume Analyzer + Strict Content Verification
// ==============================================================================

export interface SpeechEvaluationResult {
  success: boolean;
  status: 
    | 'matched'               // Speech recognized and matches target sentence (>= 60% keywords)
    | 'mismatch'              // Speech recognized but words do not match target sentence
    | 'silence'               // Microphone active but student remained silent (RMS volume < threshold)
    | 'no_speech'             // Speech recognition returned no-speech error
    | 'permission_denied'     // User denied microphone permission
    | 'device_error'          // No microphone or hardware capture error
    | 'timeout'               // Session timed out with no detected speech
    | 'unsupported';          // Browser lacks SpeechRecognition API
  transcript: string;
  targetSentence: string;
  matchedWords: string[];
  missingWords: string[];
  matchPercentage: number;
  starsToAward: number;
  titleVi: string;
  titleEn: string;
  feedbackVi: string;
  feedbackEn: string;
  audioUrl?: string;          // Verified audio recording of the student's voice
}

export interface SpeechRecognitionOptions {
  maxDurationSeconds?: number;
  lang?: 'en-US' | 'en-GB';
  onVolumeChange?: (volumePercent: number) => void;
  onTranscriptUpdate?: (interimText: string) => void;
}

/**
 * Normalizes text for fair, child-friendly keyword comparison
 * Strips punctuation, collapses whitespace, converts to lowercase
 */
export function normalizeSentence(text: string): string[] {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '')
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0);
}

/**
 * Checks if browser supports SpeechRecognition API (Chrome, Edge, Safari, Android)
 */
export function isSpeechRecognitionAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(
    (window as any).SpeechRecognition || 
    (window as any).webkitSpeechRecognition
  );
}

/**
 * Evaluate recognized transcript against target sentence
 * Strictly enforces content verification: does NOT equate recognized words with native pronunciation.
 */
export function evaluateRecognizedContent(
  transcript: string,
  targetSentence: string,
  baseRewardStars: number = 15
): SpeechEvaluationResult {
  const cleanTranscript = (transcript || '').trim();
  const transcriptWords = normalizeSentence(cleanTranscript);
  const targetWords = normalizeSentence(targetSentence);

  if (transcriptWords.length === 0) {
    return {
      success: false,
      status: 'no_speech',
      transcript: '',
      targetSentence,
      matchedWords: [],
      missingWords: targetWords,
      matchPercentage: 0,
      starsToAward: 0,
      titleVi: 'Chưa nghe thấy giọng của bé 🤫',
      titleEn: 'No Speech Detected',
      feedbackVi: 'Hệ thống chưa thu nhận được lời nói. Bé hãy kiểm tra micro và đọc to, rõ ràng hơn nhé!',
      feedbackEn: 'No speech was detected. Please check your microphone and speak clearly!'
    };
  }

  // Count matching keywords
  const matchedWords: string[] = [];
  const missingWords: string[] = [];

  for (const word of targetWords) {
    // Match exact word or root
    if (transcriptWords.some(tw => tw === word || tw.includes(word) || word.includes(tw))) {
      matchedWords.push(word);
    } else {
      missingWords.push(word);
    }
  }

  const matchPercentage = targetWords.length > 0
    ? Math.round((matchedWords.length / targetWords.length) * 100)
    : 0;

  // Elementary threshold: >= 60% of keywords recognized
  const isSufficientMatch = matchPercentage >= 60;

  if (isSufficientMatch) {
    return {
      success: true,
      status: 'matched',
      transcript: cleanTranscript,
      targetSentence,
      matchedWords,
      missingWords,
      matchPercentage,
      starsToAward: baseRewardStars,
      titleVi: 'Hoan hô! Nhận diện thành công! 🌟',
      titleEn: 'Well Done! Speech Recognized!',
      feedbackVi: `Hệ thống nhận diện đúng từ vựng con vừa nói (${matchPercentage}% khớp). Hãy tiếp tục luyện tập ngữ điệu tự nhiên nhé!`,
      feedbackEn: `Great effort! Recognized words matched ${matchPercentage}% of the target sentence.`
    };
  }

  return {
    success: false,
    status: 'mismatch',
    transcript: cleanTranscript,
    targetSentence,
    matchedWords,
    missingWords,
    matchPercentage,
    starsToAward: 0,
    titleVi: 'Cố gắng lên nhé! Bé hãy đọc lại nào 🎧',
    titleEn: 'Good Try! Let\'s Try Again',
    feedbackVi: `Hệ thống nghe được: "${cleanTranscript}". Chưa khớp câu mẫu: "${targetSentence}". Bé hãy nghe lại mẫu câu rồi đọc lại nhé!`,
    feedbackEn: `We heard: "${cleanTranscript}". Try listening to Captain Trang again and speak clearly!`
  };
}

/**
 * Controller class managing a single speaking assessment session
 * Integrates Web Audio API volume monitoring with Web Speech Recognition
 */
export class SpeakingAssessmentSession {
  private recognition: any = null;
  private mediaStream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedAudioChunks: Blob[] = [];
  private recordedAudioUrl: string | null = null;
  private volumeCheckInterval: any = null;
  private maxDurationTimer: any = null;

  private peakVolume: number = 0;
  private volumeReadingsCount: number = 0;
  private volumeSum: number = 0;
  private recognizedTranscript: string = '';
  private isListeningActive: boolean = false;
  private sessionResolved: boolean = false;

  /**
   * Start recording and recognition session
   */
  public async start(
    targetSentence: string,
    options: SpeechRecognitionOptions = {}
  ): Promise<SpeechEvaluationResult> {
    const maxDurationSeconds = options.maxDurationSeconds || 7;
    const lang = options.lang || 'en-US';

    this.sessionResolved = false;
    this.peakVolume = 0;
    this.volumeSum = 0;
    this.volumeReadingsCount = 0;
    this.recognizedTranscript = '';
    this.recordedAudioChunks = [];
    this.recordedAudioUrl = null;

    return new Promise<SpeechEvaluationResult>(async (resolve) => {
      const finalize = (result: SpeechEvaluationResult) => {
        if (this.sessionResolved) return;
        this.sessionResolved = true;
        this.cleanup();
        resolve(result);
      };

      // 1. Request microphone access explicitly & start Web Audio Analyser
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Microphone API is not supported on this browser.');
        }

        this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
          audio: { 
            echoCancellation: true, 
            noiseSuppression: true, 
            autoGainControl: true 
          } 
        });

        // Initialize MediaRecorder for optional playback of student's voice
        if (typeof MediaRecorder !== 'undefined') {
          try {
            this.mediaRecorder = new MediaRecorder(this.mediaStream);
            this.mediaRecorder.ondataavailable = (e) => {
              if (e.data && e.data.size > 0) {
                this.recordedAudioChunks.push(e.data);
              }
            };
            this.mediaRecorder.onstop = () => {
              if (this.recordedAudioChunks.length > 0) {
                const blob = new Blob(this.recordedAudioChunks, { type: 'audio/webm' });
                this.recordedAudioUrl = URL.createObjectURL(blob);
              }
            };
            this.mediaRecorder.start();
          } catch (e) {
            console.warn('[SpeakingAssessment] MediaRecorder init failed:', e);
          }
        }

        // Initialize Web Audio volume analyzer
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          this.audioContext = new AudioCtx();
          if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
          }
          const source = this.audioContext.createMediaStreamSource(this.mediaStream);
          this.analyser = this.audioContext.createAnalyser();
          this.analyser.fftSize = 256;
          source.connect(this.analyser);

          const dataArray = new Uint8Array(this.analyser.frequencyBinCount);

          this.volumeCheckInterval = setInterval(() => {
            if (!this.analyser) return;
            this.analyser.getByteFrequencyData(dataArray);

            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              sum += dataArray[i];
            }
            const average = sum / dataArray.length;
            const normalized = Math.min(100, Math.round((average / 128) * 100));

            this.volumeSum += normalized;
            this.volumeReadingsCount++;
            if (normalized > this.peakVolume) {
              this.peakVolume = normalized;
            }

            if (options.onVolumeChange) {
              options.onVolumeChange(normalized);
            }
          }, 100);
        }
      } catch (err: any) {
        console.warn('[SpeakingAssessment] Microphone permission or device error:', err);
        const isDenied = err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError';
        return finalize({
          success: false,
          status: isDenied ? 'permission_denied' : 'device_error',
          transcript: '',
          targetSentence,
          matchedWords: [],
          missingWords: normalizeSentence(targetSentence),
          matchPercentage: 0,
          starsToAward: 0,
          titleVi: isDenied ? 'Chưa cấp quyền Micro 🎙️' : 'Không tìm thấy Micro ⚠️',
          titleEn: isDenied ? 'Microphone Permission Needed' : 'Microphone Hardware Error',
          feedbackVi: isDenied
            ? 'Bé vui lòng bấm "Cho phép" (Allow) trên thanh địa chỉ trình duyệt để tham gia nói tiếng Anh nhé!'
            : 'Thiết bị chưa nhận được micro. Bé hãy kiểm tra tai nghe hoặc micro của máy tính nhé!',
          feedbackEn: isDenied
            ? 'Please grant microphone access in your browser address bar to practice speaking.'
            : 'Could not access audio device. Please verify your microphone.'
        });
      }

      this.isListeningActive = true;

      // 2. Setup Web Speech Recognition
      const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognitionClass) {
        // Enforce Requirement 3 & 4: If speech cannot be recognized, zero score and zero stars!
        return finalize({
          success: false,
          status: 'unsupported',
          transcript: '',
          targetSentence,
          matchedWords: [],
          missingWords: normalizeSentence(targetSentence),
          matchPercentage: 0,
          starsToAward: 0,
          titleVi: 'Trình duyệt chưa hỗ trợ nhận diện giọng nói 🎙️',
          titleEn: 'Speech Recognition Unavailable',
          feedbackVi: 'Trình duyệt hiện tại chưa hỗ trợ nhận diện giọng nói tiếng Anh (Web Speech API). Bé hãy mở VietDiscovery bằng Google Chrome, Microsoft Edge hoặc Safari để luyện nói và nhận sao nhé!',
          feedbackEn: 'Web Speech API is not supported in this browser. Please use Google Chrome, Microsoft Edge, or Safari to complete speaking challenges.'
        });
      }

      // Initialize SpeechRecognition instance
      try {
        this.recognition = new SpeechRecognitionClass();
        this.recognition.lang = lang;
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event: any) => {
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              this.recognizedTranscript = event.results[i][0].transcript;
            } else {
              interim += event.results[i][0].transcript;
            }
          }
          if (options.onTranscriptUpdate) {
            options.onTranscriptUpdate(this.recognizedTranscript || interim);
          }
        };

        this.recognition.onerror = (event: any) => {
          console.warn('[SpeakingAssessment] Recognition event error:', event.error);
          if (event.error === 'no-speech') {
            // Student remained silent
            finalize({
              success: false,
              status: 'silence',
              transcript: '',
              targetSentence,
              matchedWords: [],
              missingWords: normalizeSentence(targetSentence),
              matchPercentage: 0,
              starsToAward: 0,
              titleVi: 'Chưa nghe thấy giọng của bé 🤫',
              titleEn: 'No Speech Detected',
              feedbackVi: 'Hệ thống chưa nghe thấy âm thanh. Bé hãy nói to, rõ ràng theo câu mẫu nhé!',
              feedbackEn: 'No speech was detected. Please speak louder and clearly!'
            });
          } else if (event.error === 'not-allowed') {
            finalize({
              success: false,
              status: 'permission_denied',
              transcript: '',
              targetSentence,
              matchedWords: [],
              missingWords: normalizeSentence(targetSentence),
              matchPercentage: 0,
              starsToAward: 0,
              titleVi: 'Chưa cấp quyền Micro 🎙️',
              titleEn: 'Microphone Permission Denied',
              feedbackVi: 'Vui lòng bấm Cho Phép truy cập micro để tham gia thử thách nhé!',
              feedbackEn: 'Please grant microphone access to complete the speaking challenge.'
            });
          }
        };

        this.recognition.onend = () => {
          if (this.sessionResolved) return;

          // Stop MediaRecorder if actively capturing
          if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            try {
              this.mediaRecorder.stop();
            } catch {}
          }

          // Delay slightly so mediaRecorder.onstop creates the blob URL if supported
          setTimeout(() => {
            const avgVolume = this.volumeReadingsCount > 0 ? this.volumeSum / this.volumeReadingsCount : 0;
            const isSilent = (this.peakVolume < 8 || avgVolume < 3) && !this.recognizedTranscript;

            if (isSilent) {
              finalize({
                success: false,
                status: 'silence',
                transcript: '',
                targetSentence,
                matchedWords: [],
                missingWords: normalizeSentence(targetSentence),
                matchPercentage: 0,
                starsToAward: 0,
                titleVi: 'Chưa nghe thấy giọng của bé 🤫',
                titleEn: 'No Speech Detected',
                feedbackVi: 'Hệ thống chưa nhận được âm thanh giọng nói. Bé hãy thử lại và đọc to hơn nhé!',
                feedbackEn: 'Microphone remained silent. Please try speaking up!',
                audioUrl: this.recordedAudioUrl || undefined
              });
            } else {
              const evalResult = evaluateRecognizedContent(this.recognizedTranscript, targetSentence);
              finalize({
                ...evalResult,
                audioUrl: this.recordedAudioUrl || undefined
              });
            }
          }, 80);
        };

        this.recognition.start();

        // Max duration countdown timer
        this.maxDurationTimer = setTimeout(() => {
          if (!this.sessionResolved) {
            this.stop();
          }
        }, maxDurationSeconds * 1000);

      } catch (recErr: any) {
        console.warn('[SpeakingAssessment] Recognition start exception:', recErr);
        finalize({
          success: false,
          status: 'device_error',
          transcript: '',
          targetSentence,
          matchedWords: [],
          missingWords: normalizeSentence(targetSentence),
          matchPercentage: 0,
          starsToAward: 0,
          titleVi: 'Lỗi khởi động nhận diện ⚠️',
          titleEn: 'Speech Recognition Error',
          feedbackVi: 'Không thể khởi động bộ nhận diện giọng nói. Bé hãy thử lại nhé!',
          feedbackEn: 'Could not initialize speech recognition service.'
        });
      }
    });
  }

  /**
   * Stop active listening and trigger evaluation
   */
  public stop() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {}
    }
    if (this.recognition && this.isListeningActive) {
      try {
        this.recognition.stop();
      } catch {}
    }
  }

  /**
   * Abort and cancel session immediately
   */
  public cancel() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {}
    }
    if (this.recognition) {
      try {
        this.recognition.abort();
      } catch {}
    }
    this.cleanup();
  }

  /**
   * Release microphone stream and timers
   */
  private cleanup() {
    this.isListeningActive = false;

    if (this.volumeCheckInterval) {
      clearInterval(this.volumeCheckInterval);
      this.volumeCheckInterval = null;
    }

    if (this.maxDurationTimer) {
      clearTimeout(this.maxDurationTimer);
      this.maxDurationTimer = null;
    }

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }

    if (this.audioContext && this.audioContext.state !== 'closed') {
      try {
        this.audioContext.close();
      } catch {}
      this.audioContext = null;
    }

    this.analyser = null;
  }
}

export const speakingAssessmentEngine = {
  activeSession: null as SpeakingAssessmentSession | null,
  startSession: function(targetSentence: string, options?: SpeechRecognitionOptions) {
    if (this.activeSession) {
      this.activeSession.cancel();
    }
    this.activeSession = new SpeakingAssessmentSession();
    return this.activeSession.start(targetSentence, options);
  },
  abortSession: function() {
    if (this.activeSession) {
      this.activeSession.cancel();
      this.activeSession = null;
    }
  }
};
