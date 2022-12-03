const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, ActionRow } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription("Returns a select menu."),
    async execute(interaction, client) {   
        const menu = new SelectMenuBuilder()
            .setCustomId("sub-menu")
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(new SelectMenuOptionBuilder({
                label: 'Option #1',
                value: 'https://www.youtube.com/@Modified_Competitive_Soccer'
            }), new SelectMenuOptionBuilder({
                label: 'Option #2',
                value: 'https://www.tiktok.com/@mcsrblx?lang=en'
            }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    },
};