const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'help',
    description: 'Gives help information',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#55bbff')
        .setTitle('log1x_ Discord Bot Help')
        .addFields(
            {name: '%info', value: 'Gives information about log1x_.'},
            {name: '%ping', value: 'Pings the bot.'},
        );

        message.channel.send(newEmbed);

        console.log(`${message.member.user.tag} (${message.member.id}) has ran the 'help' command`)
    }
}