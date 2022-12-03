const Discord = require("discord.js");
const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`${client.user.tag} is now logged in and online.`);
        client.user.setActivity('MPS 23 | REBORN', { type: ActivityType.Playing });
        client.application.commands.set([]);
    }
};