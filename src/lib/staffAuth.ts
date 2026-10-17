import { supabase, isSupabaseConfigured } from './supabase';
import { UserProfile, UserRole } from '../types';

export interface AuthUrlState {
  hasTokens: boolean;
  isInvite: boolean;
  isRecovery: boolean;
  hasError: boolean;
  errorTitle?: string;
  errorMessage?: string;
  code?: string;
  accessToken?: string;
  refreshToken?: string;
  type?: string;
}

/**
 * Universal parser for Supabase Auth URLs (handles hash fragments, query params, and dedicated routes)
 * Works seamlessly in both browser runtime and server/unit-test environments.
 */
export function parseAuthUrl(urlString?: string): AuthUrlState {
  let search = '';
  let hash = '';
  let pathname = '/';

  if (urlString) {
    try {
      const u = new URL(urlString, 'https://vietdiscoverybymstrang.vercel.app');
      search = u.search;
      hash = u.hash;
      pathname = u.pathname;
    } catch {
      // fallback
    }
  } else if (typeof window !== 'undefined') {
    search = window.location.search || '';
    hash = window.location.hash || '';
    pathname = window.location.pathname || '/';
  }

  // Parse query parameters
  const searchParams = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  
  // Parse hash parameters (remove leading #)
  const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
  const hashParams = new URLSearchParams(cleanHash);

  const getParam = (key: string): string | null => {
    return hashParams.get(key) || searchParams.get(key);
  };

  const error = getParam('error');
  const errorCode = getParam('error_code');
  const errorDescription = getParam('error_description');
  const type = getParam('type') || (pathname.includes('accept-invitation') ? 'invite' : undefined);
  const code = getParam('code');
  const accessToken = getParam('access_token');
  const refreshToken = getParam('refresh_token');

  const isInvite = type === 'invite' || pathname.includes('accept-invitation');
  const isRecovery = type === 'recovery';
  const hasTokens = Boolean(accessToken && refreshToken) || Boolean(code);

  let hasError = Boolean(error || errorCode);
  let errorTitle: string | undefined;
  let errorMessage: string | undefined;

  if (hasError) {
    if (errorCode === 'otp_expired' || (errorDescription && errorDescription.toLowerCase().includes('expired'))) {
      errorTitle = 'Liên kết đã hết hạn (Invitation Link Expired)';
      errorMessage = 'Liên kết lời mời đã quá hạn sử dụng hoặc đã được kích hoạt trước đó. Thầy/Cô vui lòng liên hệ Cô Trang để nhận liên kết mới nhé!';
    } else if (errorCode === 'access_denied' || error === 'access_denied') {
      errorTitle = 'Truy cập bị từ chối (Access Denied)';
      errorMessage = errorDescription 
        ? decodeURIComponent(errorDescription.replace(/\+/g, ' '))
        : 'Yêu cầu xác thực không hợp lệ hoặc đã bị hủy.';
    } else {
      errorTitle = 'Xác thực không thành công';
      errorMessage = errorDescription 
        ? decodeURIComponent(errorDescription.replace(/\+/g, ' '))
        : 'Đã có lỗi trong quá trình xác thực lời mời.';
    }
  }

  return {
    hasTokens,
    isInvite,
    isRecovery,
    hasError,
    errorTitle,
    errorMessage,
    code: code || undefined,
    accessToken: accessToken || undefined,
    refreshToken: refreshToken || undefined,
    type: type || undefined,
  };
}

/**
 * Exchange PKCE authorization code for a valid Supabase session
 */
export async function exchangeAuthCode(code: string): Promise<{ success: boolean; error?: string; session?: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase chưa được cấu hình.' };
  }
  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) throw error;
    return { success: true, session: data.session };
  } catch (err: any) {
    return { 
      success: false, 
      error: err.message || 'Mã xác thực không hợp lệ hoặc đã hết hạn.' 
    };
  }
}

/**
 * Explicitly establish session from implicit URL tokens
 */
