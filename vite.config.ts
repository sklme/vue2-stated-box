import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { resolve } from 'node:path';
import WindiCSS from 'vite-plugin-windicss';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'DisplayBox',
      fileName: 'display-box',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
