import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const getters = {
  token: (state) => state.user.token,
  info: (state) => state.user.info,
}

export const actions = {
  // 服务端初始化时会调用，仅当服务端渲染时
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const cookieparser = require('cookieparser')
      const cookie = cookieparser.parse(req.headers.cookie)
      commit('user/SET_TOKEN', cookie.token)
    }
  },
}
