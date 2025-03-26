// Very simple abstraction for interacting with `window.sessionStorage`

const get = (key: string) => {
  const value = window.sessionStorage.getItem(key)

  if (!value) {
    return value
  }

  try {
    // Checks whether the stored value parses back from JSON (including to Array and Object)
    return JSON.parse(value)
  } catch {
    return value
  }
}

// It literally can store `any` value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const set = (key: string, value: any) => window.sessionStorage.setItem(key, JSON.stringify(value))

export default {
  get,
  set,
}
