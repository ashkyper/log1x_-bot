const { DiscordAPIError } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
    name: 'autopublish',
    description: 'Automatically publishes a message',
    async execute(guildMember, Discord) {
		let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'memeber');

		guildMember.roles.add(welcomeRole);
		
        console.log(`'${guildMember}' joined a guild`)
    }
}
