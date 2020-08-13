const { MessageEmbed } = require("discord.js");
module.exports = {
name: "profile",
aliases: [],
run: async (client, message, args, Eco ) => {
let user = message.mentions.users.first() || message.author;
if(user.bot)return message.reply("**:x: | The bots cannot have profile card.**");
var userBalance = await client.getMemberOrCreate(message, user);
message.channel.send(new MessageEmbed()
        .setTitle(`Profile Card`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`Balance`, `\`$${userBalance.coins}\` 💸`, true)
        .addField(`XP`, `\`${userBalance.xp}/${userBalance.next}\`` , true)
        .addField(`Level`, `\`${userBalance.level}\``, true)
        .addField(`REPs`, `\`${userBalance.rep}\``, true)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp());
}};