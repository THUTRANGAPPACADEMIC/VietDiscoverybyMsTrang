import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Detect deployment environment during build (Vercel / Local)
const vercelEnv = process.env.VERCEL_ENV; // 'production' | 'preview' | 'development'
const gitBranch = process.env.VERCEL_GIT_COMMIT_REF || '';

// A build is Preview if deployed on a preview branch or VERCEL_ENV is 'preview'
const isPreviewBuild =
  vercelEnv === 'preview' ||
  (Boolean(gitBranch) && gitBranch !== 'main' && gitBranch !== 'master') ||
  process.env.VITE_APP_ENV === 'preview';

// Supabase endpoints
const SUPABASE_TEST = {
  url: 'https://jnrlydnuwredtavwecba.supabase.co',
  anonKey: 'sb_publishable_30ujz0Rv9gXKBaSG_5Y1-Q_h6r70gzB',
};

const SUPABASE_PROD = {
  url: 'https://khbgnthijxkjnxpuunll.supabase.co',
  anonKey: 'sb_publishable_gomgLofvxUNJJsaPHTLUjA_RvhENHeq',
};

// Select target credentials
const activeTarget = isPreviewBuild ? SUPABASE_TEST : SUPABASE_PROD;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(activeTarget.url),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(activeTarget.anonKey),
    'import.meta.env.VITE_APP_ENV': JSON.stringify(isPreviewBuild ? 'preview' : (vercelEnv || 'production')),
  },
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
