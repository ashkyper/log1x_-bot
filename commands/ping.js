module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    execute(message, args) {
        message.channel.send('pong');

        console.log(`${message.member.user.tag}'(${message.member.id}) has ran the 'ping' command in ${message.channel}`)
    }
}