const EcoClient = require("./Base/EcoClient.js");
const client = new EcoClient({ disableMentions: "everyone" });

client.on("disconnect", () => console.warn("Bot is disconnecting..."))
	.on("reconnecting", () => console.log("Bot reconnecting..."))
	.on("error", (err) => console.error(err))
	.on("warn", (info) => console.log(info));

process.on("uncaughtException", err => {
    console.error(`Uncaught Exception: ${err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./")}`);
    process.exit(1);
}).on("unhandledRejection", err => console.error(`Unhandled rejection: ${err}`));