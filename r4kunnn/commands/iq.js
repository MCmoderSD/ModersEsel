const random = require("random")
exports.run = (client, message, args, user, channel, self) => {
    let iq = random.int(-10, 212);
    client.say(channel,`${user.username} hat einen IQ von ${iq}`)
}