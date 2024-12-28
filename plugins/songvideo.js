const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('@types/yt-search')


cmd({
    pattern: "song",
    desc: "download song.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("url not inbut sorry")
const search = await yts (q)
const date = search.videos[0]:
  
}catsh(e){
consoli.log(e)
reply('${e}')
}
})
