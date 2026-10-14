import React, { useState } from 'react';
import { 
  Plus, 
  BookOpen, 
  Upload, 
  Eye, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  FileText, 
  Layers,
  Sparkles,
  X
} from 'lucide-react';
import { MaterialItem, Destination, GradeBand } from '../../types';

interface LearningMaterialsProps {
  materials: MaterialItem[];
  destinations: Destination[];
  onAddMaterial: (mat: MaterialItem) => void;
  onDeleteMaterial: (id: string) => void;
  onTogglePublish: (id: string) => void;
}

export const LearningMaterials: React.FC<LearningMaterialsProps> = ({
  materials,
  destinations,
  onAddMaterial,
  onDeleteMaterial,
  onTogglePublish
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [previewMaterial, setPreviewMaterial] = useState<MaterialItem | null>(null);

  // New Material Form
  const [title, setTitle] = useState('');
  const [destinationId, setDestinationId] = useState(destinations[0]?.id || 'halong');
  const [gradeBand, setGradeBand] = useState<GradeBand>('grade_3');
  const [category, setCategory] = useState<MaterialItem['category']>('Reading');
  const [description, setDescription] = useState('');
  const [fileType, setFileType] = useState('PDF Document');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newMat: MaterialItem = {
      id: 'mat-' + Date.now(),
      title,
      destinationId,
      gradeBand,
      category,
      description,
      fileType,
      isPublished: true,
      createdAt: new Date().toISOString().split('T')[0],
      createdByName: 'Ms. Thu Trang'
    };
    onAddMaterial(newMat);
    setIsCreateModalOpen(false);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            Learning Materials Repository
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Create, upload, preview, and publish English worksheets, readings, and audio packs
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-200 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Upload / Create Material</span>
        </button>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {materials.map((mat) => {
          const dest = destinations.find(d => d.id === mat.destinationId);

          return (
            <div
              key={mat.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {mat.category}
                  </span>
                  <button
                    onClick={() => onTogglePublish(mat.id)}
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                      mat.isPublished
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {mat.isPublished ? '● Published' : 'Draft'}
                  </button>
                </div>

                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  {mat.title}
                </h4>
                <div className="text-xs font-semibold text-rose-600 mt-0.5">
                  📍 {dest?.name || 'General Vietnam'}
                </div>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {mat.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{mat.fileType}</span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setPreviewMaterial(mat)}
                    className="p-1.5 text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors"
                    title="Preview Material"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDeleteMaterial(mat.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Delete Material"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {previewMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Material Preview
                </h4>
              </div>
              <button
                onClick={() => setPreviewMaterial(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                {previewMaterial.category} • {previewMaterial.fileType}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{previewMaterial.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {previewMaterial.description}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Verified for elementary student assignments. Ready for classroom distribution.</span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewMaterial(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Material Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-extrabold text-slate-900 text-base font-heading">
                Create / Upload Learning Material
              </h4>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Material Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Da Nang Dragon Bridge Story & Vocabulary"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Destination</label>
                  <select
                    value={destinationId}
                    onChange={(e) => setDestinationId(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    {destinations.map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Reading">Reading</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Speaking">Speaking</option>
                    <option value="Worksheet">Worksheet</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Grade Tier</label>
                  <select
                    value={gradeBand}
                    onChange={(e) => setGradeBand(e.target.value as GradeBand)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="grade_1_2">Early Explorer (Grade 1–2)</option>
                    <option value="grade_3">Discovery Explorer (Grade 3)</option>
                    <option value="grade_4_5">Academic Scholar (Grade 4–5)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Format Type</label>
                  <select
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="PDF Document">PDF Document (.pdf)</option>
                    <option value="Word Document (.DOCX)">Word Document (.docx)</option>
                    <option value="PowerPoint Slides (.PPTX)">PowerPoint Slides (.pptx)</option>
                    <option value="Audio Pack (.MP3)">Audio Pack (.mp3)</option>
                    <option value="HTML5 Interactive ZIP">HTML5 Interactive Game (.zip)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description & Teacher Instructions</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Provide instructions for elementary students..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200"
                >
                  Save Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
