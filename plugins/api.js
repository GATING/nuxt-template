const apiFiles = require.context('../api', true, /\.js$/)

const api = apiFiles.keys().reduce((api, apiPath) => {
  const apiName = apiPath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = apiFiles(apiPath)
  api[apiName] = value.default
  return api
}, {})

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  for (const name in api) {
    if (Object.hasOwnProperty.call(api, name)) {
      const createApi = api[name]
      // You can reuse the repositoryWithAxios object:
      inject(`${name}Api`, createApi(ctx.$axios))
    }
  }
}
