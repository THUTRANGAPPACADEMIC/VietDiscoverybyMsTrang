import React from 'react';
import { X, GraduationCap, School, MapPin, Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface AboutCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutCreatorModal: React.FC<AboutCreatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5 text-rose-600">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-lg font-heading leading-tight">
                Về Tác Giả & Dự Án Sáng Kiến
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">
                VietDiscovery by Ms. Trang
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
          
          {/* Official Creator Credentials */}
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 text-indigo-950 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
              <School className="w-3 h-3" />
              <span>Chủ nhiệm đề tài & Tác giả sáng kiến</span>
            </div>
            <div className="font-extrabold text-base text-indigo-950 font-heading">
              Cô Trần Thị Thu Trang
            </div>
            <div className="flex items-center gap-1.5 text-xs text-indigo-900 font-semibold">
              <span>Đơn vị:</span>
              <strong>Trường Tiểu học Trang Tấn Khương</strong>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-indigo-800">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-indigo-600" />
              <span>Địa chỉ: <strong>Xã Hiệp Phước, Thành phố Hồ Chí Minh, Việt Nam</strong></span>
            </div>
          </div>

          {/* Educational Philosophy & Pedagogy */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Heart className="w-4 h-4 text-amber-600" />
              <span>Mục Tiêu & Triết Lý Sư Phạm:</span>
            </div>
            <p className="text-amber-950/90 leading-relaxed">
              Dự án kết hợp phương pháp <strong>EdTech hiện đại</strong> và <strong>Gamification (học qua trò chơi)</strong> nhằm khơi dậy tình yêu quê hương, đất nước và văn hóa Việt Nam trong từng bài học tiếng Anh. Trải nghiệm được phân hóa sư phạm chặt chẽ theo từng khối lớp từ Lớp 1 đến Lớp 5.
            </p>
          </div>

          {/* Geographic Integrity & Sovereignty */}
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-sky-950 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-sky-900">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Dữ Liệu Bản Đồ & Chủ Quyền Quốc Gia:</span>
            </div>
            <p className="text-sky-950/90 leading-relaxed">
              Bản đồ tương tác ứng dụng hệ tọa độ <strong>WGS84 GIS chuẩn xác</strong> từ <em>Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam</em>. Tác phẩm khẳng định chủ quyền toàn vẹn và bất khả xâm phạm của Việt Nam đối với <strong>Quần đảo Hoàng Sa (TP. Đà Nẵng)</strong>, <strong>Quần đảo Trường Sa (Tỉnh Khánh Hòa)</strong> cùng toàn bộ các hải đảo thiêng liêng trên Biển Đông.
            </p>
          </div>

          {/* 5 Classrooms Integration */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-600 space-y-1">
            <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-rose-500" />
              <span>Các Lớp Học Thực Nghiệm:</span>
            </div>
            <p className="text-[11px]">
              Hệ thống đã triển khai danh sách học sinh và phân hóa học liệu cho 5 lớp: <strong>2.2, 4.1, 4.6, 5.2, và 5.6</strong>, có mã bảo mật học sinh và lưu trữ tiến độ tự động trên máy chủ trường học.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2 border-t border-slate-100">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
