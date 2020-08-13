const { MessageEmbed } = require("discord.js");
module.exports = (message, level)=>{
message.channel.send(new MessageEmbed()
.setTitle("Level UP")
.setColor("GREEN")
.setDescription(`**You have been leveled up to \`${level}\`**`)
).catch(()=> {});
}