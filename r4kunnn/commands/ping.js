exports.run = (client, message, args, user, streamer, self) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(streamer, `@${user.username}, your ping is ${ping}`)
    })
}