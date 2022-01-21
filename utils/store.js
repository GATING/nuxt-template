const localStorage = typeof window !== 'undefined' ? window.localStorage : {}

export function getStorage(key) {
  if (typeof key !== 'string') {
    return undefined
  }
  const val = localStorage.getItem(key)
  try {
    return JSON.parse(val)
  } catch (err) {
    return val
  }
}

export function setStorage(key, data) {
  return localStorage.setItem(key, JSON.stringify(data))
}

export function removeStorage(TokenKey) {
  return localStorage.removeItem(TokenKey)
}

export function getAllStorage() {
  const all = {}
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const val = getStorage(key)
    all[key] = val
  }
  return all
}

export function clearStorage() {
  return localStorage.clear()
}
