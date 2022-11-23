const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, Collection } = require('discord.js');
const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({ intents:[
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers
    ]});

client.commands = new Collection();

module.exports = client;

const prefix = '$'

require("./handler/main");

// When user sends the message 'hi' the bot will reply to the user with 'hello world!'
client.on("messageCreate", (message) => {
    if(message.content == "hi")
    message.reply("hello world!")
})

// When user sends the message 'MCS' the bot will reply to the user with 'is the best!'
client.on("messageCreate", (message) => {
    if(message.content == "MCS")
    message.reply("is the best!")
})


// Whenever a new user joins the server a welcome message will appear in the welcome channel and will ping the new usernode
client.on("guildMemberAdd", (member) =>{

    const welcomeChannelID = "1032416794515873841"

    const channel= member.guild.channels.cache.get(welcomeChannelID)

    const message = (`**Welcome to the MCS server, <@${member.id}>.**`)

    channel.send(message)
})







client.login(process.env.TOKEN);