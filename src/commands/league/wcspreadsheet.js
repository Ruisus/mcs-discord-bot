const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wcspreadsheet')
        .setDescription("Returns with link to World Cup Spreadsheet."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `https://docs.google.com/spreadsheets/d/1gcLxOXZDPjhXNU_-sK1tsqESics5Ti5q1sJBJzBlH00/edit?usp=sharing`        
        await interaction.editReply({
            content: newMessage
        });
    }
}