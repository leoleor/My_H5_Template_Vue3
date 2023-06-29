import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import postcsspxtorem from 'postcss-pxtorem' // px转rem
import autoprefixer from 'autoprefixer' // 自动补全css浏览器前缀
// 自动引入组件和样式：不需要在import引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// 当前工作目录路径
const root: string = process.cwd()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '') // .env.[mode]文件里的信息
  console.log(mode, env, '环境变量')
  const isProd = mode == 'production'
  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      }),
      AutoImport({
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      //设置路径别名
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      host: '0.0.0.0',
      open: true
    },
    build: {
      outDir: isProd ? 'dist' : 'dist_test'
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'not ie <= 11', //不考虑IE浏览器
              'ff >= 30', //仅新版本用“ff>=30
              '> 1%', //  全球统计有超过1%的使用率使用“>1%”;
              'last 2 versions' // 所有主流浏览器最近2个版本
            ],
            grid: true // 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
          }),
          postcsspxtorem({
            rootValue: 37.5, // 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
            unitPrecision: 6, // 计算结果保留 6 位小数
            selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性  感叹号开头的不转换
            replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
            mediaQuery: true, // 允许在媒体查询中转换px。
            minPixelValue: 2, // 设置要替换的最小像素值。
            exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
          })
        ]
      }
    }
  }
})
