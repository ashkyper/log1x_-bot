module.exports = {
    name: 'reactionrolesetup',
    description: "Sets up a reaction role message",
    async execute(message, args, Discord, client) {
        const twitchNotificationEmoji = '<:TwitchLogo:737344927054168115>';
        const youtubeNotificationEmoji = '<:YoutubeLogo:737345683639631994>';
        const stockNotificationEmoji = '<:nvidia:783479514901512254>';
        const redEmoji = '🟥';
        const blueEmoji = '🟦';
        const greenEmoji = '🟩';
        const yellowEmoji = '🟨';
        const purpleEmoji = '🟪';
        const orangeEmoji = '🟧';

        let embed = new Discord.MessageEmbed()
            .setColor('#55bbff')
            .setTitle('Choose your roles here!')
            .setDescription('React with the following for the respective notification role!\n\n'
                + `${twitchNotificationEmoji} for Twitch Notifications\n`
                + `${youtubeNotificationEmoji} for Youtube Notifications\n`
                + `${stockNotificationEmoji} for Stock Notifications on items like GPUs and CPUs, as well as the next gen consoles\n\n`
                + 'You can also choose some color roles here!\n\n'
                + `${redEmoji} for Red Color Role\n`
                + `${blueEmoji} for Blue Color Role\n`
                + `${greenEmoji} for Green Color Role\n`
                + `${yellowEmoji} for Yellow Color Role\n`
                + `${purpleEmoji} for Purple Color Role\n`
                + `${orangeEmoji} for Orange Color Role`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(twitchNotificationEmoji);
        messageEmbed.react(youtubeNotificationEmoji);
        messageEmbed.react(stockNotificationEmoji);
        messageEmbed.react(redEmoji);
        messageEmbed.react(blueEmoji);
        messageEmbed.react(greenEmoji);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(purpleEmoji);
        messageEmbed.react(orangeEmoji);

        console.log(`${message.member.user.tag} (${message.member.id}) has ran the 'reactionrolesetup' command and a reaction role has been setup`);
    }

}
