const fs = require('fs')

var emojiList = new Set()
var emojiDataStr = fs.readFileSync(require('path').join(__dirname, 'emoji-data.txt'), 'utf8')
const re = /$([0-9A-F\.\s]+);/gim
var match
while (match = re.exec(emojiDataStr)) {
  let emoji = match[1].trim().split(' ').map(v => String.fromCodePoint(parseInt(v, 16))).join('')
  emojiList.add(emoji)
}
fs.writeFileSync(require('path').join(__dirname, 'emoji-data.json'), JSON.stringify(Array.from(emojiList), null, 2))