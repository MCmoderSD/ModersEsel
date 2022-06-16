const { allCommands } = require("../index.js")

exports.run = (client, message, args, user, channel, self) => {

    client.say(channel, `Try ${allCommands}`)
}