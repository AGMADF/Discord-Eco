const { MessageEmbed } = require("discord.js");
module.exports = {
name: "money",
aliases: ["bal", "coins"],
run: async (client, message, args, Eco ) => {
let user = message.mentions.users.first() || message.author;
if(user.bot)return message.reply("**:x: | The bots cannot have money card.**");
var userBalance = await client.getMemberOrCreate(message, user);
if(args[1]){
if(user.id == message.author.id)return message.reply("**You can't give yourself money..**");
if(isNaN(parseInt(args[1])))return message.reply("**Inviled Amount**");    
if(parseInt(args[1]) > Eco.coins)return message.reply("**You don't have enogth money!**");
client.db.add(`Eco.${message.guild.id}.${user.id}.coins`, Math.floor(parseInt(args[1])));
client.db.add(`Eco.${message.guild.id}.${message.author.id}.coins`, -parseInt(args[1]));
message.channel.send(`**${message.author}, You have been sent \`$${Math.floor(parseInt(args[1]))}\` to ${user}**`);
}else return message.channel.send(`💳 | <@${userBalance.user}>'s have a \`$${userBalance.coins}\``);
}};