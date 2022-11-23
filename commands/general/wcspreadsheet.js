module.exports = {
    name: 'wcspreadsheet',
    description: 'This command will send a link to our World Cup spreadsheet.',
    run: async (cleint, interaction) =>{
        interaction.followUp({content: `https://docs.google.com/spreadsheets/d/1gcLxOXZDPjhXNU_-sK1tsqESics5Ti5q1sJBJzBlH00/edit?usp=sharing`});
    }
}