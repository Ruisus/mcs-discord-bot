module.exports = {
    name: 'ping',
    description: 'This is a ping command.',
    run: async (cleint, interaction) =>{
        interaction.followUp({content: `Pong!`});
    }
}