import fetch from 'node-fetch';

let handler = async (m, { text }) => {
  if (!text) {
    m.reply(`\`ᴏʏᴇ ᴏʏᴇ ᴘʀᴏᴍᴏᴄɪᴏɴᴀ ᴇʟ ᴛᴇ́ʀᴍɪɴᴏ ᴅᴇ ʙᴜ́sᴏ̨ᴜᴇᴅᴀ ᴏ̨ᴜᴇ sᴇᴀs ʀᴇᴀʟɪᴢᴀʀ ᴇɴ \`*ɢʟᴏʙᴀʟᴇs*`);
    return;
  }

  const apiUrl = `https://delirius-apiofc.vercel.app/search/googlesearch?query=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (!result.status) {
      m.reply('Error al realizar la búsqueda.');
      return;
    }

    let replyMessage = `${emoji2} Resultados de la búsqueda:\n\n`;
    result.data.slice(0, 1).forEach((item, index) => {
      replyMessage += `☁️ *${index + 1}. ${item.title}*\n`;
      replyMessage += `📰 *${item.description}*\n`;
      replyMessage += `🔗 URL: ${item.url}`;
    });

m.react('✅')

    m.reply(replyMessage);
  } catch (error) {
    console.error(`${msm} Error al realizar la solicitud a la API:`, error);
    m.reply(`${msm} Ocurrió un error al obtener los resultados.`);
  }
};

handler.command = ['google'];

export default handler;