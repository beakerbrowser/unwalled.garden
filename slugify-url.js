var reservedChars = /[<>:"\/\\|?*\x00-\x1F]/g
var endingDashes = /([-]+$)/g

function slugifyUrl (str) {
  try {
    let url = new URL(str)
    str = url.protocol + url.hostname + url.pathname + url.search + url.hash
  } catch (e) {
    // ignore
  }
  return str.replace(reservedChars, '-').replace(endingDashes, '')
}