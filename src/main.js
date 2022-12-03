const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, Collection } = require('discord.js');
const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const mongoose = require("mongoose");
const interactionCreate = require('./events/client/interactionCreate');

const prefix = '$'

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions
    ]
});

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders){
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter((file) => file.endsWith(".js"));
for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);

};

client.handleEvents();
client.handleCommands();
client.handleComponents();

// Whenever a new user joins the server a welcome message will appear in the welcome channel and will ping the new usernode
client.on("guildMemberAdd", (member) => {

    const welcomeChannelID = "1032416794515873841"

    const channel = member.guild.channels.cache.get(welcomeChannelID)

    const message = (`**Welcome to the MCS server, <@${member.id}>.**`)

    channel.send(message)
})

/*
mongoose.connect(process.env.SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to the database!!!")
});



client.on("messageCreate", async (message) => {
    if (message.author.id == "1043728455193342032") return;
    const newUser = await User.create({
        username: message.author.username,
        discordId: message.author.id,
        serverId: message.guild.id,
    });
});


client.on("guildMemberAdd", async (member) => {
    const newMember = await User.create({
        username: member.user.username,
        discordId: member.id,
        serverId: member.guild.id,
    });
});
*/


client.login(process.env.TOKEN);