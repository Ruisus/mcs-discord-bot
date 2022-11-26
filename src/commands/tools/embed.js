const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription("This send an embed message in chat."),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('This is an EMBED!')
            .setDescription('This is a very cool Embed!')
            .setColor(0x8A250F)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: 'https://www.roblox.com/users/134011143/profile',
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL('https://www.roblox.com/groups/15792266/MCS-Modified-Competitve-Soccer#!/about')
            .addFields([
                {
                    name: 'name 1',
                    value: 'value 1',
                    inline: true
                },

                {
                    name: 'name 2',
                    value: 'value 2',
                    inline: true
                }
            ]);

        await interaction.reply({
            embeds: [embed]
        });
    }
};