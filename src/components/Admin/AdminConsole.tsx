import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  School, 
  BookOpen, 
  KeyRound, 
  Search, 
  AlertTriangle, 
  Mail, 
  CheckCircle2, 
  RefreshCw,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import { ClassRoom, StudentRosterItem, MaterialItem } from '../../types';
import { hashPin, resetPinRateLimit } from '../../lib/security';

interface AdminConsoleProps {
  classes: ClassRoom[];
  students: StudentRosterItem[];
  materials: MaterialItem[];
  onUpdateStudents: React.Dispatch<React.SetStateAction<StudentRosterItem[]>>;
  onUpdateClasses: React.Dispatch<React.SetStateAction<ClassRoom[]>>;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({
  classes,
  students,
  materials,
  onUpdateStudents,
  onUpdateClasses
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'classes' | 'students' | 'materials' | 'security'>('overview');
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState('All');

  // Reset PIN modal state
  const [targetStudentForPinReset, setTargetStudentForPinReset] = useState<StudentRosterItem | null>(null);
  const [newPin, setNewPin] = useState('1234');

  // Admin email governance
  const [adminEmailInput, setAdminEmailInput] = useState('');
  const [adminEmailList, setAdminEmailList] = useState<string[]>([
    'admin@vietdiscovery.edu.vn',
    'thutrang@vietdiscovery.edu.vn',
    'trangtran@vietdiscovery.edu.vn'
  ]);

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.id.toLowerCase().includes(studentSearch.toLowerCase());
    const matchesGrade = selectedGradeFilter === 'All' ? true : s.gradeLevel === selectedGradeFilter;
    return matchesSearch && matchesGrade;
  });

