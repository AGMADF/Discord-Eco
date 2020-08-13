const { MessageEmbed } = require("discord.js");
module.exports = {
name: "leaderboard",
aliases: ["lb", "top"],
run: async (client, message, args) => {
const data = await client.db.get(`Eco.${message.guild.id}`);
if(!data)return message.channel.send("**❌ | Empty Leaderboard!**");
var lb = [];
for(var key of Object.keys(data)){lb.push(client.db.get(`Eco.${message.guild.id}.${key}`))}
if(!lb.length)return message.channel.send("**❌ | Empty Leaderboard!**");
message.channel.send(new MessageEmbed()
        .setAuthor(`Leaderboard of ${message.guild.name}!`, message.guild.iconURL())
        .setColor("RANDOM")
        .setDescription(lb
             .slice(0, 5)
             .sort((a,b)=> b.xp - a.xp)
             .map((user, i)=> `**#${i + 1}** <@${user.user}> | \`${user.xp}/${user.next}\``)
             .join("\n"))
        .setTimestamp());
}};