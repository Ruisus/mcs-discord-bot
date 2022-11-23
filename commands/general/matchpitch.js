module.exports = {
    name: 'matchpitch',
    description: 'This command will send a link of the MPS 23 pitch.',
    run: async (cleint, interaction) =>{
        interaction.followUp({content: `https://www.roblox.com/games/11101662830/MPS-23-Reborn`});
    }
}