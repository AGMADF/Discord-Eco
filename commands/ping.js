module.exports = {
name: "ping",
aliases: [],
run: async (client, message, args) => {
  message.channel.send("Pong?");
}};