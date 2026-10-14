const fs = require('fs');

const data = JSON.parse(fs.readFileSync('vietnam_provinces_raw.geojson', 'utf8'));

// Bounding box with margins
const minLon = 101.8;
const maxLon = 117.2;
const minLat = 6.8;
const maxLat = 23.6;

const svgWidth = 920;
const svgHeight = 1120;
const paddingX = 40;
const paddingY = 40;

const drawW = svgWidth - paddingX * 2;
const drawH = svgHeight - paddingY * 2;

function project(lon, lat) {
  const x = paddingX + ((lon - minLon) / (maxLon - minLon)) * drawW;
  const y = paddingY + ((maxLat - lat) / (maxLat - minLat)) * drawH;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function rdp(points, epsilon) {
  if (points.length <= 2) return points;
  let dmax = 0;
  let index = 0;
  const [x1, y1] = points[0];
  const [x2, y2] = points[points.length - 1];

  for (let i = 1; i < points.length - 1; i++) {
    const d = distToSegment(points[i][0], points[i][1], x1, y1, x2, y2);
    if (d > dmax) {
      dmax = d;
      index = i;
    }
  }

  if (dmax > epsilon) {
    const rec1 = rdp(points.slice(0, index + 1), epsilon);
    const rec2 = rdp(points.slice(index), epsilon);
    return rec1.slice(0, rec1.length - 1).concat(rec2);
  } else {
    return [points[0], points[points.length - 1]];
  }
}

// Region and Zone mapping for 63 provinces
const REGION_MAP = {
  'Ha Giang': { r: 'North', z: 'Đông Bắc Bộ' },
  'Cao Bang': { r: 'North', z: 'Đông Bắc Bộ' },
  'Bac Kan': { r: 'North', z: 'Đông Bắc Bộ' },
  'Tuyen Quang': { r: 'North', z: 'Đông Bắc Bộ' },
  'Lao Cai': { r: 'North', z: 'Tây Bắc Bộ' },
  'Yen Bai': { r: 'North', z: 'Tây Bắc Bộ' },
  'Thai Nguyen': { r: 'North', z: 'Đông Bắc Bộ' },
  'Lang Son': { r: 'North', z: 'Đông Bắc Bộ' },
  'Bac Giang': { r: 'North', z: 'Đông Bắc Bộ' },
  'Phu Tho': { r: 'North', z: 'Đông Bắc Bộ' },
  'Dien Bien': { r: 'North', z: 'Tây Bắc Bộ' },
  'Lai Chau': { r: 'North', z: 'Tây Bắc Bộ' },
  'Son La': { r: 'North', z: 'Tây Bắc Bộ' },
  'Hoa Binh': { r: 'North', z: 'Tây Bắc Bộ' },
  'Ha Noi city': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Hai Phong city': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Quang Ninh': { r: 'North', z: 'Đông Bắc Bộ' },
  'Bac Ninh': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Hai Duong': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Hung Yen': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Ha Nam': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Nam Dinh': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Thai Binh': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Ninh Binh': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Vinh Phuc': { r: 'North', z: 'Đồng bằng Sông Hồng' },
  'Thanh Hoa': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Nghe An': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Ha Tinh': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Quang Binh': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Quang Tri': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Thua Thien - Hue': { r: 'Central', z: 'Bắc Trung Bộ' },
  'Da Nang city': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Quang Nam': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Quang Ngai': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Binh Dinh': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Phu Yen': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Khanh Hoa': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Ninh Thuan': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Binh Thuan': { r: 'Central', z: 'Duyên hải Nam Trung Bộ' },
  'Kon Tum': { r: 'Central', z: 'Tây Nguyên' },
  'Gia Lai': { r: 'Central', z: 'Tây Nguyên' },
  'Dak Lak': { r: 'Central', z: 'Tây Nguyên' },
  'Dak Nong': { r: 'Central', z: 'Tây Nguyên' },
  'Lam Dong': { r: 'Central', z: 'Tây Nguyên' },
  'Ho Chi Minh city': { r: 'South', z: 'Đông Nam Bộ' },
  'Ba Ria - Vung Tau': { r: 'South', z: 'Đông Nam Bộ' },
  'Binh Duong': { r: 'South', z: 'Đông Nam Bộ' },
  'Binh Phuoc': { r: 'South', z: 'Đông Nam Bộ' },
  'Dong Nai': { r: 'South', z: 'Đông Nam Bộ' },
  'Tay Ninh': { r: 'South', z: 'Đông Nam Bộ' },
  'Can Tho city': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'An Giang': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Bac Lieu': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Ben Tre': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Ca Mau': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Dong Thap': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Hau Giang': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Kien Giang': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Long An': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Soc Trang': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Tien Giang': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Tra Vinh': { r: 'South', z: 'Đồng bằng Sông Cửu Long' },
  'Vinh Long': { r: 'South', z: 'Đồng bằng Sông Cửu Long' }
};

// 34 Reorganized Priority Units
const REORGANIZED_34_SET = new Set([
  'Ha Noi city', 'Ho Chi Minh city', 'Hai Phong city', 'Da Nang city', 'Can Tho city',
  'Thua Thien - Hue', 'Quang Ninh', 'Bac Ninh', 'Hai Duong', 'Hung Yen',
  'Nam Dinh', 'Ninh Binh', 'Thai Binh', 'Vinh Phuc', 'Phu Tho',
  'Bac Giang', 'Thai Nguyen', 'Lao Cai', 'Lang Son', 'Thanh Hoa',
  'Nghe An', 'Ha Tinh', 'Quang Binh', 'Quang Tri', 'Quang Nam',
  'Quang Ngai', 'Binh Dinh', 'Khanh Hoa', 'Lam Dong', 'Ba Ria - Vung Tau',
  'Dong Nai', 'Binh Duong', 'An Giang', 'Kien Giang'
]);

const features = data.features.map((f, idx) => {
  const name = f.properties.Name;
  const note = f.properties.Note || '';
  const isHoangSa = idx === 61 || note.includes('Hoang Sa');
  const isTruongSa = idx === 63 || note.includes('Truong Sa');

  const geom = f.geometry;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;

  let totalX = 0;
  let totalY = 0;
  let pointCount = 0;
  let pathStr = '';

  // Use tighter epsilon for small islands, smooth for large mainland provinces
  const eps = (isHoangSa || isTruongSa) ? 0.0025 : 0.007;

  polys.forEach(rings => {
    rings.forEach(ring => {
      if (!ring || ring.length < 3) return;
      const simplified = rdp(ring, eps);
      if (simplified.length < 3) return;

      for (let i = 0; i < simplified.length; i++) {
        const [px, py] = project(simplified[i][0], simplified[i][1]);
        totalX += px;
        totalY += py;
        pointCount++;
        if (i === 0) {
          pathStr += 'M ' + px + ' ' + py + ' ';
        } else {
          pathStr += 'L ' + px + ' ' + py + ' ';
        }
      }
      pathStr += 'Z ';
    });
  });

  const centroid = pointCount > 0 
    ? { x: Math.round((totalX / pointCount) * 10) / 10, y: Math.round((totalY / pointCount) * 10) / 10 }
    : { x: 450, y: 550 };

  const regInfo = REGION_MAP[name] || { r: 'Central', z: 'Việt Nam' };

  let displayName = name;
  let englishName = name;
  let specialTag = undefined;

  if (isHoangSa) {
    displayName = 'Quần đảo Hoàng Sa (Đà Nẵng)';
    englishName = 'Paracel Islands (Da Nang)';
    specialTag = 'HoangSa';
  } else if (isTruongSa) {
    displayName = 'Quần đảo Trường Sa (Khánh Hòa)';
    englishName = 'Spratly Islands (Khanh Hoa)';
    specialTag = 'TruongSa';
  } else {
    displayName = name.replace(' city', '');
    englishName = name;
  }

  return {
    id: 'vn-geo-' + idx,
    rawName: name,
    name: displayName,
    englishName: englishName,
    region: regInfo.r,
    zone: regInfo.z,
    isSpecialArchipelago: specialTag,
    is34ReorganizedUnit: REORGANIZED_34_SET.has(name),
    centroid: centroid,
    svgPath: pathStr.trim()
  };
});

const tsCode = `// Official GIS Geographic Boundaries for Vietnam Provinces & Archipelagos
// Generated from WGS84 GeoJSON - Free-GIS-Data & Dept of Survey, Mapping and Geographic Information of Vietnam
// Projections calibrated to SVG ViewBox: 0 0 920 1120

export interface ProvinceGeoFeature {
  id: string;
  rawName: string;
  name: string;
  englishName: string;
  region: 'North' | 'Central' | 'South';
  zone: string;
  isSpecialArchipelago?: 'HoangSa' | 'TruongSa';
  is34ReorganizedUnit: boolean;
  centroid: { x: number; y: number };
  svgPath: string;
}

export const VIETNAM_PROVINCES_GEO: ProvinceGeoFeature[] = ${JSON.stringify(features, null, 2)};
`;

fs.writeFileSync('src/data/vietnamGeoData.ts', tsCode, 'utf8');
console.log('Successfully generated src/data/vietnamGeoData.ts! Total features:', features.length);
