let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['admin']
handler.command = /^unbanchat$/i

handler.admin = true

module.exports = handler
