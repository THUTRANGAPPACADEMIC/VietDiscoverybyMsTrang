// ==============================================================================
// TEST SUITE: VIETDISCOVERY SOFT PIANO BACKGROUND MUSIC
// Verifies Supabase Storage URL, Volume (10%), Seamless Loop, Ducking & Teacher Config
// ==============================================================================

import https from 'https';
import { 
  backgroundMusic, 
  SUPABASE_PIANO_MUSIC_URL 
} from '../src/lib/backgroundMusic.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    passedTests++;
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('🚀 Running Soft Piano Background Music Verification Suite...\n');

// 1. Verify Supabase Storage Public Audio Stream
console.log('📌 1. SUPABASE STORAGE AUDIO STREAM ACCESSIBILITY');
const testSupabaseUrl = async () => {
  return new Promise((resolve) => {
    https.get(SUPABASE_PIANO_MUSIC_URL, (res) => {
      assert(res.statusCode === 200, `Supabase audio stream returns HTTP 200 OK (actual: ${res.statusCode})`);
      assert(res.headers['content-type'] === 'audio/mpeg', `Supabase audio stream is valid MP3 audio/mpeg (actual: ${res.headers['content-type']})`);
      const length = parseInt(res.headers['content-length'] || '0', 10);
      assert(length > 1000000, `Supabase audio stream has valid length > 1MB (actual: ${length} bytes)`);
      res.destroy();
      resolve();
    }).on('error', (err) => {
      assert(false, `Supabase URL error: ${err.message}`);
      resolve();
    });
  });
};

await testSupabaseUrl();

// 2. Verify Background Music Manager Singleton & Default Volume (10%)
console.log('\n📌 2. BACKGROUND MUSIC SINGLETON & DEFAULT VOLUME CONFIGURATION');
const initialState = backgroundMusic.getState();
assert(initialState.musicUrl === SUPABASE_PIANO_MUSIC_URL, 'Initial musicUrl matches exact Supabase Storage public link');
assert(initialState.volume === 0.10, `Default volume is 10% (0.10) (actual: ${initialState.volume})`);
assert(initialState.isDucked === false, 'Initial duck state is false');

// Test Volume Clamping
backgroundMusic.setVolume(0.25);
assert(backgroundMusic.getState().volume === 0.25, 'Volume updates correctly to 25%');
backgroundMusic.setVolume(1.5);
assert(backgroundMusic.getState().volume === 1.0, 'Volume clamps to maximum 1.0');
backgroundMusic.setVolume(-0.5);
assert(backgroundMusic.getState().volume === 0.0, 'Volume clamps to minimum 0.0');
backgroundMusic.setVolume(0.10); // Reset to 10%
assert(backgroundMusic.getState().volume === 0.10, 'Volume successfully reset to default 10%');

// 3. Intelligent Audio Ducking (Pause/Mute for Listening, Speaking, Microphone, Video)
console.log('\n📌 3. INTELLIGENT AUDIO DUCKING (PAUSE/MUTE BEHAVIOR)');

// Simulate listening exercise beginning
backgroundMusic.duck('listening');
let state = backgroundMusic.getState();
assert(state.isDucked === true, 'BGM is ducked when listening exercise begins');
assert(state.activeDuckReasons.includes('listening'), 'activeDuckReasons contains "listening"');

// Simulate concurrent speaking exercise / mic recording
backgroundMusic.duck('mic_recording');
state = backgroundMusic.getState();
assert(state.isDucked === true, 'BGM remains ducked with multiple active competing audio reasons');
assert(state.activeDuckReasons.length === 2, 'activeDuckReasons has 2 concurrent reasons');

// Listening exercise ends
backgroundMusic.unduck('listening');
state = backgroundMusic.getState();
assert(state.isDucked === true, 'BGM remains ducked while mic_recording is still active');
assert(!state.activeDuckReasons.includes('listening'), 'activeDuckReasons no longer contains "listening"');

// Mic recording ends -> all competing audio finished
backgroundMusic.unduck('mic_recording');
state = backgroundMusic.getState();
assert(state.isDucked === false, 'BGM is un-ducked once all competing audio activities end');
assert(state.activeDuckReasons.length === 0, 'activeDuckReasons is completely empty');

// Test video lesson ducking
backgroundMusic.duck('video');
assert(backgroundMusic.getState().isDucked === true, 'BGM is ducked when video lesson starts');
backgroundMusic.unduck('video');
assert(backgroundMusic.getState().isDucked === false, 'BGM is restored when video lesson stops');

// 4. Teacher Custom URL Configuration
console.log('\n📌 4. TEACHER CUSTOM AUDIO URL CONFIGURATION');
const customUrl = 'https://example.com/custom-school-theme.mp3';
await backgroundMusic.setCustomUrl(customUrl);
state = backgroundMusic.getState();
assert(state.musicUrl === customUrl, 'Teacher can set a custom external MP3 URL');
assert(state.isCustomUrl === true, 'isCustomUrl flag is true when custom track configured');

// Reset to Default Supabase Storage URL
await backgroundMusic.resetDefaultUrl();
state = backgroundMusic.getState();
assert(state.musicUrl === SUPABASE_PIANO_MUSIC_URL, 'Teacher can reset back to default Supabase Storage stream');
assert(state.isCustomUrl === false, 'isCustomUrl flag is false after reset');

console.log(`\n🎉 ALL BACKGROUND MUSIC TESTS PASSED! (${passedTests}/${totalTests} assertions passed)`);
