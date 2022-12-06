import fetch from 'node-fetch' 
  
 let handler = async (m, { conn, command }) => { 
         let url = 'https://api.lolhuman.xyz/api/random/art?apikey=a77463c6755a1b8b9e7b1775' 
         conn.sendButton(m.chat, 'Nih FanArtnya ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m) 
 } 
 handler.command = /^(fanart)$/i 
 handler.tags = ['anime'] 
 handler.help = ['fanart'] 
 handler.limit = true 
 handler.premium = true 
 export default handler