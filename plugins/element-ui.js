import Vue from 'vue'
import Element from 'element-ui'

export default ({ app }) => {
  Vue.use(Element, {
    i18n: (key, value) => app.i18n.t(key, value),
  })
}
