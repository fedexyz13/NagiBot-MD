import { search, download} from 'aptoide-scraper';

const channelRD = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';
const sukiIcon = 'https://files.cloudkuimages.guru/images/Y5sapRci.jpg';

let handler = async (m, { conn, usedPrefix, command, text}) => {
  const name = conn.getName(m.sender);

  const contextInfo = {
    mentionedJid: [m.sender],
    isForwarded: true,
    forwardingScore: 999,
    externalAdReply: {
      title: '⚽️ NᴀɢɪBᴏᴛ-MD | Dᴇsᴄᴀʀɢᴀ ᴅᴇ Aᴘᴋ!',
      body: `🦇 ʟᴀ ᴀᴘᴋ ᴇs ᴘᴀʀᴀ: ${name}`,
      thumbnailUrl: sukiIcon,
      sourceUrl: channelRD,
      mediaType: 1,
      renderLargerThumbnail: true,
},
};

  if (!text) {
    return conn.reply(
      m.chat,
      `\`ǫᴜᴇ ᴀᴘʟɪᴄᴀᴄɪᴏ́ɴ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ ૮₍ ˶•⤙•˶ ₎ა\`\n\n\`ᴇᴊᴇᴍᴘʟᴏ #apk free fire\``,
      m,
      { contextInfo, quoted: m}
);
}

  try {
    await m.react('🔍');
    conn.reply(
      m.chat,
      `🧋 *\`ʙᴜsᴄᴀɴᴅᴏ ʟᴀ ᴀᴘᴋ x ғᴀᴠᴏʀ ᴇsᴘᴇʀᴇ...\` ${name}...*`,
      m,
      { contextInfo, quoted: m}
);

    let results = await search(text);
    if (!results?.length) {
      return conn.reply(
        m.chat,
        `\`ʟᴏ sɪᴇɴᴛᴏ ɴᴏ ᴇɴᴄᴏɴᴛʀᴇ ʀᴇsᴜʟᴛᴀᴅᴏs ᴅᴇ ʟᴀ ᴀᴘʟɪᴄᴀᴄɪᴏ́ɴ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ  (⸝⸝ᵕᴗᵕ⸝⸝)\``,
        m,
        { contextInfo, quoted: m}
);
}

    let data = await download(results[0].id);
    if (!data?.dllink) {
      return conn.reply(
        m.chat,
        `😭 *Fallé en encontrar el enlace de descarga para "${results[0].name}".* Nᴀɢɪ lo intentó con todas sus fuerzas...`,
        m,
        { contextInfo, quoted: m}
);
}

    const fileSizeMB = parseFloat(data.size.replace(' MB', ''));
    const isTooBig = data.size.includes('GB') || fileSizeMB> 999;

    let caption = `
✅ *ᴛᴜ ᴀʀᴄʜɪᴠᴏ ʏᴀ ᴇsᴛᴀ ʟɪsᴛᴏ*

📥 ɴᴏᴍʙʀᴇ: *${data.name}*
🗂️ ᴘᴀǫᴜᴇᴛᴇ: *${data.package}*
📆 ᴜʟᴛɪᴍᴀ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴ: *${data.lastup}*
📦 ᴛᴀᴍᴀñᴏ: *${data.size}*

⚽ Nᴀɢɪ ʟᴏ ᴏʙᴛᴜʙᴏ sᴏʟᴏ ᴘᴀʀᴀ ᴠᴏs xD`.trim();

    await conn.sendFile(m.chat, data.icon, 'suki-preview.jpg', caption, m, null, { contextInfo, quoted: m});

    if (isTooBig) {
      return conn.reply(
        m.chat,
        `⚠️ *Oops, preciosura...* El archivo pesa *${data.size}* y Suki no puede enviarlo sin permiso especial 🦇`,
        m,
        { contextInfo, quoted: m}
);
}

    await conn.sendMessage(
      m.chat,
      {
        document: { url: data.dllink},
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${data.name}.apk`,
        caption: `📦 *${data.name}* descargada exitosamente 🦇\n\n🪄 ¡Tu aventura comienza al instalarla, preciosura!`,
},
      { quoted: m}
);
    m.react('✅');

} catch (error) {
    console.error('Error en Aptoide:', error);
    conn.reply(
      m.chat,
      `❌ *Upss, nagi tuvo un problema...*\nNo pudo completar la descarga.\n🩵 Detalles: ${error.message}`,
      m,
      { contextInfo, quoted: m}
);
    m.react('❌');
}
};

handler.tags = ['descargas'];
handler.help = ['apkmod'];
handler.command = ['apk', 'modapk', 'aptoide'];
handler.group = true;
handler.register = true;
handler.coin = 1;

export default handler;