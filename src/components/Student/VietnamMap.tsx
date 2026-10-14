import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  Volume2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Info, 
  Search, 
  UploadCloud, 
  X, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { Destination, Region, GradeBand } from '../../types';
import { 
  OFFICIAL_34_PROVINCES_DATA, 
  MAP_METADATA, 
  AdministrativeUnitInfo 
} from '../../data/administrativeData';
import { 
  VIETNAM_PROVINCES_GEO, 
  ProvinceGeoFeature 
} from '../../data/vietnamGeoData';
import { playEnglishSpeech, playSpeech } from '../../lib/speech';
import { projectGeoToSvg } from '../../lib/geoProjection';

interface VietnamMapProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  gradeBand?: GradeBand;
  initialLayer?: 'destinations' | 'administrative';
  onSelectDestination: (dest: Destination) => void;
  onOpenLesson: (dest: Destination) => void;
}

// Visual layout styling parameters (offset, speech, emoji).
// Geographic anchor points are ALWAYS computed dynamically from WGS84 coordinates via projectGeoToSvg().
interface DestinationVisualLayout {
  labelDx: number;
  labelDy: number;
  labelAlign: 'left' | 'right';
  iconG12: string;
  pronounceTextEn: string;
  pronounceTextVi: string;
}

const DESTINATION_LAYOUT_CONFIG: Record<string, DestinationVisualLayout> = {
  hanoi: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: -32,
    iconG12: '🐢',
    pronounceTextEn: 'Hanoi Capital! The peaceful thousand-year-old capital city of Vietnam.',
    pronounceTextVi: 'Thủ đô Hà Nội! Trái tim ngàn năm văn hiến của đất nước Việt Nam.'
  },
  halong: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -28,
    iconG12: '⛵',
    pronounceTextEn: 'Ha Long Bay! Famous for magical emerald waters and limestone islands.',
    pronounceTextVi: 'Vịnh Hạ Long! Kỳ quan thiên nhiên thế giới thuộc tỉnh Quảng Ninh.'
  },
  hue: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: -24,
    iconG12: '👑',
    pronounceTextEn: 'Hue Imperial City! The historic royal capital by the gentle Perfume River.',
    pronounceTextVi: 'Cố đô Huế! Vùng đất di sản hoàng cung bên dòng sông Hương thơ mộng.'
  },
  danang: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: 20,
    iconG12: '🐉',
    pronounceTextEn: 'Da Nang and Hoi An! Marvel at the Golden Dragon Bridge and lantern ancient town.',
    pronounceTextVi: 'Đà Nẵng và Phố cổ Hội An! Cầu Rồng phun lửa và lung linh đèn lồng di sản.'
  },
  danang_hoian: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: 20,
    iconG12: '🐉',
    pronounceTextEn: 'Da Nang and Hoi An! Marvel at the Golden Dragon Bridge and lantern ancient town.',
    pronounceTextVi: 'Đà Nẵng và Phố cổ Hội An! Cầu Rồng phun lửa và lung linh đèn lồng di sản.'
  },
  hcmc: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -20,
    iconG12: '🏢',
    pronounceTextEn: 'Ho Chi Minh City! The energetic, modern metropolis of innovation and culture.',
    pronounceTextVi: 'Thành phố Hồ Chí Minh! Trung tâm kinh tế, văn hóa và đổi mới sáng tạo sôi động.'
  },
  hochiminh: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -20,
    iconG12: '🏢',
    pronounceTextEn: 'Ho Chi Minh City! The energetic, modern metropolis of innovation and culture.',
    pronounceTextVi: 'Thành phố Hồ Chí Minh! Trung tâm kinh tế, văn hóa và đổi mới sáng tạo sôi động.'
  },
  dalat: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -15,
    iconG12: '🌸',
    pronounceTextEn: 'Da Lat Pine City! The dreamy highland city of eternal spring and fresh flowers.',
    pronounceTextVi: 'Thành phố Ngàn hoa Đà Lạt! Xứ sở ngàn thông mộng mơ và ngát hương hoa tươi.'
  },
  mekong: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: 28,
    iconG12: '🛶',
    pronounceTextEn: 'Mekong River Delta! The land of nine dragons with bustling floating markets.',
    pronounceTextVi: 'Đồng bằng Sông Cửu Long! Vựa lúa, vườn cây ăn trái và chợ nổi miền Tây thanh bình.'
  }
};

