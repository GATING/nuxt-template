import { getStorage, setStorage, removeStorage } from './store'
const tokenKey = 'token'

export function getToken() {
  return getStorage(tokenKey)
}

export function setToken(data) {
  return setStorage(tokenKey, data)
}

export function removeToken() {
  return removeStorage(tokenKey)
}
