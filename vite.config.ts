import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import ViteImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/types/auto-import.d.ts'
    }),
    Components({
      resolvers: [
        IconsResolver()
      ]
    }),
    Icons({}),
    ViteImages({
      dirs: ['src/assets/images']
    }),
    vueSetupExtend(),
    viteCompression()
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': resolve(process.cwd(), '.', 'src')
    }
  },
  build: {
    outDir: 'docs',
    terserOptions: {
      // 打包后移除 debugger 和 console
      compress: {
        drop_debugger: true,
        drop_console: true
      }
    }
  }
})
