// ==============================================================================
// VIETDISCOVERY BY MS. TRANG – SOFT PIANO BACKGROUND MUSIC ENGINE
// Exact Supabase Storage Public Audio Stream:
// https://khbgnthijxkjnxpuunll.supabase.co/storage/v1/object/public/background%20music/sigmamusicart-soft-calm-piano-solo-music-398662.mp3
// ==============================================================================

export const SUPABASE_PIANO_MUSIC_URL = 
  'https://khbgnthijxkjnxpuunll.supabase.co/storage/v1/object/public/background%20music/sigmamusicart-soft-calm-piano-solo-music-398662.mp3';

export interface BackgroundMusicState {
  isPlaying: boolean;
  userEnabled: boolean;
  volume: number; // 0.0 to 1.0, default 0.10 (10%)
  isDucked: boolean;
  activeDuckReasons: string[];
  trackTitle: string;
  musicUrl: string;
  isCustomUrl: boolean;
  error: string | null;
}

class BackgroundMusicManager {
  private audioElement: HTMLAudioElement | null = null;
  private userEnabled: boolean = false;
  private isPlaying: boolean = false;
  private volume: number = 0.10; // Default 10%
  private musicUrl: string = SUPABASE_PIANO_MUSIC_URL;
  private duckReasons: Set<string> = new Set();
  private error: string | null = null;
  private fadeInterval: number | null = null;

  private listeners: ((state: BackgroundMusicState) => void)[] = [];
  private hasInteracted: boolean = false;

  constructor() {
    this.loadPreferences();
    this.setupInteractionListener();
  }

