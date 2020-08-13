const { MessageEmbed } = require("discord.js");
module.exports = { 
name: "help",
aliases: [],
run: async (client, message, args, Eco ) => {
message.channel.send(new MessageEmbed()
                    .setTitle("Commands List")
                    .setDescription(client.commands.map(c=> `\`${c.help.name}\``).join(", "))
                    .setColor("RANDOM"));
}};