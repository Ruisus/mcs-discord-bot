const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mcslinks')
        .setDescription("This send an embed message which contains link and info about Roblox group."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('LINKS')
            .setColor(0x8A250F)
            .setAuthor({
                iconURL: client.user.displayAvatarURL(),
                name: "MCS | Modified Competitive Soccer"
            })
            .setDescription(
                `[Roblox Group](https://www.roblox.com/groups/15792266/MCS-Modified-Competitve-Soccer#!/about)

                 [MPS 23 Pitch](https://www.roblox.com/games/11101662830/MPS-23-Reborn)

                 [League Spreadsheet](https://docs.google.com/spreadsheets/d/1RXCubTSDPdWKjUY62SMCvzl0ujT2d33LQoJTaaazR0E/edit?usp=sharing)

                 [World Cup Spreadsheet](https://docs.google.com/spreadsheets/d/1gcLxOXZDPjhXNU_-sK1tsqESics5Ti5q1sJBJzBlH00/edit?usp=sharing)

                 [Discord Link] https://discord.gg/2HNP4GzBYe
                 
                 `
            )
        await interaction.reply({
            embeds: [embed]
        });
    }
};