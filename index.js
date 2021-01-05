const { exec } = require('child_process');
const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = { client };

const prefix = '$';

const fs = require('fs');
const { features } = require('process');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.features = new Discord.Collection();
const featureFiles = fs.readdirSync('./features').filter(file => file.endsWith('.js'));
for (const file of featureFiles) {
    const feature = require(`./features/${file}`);

    client.features.set(feature.name, feature);
}

client.once('ready', () => {
    console.log('Bot is Online')
    client.user.setActivity('with your mom')
});

client.on('message', message => {

    if (message.channel.type === 'news') {
        client.features.get('autopublish').execute(message, Discord);
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args, Discord);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }

});

client.login('Nzk0MjQyMjgwMDY3Njk0NTky.X-39ww.2x9NaX81ByVNSrXAMdik5KrXJYg');
