module.exports = client =>{
console.log(`${client.user.tag} is Ready!!`);
    client.user.setActivity(`${client.config.PREFIX}help | Eco Bot`, { type: "PLAYING" });
    client.user.setStatus("idle");
};