import { createClient } from '@supabase/supabase-js';

// ============================================================================
// VIETDISCOVERY BY MS. TRANG - ENVIRONMENT ISOLATION CONFIGURATION
// ============================================================================

export const SUPABASE_TEST_CONFIG = {
  projectId: 'jnrlydnuwredtavwecba',
  url: 'https://jnrlydnuwredtavwecba.supabase.co',
  anonKey: 'sb_publishable_30ujz0Rv9gXKBaSG_5Y1-Q_h6r70gzB',
  envName: 'TEST_STAGING (Thử nghiệm độc lập - Bảo vệ dữ liệu thật)',
};

export const SUPABASE_PROD_CONFIG = {
  projectId: 'khbgnthijxkjnxpuunll',
  url: 'https://khbgnthijxkjnxpuunll.supabase.co',
  anonKey: 'sb_publishable_gomgLofvxUNJJsaPHTLUjA_RvhENHeq',
  envName: 'PRODUCTION (Chính thức - 182 học sinh & 5 lớp)',
};

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

/**
 * Resolves active Supabase credentials with strict environment isolation:
 * 1. Runtime Hostname Check: Any Vercel Preview domain (*.vercel.app other than production)
 *    or localhost is strictly isolated to Supabase TEST (jnrlydnuwredtavwecba).
 * 2. Production Domain Check: Only the official production domain connects to Supabase Production.
 * 3. Build-time Variable Check: Supports VITE_APP_ENV and VITE_SUPABASE_URL.
 */
function resolveActiveSupabase() {
  const envUrl = getEnvVar('VITE_SUPABASE_URL');
  const envKey = getEnvVar('VITE_SUPABASE_ANON_KEY');
  const appEnv = getEnvVar('VITE_APP_ENV');

  // Runtime inspection in browser
  if (typeof window !== 'undefined' && window.location?.hostname) {
    const host = window.location.hostname.toLowerCase();

    // Dedicated Vercel Preview or local environments
    const isVercelPreview =
      (host.endsWith('.vercel.app') && host !== 'vietdiscoverybymstrang.vercel.app') ||
      host.includes('-git-') ||
      host === 'localhost' ||
      host === '127.0.0.1';

    if (isVercelPreview) {
      return {
        url: SUPABASE_TEST_CONFIG.url,
        anonKey: SUPABASE_TEST_CONFIG.anonKey,
        projectId: SUPABASE_TEST_CONFIG.projectId,
        envName: host.includes('localhost') ? 'LOCAL_DEV (Supabase TEST)' : 'VERCEL_PREVIEW (Supabase TEST)',
      };
    }

    // Official production domain
    if (host === 'vietdiscoverybymstrang.vercel.app') {
      return {
        url: envUrl || SUPABASE_PROD_CONFIG.url,
        anonKey: envKey || SUPABASE_PROD_CONFIG.anonKey,
        projectId: SUPABASE_PROD_CONFIG.projectId,
        envName: SUPABASE_PROD_CONFIG.envName,
      };
    }
  }

  // Build-time / Server-side / Fallback resolution
  if (appEnv === 'preview' || (envUrl && envUrl.includes('jnrlydnuwredtavwecba'))) {
    return {
      url: SUPABASE_TEST_CONFIG.url,
      anonKey: SUPABASE_TEST_CONFIG.anonKey,
      projectId: SUPABASE_TEST_CONFIG.projectId,
      envName: 'VERCEL_PREVIEW (Supabase TEST)',
    };
  }

  // Default to Production configuration
  return {
    url: envUrl || SUPABASE_PROD_CONFIG.url,
    anonKey: envKey || SUPABASE_PROD_CONFIG.anonKey,
    projectId: SUPABASE_PROD_CONFIG.projectId,
    envName: SUPABASE_PROD_CONFIG.envName,
  };
}

export const activeSupabaseConfig = resolveActiveSupabase();
export const supabaseUrl = activeSupabaseConfig.url;
export const supabaseAnonKey = activeSupabaseConfig.anonKey;
export const supabaseProjectId = activeSupabaseConfig.projectId;
export const supabaseEnvName = activeSupabaseConfig.envName;

// Log active environment safely (Project ID and Environment Name only, zero keys)
if (typeof window !== 'undefined') {
  console.info(
    `%c[VietDiscovery DB]%c Connected to Supabase Project: ${supabaseProjectId} [${supabaseEnvName}]`,
    'background: #0284c7; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
    'color: #0284c7; font-weight: bold;'
  );
}

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

