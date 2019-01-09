const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = '+';

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.reply('Welcome to Techno Coder Server!!');
  }
    if (msg.content === prefix + 'hello') {
    msg.reply('Hi, Welcome to TecnoCoder Server!');
  }
});

client.login(process.env.BOT_TOKEN);
