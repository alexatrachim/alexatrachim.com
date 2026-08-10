import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

import fs from 'fs';

const mpaRewritePlugin = (): Plugin => ({
  name: 'mpa-rewrite',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url ? req.url.split('?')[0] : '';
      if (url.startsWith('/assets/')) {
        const filePath = path.join(__dirname, 'dist', url);
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', url.endsWith('.png') ? 'image/png' : url.endsWith('.jpg') ? 'image/jpeg' : url.endsWith('.svg') ? 'image/svg+xml' : 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      }
      if (url === '/biznes-po-mojemu' || url === '/biznes-po-mojemu/') {
        const query = req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '';
        req.url = '/biznes-po-mojemu/index.html' + query;
      }
      if (url === '/tapandread' || url === '/tapandread/') {
        const query = req.url && req.url.includes('?') ? '?' + req.url.split('?')[1] : '';
        req.url = '/tapandread/index.html' + query;
      }
      next();
    });
  },
});

export default defineConfig(() => {
  return {
    publicDir: 'public',
    plugins: [react(), tailwindcss(), mpaRewritePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          biznesPoMojemu: path.resolve(__dirname, 'biznes-po-mojemu/index.html'),
          tapAndRead: path.resolve(__dirname, 'tapandread/index.html'),
        },
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
