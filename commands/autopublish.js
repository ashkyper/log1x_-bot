const { DiscordAPIError } = require("discord.js");
const fetch = require("node-fetch");
const client = require('../index.js').client;

const { options: { http }, rest } = client;

module.exports = {
    name: 'autopublish',
    description: 'Automatically publishes a message',
    async execute(message, Discord) {
        
        await fetch(
			`${http.api}/v${http.version}/channels/${message.channel.id}/messages/${message.id}/crosspost`,
			{
				method: 'POST',
				headers: {
					'Authorization': `${rest.tokenPrefix} Nzk0MjQyMjgwMDY3Njk0NTky.X-39ww.2x9NaX81ByVNSrXAMdik5KrXJYg`,
				},
			},
		)

        console.log(`'${message}' in '${message.channel}' from user ${message.member.user.tag} (${message.member.id}) has been published`)
    }
}
