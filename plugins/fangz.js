let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=a77463c6755a1b8b9e7b1775', '', '', m)
}
handler.help = ['botzka']
handler.tags = ['anime']
handler.command = /^(zans)$/i

export default handler 