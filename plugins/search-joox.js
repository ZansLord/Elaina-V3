import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'jooxs') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://xteam.xyz/search/jooxfind?q=${query}&APIKEY=f589e8ef3fd2314e`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
Album id : ${v.album_id}
ID : *${v.id}*
Judul : *${v.name}*
Album : ${v.album_name}
Artist : ${v.artist_list.name}
Img : ${v.images.url}
Vip : *${v.vip_flag}*
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  m.reply(teks)
            }

if (command == 'jooxp') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://xteam.xyz/dl/jooxdl?lagu=${text}&APIKEY=f589e8ef3fd2314e`)
let x = await f.json()
let teks = `*Result:*
*singer:* ${x.result.info.singer}
*song:* ${x.result.info.song}
*album:* ${x.result.info.album}
*date:* ${x.result.info.date}
*duration:* ${x.result.info.duration}
*duration:* ${x.result.lirik}
`
  await conn.sendButton(m.chat, teks, wm, x.result.image, [
                ['Search!', `${usedPrefix}jooxs ${text}`],
                ['Mp3!', `${usedPrefix}get ${x.result.audio[0].link}`]
            ], m)
            }
            
}

handler.command = handler.help = ['jooxs', 'jooxp']
handler.tags = ['tools']

export default handler
