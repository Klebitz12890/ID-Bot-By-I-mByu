let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['admin']
handler.command = /^setwelcome$/i

handler.admin = true

module.exports = handler
