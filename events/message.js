module.exports = async (client, message) =>{
if(!message.guild || message.author.bot)return;
if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return;
const { PREFIX } = client.config;
var Eco = await require("../EcoSystem/Core.js")(client, message);
if(!message.content.startsWith(PREFIX))return;
const args = message.content.slice(PREFIX.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;
try {
    command.run(client, message, args, Eco);
  } catch (error) {
    console.error(error);
  }
};