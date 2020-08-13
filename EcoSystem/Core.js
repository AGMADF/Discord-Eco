function generateor(min, max) {
    return Math.ceil(Math.random() * (max - min + 1));
}
const cooldowns_xp = new Set();
module.exports = async (client, message)=>{
try {
var Member = client.db.get(`Eco.${message.guild.id}.${message.author.id}`);
if(!Member){
await client.db.set(`Eco.${message.guild.id}.${message.author.id}`, { guild: message.guild.id, level: 0, coins: 5, xp: 1, next: 50, rep: 0, repTime: 0, daily: 0, user: message.author.id });
Member = await client.db.get(`Eco.${message.guild.id}.${message.author.id}`);
}
if (!cooldowns_xp.has(message.author.id)) {
if(Member.xp >= Member.next){
await client.db.add(`Eco.${message.guild.id}.${message.author.id}.level`, 1);
await client.db.add(`Eco.${message.guild.id}.${message.author.id}.next`,  Math.floor(Member.next * 1.45));
require("./embeds/LevelUP.js")(message, Member.level + 1);
}
await client.db.add(`Eco.${message.guild.id}.${message.author.id}.coins`, generateor(3, 15));
await client.db.add(`Eco.${message.guild.id}.${message.author.id}.xp`, 1);
  cooldowns_xp.add(message.author.id);
  setTimeout(() => cooldowns_xp.delete(message.author.id), 5000);
}
  return await client.db.get(`Eco.${message.guild.id}.${message.author.id}`);
}catch(err){
    console.error("Error in Eco System.. :. ", err);
}
};