  // Load preferences from localStorage safely
  private loadPreferences() {
    if (typeof window === 'undefined') return;
    try {
      const savedEnabled = localStorage.getItem('vietdiscovery_piano_bgm_enabled');
      if (savedEnabled !== null) {
        this.userEnabled = savedEnabled === 'true';
      }

      const savedVol = localStorage.getItem('vietdiscovery_piano_bgm_volume');
      if (savedVol !== null) {
        const parsed = parseFloat(savedVol);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
          this.volume = parsed;
        }
      }

      const savedCustomUrl = localStorage.getItem('vietdiscovery_piano_bgm_url');
      if (savedCustomUrl) {
        this.musicUrl = savedCustomUrl;
      }
    } catch (e) {
      console.warn('[VietDiscovery BGM] Could not read preferences from localStorage:', e);
    }
  }

  // Listen for initial user gesture to comply with browser autoplay policies
  private setupInteractionListener() {
    if (typeof window === 'undefined') return;

    const onUserInteraction = () => {
      this.hasInteracted = true;
      // If student previously enabled music, start playback after first interaction
      if (this.userEnabled && !this.isPlaying && this.duckReasons.size === 0) {
        this.play();
      }
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
    };

    window.addEventListener('click', onUserInteraction, { once: true, passive: true });
    window.addEventListener('keydown', onUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', onUserInteraction, { once: true, passive: true });
  }

  // Lazy-load the single persistent Audio Element
  private getAudio(): HTMLAudioElement {
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.src = this.musicUrl;
      this.audioElement.loop = true;
      this.audioElement.preload = 'none'; // Lazy load: no downloads until user plays
      this.audioElement.volume = 0; // Starts at 0 for smooth fade-in

      this.audioElement.addEventListener('error', (e) => {
        console.warn('[VietDiscovery BGM] Audio playback error:', e);
        this.error = 'Không thể tải luồng nhạc nền Supabase.';
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('ended', () => {
        if (this.audioElement && this.isPlaying) {
          this.audioElement.currentTime = 0;
          this.audioElement.play().catch(() => {});
        }
      });
    }

    return this.audioElement;
  }

  // Smooth Fade-In volume ramping
  private fadeIn(targetVolume = this.volume, durationMs = 800) {
    if (!this.audioElement) return;
    this.clearFade();

    const audio = this.audioElement;
    const startVolume = audio.volume;
    const steps = 16;
    const stepTime = durationMs / steps;
    const volIncrement = (targetVolume - startVolume) / steps;
    let stepCount = 0;

    this.fadeInterval = window.setInterval(() => {
      stepCount++;
      const nextVol = Math.min(targetVolume, Math.max(0, audio.volume + volIncrement));
      audio.volume = nextVol;

      if (stepCount >= steps || nextVol >= targetVolume) {
        audio.volume = targetVolume;
        this.clearFade();
      }
    }, stepTime);
  }

  // Smooth Fade-Out volume ramping
  private fadeOut(durationMs = 400, onComplete?: () => void) {
    if (!this.audioElement) {
      onComplete?.();
      return;
    }
    this.clearFade();

    const audio = this.audioElement;
    const startVolume = audio.volume;
    const steps = 10;
    const stepTime = durationMs / steps;
    const volDecrement = startVolume / steps;
    let stepCount = 0;

    this.fadeInterval = window.setInterval(() => {
      stepCount++;
      const nextVol = Math.max(0, audio.volume - volDecrement);
      audio.volume = nextVol;

      if (stepCount >= steps || nextVol <= 0) {
        audio.volume = 0;
        this.clearFade();
        onComplete?.();
      }
    }, stepTime);
  }

  private clearFade() {
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(fn => {
      try {
        fn(state);
      } catch (err) {
        console.error('[VietDiscovery BGM] Error in listener callback:', err);
      }
    });
  }

  public subscribe(listener: (state: BackgroundMusicState) => void): () => void {
    this.listeners.push(listener);
    listener(this.getState());
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  public getState(): BackgroundMusicState {
    return {
      isPlaying: this.isPlaying,
      userEnabled: this.userEnabled,
      volume: this.volume,
      isDucked: this.duckReasons.size > 0,
      activeDuckReasons: Array.from(this.duckReasons),
      trackTitle: this.musicUrl === SUPABASE_PIANO_MUSIC_URL ? 'Soft Calm Piano Solo' : 'Custom Piano Music',
      musicUrl: this.musicUrl,
      isCustomUrl: this.musicUrl !== SUPABASE_PIANO_MUSIC_URL,
      error: this.error
    };
  }

  // ============================================================================
  // PUBLIC CONTROLS
  // ============================================================================

  public async play(): Promise<boolean> {
    this.userEnabled = true;
    this.error = null;
    try {
      localStorage.setItem('vietdiscovery_piano_bgm_enabled', 'true');
    } catch {
      // storage unavailable
    }

    // If currently ducked by competing audio, mark as enabled and wait for unduck
    if (this.duckReasons.size > 0) {
      this.notify();
      return true;
    }

    try {
      const audio = this.getAudio();
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }

      this.isPlaying = true;
      this.fadeIn(this.volume);
      this.notify();
      return true;
    } catch (err: any) {
      console.warn('[VietDiscovery BGM] Autoplay blocked or playback error:', err);
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pause() {
    this.userEnabled = false;
    try {
      localStorage.setItem('vietdiscovery_piano_bgm_enabled', 'false');
    } catch {
      // storage unavailable
    }

    this.fadeOut(300, () => {
      if (this.audioElement) {
        this.audioElement.pause();
      }
      this.isPlaying = false;
      this.notify();
    });
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public setVolume(vol: number) {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    try {
      localStorage.setItem('vietdiscovery_piano_bgm_volume', clamped.toFixed(2));
    } catch {
      // storage unavailable
    }

    if (this.audioElement && this.duckReasons.size === 0 && this.isPlaying) {
      this.audioElement.volume = clamped;
    }

    this.notify();
  }

  // ============================================================================
  // TEACHER CUSTOM AUDIO URL CONFIGURATION
  // ============================================================================

  public setCustomUrl(url: string): Promise<boolean> {
    const trimmed = url.trim();
    if (!trimmed) {
      return this.resetDefaultUrl();
    }

    this.musicUrl = trimmed;
    try {
      localStorage.setItem('vietdiscovery_piano_bgm_url', trimmed);
    } catch {}

    if (this.audioElement) {
      const wasPlaying = this.isPlaying;
      this.audioElement.src = trimmed;
      if (wasPlaying) {
        return this.play();
      }
    }

    this.notify();
    return Promise.resolve(true);
  }

  public resetDefaultUrl(): Promise<boolean> {
    this.musicUrl = SUPABASE_PIANO_MUSIC_URL;
    try {
      localStorage.removeItem('vietdiscovery_piano_bgm_url');
    } catch {}

    if (this.audioElement) {
      const wasPlaying = this.isPlaying;
      this.audioElement.src = SUPABASE_PIANO_MUSIC_URL;
      if (wasPlaying) {
        return this.play();
      }
    }

    this.notify();
    return Promise.resolve(true);
  }

  // ============================================================================
  // INTELLIGENT AUDIO DUCKING (PAUSE / MUTE FOR LISTENING, SPEAKING, VIDEO)
  // ============================================================================

  public duck(reason: string) {
    this.duckReasons.add(reason);

    if (this.audioElement && this.isPlaying) {
      // Smooth fade-out before pausing to avoid audio clicking
      this.fadeOut(250, () => {
        if (this.audioElement) {
          this.audioElement.pause();
        }
      });
    }

    this.notify();
  }

  public unduck(reason: string) {
    this.duckReasons.delete(reason);

    // If all competing audio activities ended and student previously had music enabled:
    if (this.duckReasons.size === 0 && this.userEnabled) {
      if (this.audioElement) {
        this.audioElement.volume = 0;
        this.audioElement.play().then(() => {
          this.isPlaying = true;
          this.fadeIn(this.volume, 800);
          this.notify();
        }).catch(err => {
          console.warn('[VietDiscovery BGM] Resume play error:', err);
        });
      }
    }

    this.notify();
  }
}

// Export singleton instance
export const backgroundMusic = new BackgroundMusicManager();
