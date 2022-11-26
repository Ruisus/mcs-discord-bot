const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tournamentbracket')
        .setDescription("Returns with link to our 3v3 tournament bracket."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `https://docs.google.com/spreadsheets/d/1VrBAffJHr0ApH5bXuXiC5ZBMSVR9evcM0EopWv5z0Mc/edit?usp=sharing`        
        await interaction.editReply({
            content: newMessage
        });
    }
}