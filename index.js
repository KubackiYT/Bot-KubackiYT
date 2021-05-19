const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Lubię ciasteczka!")
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODQ0NTU5MjY2MDA2MzAyNzIw.YKULHA.X7Aw7NXzStO3J-62vpS7LsaYmFk');