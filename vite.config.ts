import { UserConfigExport, ConfigEnv } from 'vite'
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
import { viteMockServe } from 'vite-plugin-mock'
import { viteVConsole } from 'vite-plugin-vconsole'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: './',
    server: {
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': resolve(process.cwd(), '.', 'src')
      }
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
      viteCompression(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve',
        watchFiles: true,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/mockProdServer';
          setupProdMockServer();
        `,
      }),
      viteVConsole({
        entry: resolve('src/main.ts'),
        localEnabled: command === 'serve',
        enabled: command !== 'serve',
        config: {
          maxLogNumber: 100,
          theme: 'dark'
        }
      })
    ],
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
  }
}
