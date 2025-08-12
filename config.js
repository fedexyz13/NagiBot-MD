import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.owner = [
  ['573001533523', 'Oᴍɴɪ Mᴀʀᴄᴋ 🐲', true], // Creador del bot
  ['527971289909', 'Tʜᴇ Cᴀʀʟᴏs 🦇', true], // colaborador 
  ['5491156178758', 'sᴜᴋɪ ᴀssɪsᴛᴀɴ 🦇', true], // Colaborador Ofc
  ['35855125204999@lid', '!ᴍᴀʀᴄᴋ ʟɪᴅ', true], // Lid para que el bot detecté mas rápido
];
//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['573001533523', '5491156178758']  // importante cambiar si va editar el bot
global.suittag = ['573001533523'] 
global.prems = ['573001533523', '5491156178758'] // cambiar

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.9' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.vsJB = '5.0'
global.nameqr = 'NagiBot'
global.namebot = 'TheNagi'
global.sessions = 'NagiSessions'
global.jadi = 'jadibts' 
global.nagiJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = 'ᥒᥲgі ᑲ᥆𝗍 mძ (*ˊᗜˋ*)' // Nombre del bot Ofc
global.botname = 'N A G I - A I'
global.wm = '© Brayan & NagiBot (≧∇≦)/'
global.wm3 = '⫹⫺  ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.dev = '© Powered by Brayan XD'
global.textbot = '𝘕𝘢𝘨𝘪𝘉𝘰𝘵-𝘔𝘋 𝘹 𝘋𝘦𝘷𝘉𝘳𝘢𝘺𝘢𝘯 ◍˃ᵕ˂◍'
global.etiqueta = '@DevBrayan' // Nombre del creador ofc
global.titulowm = 'Whatsapp Multi Device';
global.titulowm2 = 'ＮａｇｉＢｏｔ - ｂｙ - Ｂｒａｙａｎ'
global.igfg = 'ʙʀᴀʏᴀɴ - ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gt = '© ᥴrᥱᥲ𝗍ᥱძ ᑲᥡ ᑲrᥲᥡᥲᥒ-᥊ძ';
global.author = '© Brayan - XD' // global autor 
global.me = 'Ᏸrᥲყᥲᥒ 𝗍ᥙ ⍴ᥲ⍴ᥲі 🫵😒';
global.listo = '*ᥲ𝗊ᥙі 𝗍іᥱᥒᥱ ૮(˶ᵔᵕᵔ˶)ა*' // global listo muy importante 

global.imagen0 = fs.readFileSync('./Brayan-Creador.png');
global.catalogo = fs.readFileSync('./Private.png');

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.namabot = '⫹⫺  ᴍᴅ'
global.v = '-'   
global.eror = "_ubo un error _"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = "✦ ───『"
global.dmenub = "│➭" 
global.dmenub2 = "│乂"
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = "⫹⫺ ───『"
global.cmenuh = "』─── ⬟"
global.cmenub = "│〆"
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.htki = '––––––『'
global.htka = '』––––––'
global.htjava = "⫹⫺"
global.comienzo = "• • ◕◕════"
global.fin = " • •"

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'Magit Points' // global monedas puedes cambiarlo 
global.banner = 'https://files.cloudkuimages.guru/images/qM6BRh2g.jpg'
global.avatar = 'https://files.cloudkuimages.guru/images/PbmZRkdU.jpg'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let catalogo2;
try {
  catalogo2 = fs.readFileSync('./src/catalogo.jpg');
} catch (error) {
  console.log('Warning: ./src/catalogo.jpg not found, using catalogo as fallback');
  catalogo2 = catalogo; // Using the existing 'catalogo' variable as fallback
}
global.photoSity = [catalogo2]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://chat.whatsapp.com/HACwRMduEef1DKXPWQoJ9j';
global.md = 'https://chat.whatsapp.com/GDUv1z6UG0k2xe8zAEUnFf';
global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';
global.channel2 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';
global.correo = 'brayanphonkponk@gamail.com';
global.correo = 'brayanfree881@gmail.com';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]

global.ch = {
  ch1: '120363417186717632@newsletter', // id del canal puedes cambiar en plugins/Main-allfeke.js
  ch2: '120363417186717632@newsletter', // cambiar
  ch3: '120363417186717632@newsletter', // cambiar
  ch4: '120363400595401085@newsletter' // cambiar importante 
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.BASE_API_DELIRIUS = "https://delirius-apiofc.vercel.app";
global.BASE_API_SKYNEX = "https://skynex.boxmine.xyz";

global.shizokeys = 'shizo';
global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.fgkeysapi = "elrebelde21";
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.apis = 'https://delirius-apiofc.vercel.app';

global.APIs = {
  ryzen: 'https://api.ryzendesu.vip',
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  delirius: 'https://delirius-apiofc.vercel.app',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.fgmods.xyz': `${fgkeysapi}`,
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   


global.multiplier = 69
global.maxwarn = '3'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
export default {
  owner: global.owner,
  mods: global.mods,
  suittag: global.suittag,
  prems: global.prems,
  libreria: global.libreria,
  baileys: global.baileys,
  languaje: global.languaje,
  vs: global.vs,
  vsJB: global.vsJB,
  nameqr: global.nameqr,
  namebot: global.namebot,
  sessions: global.sessions,
  jadi: global.jadi,
  NakanoJadibts: global.NakanoJadibts,
  packname: global.packname,
  botname: global.botname,
  wm: global.wm,
    wm3: global.wm3
  }
