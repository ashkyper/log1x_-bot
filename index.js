const { exec } = require('child_process');
const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

module.exports = { client };

const prefix = '$';

const fs = require('fs');
const { features } = require('process');

//get command .js files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//bot startup
client.once('ready', () => {
    console.log('Bot is Online')
    client.user.setActivity('with your mom')
});

//joined discord server
client.on("guildCreate", guild => {
    console.log(`Joined new server: ${guild.name}(${guild.id})`);

    syncServerList(false);
});

//welcome
client.on('guildMemberAdd', guildMember => {
    client.commands.get('welcome').execute(guildMember, Discord);
});

//autopublisher
client.on('message', message => {
    if (message.channel.type === 'news') {
        client.commands.get('autopublish').execute(message, Discord);
    }
});

//commands
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args, Discord);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

client.login('Nzk0MjQyMjgwMDY3Njk0NTky.X-39ww.2x9NaX81ByVNSrXAMdik5KrXJYg');
