import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
        let name = await conn.getName(who)
        let url = await fetch('https://saipulanuar.ga/api/cerpen/random')
        let cerpen = await url.json()
        let hasil = `${htki} Cerpen *${text}* ${htka}

${cerpen.data}

*${htjava} By:* ${author}
`.trim()
return conn.sendButton(m.chat, bottime, hasil, pp, [['➡️Next Cerpen➡️', `${usedPrefix}${command} ${text}`]], m, fpay)
}
handler.help = ['cerpen'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cerpen|cerita)$/i

export default handler