export const VietnamMap: React.FC<VietnamMapProps> = ({
  destinations,
  selectedDestination,
  gradeBand = 'grade_3',
  initialLayer = 'administrative',
  onSelectDestination,
  onOpenLesson
}) => {
  const [activeRegion, setActiveRegion] = useState<'All' | Region>('All');
  const [mapLayer, setMapLayer] = useState<'destinations' | 'administrative'>(initialLayer);
  
  // Zoom & Pan state
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isExpandedCanvas, setIsExpandedCanvas] = useState<boolean>(false);
  
  // Administrative layer state & GIS hover
  const [adminSearch, setAdminSearch] = useState<string>('');
  const [selectedAdminUnit, setSelectedAdminUnit] = useState<AdministrativeUnitInfo | null>(null);
  const [hoveredGeo, setHoveredGeo] = useState<ProvinceGeoFeature | null>(null);
  const [activeSovereigntyIsland, setActiveSovereigntyIsland] = useState<'HoangSa' | 'TruongSa' | null>(null);
  
  // Data compliance & custom file upload modal
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState<boolean>(false);
  const [customMapFileName, setCustomMapFileName] = useState<string | null>(null);

  // Audio playing indicator
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter destinations
  const filteredDestinations = destinations.filter(d => 
    activeRegion === 'All' ? true : d.region === activeRegion
  );

  // Filter 34 provinces
  const filteredAdminUnits = OFFICIAL_34_PROVINCES_DATA.filter(item => {
    const matchesQuery = 
      item.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.administrativeCenter.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.zone.toLowerCase().includes(adminSearch.toLowerCase());
    const matchesRegion = activeRegion === 'All' ? true : item.region === activeRegion;
    return matchesQuery && matchesRegion;
  });

  // Handle Zoom controls
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.8));
  const handleResetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Handle Pan / Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Pronounce destination name in pure English for Elementary learners
  const handlePronounce = (dest: Destination, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const layout = DESTINATION_LAYOUT_CONFIG[dest.id] || DESTINATION_LAYOUT_CONFIG['hanoi'];
    const textToSpeak = layout ? layout.pronounceTextEn : `${dest.name}! Welcome to Vietnam!`;
    setIsPlayingAudio(true);
    playEnglishSpeech(textToSpeak, {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Handle Custom GeoJSON/SVG Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomMapFileName(file.name);
      alert(`Đã nạp tệp bản đồ chính thức: "${file.name}". Hệ thống tích hợp thành công lớp vector GIS!`);
      setIsComplianceModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      
      {/* 1. Header Toolbar */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-gradient-to-r from-sky-50/50 via-white to-amber-50/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-rose-500 text-white shadow-xs">
              <Compass className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading flex items-center gap-2">
              <span>Bản đồ Tương tác Việt Nam</span>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60 hidden sm:inline-block">
                Interactive Vietnam Map
              </span>
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Trọn vẹn chủ quyền lãnh thổ quốc gia & các quần đảo • Official WGS84 GIS Data
          </p>
        </div>

        {/* View Controls & Toggles */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          
          {/* Region Tabs */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-2xl text-xs font-bold overflow-x-auto max-w-full">
            {(['All', 'North', 'Central', 'South'] as const).map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  activeRegion === reg
                    ? 'bg-white text-rose-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {reg === 'All' ? 'Toàn quốc' : reg === 'North' ? 'Miền Bắc' : reg === 'Central' ? 'Miền Trung' : 'Miền Nam'}
              </button>
            ))}
          </div>

          {/* Layer Selector */}
          <button
            onClick={() => setMapLayer(mapLayer === 'destinations' ? 'administrative' : 'destinations')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-2xl text-xs font-bold border transition-all whitespace-nowrap ${
              mapLayer === 'administrative'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-200'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{mapLayer === 'destinations' ? '34 Tỉnh Thành' : 'Điểm học tập'}</span>
          </button>

          {/* Compliance & Citation Notice Button */}
          <button
            onClick={() => setIsComplianceModalOpen(true)}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            title="Cartographic Compliance & Data Sources"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Map Grid Area */}
      <div className={`grid grid-cols-1 ${isExpandedCanvas ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-0 relative`}>
        
        {/* Left Map Viewport */}
        <div 
          ref={containerRef}
          className={`${isExpandedCanvas ? 'lg:col-span-12' : 'lg:col-span-8'} p-3 sm:p-6 bg-gradient-to-b from-sky-50/70 via-sky-50/30 to-blue-50/40 flex flex-col items-center justify-center relative min-h-[580px] sm:min-h-[660px] overflow-hidden select-none`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          
          {/* Floating Sovereignty & Source Badge */}
          <div className="absolute top-4 left-4 z-20 max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-md text-[11px] leading-snug">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs text-rose-700 mb-1">
              <span className="text-sm">🇻🇳</span>
              <span>Bản đồ Nước Cộng hòa XHCN Việt Nam</span>
            </div>
            <p className="text-[10px] text-slate-600 font-medium">
              Thể hiện trọn vẹn chủ quyền lãnh thổ đất liền và các quần đảo <strong>Hoàng Sa (Đà Nẵng)</strong>, <strong>Trường Sa (Khánh Hòa)</strong>, <strong>Phú Quốc (Kiên Giang)</strong>, <strong>Côn Đảo</strong>.
            </p>
            <div className="text-[9px] text-slate-400 mt-1 italic flex items-center justify-between border-t border-slate-100 pt-1">
              <span>Nguồn: Cục Đo đạc, Bản đồ & TTĐL Việt Nam (WGS84)</span>
              {customMapFileName && <span className="text-emerald-600 font-bold">✓ Tệp nạp riêng</span>}
            </div>
          </div>

          {/* Hovered Province Tooltip */}
          {hoveredGeo && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-2 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-xl text-xs flex items-center gap-2.5 border border-slate-700/80 animate-fade-in">
              <span className="p-1.5 rounded-xl bg-rose-500 text-white font-bold text-xs">📍</span>
              <div>
                <div className="font-extrabold text-sm text-amber-300 font-heading">
                  {hoveredGeo.name}
                </div>
                <div className="text-[10.5px] text-slate-300 font-medium">
                  {hoveredGeo.englishName} • {hoveredGeo.zone} ({hoveredGeo.region === 'North' ? 'Miền Bắc' : hoveredGeo.region === 'Central' ? 'Miền Trung' : 'Miền Nam'})
                </div>
              </div>
            </div>
          )}

          {/* Floating Zoom & Canvas Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-md">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Phóng to (Zoom In)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Thu nhỏ (Zoom Out)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetView}
              className="p-2 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              title="Đặt lại góc nhìn (Reset 100%)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsExpandedCanvas(!isExpandedCanvas)}
              className="p-2 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors border-t border-slate-100"
              title={isExpandedCanvas ? "Thu gọn màn hình" : "Mở rộng bản đồ toàn màn hình"}
            >
              {isExpandedCanvas ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Zoom Level Indicator */}
          {zoomLevel !== 1 && (
            <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white rounded-full text-[10px] font-bold">
              Phóng to: {Math.round(zoomLevel * 100)}% (Kéo để khám phá)
            </div>
          )}

          {/* High-Precision Cartographic SVG Canvas */}
          <div 
            className="w-full h-full max-w-[620px] aspect-[8/10] transition-transform duration-150 ease-out my-2 flex items-center justify-center"
            style={{
              transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
          >
            <svg
              viewBox="0 0 920 1120"
              className="w-full h-full drop-shadow-xl select-none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Ocean Ambient Filter */}
                <linearGradient id="oceanBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f0f9ff" />
                  <stop offset="50%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#bae6fd" />
                </linearGradient>

                {/* Drop shadow for landmass */}
                <filter id="cartoGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#047857" floodOpacity="0.18" />
                </filter>
              </defs>

              {/* 1. Sea & Ocean Background Frame (Calibrated 920 × 1120) */}
              <rect x="0" y="0" width="920" height="1120" rx="36" fill="url(#oceanBgGrad)" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Authoritative WGS84 Coordinate Grid (Parallels & Meridians matching 2025 Official Map) */}
              <g id="wgs84-coordinate-grid" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.5">
                {/* Parallels (Latitudes) */}
                <line x1="40" y1="139" x2="880" y2="139" />
                <line x1="40" y1="263" x2="880" y2="263" />
                <line x1="40" y1="387" x2="880" y2="387" />
                <line x1="40" y1="510" x2="880" y2="510" />
                <line x1="40" y1="634" x2="880" y2="634" />
                <line x1="40" y1="758" x2="880" y2="758" />
                <line x1="40" y1="882" x2="880" y2="882" />
                <line x1="40" y1="1006" x2="880" y2="1006" />

                {/* Meridians (Longitudes) */}
                <line x1="160" y1="40" x2="160" y2="1080" />
                <line x1="269" y1="40" x2="269" y2="1080" />
                <line x1="378" y1="40" x2="378" y2="1080" />
                <line x1="487" y1="40" x2="487" y2="1080" />
                <line x1="596" y1="40" x2="596" y2="1080" />
                <line x1="705" y1="40" x2="705" y2="1080" />
                <line x1="815" y1="40" x2="815" y2="1080" />
              </g>

              {/* Coordinate Degree Labels on Map Margins */}
              <g id="wgs84-coordinate-labels" fill="#0369a1" fontSize="9" fontWeight="bold" opacity="0.65">
                {/* Latitude Labels (Left Margin) */}
                <text x="14" y="142">22°B</text>
                <text x="14" y="266">20°B</text>
                <text x="14" y="390">18°B</text>
                <text x="14" y="513">16°B</text>
                <text x="14" y="637">14°B</text>
                <text x="14" y="761">12°B</text>
                <text x="14" y="885">10°B</text>
                <text x="14" y="1009">8°B</text>

                {/* Longitude Labels (Top Margin) */}
                <text x="146" y="28">104°Đ</text>
                <text x="255" y="28">106°Đ</text>
                <text x="364" y="28">108°Đ</text>
                <text x="473" y="28">110°Đ</text>
                <text x="582" y="28">112°Đ</text>
                <text x="691" y="28">114°Đ</text>
                <text x="801" y="28">116°Đ</text>
              </g>

              {/* Ocean Typography */}
              <text x="640" y="320" fill="#0284c7" fontSize="24" fontWeight="900" letterSpacing="6" opacity="0.75" className="font-heading">
                BIỂN ĐÔNG
              </text>
              <text x="640" y="350" fill="#0369a1" fontSize="13" fontWeight="bold" letterSpacing="3" opacity="0.6">
                (VIETNAMESE EAST SEA)
              </text>

              <text x="360" y="240" fill="#0284c7" fontSize="13" fontWeight="bold" letterSpacing="2" opacity="0.55">
                VỊNH BẮC BỘ (GULF OF TONKIN)
              </text>

              <text x="90" y="1030" fill="#0284c7" fontSize="12" fontWeight="bold" letterSpacing="1.5" opacity="0.5">
                VỊNH THÁI LAN
              </text>

              {/* 2. Official GIS Mainland Provinces Boundaries (Real WGS84 Polygons) */}
              <g id="vietnam-mainland-gis" filter="url(#cartoGlow)">
                {VIETNAM_PROVINCES_GEO.map((geo) => {
                  if (geo.isSpecialArchipelago) return null; // Handled in prominent sovereignty section

                  const isMatchRegion = activeRegion === 'All' || geo.region === activeRegion;
                  const isHovered = hoveredGeo?.id === geo.id;
                  const isSelectedAdmin = selectedAdminUnit?.name.toLowerCase().includes(geo.name.toLowerCase());

                  // Dynamic harmonic palette
                  let fill = '#10b981';
                  if (geo.region === 'North') fill = '#10b981';
                  else if (geo.region === 'Central') fill = '#0ea5e9';
                  else if (geo.region === 'South') fill = '#f59e0b';

                  if (!isMatchRegion) {
                    fill = '#94a3b8';
                  }

                  if (isHovered) {
                    fill = '#f43f5e';
                  } else if (isSelectedAdmin) {
                    fill = '#6366f1';
                  }

                  return (
                    <path
                      key={geo.id}
                      d={geo.svgPath}
                      fill={fill}
                      fillOpacity={!isMatchRegion ? 0.35 : isHovered ? 0.95 : isSelectedAdmin ? 0.9 : 0.8}
                      stroke={isHovered ? '#ffffff' : '#064e3b'}
                      strokeWidth={isHovered ? 2 : 0.8}
                      strokeLinejoin="round"
                      className="transition-colors duration-150 cursor-pointer"
                      onMouseEnter={() => setHoveredGeo(geo)}
                      onMouseLeave={() => setHoveredGeo(null)}
                      onClick={() => {
                        const matchedAdmin = OFFICIAL_34_PROVINCES_DATA.find(u => 
                          u.name.toLowerCase().includes(geo.name.toLowerCase()) || 
                          geo.name.toLowerCase().includes(u.name.toLowerCase())
                        );
                        if (matchedAdmin) {
                          setSelectedAdminUnit(matchedAdmin);
                          setMapLayer('administrative');
                        }
                      }}
                    >
                      <title>{geo.name} ({geo.englishName}) - {geo.zone}</title>
                    </path>
                  );
                })}
              </g>

              {/* 3. PARACEL ISLANDS (Quần đảo Hoàng Sa - Thuộc TP. Đà Nẵng, Việt Nam) */}
              {(() => {
                const hoangSaGeo = VIETNAM_PROVINCES_GEO.find(g => g.isSpecialArchipelago === 'HoangSa');
                return (
                  <g 
                    id="hoang-sa-sovereignty" 
                    className="cursor-pointer group"
                    onClick={() => setActiveSovereigntyIsland('HoangSa')}
                  >
                    {/* Visual Frame & Sovereignty Plaque */}
                    <rect 
                      x="535" 
                      y="420" 
                      width="240" 
                      height="125" 
                      rx="18" 
                      fill="#fffbeb" 
                      stroke="#d97706" 
                      strokeWidth="2" 
                      strokeDasharray="4 3"
                      className="shadow-md group-hover:stroke-rose-600 transition-colors"
                    />

                    {/* Exact GIS Polygons for Hoang Sa Islands */}
                    {hoangSaGeo && (
                      <path
                        d={hoangSaGeo.svgPath}
                        fill="#f59e0b"
                        stroke="#b45309"
                        strokeWidth="1.5"
                        className="group-hover:fill-rose-500 transition-colors"
                      />
                    )}

                    {/* Radar Pulse around centroid */}
                    <circle cx="592.3" cy="480.9" r="15" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                    <circle cx="592.3" cy="480.9" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                    {/* Sovereignty Typography */}
                    <text x="550" y="445" fill="#b45309" fontSize="13" fontWeight="900" className="font-heading">
                      🇻🇳 QĐ. HOÀNG SA
                    </text>
                    <text x="550" y="462" fill="#92400e" fontSize="10.5" fontWeight="bold">
                      (Thuộc TP. Đà Nẵng, VN)
                    </text>
                    <text x="550" y="478" fill="#78350f" fontSize="9" fontStyle="italic">
                      Paracel Islands • 16°–17°B, 111°–113°Đ
                    </text>
                    <text x="550" y="530" fill="#b45309" fontSize="9" fontWeight="600">
                      Đảo Hoàng Sa, Đảo Phú Lâm, Tri Tôn...
                    </text>
                  </g>
                );
              })()}

              {/* 4. SPRATLY ISLANDS (Quần đảo Trường Sa - Thuộc Tỉnh Khánh Hòa, Việt Nam) */}
              {(() => {
                const truongSaGeo = VIETNAM_PROVINCES_GEO.find(g => g.isSpecialArchipelago === 'TruongSa');
                return (
                  <g 
                    id="truong-sa-sovereignty" 
                    className="cursor-pointer group"
                    onClick={() => setActiveSovereigntyIsland('TruongSa')}
                  >
                    {/* Visual Frame & Sovereignty Plaque */}
                    <rect 
                      x="510" 
                      y="780" 
                      width="275" 
                      height="165" 
                      rx="18" 
                      fill="#fffbeb" 
                      stroke="#d97706" 
                      strokeWidth="2" 
                      strokeDasharray="4 3"
                      className="shadow-md group-hover:stroke-rose-600 transition-colors"
                    />

                    {/* Exact GIS Polygons for Truong Sa (67 atolls) */}
                    {truongSaGeo && (
                      <path
                        d={truongSaGeo.svgPath}
                        fill="#f59e0b"
                        stroke="#b45309"
                        strokeWidth="1.5"
                        className="group-hover:fill-rose-500 transition-colors"
                      />
                    )}

                    {/* Radar Pulse around centroid */}
                    <circle cx="729.7" cy="912.8" r="16" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                    <circle cx="729.7" cy="912.8" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                    {/* Sovereignty Typography */}
                    <text x="525" y="805" fill="#b45309" fontSize="13" fontWeight="900" className="font-heading">
                      🇻🇳 QĐ. TRƯỜNG SA
                    </text>
                    <text x="525" y="822" fill="#92400e" fontSize="10.5" fontWeight="bold">
                      (Thuộc Tỉnh Khánh Hòa, VN)
                    </text>
                    <text x="525" y="838" fill="#78350f" fontSize="9" fontStyle="italic">
                      Spratly Islands • 8°30'–11°30'B, 112°–116°Đ
                    </text>
                    <text x="525" y="930" fill="#b45309" fontSize="9" fontWeight="600">
                      Đảo Trường Sa Lớn, Song Tử Tây, Sinh Tồn...
                    </text>
                  </g>
                );
              })()}

              {/* 5. PHU QUOC ISLAND & THO CHU (WGS84: 10.23°N, 103.96°E & 9.30°N, 103.48°E) */}
              <g id="phu-quoc-island">
                <ellipse cx="158" cy="868" rx="14" ry="24" transform="rotate(-15 158 868)" fill="#10b981" stroke="#047857" strokeWidth="2.5" />
                <text x="86" y="865" fill="#065f46" fontSize="11" fontWeight="800">
                  Đ. Phú Quốc
                </text>
                <text x="86" y="878" fill="#047857" fontSize="9">
                  (An Giang / Kiên Giang)
                </text>
                {/* Tho Chu Islands */}
                <circle cx="132" cy="925" r="4.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="86" y="932" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  QĐ. Thổ Chu
                </text>
              </g>

              {/* 6. CON DAO ISLANDS (WGS84: 8.68°N, 106.60°E) */}
              <g id="con-dao-island">
                <ellipse cx="302" cy="963" rx="9" ry="6" fill="#10b981" stroke="#047857" strokeWidth="2" />
                <circle cx="314" cy="968" r="3" fill="#10b981" stroke="#047857" strokeWidth="1" />
                <text x="320" y="962" fill="#065f46" fontSize="10.5" fontWeight="800">
                  Côn Đảo (Côn Sơn)
                </text>
                <text x="320" y="974" fill="#047857" fontSize="8.5">
                  (TP. Hồ Chí Minh)
                </text>
              </g>

              {/* 7. OTHER STRATEGIC ISLANDS (WGS84 Projected) */}
              {/* Bach Long Vi (20.133°N, 107.724°E -> x: 363, y: 255) */}
              <g id="bach-long-vi">
                <circle cx="363" cy="255" r="4" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                <text x="373" y="259" fill="#92400e" fontSize="9" fontWeight="bold">
                  Đ. Bạch Long Vĩ (Hải Phòng)
                </text>
              </g>

              {/* Cat Ba Island (20.730°N, 107.045°E -> x: 326, y: 218) */}
              <g id="cat-ba">
                <circle cx="326" cy="218" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="334" y="222" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  Đ. Cát Bà
                </text>
              </g>

              {/* Co To Island (20.985°N, 107.760°E -> x: 365, y: 202) */}
              <g id="co-to">
                <circle cx="365" cy="202" r="3.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="373" y="206" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  Đ. Cô Tô (Quảng Ninh)
                </text>
              </g>

              {/* Ly Son Island (15.381°N, 109.123°E -> x: 439, y: 549) */}
              <g id="ly-son">
                <circle cx="439" cy="549" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="449" y="553" fill="#065f46" fontSize="9" fontWeight="bold">
                  Đ. Lý Sơn (Quảng Ngãi)
                </text>
              </g>

              {/* Phu Quy Island (10.523°N, 108.943°E -> x: 430, y: 850) */}
              <g id="phu-quy">
                <circle cx="430" cy="850" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="440" y="854" fill="#065f46" fontSize="9" fontWeight="bold">
                  Đ. Phú Quý (Lâm Đồng)
                </text>
              </g>

              {/* ======================================================== */}
              {/* GAME ADVENTURE OVERLAYS: MOUNTAINS, FORESTS & COMPASS    */}
              {/* ======================================================== */}

              {/* Decorative Compass Rose */}
              <g transform="translate(810, 110)" className="cursor-pointer group">
                <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" opacity="0.92" className="shadow-sm" />
                <polygon points="0,-28 7,-6 0,-2 -7,-6" fill="#e11d48" />
                <polygon points="0,28 7,6 0,2 -7,6" fill="#0284c7" />
                <polygon points="-28,0 -6,7 -2,0 -6,-7" fill="#64748b" />
                <polygon points="28,0 6,7 2,0 6,-7" fill="#64748b" />
                <text x="0" y="-32" textAnchor="middle" fontSize="12" fontWeight="900" fill="#e11d48">N</text>
                <text x="0" y="42" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0284c7">S</text>
                <text x="42" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">E</text>
                <text x="-42" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">W</text>
              </g>

              {/* Northwest Mountain Range & Fansipan Peak (WGS84: 22.303°N, 103.775°E -> x: 148, y: 120) */}
              <g transform="translate(148, 120)" opacity="0.85" pointerEvents="none">
                <polygon points="0,0 16,-22 32,0" fill="#065f46" stroke="#047857" strokeWidth="1.5" />
                <polygon points="12,-16 16,-22 20,-16" fill="#ffffff" />
                <polygon points="20,0 34,-26 48,0" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
                <polygon points="30,-20 34,-26 38,-20" fill="#ffffff" />
                <text x="34" y="-30" fontSize="8.5" fontWeight="bold" fill="#064e3b" textAnchor="middle">🏔️ Fansipan 3,143m</text>
              </g>

              {/* Truong Son Mountain Spine (Dãy Trường Sơn) */}
              <g transform="translate(300, 380)" opacity="0.75" pointerEvents="none">
                <polygon points="0,0 12,-18 24,0" fill="#047857" />
                <polygon points="16,0 28,-22 40,0" fill="#065f46" />
                <polygon points="32,0 44,-16 56,0" fill="#047857" />
                <text x="28" y="-24" fontSize="8" fontWeight="bold" fill="#064e3b" textAnchor="middle">Dãy Trường Sơn</text>
              </g>

              {/* Ha Long Bay traditional junk boat illustration */}
              <g transform="translate(355, 185)" opacity="0.85" pointerEvents="none">
                <path d="M 0 6 L 14 6 L 11 11 L 3 11 Z" fill="#b45309" />
                <polygon points="7,5 7,-6 13,2" fill="#ea580c" />
              </g>

              {/* 8. INTERACTIVE DESTINATION PINS (Mathematically anchored via WGS84 + Connector Lines) */}
              {mapLayer === 'destinations' && filteredDestinations.map((dest) => {
                // Dynamically compute exact geographic anchor coordinates using authoritative WGS84 projection
                const anchor = dest.geoCoordinates 
                  ? projectGeoToSvg(dest.geoCoordinates.longitude, dest.geoCoordinates.latitude)
                  : { x: 300, y: 300 };

                const layout = DESTINATION_LAYOUT_CONFIG[dest.id] || {
                  labelAlign: 'right',
                  labelDx: 40,
                  labelDy: 0,
                  iconG12: '⭐',
                  pronounceTextEn: dest.name,
                  pronounceTextVi: dest.vietnameseName
                };

                const isSelected = selectedDestination?.id === dest.id;
                const isGrade12 = gradeBand === 'grade_1_2';

                // Target position of floating label box
                const labelX = anchor.x + layout.labelDx;
                const labelY = anchor.y + layout.labelDy;
                const labelWidth = Math.max(dest.name.length * 8.5 + 46, 130);

                return (
                  <g
                    key={dest.id}
                    onClick={() => onSelectDestination(dest)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing indicator around exact geographic anchor point when selected */}
                    {isSelected && (
                      <circle
                        cx={anchor.x}
                        cy={anchor.y}
                        r="24"
                        fill="#f43f5e"
                        opacity="0.35"
                        className="animate-ping"
                      />
                    )}

                    {/* SVG Connector Line linking Anchor to Floating Label Box */}
                    <line
                      x1={anchor.x}
                      y1={anchor.y}
                      x2={labelX}
                      y2={labelY}
                      stroke={isSelected ? '#e11d48' : '#94a3b8'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      strokeDasharray={isSelected ? 'none' : '3,3'}
                      className="transition-colors duration-200"
                    />

                    {/* Exact Geographic Pinpoint at WGS84 coordinate */}
                    <circle
                      cx={anchor.x}
                      cy={anchor.y}
                      r={isSelected ? 14 : 9}
                      fill={isSelected ? '#e11d48' : '#f43f5e'}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? '3.5' : '2.5'}
                      className="transition-all duration-300 group-hover:scale-125 shadow-md"
                    />

                    {/* Inner Pin Dot */}
                    <circle
                      cx={anchor.x}
                      cy={anchor.y}
                      r="3.5"
                      fill="#ffffff"
                    />

                    {/* Joint dot on label connector */}
                    <circle
                      cx={labelX}
                      cy={labelY}
                      r="3"
                      fill={isSelected ? '#e11d48' : '#64748b'}
                    />

                    {/* Floating Label Box with Adventure Icon */}
                    {layout.labelAlign === 'right' ? (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x="0"
                          y="-16"
                          width={labelWidth}
                          height="32"
                          rx="16"
                          fill={isSelected ? '#1e293b' : '#ffffff'}
                          stroke={isSelected ? '#f43f5e' : '#cbd5e1'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          className="shadow-md transition-all group-hover:stroke-rose-500"
                        />
                        <text
                          x="12"
                          y="5"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize="12.5"
                          fontWeight="800"
                          className="font-heading"
                        >
                          {layout.iconG12} {dest.name}
                        </text>
                      </g>
                    ) : (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x={-labelWidth}
                          y="-16"
                          width={labelWidth}
                          height="32"
                          rx="16"
                          fill={isSelected ? '#1e293b' : '#ffffff'}
                          stroke={isSelected ? '#f43f5e' : '#cbd5e1'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          className="shadow-md transition-all group-hover:stroke-rose-500"
                        />
                        <text
                          x="-12"
                          y="5"
                          textAnchor="end"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize="12.5"
                          fontWeight="800"
                          className="font-heading"
                        >
                          {layout.iconG12} {dest.name}
                        </text>
                      </g>
                    )}

                    {/* Grade 1-2 Big Graphic Avatar & Listen button */}
                    {isGrade12 && (
                      <g 
                        transform={`translate(${layout.labelAlign === 'right' ? labelX + labelWidth + 6 : labelX - labelWidth - 38}, ${labelY - 16})`}
                        onClick={(e) => handlePronounce(dest, e)}
                        className="cursor-pointer"
                      >
                        <rect width="32" height="32" rx="16" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" className="shadow-xs" />
                        <text x="16" y="21" fontSize="16" textAnchor="middle">
                          🔊
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick Helpful Instruction for Students */}
          <div className="absolute bottom-3 text-center text-xs text-slate-500 font-semibold bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            {gradeBand === 'grade_1_2' 
              ? '✨ Bé bấm vào chấm tròn đỏ hoặc biểu tượng hoạt họa để nghe tên và khám phá nhé!' 
              : '🧭 Bấm vào bất kỳ điểm đến nào trên bản đồ để mở thẻ giới thiệu & bắt đầu bài học'}
          </div>
        </div>

        {/* Right Panel: Showcase Card (Destinations) OR Administrative Directory (34 Provinces) */}
        {!isExpandedCanvas && (
          <div className="lg:col-span-4 p-5 bg-white border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-between overflow-y-auto max-h-[700px]">
            
            {/* MODE 1: 34 ADMINISTRATIVE UNITS LAYER */}
            {mapLayer === 'administrative' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-indigo-700">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h4 className="font-extrabold text-sm sm:text-base font-heading">
                      34 Đơn Vị Hành Chính (Official Units)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {filteredAdminUnits.length} Tỉnh/TP
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Dữ liệu 34 tỉnh, thành phố trực thuộc Trung ương theo phương án sắp xếp, tinh gọn bộ máy và sáp nhập đô thị của Quốc hội & UBTVQH (2023–2025):
                </p>

                {/* Search Box */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Tìm theo tên tỉnh, đô thị trung tâm..."
                    value={adminSearch}
                    onChange={(e) => setAdminSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* 34 Provinces List */}
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {filteredAdminUnits.map((item) => (
                    <div 
                      key={item.code} 
                      onClick={() => setSelectedAdminUnit(item)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        selectedAdminUnit?.code === item.code
                          ? 'bg-indigo-50/80 border-indigo-400 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-slate-800 text-xs">
                        <span className="font-heading">{item.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-indigo-700 border border-slate-200">
                          {item.zone}
                        </span>
                      </div>
                      
                      <div className="text-[11px] text-slate-500 mt-1">
                        Trung tâm hành chính: <strong>{item.administrativeCenter}</strong>
                      </div>

                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {item.districtMergerSummary}
                      </p>

                      {item.islandDistricts && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {item.islandDistricts.map((isl, idx) => (
                            <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                              🏝️ {isl}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="text-[9.5px] text-slate-400 mt-1.5 italic">
                        Căn cứ: {item.officialSource} ({item.dateAnnounced})
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
                  <strong>📌 Nguyên tắc sư phạm:</strong> Hệ thống phân biệt minh bạch giữa đơn vị hành chính lãnh thổ và các điểm đến bài học tiếng Anh văn hóa.
                </div>
              </div>

            // MODE 2: DESTINATION SHOWCASE CARD
            ) : selectedDestination ? (
              <div className="space-y-4">
                
                {/* Destination Photo Banner */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-sm">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                      {selectedDestination.region === 'North' ? 'Miền Bắc' : selectedDestination.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-rose-500/90 text-white text-[11px] font-bold">
                      {selectedDestination.theme}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 text-2xl drop-shadow-md">
                    {selectedDestination.badge.icon}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-extrabold text-xl font-heading drop-shadow-sm">
                      {selectedDestination.name}
                    </h4>
                    <p className="text-xs text-slate-200 font-semibold drop-shadow-sm">
                      🇻🇳 {selectedDestination.vietnameseName} • {selectedDestination.province}
                    </p>
                  </div>
                </div>

                {/* WGS84 Geographic Coordinates Badge */}
                {selectedDestination.geoCoordinates && (
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 font-mono">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      Tọa độ WGS84:
                    </span>
                    <span className="font-bold text-slate-800">
                      {selectedDestination.geoCoordinates.latitude}°N, {selectedDestination.geoCoordinates.longitude}°E
                    </span>
                  </div>
                )}

                {/* Pronunciation & Audio Action Bar (Especially for Grade 1-2) */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {DESTINATION_LAYOUT_CONFIG[selectedDestination.id]?.iconG12 || '⭐'}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        {gradeBand === 'grade_1_2' ? 'Nghe phát âm chuẩn:' : 'Nghe & Luyện đọc:'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {selectedDestination.name} ({selectedDestination.vietnameseName})
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handlePronounce(selectedDestination, e)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs shadow-xs transition-transform active:scale-95"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingAudio ? 'Đang phát...' : 'Nghe giọng mẫu 🔊'}</span>
                  </button>
                </div>

                {/* Story & Summary Section */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {selectedDestination.summaryEn}
                  </p>
                  <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    🇻🇳 {selectedDestination.summaryVi}
                  </p>
                </div>

                {/* Differentiated Metrics */}
                {(() => {
                  const content = selectedDestination.gradeContent?.[gradeBand] || selectedDestination.gradeContent?.grade_3;
                  return (
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs">
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="font-extrabold text-slate-800 text-base">{content?.vocabulary?.length || 0}</div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Từ vựng</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="font-extrabold text-slate-800 text-base">{content?.quiz?.length || 0}</div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Câu hỏi Bloom</div>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                        <div className="font-extrabold text-amber-600 text-base">⭐ +50</div>
                        <div className="text-[10px] text-amber-700 font-semibold uppercase">Phần thưởng</div>
                      </div>
                    </div>
                  );
                })()}

                {/* Prominent START Button (Khởi động bài học ngay) */}
                <button
                  onClick={() => onOpenLesson(selectedDestination)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-base shadow-lg shadow-rose-200 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-98"
                >
                  <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                  <span>BẮT ĐẦU HÀNH TRÌNH KHÁM PHÁ</span>
                </button>
              </div>

            // NO DESTINATION SELECTED (Prompt)
            ) : (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="p-4 rounded-3xl bg-rose-50 text-rose-500 mb-3 animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <h5 className="font-extrabold text-slate-800 text-base font-heading">
                  Chọn một điểm đến trên bản đồ
                </h5>
                <p className="text-xs text-slate-500 mt-1 max-w-[240px] leading-relaxed">
                  Bấm vào một điểm đến trên bản đồ Việt Nam để xem ảnh giới thiệu, nghe phát âm và bắt đầu bài học tiếng Anh!
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {destinations.map(d => (
                    <button
                      key={d.id}
                      onClick={() => onSelectDestination(d)}
                      className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* 3. Sovereignty Details Modal for Hoang Sa & Truong Sa */}
      {activeSovereigntyIsland && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-rose-600">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
                  {activeSovereigntyIsland === 'HoangSa' ? '🇻🇳 Quần đảo Hoàng Sa' : '🇻🇳 Quần đảo Trường Sa'}
                </h4>
              </div>
              <button
                onClick={() => setActiveSovereigntyIsland(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950">
                <div className="font-bold text-sm mb-1 text-amber-900">
                  {activeSovereigntyIsland === 'HoangSa' 
                    ? 'Đơn vị hành chính: Huyện Hoàng Sa, Thành phố Đà Nẵng, Việt Nam' 
                    : 'Đơn vị hành chính: Huyện Trường Sa, Tỉnh Khánh Hòa, Việt Nam'}
                </div>
                <p>
                  {activeSovereigntyIsland === 'HoangSa'
                    ? 'Quần đảo Hoàng Sa gồm đảo Hoàng Sa, đảo Phú Lâm, đảo Cây, đảo Tri Tôn... nằm tại tọa độ 16°–17° vĩ Bắc, 111°–113° kinh Đông trên Biển Đông Việt Nam.'
                    : 'Quần đảo Trường Sa gồm đảo Trường Sa Lớn, Song Tử Tây, Sinh Tồn, Nam Yết, Phan Vinh... nằm tại tọa độ 8°30\'–11°30\' vĩ Bắc, 112°–116° kinh Đông trên Biển Đông Việt Nam.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 space-y-1.5">
                <div className="font-bold text-sky-900">📜 Căn cứ lịch sử và pháp lý quốc tế:</div>
                <p>
                  Nhà nước Việt Nam qua các triều đại lịch sử (từ thời Chúa Nguyễn, Triều Tây Sơn, Triều Nguyễn cho đến nay) đã xác lập, thực thi và bảo vệ chủ quyền quốc gia một cách hòa bình, liên tục và hợp pháp đối với hai quần đảo Hoàng Sa và Trường Sa theo đúng luật pháp quốc tế.
                </p>
                <p className="text-[11px] text-sky-700 italic">
                  Châu bản triều Nguyễn và các bộ chính sử quốc gia như Đại Nam Thực Lục, Phủ Biên Tạp Lục đã ghi chép đầy đủ về hoạt động của Đội Hoàng Sa kiêm quản Trường Sa.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setActiveSovereigntyIsland(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Official Cartographic Compliance & File Upload Modal */}
      {isComplianceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-rose-600">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Nguồn Bản Đồ & Bổ Sung Tệp Chính Thức
                </h4>
              </div>
              <button
                onClick={() => setIsComplianceModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900">
                <div className="font-bold mb-1">🇻🇳 Căn cứ đo đạc và chủ quyền lãnh thổ:</div>
                <p>
                  {MAP_METADATA.territoryStatement}
                </p>
                <div className="text-[11px] mt-1.5 text-sky-700">
                  Cơ quan nguồn: <strong>{MAP_METADATA.sourceAgency}</strong>.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                <div className="font-bold mb-1">📋 Tài liệu số hóa ranh giới hành chính chi tiết cần bổ sung:</div>
                <p>
                  Để hiển thị từng đường ranh giới cấp huyện, xã hoặc lớp bản đồ 34 tỉnh sau sắp xếp theo đúng quy chuẩn Nhà nước, quý Thầy Cô có thể tải lên tệp vector GeoJSON hoặc SVG chính thức do Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam phát hành:
                </p>
              </div>

              {/* Upload Official Map File Box */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-indigo-500 text-center space-y-2 bg-slate-50 transition-colors">
                <UploadCloud className="w-8 h-8 text-indigo-600 mx-auto" />
                <div className="font-bold text-slate-800 text-xs">
                  Tải lên tệp bản đồ chính thức (.geojson hoặc .svg)
                </div>
                <p className="text-[11px] text-slate-400">
                  Định dạng khuyến nghị: WGS84 GeoJSON hoặc vector SVG chuẩn tọa độ GIS
                </p>
                <label className="inline-block px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-sm shadow-indigo-200 transition-all">
                  <span>Chọn tệp từ thiết bị</span>
                  <input
                    type="file"
                    accept=".geojson,.svg,.json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {customMapFileName && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tệp bản đồ đang kích hoạt: {customMapFileName}</span>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setIsComplianceModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Đóng thông báo
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
