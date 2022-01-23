import path from 'path'
import i18n from './locales'

const { BASE_URL } = process.env

function resolve(dir) {
  return path.join(__dirname, dir)
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/axios', '@/plugins/api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 国际化配置
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 提供全局scss变量
    '@nuxtjs/style-resources',
  ],

  i18n,

  styleResources: {
    scss: ['@/styles/variables.scss', '@/styles/mixins.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs', // 抽离后的名字
            test: /[\\/]node_modules[\\/]/, // 匹配对应目录
            priority: 10, // 优先级，数字越大优先级越高，默认为0
            chunks: 'initial', // 打包规则，通常用initial，标识非动态模块打进该vendor，动态模块优化打包
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('components'),
            minChunks: 3, // 模块被引用3次以上的才抽离
            priority: 5,
            reuseExistingChunk: true, // 重复使用已经打包过的模块。即，如果之前已经打包过了，则使用之前的模块，而不会进行再次打包
          },
          echarts: {
            name: 'chunk-echarts',
            test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
            chunks: 'all', // 匹配文件，无论是否动态模块，都打包进该vendor
            priority: 4,
            reuseExistingChunk: true,
          },
        },
      },
    },
    terser: {
      parallel: true,
      cache: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },

    transpile: [/^element-ui/],
    extractCSS: true,
  },
  // 可通过$config获取
  // privateRuntimeConfig用于设置仅在服务端使用的参数，通常用于保存敏感信息:
  privateRuntimeConfig: {},
  // 如果privateRuntimeConfig与publicRuntimeConfig有同名参数，则私有参数覆盖公有参数，也就是privateRuntimeConfig优先级更高。
  publicRuntimeConfig: {
    BASE_URL,
  },
  // 环境变量，通过process.env.xxx获取
  env: {
    BASE_URL,
  },
}
