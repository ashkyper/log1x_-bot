module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    execute(message, args) {
        message.channel.send('pong');

        console.log('Command \'ping\' run by ' + '[add user later]')
    }
}