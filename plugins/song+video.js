const {cmd , commands} = require('../command')
title: ${data.title}
description: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY DENUWAN-MD & POWERD BY DENUWAN👻*
`
await conn.sendMessage(frome,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {downloadUrl},mimetype:"audio/mpeg",filename:data.title + ".mp3",caption:"> *POWERD BY DINU-EH-MD WITH DINUWH👻🫢*"},{quoted:mek}) 




}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//============vidro-dl============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or text")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`
> *🌟DENUWAN-MD VIDEO DOWNLOADER🌟*

title: ${data.title}
description: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY DINUWH-MD & POWERD BY DENUWAN👻*
`
await conn.sendMessage(frome,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {downloadUrl},mimetype:"video/mp4",filename:data.title + ".mp4",caption:"> *POWERD BY DINU-EH-MD WITH DINUWH👻🫢*},{quoted:mek})




}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
