import React from 'react';
import { 
  Eye, 
  Sparkles, 
  GraduationCap 
} from 'lucide-react';
import { 
  ClassRoom, 
  Destination, 
  MaterialItem, 
  StudentRosterItem, 
  AssignmentItem,
  GradeBand 
} from '../../types';
import { LearningMaterials } from './LearningMaterials';
import { ClassManagement } from './ClassManagement';
import { StudentProgressTable } from './StudentProgressTable';
import { LearningAssessment } from './LearningAssessment';
import { AIAssistant } from './AIAssistant';
import { TeacherContentStudio } from './TeacherContentStudio';

interface TeachingStudioProps {
  activeTab: 'curriculum' | 'materials' | 'classes' | 'progress' | 'assessment' | 'ai';
  classes: ClassRoom[];
  students: StudentRosterItem[];
  materials: MaterialItem[];
  destinations: Destination[];
  onAddClass: (cls: ClassRoom) => void;
  onAssignTask: (asg: AssignmentItem) => void;
  onAddMaterial: (mat: MaterialItem) => void;
  onDeleteMaterial: (id: string) => void;
  onTogglePublish: (id: string) => void;
  onAwardBonusStars: (studentId: string, stars: number) => void;
  onPreviewGradeBand?: (band: GradeBand) => void;
  onUploadRoster?: (students: StudentRosterItem[]) => void;
}

export const TeachingStudio: React.FC<TeachingStudioProps> = ({
  activeTab,
  classes,
  students,
  materials,
  destinations,
  onAddClass,
  onAssignTask,
  onAddMaterial,
  onDeleteMaterial,
  onTogglePublish,
  onAwardBonusStars,
  onPreviewGradeBand,
  onUploadRoster
}) => {
  const totalStudents = students.length;

  return (
    <div className="space-y-6">
      
      {/* Teacher Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-indigo-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/30 border border-indigo-400/30 text-white flex items-center justify-center text-2xl shadow-inner">
            👩‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                Teacher Management Console
              </span>
            </div>
            <h2 className="text-2xl font-extrabold font-heading tracking-tight">
              Welcome, Ms. Thu Trang!
            </h2>
            <p className="text-xs text-indigo-200 mt-0.5">
              Manage your classrooms, oversee student discovery journeys, and prepare curriculum materials
            </p>
          </div>
        </div>

        {/* Quick Teacher Metrics */}
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-amber-300">{classes.length}</div>
            <div className="text-[10px] text-indigo-200">Classes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-emerald-300">{totalStudents}</div>
            <div className="text-[10px] text-indigo-200">Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 min-w-[90px]">
            <div className="text-xl font-extrabold text-rose-300">{materials.length}</div>
            <div className="text-[10px] text-indigo-200">Materials</div>
          </div>
        </div>
      </div>

      {/* Grade-differentiated Student Experience Preview Switcher */}
      {onPreviewGradeBand && (
        <div className="bg-white p-4 rounded-3xl border border-amber-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-400 text-amber-950 font-bold">
              <Eye className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-extrabold text-slate-800">
                Grade Experience Previewer (Xem trước trải nghiệm từng khối lớp)
              </span>
              <p className="text-[11px] text-slate-500">
                Switch between grade bands to test customized lessons as your students see them:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPreviewGradeBand('grade_1_2')}
              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-colors"
            >
              🎨 Preview Grade 1–2
            </button>
            <button
              onClick={() => onPreviewGradeBand('grade_3')}
              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors"
            >
              🧭 Preview Grade 3
            </button>
            <button
              onClick={() => onPreviewGradeBand('grade_4_5')}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200 transition-colors"
            >
              🚀 Preview Grade 4–5
            </button>
          </div>
        </div>
      )}

      {/* Tab 0: Teacher Content Studio (Giáo trình độc quyền) */}
      {activeTab === 'curriculum' && (
        <TeacherContentStudio />
      )}

      {/* Tab 1: Learning Materials */}
      {activeTab === 'materials' && (
        <LearningMaterials
          materials={materials}
          destinations={destinations}
          onAddMaterial={onAddMaterial}
          onDeleteMaterial={onDeleteMaterial}
          onTogglePublish={onTogglePublish}
        />
      )}

      {/* Tab 2: Class Management */}
      {activeTab === 'classes' && (
        <ClassManagement
          classes={classes}
          students={students}
          destinations={destinations}
          onAddClass={onAddClass}
          onAssignTask={onAssignTask}
          onUploadRoster={onUploadRoster}
        />
      )}

      {/* Tab 3: Student Progress */}
      {activeTab === 'progress' && (
        <StudentProgressTable
          students={students}
          onAwardBonusStars={onAwardBonusStars}
        />
      )}

      {/* Tab 4: Learning Assessment */}
      {activeTab === 'assessment' && (
        <LearningAssessment destinations={destinations} />
      )}

      {/* Tab 5: AI Assistant */}
      {activeTab === 'ai' && (
        <AIAssistant
          destinations={destinations}
          onPublishApprovedPlan={(plan) => {
            const newMat: MaterialItem = {
              id: 'mat-' + Date.now(),
              title: plan.topic + ' (AI Curriculum Pack)',
              destinationId: 'halong',
              gradeBand: plan.gradeBand,
              category: 'Reading',
              description: `Approved lesson plan for ${plan.gradeLevel}. Includes suggested activities, custom vocabulary, and Bloom questions.`,
              fileType: 'Curriculum Plan',
              isPublished: true,
              createdAt: new Date().toISOString().split('T')[0],
              createdByName: 'Ms. Thu Trang'
            };
            onAddMaterial(newMat);
          }}
        />
      )}

    </div>
  );
};
