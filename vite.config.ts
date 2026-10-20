import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

function teacherVideoApiPlugin(): Plugin {
  return {
    name: 'teacher-video-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-teacher-video', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              const {
                id,
                videoUrl,
                embedUrl,
                thumbnailUrl,
                startSeconds,
                endSeconds,
                durationMinutes,
                status,
                sourceType,
                isTeacherCreated,
                notes,
              } = payload;

              if (!id) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'Thiếu ID video' }));
              }

              const overridesFilePath = path.resolve(__dirname, 'src/data/teacherVideoOverrides.json');
              let existingOverrides: Record<string, any> = {};
              if (fs.existsSync(overridesFilePath)) {
                try {
                  existingOverrides = JSON.parse(fs.readFileSync(overridesFilePath, 'utf8'));
                } catch (e) {
                  existingOverrides = {};
                }
              }

              const durMin =
                durationMinutes !== undefined
                  ? durationMinutes
                  : Math.max(1, Math.round((Number(endSeconds || 0) - Number(startSeconds || 0)) / 60));

              existingOverrides[id] = {
                ...(existingOverrides[id] || {}),
                id,
                videoUrl: videoUrl?.trim(),
                embedUrl: embedUrl?.trim(),
                thumbnailUrl: thumbnailUrl?.trim(),
                startSeconds: Number(startSeconds) || 0,
                endSeconds: Number(endSeconds) || 0,
                durationMinutes: durMin,
                status: status || 'approved',
                sourceType: sourceType || 'teacher_youtube',
                isTeacherCreated: isTeacherCreated ?? true,
                notes: notes || undefined,
                updatedAt: new Date().toISOString(),
              };

              fs.writeFileSync(overridesFilePath, JSON.stringify(existingOverrides, null, 2), 'utf8');

              // Backup
              const backupDir = path.resolve(__dirname, 'scripts/backup');
              if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
              }
              fs.writeFileSync(
                path.resolve(backupDir, 'teacherVideoOverrides.json'),
                JSON.stringify(existingOverrides, null, 2),
                'utf8'
              );

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, updatedVideo: existingOverrides[id] }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message || 'Lỗi xử lý server' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });

      server.middlewares.use('/api/save-teacher-curriculum-video', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const updatedRecord = JSON.parse(body);
              if (!updatedRecord || (!updatedRecord.id && !updatedRecord.lessonId)) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'Thiếu ID bài học' }));
              }

              const filePath = path.resolve(__dirname, 'src/data/teacherCurriculumVideos.json');
              let list: any[] = [];
              if (fs.existsSync(filePath)) {
                try {
                  list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                } catch (e) {
                  list = [];
                }
              }

              const idx = list.findIndex(
                (v: any) => (v.id && v.id === updatedRecord.id) || (v.lessonId && v.lessonId === updatedRecord.lessonId)
              );
              if (idx >= 0) {
                list[idx] = { ...list[idx], ...updatedRecord };
              } else {
                list.push(updatedRecord);
              }

              fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');

              // Backup
              const backupDir = path.resolve(__dirname, 'scripts/backup');
              if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true });
              }
              fs.writeFileSync(
                path.resolve(backupDir, 'teacherCurriculumVideos.json'),
                JSON.stringify(list, null, 2),
                'utf8'
              );

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, updatedVideo: updatedRecord }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message || 'Lỗi xử lý server' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

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

// Select target credentials with priority to process.env configured on Vercel
const activeTarget = isPreviewBuild ? SUPABASE_TEST : SUPABASE_PROD;
const resolvedTargetUrl = process.env.VITE_SUPABASE_URL || activeTarget.url;
const resolvedTargetKey = process.env.VITE_SUPABASE_ANON_KEY || activeTarget.anonKey;

export default defineConfig({
  plugins: [react(), tailwindcss(), teacherVideoApiPlugin()],
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(resolvedTargetUrl),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(resolvedTargetKey),
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
    watch: {
      ignored: ['**/scripts/**', '**/.git/**']
    }
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
