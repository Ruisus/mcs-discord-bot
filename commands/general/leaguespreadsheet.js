module.exports = {
    name: 'leaguespreadsheet',
    description: 'This command will send a link to our MCS league spreadsheet.',
    run: async (cleint, interaction) =>{
        interaction.followUp({content: `https://docs.google.com/spreadsheets/d/1RXCubTSDPdWKjUY62SMCvzl0ujT2d33LQoJTaaazR0E/edit#gid=0/11101662830/MPS-23-Reborn`});
    }
}