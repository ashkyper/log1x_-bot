const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'info',
    description: 'Gives information about log1x_',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#49B6CE')
        .setTitle('log1x_')
        .setURL('https://www.twitch.tv/log1x_')
        .setDescription('log1x is a Twitch Streamer with a Youtube Channel as well. He plays several games such as Minecraft, Cities: Skylines, Universe Sandbox, Portal & Portal 2, as well as many more. You can find him on Twitch at https://www.twitch.tv/log1x_ or on Youtube at https://www.youtube.com/channel/UCZss6e6RHoyfeRdafxbkZvA.')
        .setImage('https://log1x.us.to/images/log1x_-logo-transparent.png');

        message.channel.send(newEmbed);

        console.log('Command \'info\' run by ' + '[add user later]')
    }
}
