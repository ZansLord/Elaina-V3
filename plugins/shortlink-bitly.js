import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw 'url/link nya mana?'
  let res = await fetch(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=f589e8ef3fd2314e`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['bitly'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^bitly$/i
handler.premium = true

export default handler
