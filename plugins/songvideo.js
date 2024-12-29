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
const url = date.url

let desc = '
🎧 DENUWAN MD SONG DOWNLOAD 🎧   
  
title: ${data.title}
description: ${data.description}
time: ${deta.timestamp}
ago: ${data.ago}  
views: ${data.views} 

MADE BY DENUWAN-MD🙂  
'
await conn.sendmessage(form,{image:{url: data.thumbnail},caption:desc},{quoted:mek}):

    //download audio    

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio massage
await conn.sendmassage(from,{audio: {url:downloadurl},mimeaudio"audio/mpeg"},{quoted:mak})





}catsh(e){
consoli.log(e)
reply('${e}')
}
})
