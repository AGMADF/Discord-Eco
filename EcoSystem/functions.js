module.exports = client =>{
  

client.getMemberOrCreate = async function (message, user){
var userBalance = await client.db.get(`Eco.${message.guild.id}.${user.id}`);
if(!userBalance){
await client.db.set(`Eco.${message.guild.id}.${user.id}`, { guild: message.guild.id, level: 0, rep: 0 , repTime: 0,coins: 5, xp: 1, next: 50, daily: 0, user: user.id });
 userBalance = await client.db.get(`Eco.${message.guild.id}.${user.id}`);
}
  return userBalance;
}
  
client.ms = function(milliseconds) {
const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
        return {
            days: roundTowardsZero(milliseconds / 86400000),
            hours: roundTowardsZero(milliseconds / 3600000) % 24,
            minutes: roundTowardsZero(milliseconds / 60000) % 60,
            seconds: roundTowardsZero(milliseconds / 1000) % 60,
            milliseconds: roundTowardsZero(milliseconds) % 1000,
            microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
            nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
        }
    }
};