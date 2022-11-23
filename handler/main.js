const { dir } = require("console");
const fs = require("fs");
const client = require("..");

// Events

const eventFiles = fs.readdirSync("./events/")

eventFiles.map((file) => {
    return require(`../events/${file}`);
});

//commands

const commandsArray = [];

fs.readdirSync("./commands/").forEach((dir) => {
    const commandFiles = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith(".js"));
    commandFiles.map((files) => {
        const cmd = require(`../commands/${dir}/${files}`);
        if(!cmd.name) return;
        client.commands.set(cmd.name, cmd);
        commandsArray.push(cmd);

    });
});

client.on("ready", async () => {
    // Set commands globally for all servers.
    await client.application.commands.set(commandsArray);

    //Set for a singular server
    //await (await client.guilds.fetch("Server ID")).commands.set(commandsArray);
    // I have commented this because I am setting this globally.

})