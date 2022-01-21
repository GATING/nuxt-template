import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const getters = {
  token: (state) => state.user.token,
  info: (state) => state.user.info,
}
