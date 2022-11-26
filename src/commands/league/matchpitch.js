const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mpspitch')
        .setDescription("Returns with link to MPS 23 Pitch."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `https://www.roblox.com/games/11101662830/MPS-23-Reborn`        
        await interaction.editReply({
            content: newMessage
        });
    }
}