// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6285731947500?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@oktaofcrill' // ubah aja
global.ofc = 'https://chat.whatsapp.com/IRRkLJqImnuB6lCjGzyME0'
global.okta = 'https://taaofc-panel.my.id'
global.gh = 'https://github.com/chataofc'
global.email = 'zyyyzeus@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '085749543572'
global.gopay = '085749543572'
global.pulsa = '085749543572'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝗢𝚔𝚝𝚊' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285731947500'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𝘙𝘺𝘰 𝘠𝘢𝘮𝘢𝘥𝘢' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝘙𝘺𝘰' // ubah aja ini nama sticker
global.author = '𝘽𝙮 𝙊𝙠𝙩𝙖' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})