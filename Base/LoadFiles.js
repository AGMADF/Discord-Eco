const { readdirSync } = require("fs");
const { join } = require("path");
module.exports = (client) =>{
const commandFiles = readdirSync(join(__dirname, "../commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "../commands", `${file}`));
  client.commands.set(command.name, command);
}
const eventFiles = readdirSync(join(__dirname, "../events")).filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
const event = require(join(__dirname, "../events", `${file}`));
const eventName = file.substring(0, file.indexOf(".js"));
client.on(eventName, event.bind(null, client));
 }
}