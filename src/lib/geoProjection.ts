/**
 * VietDiscovery by Ms. Trang - Authoritative GIS Map Projection Engine
 * 
 * Maps WGS84 geographic coordinates (longitude, latitude) directly to SVG canvas coordinates.
 * Strictly calibrated with the official GeoJSON polygon boundary data of Vietnam.
 * 
 * Geographic bounding box:
 *   Longitude: 101.8°E (West - Điện Biên) to 117.2°E (East - Trường Sa / Biển Đông)
 *   Latitude:   6.8°N (South - Thềm lục địa / Bãi Tư Chính) to 23.6°N (North - Lũng Cú, Hà Giang)
 * 
 * Canvas dimensions:
 *   SVG ViewBox: 0 0 920 1120
 *   Padding: 40px
 *   Draw Area: 840px × 1040px
 */

export const MAP_GEO_BOUNDS = {
  minLon: 101.8,
  maxLon: 117.2,
  minLat: 6.8,
  maxLat: 23.6,
  svgWidth: 920,
  svgHeight: 1120,
  paddingX: 40,
  paddingY: 40,
  drawW: 840,
  drawH: 1040
} as const;

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface SvgPoint {
  x: number;
  y: number;
}

/**
 * Projects WGS84 geographic coordinates (longitude, latitude) to SVG canvas coordinates (x, y).
 * Uses the exact same mathematical transformation applied to the GeoJSON boundary paths.
 */
export function projectGeoToSvg(longitude: number, latitude: number): SvgPoint {
  const { minLon, maxLon, minLat, maxLat, paddingX, paddingY, drawW, drawH } = MAP_GEO_BOUNDS;
  
  const x = paddingX + ((longitude - minLon) / (maxLon - minLon)) * drawW;
  const y = paddingY + ((maxLat - latitude) / (maxLat - minLat)) * drawH;
  
  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10
  };
}

/**
 * Inverts SVG canvas coordinates (x, y) back into WGS84 geographic coordinates (longitude, latitude).
 */
export function projectSvgToGeo(x: number, y: number): GeoPoint {
  const { minLon, maxLon, minLat, maxLat, paddingX, paddingY, drawW, drawH } = MAP_GEO_BOUNDS;
  
  const longitude = minLon + ((x - paddingX) / drawW) * (maxLon - minLon);
  const latitude = maxLat - ((y - paddingY) / drawH) * (maxLat - minLat);
  
  return {
    latitude: Math.round(latitude * 1000) / 1000,
    longitude: Math.round(longitude * 1000) / 1000
  };
}

/**
 * Official reference coordinates specified by educational & cartographic standards.
 */
export const VERIFIED_REFERENCE_COORDINATES: Record<string, {
  name: string;
  vietnameseName: string;
  latitude: number;
  longitude: number;
  expectedSvg: SvgPoint;
}> = {
  hanoi: {
    name: 'Hanoi',
    vietnameseName: 'Thủ đô Hà Nội',
    latitude: 21.028,
    longitude: 105.854,
    expectedSvg: { x: 261.1, y: 199.2 }
  },
  halong: {
    name: 'Ha Long Bay',
    vietnameseName: 'Vịnh Hạ Long',
    latitude: 20.910,
    longitude: 107.184,
    expectedSvg: { x: 333.7, y: 206.5 }
  },
  hue: {
    name: 'Hue Imperial City',
    vietnameseName: 'Cố đô Huế',
    latitude: 16.470,
    longitude: 107.578,
    expectedSvg: { x: 355.2, y: 481.4 }
  },
  danang: {
    name: 'Da Nang & Hoi An',
    vietnameseName: 'Đà Nẵng & Hội An',
    latitude: 16.054,
    longitude: 108.202,
    expectedSvg: { x: 389.2, y: 507.1 }
  },
  hochiminh: {
    name: 'Ho Chi Minh City',
    vietnameseName: 'Thành phố Hồ Chí Minh',
    latitude: 10.823,
    longitude: 106.630,
    expectedSvg: { x: 303.5, y: 831.0 }
  },
  mekong: {
    name: 'Mekong River Delta (Can Tho)',
    vietnameseName: 'Đồng bằng Sông Cửu Long (Cần Thơ)',
    latitude: 10.045,
    longitude: 105.784,
    expectedSvg: { x: 257.3, y: 879.1 }
  }
};
