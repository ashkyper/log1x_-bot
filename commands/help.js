const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'help',
    description: 'Gives help information',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#49B6CE')
        .setTitle('log1x_ Discord Bot Help')
        .addFields(
            {name: '%info', value: 'Gives information about log1x_.'},
            {name: '%ping', value: 'Pings the bot.'},
        );

        message.channel.send(newEmbed);

        console.log('Command \'help\' run by ' + '[add user later]')
    }
}