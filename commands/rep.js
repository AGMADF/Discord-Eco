const { MessageEmbed } = require("discord.js");
module.exports = {
name: "rep",
aliases: [],
run: async (client, message, args, Eco ) => {
let user = message.mentions.users.first();
if(user.bot)return message.reply(":x: | The bots cannot have rep.");
if(!user)return message.reply(":x: | Plz mention someone.");
if(user.id == message.author.id)return message.reply(":x: | You can't rep youself.");
var userBalance = client.getMemberOrCreate(message, user);
const time = client.ms(Eco.repTime - Date.now());
if(Eco.repTime > Date.now()) message.channel.send(`**You can get your daily reward after ( \`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds\` )**`);
else {
message.reply(`**🆙 | You have been repsected <@${user.id}>**`);
client.db.add(`Eco.${message.guild.id}.${user.id}.rep`, 1);
client.db.set(`Eco.${message.guild.id}.${message.author.id}.repTime`, (Date.now() + 86400000));
}
}};