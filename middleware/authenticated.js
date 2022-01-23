export default function ({ app, store, redirect }) {
  // If the user is not authenticated
  if (!store.getters.token) {
    return redirect(app.localePath('/login'))
  }
}
