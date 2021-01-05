const { DiscordAPIError } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
    name: 'welcome',
    description: 'Automatically give role on join',
    async execute(guildMember, Discord) {
		let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Memeber');

		guildMember.roles.add(welcomeRole);
		
        console.log(`'${guildMember}' joined a guild`)
    }
}
