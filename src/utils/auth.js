const s = localStorage

export function getItem(key) {
  return s.getItem(key)
}

export function setItem(key, value) {
  return s.setItem(key, value)
}

export function removeItem(key) {
  return s.removeItem(key)
}
export function clear() {
  return s.clear()
}
