module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(message, args, Discord, client) {
        const channel = '737342480021717034';
        const twitchNotificationRole = message.guild.roles.cache.find(role => role.name === "Twitch Notifications");
        const youtubeNotificationRole = message.guild.roles.cache.find(role => role.name === "YouTube Notifications");
        const stockNotificationRole = message.guild.roles.cache.find(role => role.name === "Stock Notifications");
        const redRole = message.guild.roles.cache.find(role => role.name === "Red");
        const blueRole = message.guild.roles.cache.find(role => role.name === "Blue");
        const greenRole = message.guild.roles.cache.find(role => role.name === "Green");
        const yellowRole = message.guild.roles.cache.find(role => role.name === "Yellow");
        const purpleRole = message.guild.roles.cache.find(role => role.name === "Purple");
        const orangeRole = message.guild.roles.cache.find(role => role.name === "Orange");

        const twitchNotificationEmoji = '737344927054168115';
        const youtubeNotificationEmoji = '737345683639631994';
        const stockNotificationEmoji = '783479514901512254';
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
                + 'You can also choose some color roles here!!\n\n'
                + `${redEmoji} for Twitch Notifications\n`
                + `${blueEmoji} for Twitch Notifications\n`
                + `${greenEmoji} for Twitch Notifications\n`
                + `${yellowEmoji} for Twitch Notifications\n`
                + `${purpleEmoji} for Twitch Notifications\n`
                + `${orangeEmoji} for Twitch Notifications`);
 
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

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === twitchNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(twitchNotificationRole);
                }
                if (reaction.emoji.name === youtubeNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtubeNotificationRole);
                }
                if (reaction.emoji.name === youtubeNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(stockNotificationRole);
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redRole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenRole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowRole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleRole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === twitchNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(twitchNotificationRole);
                }
                if (reaction.emoji.name === youtubeNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(youtubeNotificationRole);
                }
                if (reaction.emoji.name === youtubeNotificationEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(stockNotificationRole);
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redRole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenRole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowRole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleRole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeRole);
                }
            } else {
                return;
            }
        });
    }

}
