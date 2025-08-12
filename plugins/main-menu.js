import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises as fsPromises } from 'fs'
import { join } from 'path'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, __dirname, participants }) => {
  try {
    await m.react('⚽️')

    let { exp, bank, registered } = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let groupUserCount = m.isGroup ? participants.length : '-'

    let perfil = await conn.profilePictureUrl(conn.user.jid, 'image')
      .catch(() => 'https://qu.ax/eBrxs.jpg')

    // Preparar el tag del usuario
    const userId = m.sender.split('@')[0]
    let taguser = `@${userId}`
    let phone = PhoneNumber('+' + userId)
    let pais = phone.getRegionCode() || 'Desconocido 🌐'

    const vids = [
        'https://files.cloudkuimages.guru/videos/Sjqt6wIx.mp4',
      'https://files.cloudkuimages.guru/videos/Sjqt6wIx.mp4',
      'https://files.cloudkuimages.guru/videos/Sjqt6wIx.mp4'
    ]
    let videoUrl = vids[Math.floor(Math.random() * vids.length)]

    const header = [
      `╔═━★•°*"'*°•★━═╗`,
      `    ✦ ꧁𝐖𝐞𝐥𝐜𝐨𝐦𝐞꧂ ✦`,
      `╚═━★•°*"'*°•★━═╝`
    ].join('\n')

    const user = global.db.data.users[m.sender] || {};
    const country = user.country || '';
    const isPremium = user.premium || false;


    const channelRD = { 
      id: '120363417186717632@newsletter', 
      name: 'NagiBot Oficial channel'
    }


    const metaMsg = {
      quoted: global.fakeMetaMsg,
      contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          serverMessageId: 100,
          newsletterName: channelRD.name
        },
        externalAdReply: {
          title: 'Nᴀɢɪ ʙᴏᴛ MD Oғɪᴄɪᴀʟ Bᴏᴛ 🍩',
          body: '𝘕𝘢𝘨𝘪-𝘉𝘰𝘵-𝘔𝘋 𝘉𝘠 𝘉𝘳𝘢𝘺𝘢𝘯 ૮(˶ᵔᵕᵔ˶)ა',
          mediaUrl: null,
          description: null,
          previewType: "PHOTO",
          thumbnailUrl: 'https://files.cloudkuimages.guru/images/zDhXoGWJ.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }

    const body = `
 \`[ 𝗜 𝗡 𝗙𝗢 - 𝗨 𝗦 𝗘 𝗥 ]\`
> 𖥔 ︳*Hola: ${taguser}*
> 𖥔 ︳*ɴɪᴠᴇʟ: ${user.level}*
> 𖥔 ︳ *ᴇxᴘ: ${exp}*
> 𖥔 ︳ *ᴇɴ ᴇsᴛᴇ ᴄʜᴀᴛ: ${groupUserCount}*
> 𖥔 ︳ *ʀᴇɢɪsᴛʀᴀᴅᴏ: ${registered ? '✅' : '❌'}*

\`[ 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧 ]=\`
> ║◦ɴᴏᴍʙʀᴇ ᴅᴇʟ ʙᴏᴛ: *ɴᴀɢɪ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*  
> ║◦ʀᴜɴᴛɪᴍᴇ: *${uptime}*
> ║◦ᴏᴡɴᴇʀ: *ʙʀᴀʏᴀɴ*  
> ║◦ᴍᴏᴅᴏ: *ᴘᴜʙʟɪᴄ*  
> ║◦ᴛᴏᴛᴀʟ ᴜsᴇʀs:  *${totalreg}*

*【𝕷 𝖎 𝖘 𝖙 𝖆 - 𝕯𝖊 - 𝕮 𝖔 𝖒 𝖆 𝖓 𝖉 𝖔 𝖘】*

╭────  \`ɪɴғᴏ\`  ────╮
├ ${usedPrefix}afk [alasan]  
├ ${usedPrefix}menu  
├ ${usedPrefix}owner    
├ ${usedPrefix}runtime  
├ ${usedPrefix}blocklist
├ ${usedPrefix}estado  
├ ${usedPrefix}grupos    
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴀɴɪᴍᴇ\`  ────╮
├ ${usedPrefix}angry  
├ ${usedPrefix}bath  
├ ${usedPrefix}bite  
├ ${usedPrefix}bleh  
├ ${usedPrefix}blush  
├ ${usedPrefix}bored  
├ ${usedPrefix}coffee  
├ ${usedPrefix}cry  
├ ${usedPrefix}cuddle  
├ ${usedPrefix}dance  
├ ${usedPrefix}drunk  
├ ${usedPrefix}eat  
├ ${usedPrefix}facepalm  
├ ${usedPrefix}happy  
├ ${usedPrefix}hello/hola @tag  
├ ${usedPrefix}hug  
├ ${usedPrefix}kill  
├ ${usedPrefix}kiss  
├ ${usedPrefix}laugh  
├ ${usedPrefix}lick  
├ ${usedPrefix}love2/enamorada @tag  
├ ${usedPrefix}patt/acariciar @tag  
├ ${usedPrefix}poke/picar @tag  
├ ${usedPrefix}pout/pucheros @tag  
├ ${usedPrefix}ppcouple  
├ ${usedPrefix}pregg/embarazar @tag  
├ ${usedPrefix}punch/golpear @tag  
├ ${usedPrefix}run/correr @tag  
├ ${usedPrefix}sad/triste @tag  
├ ${usedPrefix}scared/asustada @tag  
├ ${usedPrefix}seduce/seducir @tag  
├ ${usedPrefix}shy/timida @tag  
├ ${usedPrefix}slap/bofetada @tag  
├ ${usedPrefix}sleep/dormir @tag  
├ ${usedPrefix}smoke/fumar @tag  
├ ${usedPrefix}think  
├ ${usedPrefix}waifu  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`sᴛɪᴄᴋᴇʀ\`  ────╮
├ ${usedPrefix}brat *<texto>*  
├ ${usedPrefix}emojimix *<emoji+emoji>*  
├ ${usedPrefix}qc  
├ ${usedPrefix}stiker <img>  
├ ${usedPrefix}sticker <url>  
├ ${usedPrefix}toimg (reply)  
╰─❒━━━━━━━━━━━❒──

╭────  \`ᴀɪ\`  ────╮
├ ${usedPrefix}google
├ ${usedPrefix}gemini  
├ ${usedPrefix}pollinations
├ ${usedPrefix}ia  
├ ${usedPrefix}chatgpt  
├ ${usedPrefix}luminai  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`sᴜʙ ʙᴏᴛs\`  ────╮
├ ${usedPrefix}serbot  
├ ${usedPrefix}serbot --code  
├ ${usedPrefix}qr  
├ ${usedPrefix}code  
├ ${usedPrefix}token  
├ ${usedPrefix}sockets  
├ ${usedPrefix}deletesesion  
├ ${usedPrefix}pausarai  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ʀᴘɢ\`  ────╮
├ ${usedPrefix}lb  
├ ${usedPrefix}levelup  
├ ${usedPrefix}lvl @user  
├ ${usedPrefix}aventura  
├ ${usedPrefix}adventure  
├ ${usedPrefix}baltop  
├ ${usedPrefix}bal  
├ ${usedPrefix}berburu  
├ ${usedPrefix}cofre  
├ ${usedPrefix}daily  
├ ${usedPrefix}claim  
├ ${usedPrefix}depositar  
├ ${usedPrefix}explorar  
├ ${usedPrefix}halloween  
├ ${usedPrefix}heal  
├ ${usedPrefix}inventario  
├ ${usedPrefix}explorar  
├ ${usedPrefix}retirar  
├ ${usedPrefix}rob  
├ ${usedPrefix}pay  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ʀᴇɢɪsᴛʀᴏ\`  ────╮
├ ${usedPrefix}confesar <número mensaje>  
├ ${usedPrefix}delbirth  
├ ${usedPrefix}delgenre  
├ ${usedPrefix}marry *@usuario*  
├ ${usedPrefix}divorce  
├ ${usedPrefix}profile  
├ ${usedPrefix}premium 
├ ${usedPrefix}unreg  
├ ${usedPrefix}reg  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ɢʀᴏᴜᴘs\`  ────╮
├ ${usedPrefix}lid  
├ ${usedPrefix}invite *<521>*  
├ ${usedPrefix}todos *<mensaje opcional>*  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴏɴ / ᴏғғ\`  ────╮
├ ${usedPrefix}welcome  
├ ${usedPrefix}bienvenida  
├ ${usedPrefix}antiprivado  
├ ${usedPrefix}antiprivate  
├ ${usedPrefix}restrict  
├ ${usedPrefix}restringir  
├ ${usedPrefix}autolevelup  
├ ${usedPrefix}autonivel  
├ ${usedPrefix}antibot  
├ ${usedPrefix}antibots  
├ ${usedPrefix}autoaceptar  
├ ${usedPrefix}aceptarauto  
├ ${usedPrefix}autorechazar  
├ ${usedPrefix}rechazarauto  
├ ${usedPrefix}autoresponder  
├ ${usedPrefix}autorespond  
├ ${usedPrefix}antisubbots  
├ ${usedPrefix}antibot2  
├ ${usedPrefix}modoadmin  
├ ${usedPrefix}soloadmin  
├ ${usedPrefix}reaction  
├ ${usedPrefix}reaccion  
├ ${usedPrefix}nsfw  
├ ${usedPrefix}modohorny  
├ ${usedPrefix}antispam  
├ ${usedPrefix}jadibotmd  
├ ${usedPrefix}modejadibot  
├ ${usedPrefix}subbots  
├ ${usedPrefix}detect  
├ ${usedPrefix}avisos  
├ ${usedPrefix}antilink  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴅᴏᴡɴʟᴏᴀᴅ\`  ────╮
├ ${usedPrefix}spotify  
├ ${usedPrefix}music  
├ ${usedPrefix}tiktokdl <url>  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴛᴏᴏʟs\`  ────╮
├ ${usedPrefix}imagen <query>  
├ ${usedPrefix}tourl  
├ ${usedPrefix}setdespedida  
├ ${usedPrefix}setwelcome  
├ ${usedPrefix}get  
├ ${usedPrefix}nuevafotochannel  
├ ${usedPrefix}nosilenciarcanal  
├ ${usedPrefix}silenciarcanal  
├ ${usedPrefix}noseguircanal  
├ ${usedPrefix}seguircanal  
├ ${usedPrefix}avisoschannel  
├ ${usedPrefix}resiviravisos  
├ ${usedPrefix}inspect  
├ ${usedPrefix}inspeccionar  
├ ${usedPrefix}eliminarfotochannel  
├ ${usedPrefix}reactioneschannel  
├ ${usedPrefix}reaccioneschannel  
├ ${usedPrefix}nuevonombrecanal  
├ ${usedPrefix}nuevadescchannel  
├ ${usedPrefix}invite  
├ ${usedPrefix}wm  
├ ${usedPrefix}fake  
├ ${usedPrefix}hd  
├ ${usedPrefix}ver  
├ ${usedPrefix}ssweb   
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ғᴜɴ\`  ────╮
├ ${usedPrefix}simi  
├ ${usedPrefix}bot  
├ ${usedPrefix}amistad  
├ ${usedPrefix}gay <@tag> | <nombre>  
├ ${usedPrefix}lesbiana <@tag> | <nombre>  
├ ${usedPrefix}pajero <@tag> | <nombre>  
├ ${usedPrefix}pajera <@tag> | <nombre>  
├ ${usedPrefix}puto <@tag> | <nombre>  
├ ${usedPrefix}puta <@tag> | <nombre>  
├ ${usedPrefix}manco <@tag> | <nombre>  
├ ${usedPrefix}manca <@tag> | <nombre>  
├ ${usedPrefix}rata <@tag> | <nombre>  
├ ${usedPrefix}prostituta <@tag> | <nombre>  
├ ${usedPrefix}prostituto <@tag> | <nombre>  
├ ${usedPrefix}chiste  
├ ${usedPrefix}consejo  
├ ${usedPrefix}doxear  
├ ${usedPrefix}doxxing <nombre> | <@tag>  
├ ${usedPrefix}facto  
├ ${usedPrefix}formarpareja  
├ ${usedPrefix}formarpareja5  
├ ${usedPrefix}frase  
├ ${usedPrefix}iqtest  
├ ${usedPrefix}meme  
├ ${usedPrefix}morse *<encode|decode>*  
├ ${usedPrefix}nombreninja *<texto>*  
├ ${usedPrefix}pajeame  
├ ${usedPrefix}personalidad  
├ ${usedPrefix}piropo  
├ ${usedPrefix}pregunta  
├ ${usedPrefix}ship  
├ ${usedPrefix}love  
├ ${usedPrefix}sorteo  
├ ${usedPrefix}top *<texto>*  
├ ${usedPrefix}formartrio @usuario1 @usuario2  
├ ${usedPrefix}zodiac *2002 02 25*  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴏᴡɴᴇʀ\`  ────╮
├ ${usedPrefix}listonline  
├ ${usedPrefix}addcoins *<@user>*  
├ ${usedPrefix}addprem  
├ ${usedPrefix}delprem  
├ ${usedPrefix}autoadmin  
├ ${usedPrefix}copia  
├ ${usedPrefix}broadcastgroup  
├ ${usedPrefix}bcgc  
├ ${usedPrefix}chetar *@user*  
├ ${usedPrefix}chetar *<número>*  
├ ${usedPrefix}cleanfiles *  
├ ${usedPrefix}cleartmp  
├ ${usedPrefix}deletefile  
├ ${usedPrefix}deschetar *@user*  
├ ${usedPrefix}deschetar *<número>*  
├ ${usedPrefix}dsowner  
├ ${usedPrefix}getplugin  
├ ${usedPrefix}groups  
├ ${usedPrefix}grouplist  
├ ${usedPrefix}invite  
├ ${usedPrefix}prefix [prefix]  
├ ${usedPrefix}quitarcoin *<@user>*  
├ ${usedPrefix}quitarcoin all  
├ ${usedPrefix}quitarxp *<@user>*  
├ ${usedPrefix}resetprefix    
├ ${usedPrefix}restart  
├ ${usedPrefix}reunion  
├ ${usedPrefix}meeting  
├ ${usedPrefix}savefile <ruta/nombre>  
├ ${usedPrefix}saveplugin  
├ ${usedPrefix}spam2  
├ ${usedPrefix}update  
├ ${usedPrefix}actualizar  
├ ${usedPrefix}codigo <cantidad de coins>  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ʙᴜꜱᴄᴀᴅᴏʀ\`  ────╮
├ ${usedPrefix}imagen <query>  
├ ${usedPrefix}tiktoksearch <txt>  
├ ${usedPrefix}ytsearch  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`  ────╮
├ ${usedPrefix}pindl 
├ ${usedPrefix}imagen <query>  
├ ${usedPrefix}facebook  
├ ${usedPrefix}instagram  
├ ${usedPrefix}mediafire  
├ ${usedPrefix}apkmod  
├ ${usedPrefix}npmdl  
├ ${usedPrefix}play  
├ ${usedPrefix}ytmp3  
├ ${usedPrefix}play2  
├ ${usedPrefix}ytmp4  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`+18\`  ────╮
├ ${usedPrefix}pornhubsearch  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴛʀᴀɴꜱꜰᴏʀᴍᴀᴅᴏʀ\`  ────╮
├ ${usedPrefix}togifaud  
├ ${usedPrefix}tts <lang> <teks>  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ɢᴀᴍᴇꜱ\`  ────╮
├ ${usedPrefix}ppt  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ɢʀᴜᴘᴏ\`  ────╮
├ ${usedPrefix}admins <texto>  
├ ${usedPrefix}group open / close  
├ ${usedPrefix}grupo abrir / cerrar  
├ ${usedPrefix}delete  
├ ${usedPrefix}demote  
├ ${usedPrefix}encuesta <text|text2>  
├ ${usedPrefix}undefined  
├ ${usedPrefix}groupdesc <text>  
├ ${usedPrefix}gruponame <text>  
├ ${usedPrefix}hidetag  
├ ${usedPrefix}infogrupo  
├ ${usedPrefix}kick  
├ ${usedPrefix}link  
├ ${usedPrefix}listadv  
├ ${usedPrefix}promote  
├ ${usedPrefix}revoke  
├ ${usedPrefix}bot  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ɪɴꜰᴏ\`  ────╮
├ ${usedPrefix}editautoresponder  
├ ${usedPrefix}dash  
├ ${usedPrefix}dashboard  
├ ${usedPrefix}views  
├ ${usedPrefix}database  
├ ${usedPrefix}usuarios  
├ ${usedPrefix}user  
├ ${usedPrefix}ds  
├ ${usedPrefix}fixmsgespera  
├ ${usedPrefix}newcommand  
├ ${usedPrefix}ping  
├ ${usedPrefix}reportar  
├ ${usedPrefix}sistema  
├ ${usedPrefix}speed  
├ ${usedPrefix}speedtest  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴍᴏᴅꜱ\`  ────╮
├ ${usedPrefix}banuser <@tag> <razón>  
├ ${usedPrefix}grupocrear <nombre>  
├ ${usedPrefix}unbanuser <@tag>  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴇᴄᴏɴᴏᴍɪᴀ\`  ────╮
├ ${usedPrefix}canjear <código>  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ᴇᴄᴏɴᴏᴍʏ\`  ────╮
├ ${usedPrefix}wallet  
├ ${usedPrefix}cf  
├ ${usedPrefix}crimen  
├ ${usedPrefix}minar  
├ ${usedPrefix}rob  
├ ${usedPrefix}ruleta *<cantidad> <color>*  
├ ${usedPrefix}trabajar  
╰─❒━━━━━━━━━━━❒─╯

╭────  \`ɪᴍᴀɢᴇɴ\`  ────╮
├ ${usedPrefix}hd  
╰─❒━━━━━━━━━━━❒─╯
  `.trim()

    // Unir header + body
    const menu = `${header}\n${body}`

    // Configurar datos para el mensaje
    const botname = 'NagiBot Oficial channel'
    const textbot = 'NagiBot Oficial channel'
    const banner = perfil
    const redes = 'https://whatsapp.com/channel/0029VbA877dDDmFSafT2xI42'
    
    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: body,
      gifPlayback: true,
      mentions: [m.sender],  // Agregamos el array de menciones
      ...metaMsg
    })

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, { 
      text: `✘ Error al enviar el menú: ${e.message}`,
      mentions: [m.sender]  // También incluimos menciones en el mensaje de error
    }, { 
      quoted: metaMsg 
    })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu','help','menú','allmenu','menucompleto']
handler.register = true
export default handler

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
