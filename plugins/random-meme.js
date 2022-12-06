import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(`https://xteam.xyz/randomimage/meme?APIKEY=f589e8ef3fd2314e`)
let json = res.data
let url = json.url
conn.sendButton(m.chat, `*${command}*`.trim(), author, url, [['🔄 NEXT 🔄', `/${command}`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
export default handler
