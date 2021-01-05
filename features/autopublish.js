module.exports = client => {
    client.on('message', message => {
        console.log('a message was sent')
    })
}
