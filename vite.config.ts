import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import path from 'path';

export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
});
