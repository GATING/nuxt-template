export default ({ $axios, store, redirect, error: nuxtError }) => {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求拦截器
  $axios.onRequest((config) => {
    const { token } = store.getters
    if (token) {
      config.headers.token = token
    }
    return config
  })

  // 响应拦截器
  $axios.onResponse((resp) => {
    const { data, config } = resp
    const { responseType } = config
    if (responseType === 'blob') return data
    if (data.code >= 200 && data.code < 300) {
      return data.data
    }
    return Promise.reject(new Error(data.message || 'Error'))
  })

  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message,
    })
    return Promise.resolve(false)
  })
}
