import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `ā *š® Script RullBOT*\nāā¢ *Script :*\nāā³ https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw ć¾(ć^ā^)ļ¾\nāā¢ *Node_Modules:*\nāā³ https://semawur.com/mwuPPdYT\nāā³ Ato tekan *npm  i/yarn install*\nāā¢ *Base :* \nāā³ github.com/bochilgaming/games-wabot-md/\n *ā¢ Free Panel:*\n http://bit.ly/3VehFES\n āāāāāāāāāāāāāāāāāāāāāāāā\n\nā¢ *Mau script? Cek Yt Gw!*\nā¢ Jika menemukan bug Bot, harap lapor owner\nā¢ Websites RullBOT: https://bit.ly/3eggcxd Jangan, lupa join grup ya\nā¢ Bot ini free untuk digunakan di grup ini, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)`
let kled = `https://telegra.ph/file/ff053a2dff6c14bcb0578.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script><.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'ššŖš”š”š½šš~',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'https://www.instagram.com/khoirul36_'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script2|.sc2)$/i
handler.command = new RegExp

export default handler
