const { Client, Collection } = require("discord.js");

class EcoClient extends Client {
constructor (options) {
super(options);  
this.config = require("../config.json");
this.db = require("quick.db");
this.commands = new Collection();
(async () => {
try{
await require("./LoadFiles.js")(this);
await require("../EcoSystem/functions.js")(this);
}catch(err){
  console.error("Can't load files.. :. ", err);
} finally {
  this.login(this.config.TOKEN).catch(console.error);
}
})();
}}

module.exports = EcoClient;