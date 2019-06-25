const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592816507860418621")
setInterval(function() {
channel.send(`play play play play play`);
}, 30)
})

client.login(process.env.BOT_TOKEN);