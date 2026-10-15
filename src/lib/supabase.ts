import { createClient } from '@supabase/supabase-js';

const getEnvVar = (key: string): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env?.[key]) {
    return import.meta.env[key];
  }
  const globalProc = (globalThis as unknown as { process?: { env?: Record<string, string> } })?.process;
  if (globalProc?.env?.[key]) {
    return globalProc.env[key] || '';
  }
  return '';
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

export const isSupabaseConfigured = (): boolean => {
  return (
    Boolean(supabaseUrl) &&
    Boolean(supabaseAnonKey) &&
    !supabaseUrl.includes('your-supabase-project') &&
    !supabaseAnonKey.includes('your-supabase-anon-key')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

// Local fallback persistence for offline mode or demo environment
export const localStore = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(`vietdiscovery_${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(`vietdiscovery_${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },
  remove: (key: string): void => {
    try {
      localStorage.removeItem(`vietdiscovery_${key}`);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },
};
