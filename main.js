const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, Collection } = require('discord.js');
const Discord = require("discord.js");
require("dotenv").config()
const mongoose = require("mongoose");
const User = require("./models/UserSchema");

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

mongoose.connect(process.env.SRV,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
    console.log("Connected to the database!!!")
});

// let server = message.guild.id;

client.on("messageCreate", async (message) => {
    if(!message.author.id == "1043728455193342032"){
     const newUser = await User.create({
    username: message.author.username,
    discordId: message.author.id,
    serverId: message.guild.id,
    });}
    //const savedUser = await newUser.save();
});

client.on("guildMemberAdd", async (member) =>{
    const newMember = await User.create({
        username: member.user.username,
        discordId: member.id,
        serverId: member.guild.id,
    });
});




client.login(process.env.TOKEN);