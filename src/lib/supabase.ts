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

const getStaticEnv = (key: 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_ANON_KEY' | 'VITE_APP_ENV'): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (key === 'VITE_SUPABASE_URL') return import.meta.env.VITE_SUPABASE_URL || '';
    if (key === 'VITE_SUPABASE_ANON_KEY') return import.meta.env.VITE_SUPABASE_ANON_KEY || '';
    if (key === 'VITE_APP_ENV') return import.meta.env.VITE_APP_ENV || '';
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
 *    or localhost is strictly isolated to Supabase TEST (jnrlydnuwredtavwecba) unless explicitly configured to Prod.
 * 2. Production Domain Check: vietdiscoverybymstrang.vercel.app connects to Supabase Production.
 * 3. Build-time Variable Check: Supports VITE_APP_ENV, VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY.
 */
function resolveActiveSupabase() {
  const envUrl = getStaticEnv('VITE_SUPABASE_URL');
  const envKey = getStaticEnv('VITE_SUPABASE_ANON_KEY');
  const appEnv = getStaticEnv('VITE_APP_ENV');

  // Check if explicitly configured to Production via build or env var
  const isExplicitProd = envUrl && envUrl.includes('khbgnthijxkjnxpuunll');
  const isExplicitTest = envUrl && envUrl.includes('jnrlydnuwredtavwecba');

  // Runtime inspection in browser
  if (typeof window !== 'undefined' && window.location?.hostname) {
    const host = window.location.hostname.toLowerCase();
    const isLocal = host === 'localhost' || host === '127.0.0.1';

    // If local development without explicit Production config, isolate to TEST
    if (isLocal && !isExplicitProd) {
      return {
        url: isExplicitTest ? envUrl : SUPABASE_TEST_CONFIG.url,
        anonKey: isExplicitTest ? (envKey || SUPABASE_TEST_CONFIG.anonKey) : SUPABASE_TEST_CONFIG.anonKey,
        projectId: SUPABASE_TEST_CONFIG.projectId,
        envName: 'LOCAL_DEV (Supabase TEST)',
      };
    }

    // Official production domain or any Vercel deployment configured with Production URL
    if (host === 'vietdiscoverybymstrang.vercel.app' || isExplicitProd) {
      const activeUrl = envUrl || SUPABASE_PROD_CONFIG.url;
      const activeKey = envKey || SUPABASE_PROD_CONFIG.anonKey;
      const projId = activeUrl.replace('https://', '').split('.')[0] || SUPABASE_PROD_CONFIG.projectId;
      return {
        url: activeUrl,
        anonKey: activeKey,
        projectId: projId,
        envName: SUPABASE_PROD_CONFIG.envName,
      };
    }

    // Vercel Preview domain without explicit Production config: isolate to TEST
    if (host.endsWith('.vercel.app')) {
      return {
        url: SUPABASE_TEST_CONFIG.url,
        anonKey: SUPABASE_TEST_CONFIG.anonKey,
        projectId: SUPABASE_TEST_CONFIG.projectId,
        envName: 'VERCEL_PREVIEW (Supabase TEST)',
      };
    }
  }

  // Fallback for build-time / SSR
  if (isExplicitProd) {
    const activeUrl = envUrl || SUPABASE_PROD_CONFIG.url;
    const activeKey = envKey || SUPABASE_PROD_CONFIG.anonKey;
    const projId = activeUrl.replace('https://', '').split('.')[0] || SUPABASE_PROD_CONFIG.projectId;
    return {
      url: activeUrl,
      anonKey: activeKey,
      projectId: projId,
      envName: SUPABASE_PROD_CONFIG.envName,
    };
  }

  if (appEnv === 'preview' || isExplicitTest) {
    return {
      url: SUPABASE_TEST_CONFIG.url,
      anonKey: SUPABASE_TEST_CONFIG.anonKey,
      projectId: SUPABASE_TEST_CONFIG.projectId,
      envName: 'TEST_STAGING (Supabase TEST)',
    };
  }

  // Default to Production configuration
  const activeUrl = envUrl || SUPABASE_PROD_CONFIG.url;
  const activeKey = envKey || SUPABASE_PROD_CONFIG.anonKey;
  const projId = activeUrl.replace('https://', '').split('.')[0] || SUPABASE_PROD_CONFIG.projectId;
  return {
    url: activeUrl,
    anonKey: activeKey,
    projectId: projId,
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

