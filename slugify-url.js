var reservedChars = /[<>:"\/\\|?*\x00-\x1F]/g

function slugifyUrl (str) {
  try {
    let url = new URL(str)
    str = url.hostname + url.pathname + url.search + url.hash
  } catch (e) {
    // ignore
  }
  return str.replace(reservedChars, '-')
}