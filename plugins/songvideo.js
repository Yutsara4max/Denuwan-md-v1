const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('@types/yt-search')


cmd({
    pattern: "song",
    desc: "download song.",
    category: "download",
    filename: _mimetie
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

    //download audio document message  

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio massage
await conn.sendmassage(from,{audio: {url:downloadurl},mimetype"audio/mpeg"},{quoted:mak})
await conn.sendmassage(from,{document: {url:downloadurl},mimetype"audio/mpeg",fileNeme:data.title + ".mp3",caption:"MADE BY DENUWAN"},{quoted:mak})




}catsh(e){
consoli.log(e)
reply('${e}')
}
})

//==================================video-dl=======================================

cmd({
    pattern: "video",
    desc: "download video.",
    category: "download",
    filename: _mimetie
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("url not inbut sorry")
const search = await yts (q)
const date = search.videos[0]:
const url = date.url

let desc = '
🎧 DENUWAN MD VIDEO DOWNLOAD 🎧   
  
title: ${data.title}
description: ${data.description}
time: ${deta.timestamp}
ago: ${data.ago}  
views: ${data.views} 

MADE BY DENUWAN-MD🙂  
'
await conn.sendmessage(form,{image:{url: data.thumbnail},caption:desc},{quoted:mek}):

    //download audio + document message   

let down = await fg.ytv(url)
let downloadurl = down.dl_url

//send audio massage
await conn.sendmassage(from,{video: {url:downloadurl},mimetype"video/mp4"},{quoted:mak})
await conn.sendmassage(from,{document: {url:downloadurl},mimetype"video/fileNeme:data.title + ".mp4",caption:"MADE BY DENUWAN"},{quoted:mak})




}catsh(e){
consoli.log(e)
reply('${e}')
}
})


                    
