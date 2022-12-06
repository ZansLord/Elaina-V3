let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *Group Elaina official* ]─────✧
🍀 Group 1 :
https://chat.whatsapp.com/JraXe6qHmzI6elaTZbdTlI
🌧️ Group 2 :
https://chat.whatsapp.com/LJsK2qecGOeKCfc97giQFB
✨ Group 3 :
https://chat.whatsapp.com/HHpgg45kDfc4XOj0lZ6zjM
☠️ Group 4 :
https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi

✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ MENU','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
