const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const Discord = require("discord.js");
const { ActivityType } = require('discord.js');
require("dotenv").config()

const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

const prefix = '$'

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('MPS 23 | REBORN', { type: ActivityType.Playing });
})


client.on("messageCreate", (message) => {
    if(message.content == "hi")
    message.reply("hello world!")
})

client.on("messageCreate", (message) => {
    if(message.content == "MCS")
    message.reply("is the best!")
})



client.on("guildMemberAdd", (member) =>{

    const welcomeChannelID = "1032416794515873841"

    const channel= member.guild.channels.cache.get(welcomeChannelID)

    const message = (`**Welcome to the MCS server, <@${member.id}>.**`)

    channel.send(message)
})



























client.login(process.env.TOKEN);