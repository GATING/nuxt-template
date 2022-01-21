// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default ($axios) => ({
  register(...rest) {
    return $axios.$post(`/user/register`, ...rest)
  },
  login(...rest) {
    return $axios.$post(`/user/login'`, ...rest)
  },
  logout(...rest) {
    return $axios.$post(`/user/info`, ...rest)
  },
})
