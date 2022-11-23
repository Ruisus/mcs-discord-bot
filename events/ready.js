const client = require("..");
const { ActivityType } = require('discord.js');

//This prints that the Bot is logged in as its Discord username and tag in the terminal and when it is online it will show its activity as listed below
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('MPS 23 | REBORN', { type: ActivityType.Playing });
})