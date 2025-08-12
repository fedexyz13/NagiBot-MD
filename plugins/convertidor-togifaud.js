let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `\`ᴘᴏʀ ғᴀᴠᴏʀ, ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴜɴ ᴠɪᴅᴇᴏ\``, m)
conn.reply(m.chat, global.wait, m)
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) return conn.reply(m.chat, `\`ᴘᴏʀ ғᴀᴠᴏʀ, ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴜɴ ᴠɪᴅᴇᴏ\``, m)
await m.react(rwait)
let media = await q.download()
let listo = '\`ᴀǫᴜɪ ᴛɪᴇɴᴇ ᴜᴡᴜ ( ͡° ͜ʖ ͡°)\`'
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: listo }, { quoted: fkontak })
await m.react(done)
}
handler.help = ['togifaud']
handler.tags = ['transformador']
handler.group = true;
handler.register = true
handler.command = ['togifaud']

export default handler