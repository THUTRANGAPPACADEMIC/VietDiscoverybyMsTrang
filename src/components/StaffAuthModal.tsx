import React, { useState } from 'react';
import { X, Lock, Mail, KeyRound, AlertCircle, ShieldCheck } from 'lucide-react';
import { UserProfile, UserRole } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface StaffAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStaffLoginSuccess: (user: UserProfile) => void;
}

export const StaffAuthModal: React.FC<StaffAuthModalProps> = ({
  isOpen,
  onClose,
  onStaffLoginSuccess
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const isCloud = isSupabaseConfigured();

      if (isCloud && supabase) {
        // 1. Authenticate with Supabase Auth (email/password)
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password
        });
        if (error) throw error;
        if (!data.user) throw new Error('Không nhận được thông tin xác thực tài khoản.');

        // 2. Query public.profiles securely by the confirmed auth.users.id
        // NEVER assign administrator privileges based solely on an email address entered by the user!
        let userRole: UserRole = 'teacher';
        let fullName = data.user.user_metadata?.full_name || 'Ms. Thu Trang';

        try {
          const { data: profile, error: profileErr } = await supabase
            .from('profiles')
            .select('role, full_name')
            .eq('id', data.user.id)
            .maybeSingle();

          if (!profileErr && profile) {
            if (profile.role === 'super_admin' || profile.role === 'admin' || profile.role === 'teacher') {
              userRole = profile.role as UserRole;
            }
            if (profile.full_name) {
              fullName = profile.full_name;
            }
          } else if (data.user.app_metadata?.role) {
            userRole = data.user.app_metadata.role as UserRole;
          }
        } catch (dbErr) {
          console.warn('[VietDiscovery Auth] Profile query warning:', dbErr);
        }

        const isSuperOrAdmin = userRole === 'super_admin' || userRole === 'admin';
        const staffUser: UserProfile = {
          id: data.user.id,
          email: data.user.email || email,
          fullName: fullName,
          role: userRole,
          stars: 500,
          avatar: userRole === 'super_admin' ? 'fa-crown' : isSuperOrAdmin ? 'fa-shield-halved' : 'fa-chalkboard-user'
        };

        onStaffLoginSuccess(staffUser);
        onClose();
      } else {
        // Fallback for offline demo only when Supabase is unconfigured
        const userRole: UserRole = 'teacher';
        const staffUser: UserProfile = {
          id: 'teacher-offline',
          email,
          fullName: 'Cô Trần Thị Thu Trang',
          role: userRole,
          stars: 500,
          avatar: 'fa-chalkboard-user'
        };

        onStaffLoginSuccess(staffUser);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Xác thực không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shadow-xs text-2xl">
            🛡️
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            Educator & Admin Portal
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Secure authentication for Ms. Thu Trang, certified teachers, and system administrators
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Official Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="thutrang@vietdiscovery.edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              Hint for demo: <code>admin@vietdiscovery.edu.vn</code> (Admin) or <code>thutrang@vietdiscovery.edu.vn</code>
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Role permissions (Teacher vs Admin) are verified directly from authorized credentials.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-xs sm:text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-200 transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In to Studio / Console'}
          </button>
        </form>
      </div>
    </div>
  );
};
