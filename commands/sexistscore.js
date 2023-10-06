const random = require("random")
const { username } = require("tmi.js/lib/utils")

exports.run = (client, message, args, user, channel, self) => {
    let sexistscore = random.int(-10, 212)
    client.say(channel, `${user.username} has a sexistscore of ${sexistscore} `)
    
}