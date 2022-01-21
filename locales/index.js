import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh'
import en from './en'

// 加载element-ui语言包
const mergeZH = Object.assign(zhLocale, zh)
const mergeEN = Object.assign(enLocale, en)

const i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'zh',
      iso: 'zh-ZH',
      name: '中文',
    },
  ],
  defaultLocale: 'zh',
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: mergeEN,
      zh: mergeZH,
    },
  },

  // 浏览器语言检测
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // recommended
  },
}

export default i18n