export async function setAuthSession(accessToken: string, refreshToken: string): Promise<{ success: boolean; error?: string; session?: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase chưa được cấu hình.' };
  }
  try {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    if (error) throw error;
    return { success: true, session: data.session };
  } catch (err: any) {
    return { 
      success: false, 
      error: err.message || 'Không thể thiết lập phiên đăng nhập từ mã xác thực.' 
    };
  }
}

/**
 * Clean URL hash and search query from browser address bar without reload
 */
export function cleanAuthUrlParams(): void {
  if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
    try {
      const cleanPath = window.location.pathname.replace(/\/(auth\/callback|accept-invitation)/, '') || '/';
      window.history.replaceState({}, document.title, cleanPath);
    } catch (e) {
      // Ignore in restricted environments
    }
  }
}

/**
 * Resolves Educator/Admin UserProfile by querying public.profiles in Supabase.
 * Automatically verifies permissions for teacher, admin, and super_admin.
 */
export async function resolveStaffProfile(
  userId: string, 
  email?: string, 
  userMetadata?: any
): Promise<UserProfile> {
  let userRole: UserRole = 'teacher';
  let fullName = userMetadata?.full_name || userMetadata?.display_name || (email ? email.split('@')[0] : 'Educator');

  if (isSupabaseConfigured() && supabase) {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (!error && profile) {
        if (profile.role === 'super_admin' || profile.role === 'admin' || profile.role === 'teacher') {
          userRole = profile.role as UserRole;
        }
        if (profile.display_name) {
          fullName = profile.display_name;
        } else if (profile.full_name) {
          fullName = profile.full_name;
        }
      } else {
        // Attempt to create a baseline profile record for the newly invited educator
        try {
          await supabase.from('profiles').insert({
            id: userId,
            display_name: fullName,
            full_name: fullName,
            role: 'teacher',
            avatar: 'fa-chalkboard-user'
          });
        } catch {
          // If insert is restricted by RLS, proceed with safe defaults
        }
      }
    } catch (err) {
      console.warn('[StaffAuth] resolveStaffProfile query notice:', err);
    }
  }

  const isSuperOrAdmin = userRole === 'super_admin' || userRole === 'admin';
  return {
    id: userId,
    email: email || '',
    fullName: fullName,
    role: userRole,
    stars: 500,
    avatar: userRole === 'super_admin' ? 'fa-crown' : isSuperOrAdmin ? 'fa-shield-halved' : 'fa-chalkboard-user'
  };
}

/**
 * Sets initial password for newly invited educator or updates password on recovery.
 * Calls supabase.auth.updateUser({ password }) and returns updated UserProfile.
 */
export async function setStaffInitialPassword(
  password: string
): Promise<{ success: boolean; error?: string; user?: UserProfile }> {
  const cleanPass = password.trim();
  if (!cleanPass || cleanPass.length < 8) {
    return { success: false, error: 'Mật khẩu phải có ít nhất 8 ký tự.' };
  }

  // Check character diversity (require at least one letter and one number)
  const hasLetter = /[a-zA-Z]/.test(cleanPass);
  const hasNumber = /[0-9]/.test(cleanPass);
  if (!hasLetter || !hasNumber) {
    return { success: false, error: 'Mật khẩu cần kết hợp cả chữ cái và số để đảm bảo an toàn.' };
  }

  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase chưa được cấu hình.' };
  }

  try {
    const { data, error } = await supabase.auth.updateUser({ password: cleanPass });
    if (error) throw error;
    if (!data.user) throw new Error('Không nhận được thông tin tài khoản sau khi đặt mật khẩu.');

    const userProfile = await resolveStaffProfile(data.user.id, data.user.email, data.user.user_metadata);
    return { success: true, user: userProfile };
  } catch (err: any) {
    return { 
      success: false, 
      error: err.message || 'Không thể thiết lập mật khẩu. Vui lòng thử lại sau.' 
    };
  }
}
