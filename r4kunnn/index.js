const tmi = require("tmi.js");
const random = require("random");
const {ModersEselToken} = require("../token.js");
const { channel } = require("tmi.js/lib/utils");
const streamer = "r4kunnn";
const check = "ModersEsel";
const prefix = "!";
const allCommands = "!AgnesScare !Commands !dicksize !IQ !poop !raus !Roll Esel !unlurk !wt !VIP";
const config = {
    options: {
        debug: true
    },

    connection: {
        cluster: 'aws',
        reconnect: true,
    },

    identity: {
        username: 'ModersEsel',
        password: ModersEselToken
    },

    channels: [check, streamer]
};

const client = new tmi.client(config);
client.connect().then(r => console.log(`Bot Online! Commands: ${allCommands}`));


client.on("chat", (streamer, user, message, self) => {
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./r4kunnn/commands/${cmd}.js`)
        commandFile.run(client, message, args, user, streamer, self) 
    } catch (err) {

    }
})
module.exports.allCommands=allCommands