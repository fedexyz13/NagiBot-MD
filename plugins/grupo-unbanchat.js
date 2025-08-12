let handler = async (m, { conn, usedPrefix, command, args }) => {
let chat = global.db.data.chats[m.chat]
if (!(m.chat in global.db.data.chats)) {
return conn.reply(m.chat, `✧ ¡Este chat no está registrado!.`, m)
}
if (command === 'bot') {
if (args.length === 0) {
const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado'
const info = `「✦」Un administrador puede activar o desactivar a *${botname}* utilizando:\n\n> ✐ *${usedPrefix}bot on* para activar\n> ✐ *${usedPrefix}bot off* para desactivar\n\n✧ Estado actual » *${estado}*`
return conn.reply(m.chat, info, m)
}
if (args[0] === 'off') {
if (chat.isBanned) {
return conn.reply(m.chat, `《✦》${botname} ya estaba desactivado.`, m)
}
chat.isBanned = true
return conn.reply(m.chat, `❀ Has *desactivado* a ${botname}!`, m)
} else if (args[0] === 'on') {
if (!chat.isBanned) {
return conn.reply(m.chat, `《✦》${botname} ya estaba activado.`, m)
}
chat.isBanned = false
return conn.reply(m.chat, `🔄 Has *activado* a ${botname}!`, m)
}}
}

handler.help = ['bot']
handler.tags = ['grupo']
handler.command = ['bot']
handler.admin = true

export default handler
