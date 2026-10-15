// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — 34 PROVINCES & CITIES EDUCATIONAL REPOSITORY
// Master Aggregator conforming to Resolution 202/2025/QH15 & Circular 27/2020/TT-BGDĐT
// ==============================================================================

import { ProvinceEducationalData } from './types';
import { CITIES_DATA } from './citiesData';
import { NORTH_PROVINCES_DATA } from './northProvincesData';
import { CENTRAL_PROVINCES_DATA } from './centralProvincesData';
import { SOUTH_PROVINCES_DATA } from './southProvincesData';

export * from './types';
export { CITIES_DATA } from './citiesData';
export { NORTH_PROVINCES_DATA } from './northProvincesData';
export { CENTRAL_PROVINCES_DATA } from './centralProvincesData';
export { SOUTH_PROVINCES_DATA } from './southProvincesData';

// 34 PROVINCES & CENTRALLY GOVERNED CITIES IN OFFICIAL SEQUENCE
export const PROVINCES_34_DATA: ProvinceEducationalData[] = [
  ...CITIES_DATA,           // 6 Centrally Governed Cities (Hanoi, Hai Phong, Hue, Da Nang, Ho Chi Minh City, Can Tho)
  ...NORTH_PROVINCES_DATA,   // 14 Northern Provinces
  ...CENTRAL_PROVINCES_DATA, // 8 Central & Highlands Provinces
  ...SOUTH_PROVINCES_DATA    // 6 Southern Provinces
];

// Lookup Maps for ultra-fast O(1) performance
export const PROVINCES_34_MAP_BY_CODE = new Map<string, ProvinceEducationalData>();
export const PROVINCES_34_MAP_BY_ID = new Map<string, ProvinceEducationalData>();

PROVINCES_34_DATA.forEach(p => {
  PROVINCES_34_MAP_BY_CODE.set(p.code.toUpperCase(), p);
  PROVINCES_34_MAP_BY_ID.set(p.id.toLowerCase(), p);
  // Alias for Thai Nguyen 'TN' vs 'TNG'
  if (p.code === 'TNG') {
    PROVINCES_34_MAP_BY_CODE.set('TN', p);
  }
});

// Helper Lookup Functions
export function getProvinceByCode(code: string): ProvinceEducationalData | undefined {
  if (!code) return undefined;
  return PROVINCES_34_MAP_BY_CODE.get(code.trim().toUpperCase());
}

export function getProvinceById(id: string): ProvinceEducationalData | undefined {
  if (!id) return undefined;
  return PROVINCES_34_MAP_BY_ID.get(id.trim().toLowerCase());
}

export function getProvincesByRegion(region: 'North' | 'Central' | 'South'): ProvinceEducationalData[] {
  return PROVINCES_34_DATA.filter(p => p.region === region);
}

export function getCentrallyGovernedCities(): ProvinceEducationalData[] {
  return PROVINCES_34_DATA.filter(p => p.type === 'city');
}

export function getProvincesByType(type: 'city' | 'province'): ProvinceEducationalData[] {
  return PROVINCES_34_DATA.filter(p => p.type === type);
}

export function searchProvinces(query: string): ProvinceEducationalData[] {
  if (!query || !query.trim()) return PROVINCES_34_DATA;
  const q = query.trim().toLowerCase();
  return PROVINCES_34_DATA.filter(p => 
    p.nameVi.toLowerCase().includes(q) ||
    p.nameEn.toLowerCase().includes(q) ||
    p.capitalVi.toLowerCase().includes(q) ||
    p.capitalEn.toLowerCase().includes(q) ||
    p.zone.toLowerCase().includes(q) ||
    p.code.toLowerCase().includes(q) ||
    p.distinctiveLocalFeatures.vi.toLowerCase().includes(q) ||
    p.distinctiveLocalFeatures.en.toLowerCase().includes(q) ||
    p.famousLandmarks.some(l => l.nameVi.toLowerCase().includes(q) || l.nameEn.toLowerCase().includes(q))
  );
}