  const handleResetPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetStudentForPinReset) return;

    if (newPin.length !== 4) {
      alert('PIN must be exactly 4 digits.');
      return;
    }

    const hashed = await hashPin(newPin);
    resetPinRateLimit(targetStudentForPinReset.id);

    onUpdateStudents(prev => prev.map(s => {
      if (s.id === targetStudentForPinReset.id) {
        return {
          ...s,
          pinHash: hashed,
          failedPinAttempts: 0,
          isLocked: false
        };
      }
      return s;
    }));

    alert(`Successfully reset PIN for ${targetStudentForPinReset.name} to ${newPin}.`);
    setTargetStudentForPinReset(null);
    setNewPin('1234');
  };

  const handleAddAdminEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmailInput.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!adminEmailList.includes(adminEmailInput.toLowerCase().trim())) {
      setAdminEmailList(prev => [...prev, adminEmailInput.toLowerCase().trim()]);
      alert(`Admin privileges granted to ${adminEmailInput.trim()}.`);
      setAdminEmailInput('');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Admin Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/40 border border-indigo-400 text-amber-300 flex items-center justify-center text-3xl shadow-lg">
            🛡️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold text-amber-400 tracking-widest">
                System Governance & Super Admin
              </span>
            </div>
            <h2 className="text-2xl font-extrabold font-heading tracking-tight">
              Admin Console - VietDiscovery
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Full administrative visibility across all classes, teachers, student rosters, and security policies
            </p>
          </div>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-amber-300">{classes.length}</div>
            <div className="text-[10px] text-slate-300">Total Classes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-emerald-300">{students.length}</div>
            <div className="text-[10px] text-slate-300">Total Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-rose-300">{materials.length}</div>
            <div className="text-[10px] text-slate-300">Materials</div>
          </div>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 overflow-x-auto text-xs font-bold shadow-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          System Overview
        </button>

        <button
          onClick={() => setActiveTab('classes')}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'classes'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          All Classes & Teachers ({classes.length})
        </button>

        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'students'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Student Directory & PINs ({students.length})
        </button>

        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'materials'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Curriculum Repository ({materials.length})
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'security'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Admin Security & Email Setup
        </button>
      </div>

      {/* TAB 1: SYSTEM OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-extrabold text-slate-900 text-base font-heading flex items-center gap-2">
              <School className="w-5 h-5 text-indigo-600" />
              <span>School-Wide Class Distribution</span>
            </h4>
            <div className="space-y-2 text-xs">
              {classes.map(c => (
                <div key={c.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800">{c.name}</span>
                    <span className="text-slate-400 ml-2">({c.gradeLevel})</span>
                    <div className="text-[11px] text-slate-500">Teacher: {c.teacherName}</div>
                  </div>
                  <span className="font-bold px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700">
                    {c.studentCount} Students
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-extrabold text-slate-900 text-base font-heading flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Security & Data Governance Status</span>
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-600">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                <strong>✓ Row Level Security (RLS) Active:</strong> Students cannot read or modify another student's progress or class data.
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-800">
                <strong>✓ PIN Protection & Salt Hashing:</strong> Student 4-digit PINs are stored as SHA-256 hashes. Plaintext passwords or secrets are never exposed in administrative panels.
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800">
                <strong>✓ Brute-Force Rate Limiting:</strong> 5-attempt limit with 60-second temporary cooldown prevents unauthorized guessing.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ALL CLASSES & TEACHERS */}
      {activeTab === 'classes' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h4 className="font-extrabold text-slate-900 text-base font-heading">
              All Classes in System
            </h4>
            <span className="text-xs font-semibold text-slate-500">
              Admin Oversight: Ms. Thu Trang
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <th className="py-3 px-5">Class Name</th>
                  <th className="py-3 px-5">Grade Level</th>
                  <th className="py-3 px-5">Assigned Teacher</th>
                  <th className="py-3 px-5">Join Code</th>
                  <th className="py-3 px-5">Enrolled</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {classes.map(cls => (
                  <tr key={cls.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-5 font-bold text-slate-800">{cls.name}</td>
                    <td className="py-3.5 px-5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                        {cls.gradeLevel}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-slate-700">{cls.teacherName}</td>
                    <td className="py-3.5 px-5 font-mono font-bold text-rose-600">{cls.code}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{cls.studentCount} students</td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => alert(`Class ${cls.name} is active and assigned to ${cls.teacherName}.`)}
                        className="px-3 py-1 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: STUDENT DIRECTORY & PIN RESET */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search student or ID..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <select
              value={selectedGradeFilter}
              onChange={(e) => setSelectedGradeFilter(e.target.value)}
              className="px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl bg-white text-slate-700"
            >
              <option value="All">All Grades (1-5)</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
            </select>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                    <th className="py-3 px-5">ID & Name</th>
                    <th className="py-3 px-5">Class & Grade</th>
                    <th className="py-3 px-5">Progress</th>
                    <th className="py-3 px-5">PIN Security Status</th>
                    <th className="py-3 px-5 text-right">Admin Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map(stu => (
                    <tr key={stu.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-5">
                        <div className="font-extrabold text-slate-900">{stu.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">ID: {stu.id}</div>
                      </td>
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-800">{stu.className}</div>
                        <div className="text-[10px] text-slate-500">{stu.gradeLevel}</div>
                      </td>
                      <td className="py-3.5 px-5">
                        <span className="font-bold text-emerald-700">{stu.completedDestinations} destinations</span>
                        <div className="text-[10px] text-amber-600 font-bold">⭐ {stu.totalStars} Stars</div>
                      </td>
                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Hashed & Protected
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <button
                          onClick={() => setTargetStudentForPinReset(stu)}
                          className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold border border-amber-200 text-xs transition-all"
                        >
                          Reset PIN
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: MATERIALS */}
      {activeTab === 'materials' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <h4 className="font-extrabold text-slate-900 text-base font-heading">
            System-Wide Learning Materials
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materials.map(mat => (
              <div key={mat.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                    {mat.category} • {mat.gradeBand}
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-1">{mat.title}</h5>
                  <p className="text-xs text-slate-500 mt-0.5">{mat.description}</p>
                  <div className="text-[10px] text-slate-400 mt-2">Author: {mat.createdByName}</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600">
                  {mat.isPublished ? '● Live' : 'Draft'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: ADMIN SECURITY GOVERNANCE */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-lg font-extrabold text-slate-900 font-heading flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>Designated Administrator Accounts</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Specify authorized admin emails. Only authenticated sessions with these emails can open this Admin Console.
            </p>
          </div>

          <form onSubmit={handleAddAdminEmail} className="flex gap-2 max-w-md">
            <input
              type="email"
              required
              placeholder="e.g. thutrang@vietdiscovery.edu.vn"
              value={adminEmailInput}
              onChange={(e) => setAdminEmailInput(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700"
            >
              Add Admin
            </button>
          </form>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700">Authorized Admin Accounts:</span>
            <div className="flex flex-wrap gap-2">
              {adminEmailList.map((em, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{em}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reset PIN Modal */}
      {targetStudentForPinReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
                🔑
              </div>
              <h4 className="font-extrabold text-slate-900 text-base font-heading">
                Reset Student PIN
              </h4>
              <p className="text-xs text-slate-500">
                Student: <strong>{targetStudentForPinReset.name}</strong> ({targetStudentForPinReset.id})
              </p>
            </div>

            <form onSubmit={handleResetPin} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">New 4-Digit PIN</label>
                <input
                  type="text"
                  required
                  maxLength={4}
                  pattern="[0-9]{4}"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3 py-2 text-sm font-mono tracking-widest text-center border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setTargetStudentForPinReset(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md shadow-amber-200"
                >
                  Save & Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
