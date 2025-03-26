const get = (key: string) => {
  const value = window.sessionStorage.getItem(key)

  if (!value) {
    return value
  }

  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const set = (key: string, value: any) => {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

export default {
  get,
  set,
}
