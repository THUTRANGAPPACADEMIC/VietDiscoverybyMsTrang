import React, { useState } from 'react';
import { X, Lock, Mail, User, School, KeyRound, Sparkles, AlertCircle } from 'lucide-react';
import { UserRole, UserProfile } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [role, setRole] = useState<UserRole>('student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [classCode, setClassCode] = useState('TRANG3A');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setInfoMsg('');
    setLoading(true);

    try {
      const isCloud = isSupabaseConfigured();

      if (mode === 'forgot') {
        if (isCloud && supabase) {
          const { error } = await supabase.auth.resetPasswordForEmail(email);
          if (error) throw error;
          setInfoMsg('Password reset instructions sent to your email.');
        } else {
          setInfoMsg('Demo mode: Password reset simulated. You can log in directly.');
        }
        setLoading(false);
        return;
      }

      if (mode === 'signup') {
        if (isCloud && supabase) {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                full_name: fullName,
                role: role,
                class_code: role === 'student' ? classCode : null
              }
            }
          });
          if (error) throw error;

          const newUser: UserProfile = {
            id: data.user?.id || 'usr-' + Date.now(),
            email: email,
            fullName: fullName || (role === 'teacher' ? 'Ms. Thu Trang' : 'Explorer Student'),
            role: role,
            classCode: role === 'student' ? classCode : undefined,
            stars: role === 'student' ? 50 : 500,
            avatar: role === 'teacher' ? 'fa-chalkboard-user' : 'fa-user-graduate'
          };
          onAuthSuccess(newUser);
          onClose();
        } else {
          // Local fallback simulation
          const newUser: UserProfile = {
            id: 'local-' + Date.now(),
            email: email || (role === 'teacher' ? 'teacher@vietdiscovery.edu.vn' : 'student@vietdiscovery.edu.vn'),
            fullName: fullName || (role === 'teacher' ? 'Ms. Thu Trang' : 'Minh Anh Explorer'),
            role: role,
            classCode: role === 'student' ? classCode : undefined,
            stars: role === 'student' ? 100 : 500,
            avatar: role === 'teacher' ? 'fa-chalkboard-user' : 'fa-user-graduate'
          };
          onAuthSuccess(newUser);
          onClose();
        }
      } else {
        // Sign In
        if (isCloud && supabase) {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          if (error) throw error;

          const signedInUser: UserProfile = {
            id: data.user.id,
            email: data.user.email || email,
            fullName: data.user.user_metadata?.full_name || (role === 'teacher' ? 'Ms. Thu Trang' : 'Explorer Student'),
            role: (data.user.user_metadata?.role as UserRole) || role,
            classCode: data.user.user_metadata?.class_code || classCode,
            stars: 120,
            avatar: role === 'teacher' ? 'fa-chalkboard-user' : 'fa-user-graduate'
          };
          onAuthSuccess(signedInUser);
          onClose();
        } else {
          // Local fallback
          const signedInUser: UserProfile = {
            id: 'local-user-1',
            email: email || (role === 'teacher' ? 'teacher@vietdiscovery.edu.vn' : 'student@vietdiscovery.edu.vn'),
            fullName: fullName || (role === 'teacher' ? 'Ms. Thu Trang' : 'Minh Anh Explorer'),
            role: role,
            classCode: role === 'student' ? classCode : undefined,
            stars: role === 'teacher' ? 500 : 150,
            avatar: role === 'teacher' ? 'fa-chalkboard-user' : 'fa-user-graduate'
          };
          onAuthSuccess(signedInUser);
          onClose();
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            {mode === 'signin' && 'Welcome Back to VietDiscovery'}
            {mode === 'signup' && 'Create Your Explorer Account'}
            {mode === 'forgot' && 'Reset Your Password'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'signin' && 'Sign in to access your Learning Passport & progress'}
            {mode === 'signup' && 'Join Ms. Trang\'s interactive learning adventure'}
            {mode === 'forgot' && 'Enter your email to receive recovery instructions'}
          </p>
        </div>

        {/* Role Selector (Student vs Teacher) */}
        {mode !== 'forgot' && (
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl mb-5">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                role === 'student'
                  ? 'bg-white text-rose-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎓 Student
            </button>
            <button
              type="button"
              onClick={() => setRole('teacher')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                role === 'teacher'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👩‍🏫 Teacher (Ms. Trang)
            </button>
          </div>
        )}

        {/* Notifications */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
        {infoMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{infoMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (Họ và Tên)</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder={role === 'teacher' ? 'Ms. Thu Trang' : 'Nguyễn Minh Anh'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {mode === 'signup' && role === 'student' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Class Code (Mã lớp học)</label>
              <div className="relative">
                <School className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. TRANG3A"
                  value={classCode}
                  onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono font-bold tracking-wider border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder={role === 'teacher' ? 'teacher@vietdiscovery.edu.vn' : 'student@vietdiscovery.edu.vn'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 mt-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all disabled:opacity-50"
          >
            {loading ? 'Processing...' : (
              mode === 'signin' ? `Sign In as ${role === 'teacher' ? 'Teacher' : 'Student'}` :
              mode === 'signup' ? 'Create Account' : 'Send Reset Link'
            )}
          </button>
        </form>

        {/* Switch Links */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          {mode === 'signin' ? (
            <>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-indigo-600 font-bold hover:underline"
              >
                New here? Sign Up
              </button>
              <button
                type="button"
                onClick={() => setMode('forgot')}
                className="hover:underline"
              >
                Forgot password?
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setMode('signin')}
              className="text-indigo-600 font-bold hover:underline mx-auto"
            >
              Already have an account? Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
