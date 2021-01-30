module.exports = {
    name: 'reactionrole',
    description: "Reaction Roles",
    async execute(Discord, client) {
        const channel = '737342480021717034';

        const twitchNotificationEmoji = '<:TwitchLogo:737344927054168115>';
        const youtubeNotificationEmoji = '<:YoutubeLogo:737345683639631994>';
        const stockNotificationEmoji = '<:nvidia:783479514901512254>';
        const redEmoji = '🟥';
        const blueEmoji = '🟦';
        const greenEmoji = '🟩';
        const yellowEmoji = '🟨';
        const purpleEmoji = '🟪';
        const orangeEmoji = '🟧';

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'TwitchLogo') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Twitch Notifications"));
                }
                if (reaction.emoji.name === 'YoutubeLogo') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "YouTube Notifications"));
                }
                if (reaction.emoji.name === 'nvidia') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Stock Notifications"));
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Red"));
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Blue"));
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Green"));
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Yellow"));
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Purple"));
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === "Orange"));
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
                if (reaction.emoji.name === 'TwitchLogo') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Twitch Notifications"));
                }
                if (reaction.emoji.name === 'YoutubeLogo') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "YouTube Notifications"));
                }
                if (reaction.emoji.name === 'nvidia') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Stock Notifications"));
                }
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Red"));
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Blue"));
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Green"));
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Yellow"));
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Purple"));
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === "Orange"));
                }
            } else {
                return;
            }
        });

        console.log(`ReactionRole started`);
    }

}
