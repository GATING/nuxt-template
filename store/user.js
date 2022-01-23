import { getToken } from '@/utils/auth'

export const state = () => ({
  token: getToken(),
  info: null,
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INFO: (state, info) => {
    state.info = info
  },
}

export const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      this.$userApi
        .login(userInfo)
        .then((user) => {
          const { token } = user
          commit('SET_TOKEN', token)
          commit('SET_INFO', user)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      this.$userApi
        .getInfo()
        .then((user) => {
          commit('SET_INFO', user)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      this.$userApi
        .logout()
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_INFO', '')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
