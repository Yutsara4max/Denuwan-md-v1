const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/k1RH9bH/1086.jpg",
ALIVE_MSG: process.env.ALVE_MSG || "කොහමද මම Denuwan md whatsapp bot මාව නිර්මාණ කරනු ලැබුවේ Denuwan විසිනි මගේ විදාන ලබා ගැනුම හදහා menu යන කමාන්ඩ් එක භාවිතා කරන්න",
};
