import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('canvas-confetti')) {
              return 'vendor-fx';
            }
            return 'vendor-core';
          }
          if (id.includes('grade12Questions')) {
            return 'data-questions-g1-g2';
          }
          if (id.includes('grade345Questions')) {
            return 'data-questions-g3-g5';
          }
          if (id.includes('src/data/provinces/')) {
            return 'data-34-provinces';
          }
          if (id.includes('src/data/vietnam34ProvincesGeoData.ts') || id.includes('src/data/vietnamGeoData.ts')) {
            return 'data-vietnam-geo';
          }
          if (id.includes('src/data/curriculum/')) {
            return 'data-curriculum-lessons';
          }
        },
      },
    },
  },
});
