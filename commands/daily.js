const { MessageEmbed } = require("discord.js");
module.exports = {
name: "daily",
aliases: ["claim"],
run: async (client, message, args, Eco) => {
let amount = Math.floor(Math.random() * 500) + 100;
const dailyTime = Eco.daily;
const time = client.ms(dailyTime - Date.now());
if(dailyTime > Date.now())message.channel.send(`**You can get your daily reward after ( \`${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds\` )**`);
else {
client.db.add(`Eco.${message.guild.id}.${message.author.id}.coins`, amount);
client.db.set(`Eco.${message.guild.id}.${message.author.id}.daily`, (Date.now() + 86400000));
message.channel.send(`**:moneybag: | You got \`$${amount}\` money!!**`);
}
}};