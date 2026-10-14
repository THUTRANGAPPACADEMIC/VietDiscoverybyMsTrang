// Security helper: SHA-256 PIN hashing and brute-force protection rate limiter

export async function hashPin(pin: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(pin.trim() + '_vietdiscovery_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

interface AttemptRecord {
  count: number;
  lockedUntil: number | null;
}

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60 seconds

export function checkPinRateLimit(studentId: string): { isLocked: boolean; remainingSeconds: number } {
  try {
    const raw = localStorage.getItem(`vietdiscovery_ratelimit_${studentId}`);
    if (!raw) return { isLocked: false, remainingSeconds: 0 };

    const record: AttemptRecord = JSON.parse(raw);
    if (record.lockedUntil && record.lockedUntil > Date.now()) {
      const remainingSeconds = Math.ceil((record.lockedUntil - Date.now()) / 1000);
      return { isLocked: true, remainingSeconds };
    }

    if (record.lockedUntil && record.lockedUntil <= Date.now()) {
      // Lock expired, reset
      localStorage.removeItem(`vietdiscovery_ratelimit_${studentId}`);
      return { isLocked: false, remainingSeconds: 0 };
    }

    return { isLocked: false, remainingSeconds: 0 };
  } catch {
    return { isLocked: false, remainingSeconds: 0 };
  }
}

export function recordFailedPinAttempt(studentId: string): { isNowLocked: boolean; remainingAttempts: number; remainingSeconds: number } {
  try {
    const raw = localStorage.getItem(`vietdiscovery_ratelimit_${studentId}`);
    let record: AttemptRecord = raw ? JSON.parse(raw) : { count: 0, lockedUntil: null };

    record.count += 1;

    if (record.count >= MAX_FAILED_ATTEMPTS) {
      record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
      localStorage.setItem(`vietdiscovery_ratelimit_${studentId}`, JSON.stringify(record));
      return { isNowLocked: true, remainingAttempts: 0, remainingSeconds: 60 };
    }

    localStorage.setItem(`vietdiscovery_ratelimit_${studentId}`, JSON.stringify(record));
    return { isNowLocked: false, remainingAttempts: MAX_FAILED_ATTEMPTS - record.count, remainingSeconds: 0 };
  } catch {
    return { isNowLocked: false, remainingAttempts: 1, remainingSeconds: 0 };
  }
}

export function resetPinRateLimit(studentId: string): void {
  try {
    localStorage.removeItem(`vietdiscovery_ratelimit_${studentId}`);
  } catch {
    // ignore
  }
}
