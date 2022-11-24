const mongoose = require("mongoose");
const Discord = require("discord.js");

const UserSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    serverId: {
        type: mongoose.SchemaTypes.String,
        default: "1032416793647657031",
    },
    transfer_budget: {
        type: mongoose.SchemaTypes.Number,
        default: 1000,
    },
});

const model = mongoose.model('User', UserSchema);

module.exports = model;
