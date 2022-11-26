const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaguespreadsheet')
        .setDescription("Returns with link to our league spreadsheet."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `https://docs.google.com/spreadsheets/d/1RXCubTSDPdWKjUY62SMCvzl0ujT2d33LQoJTaaazR0E/edit?usp=sharing`        
        await interaction.editReply({
            content: newMessage
        });
    }
}