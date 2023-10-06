const tmi = require("tmi.js");
const random = require("random");
//var {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
var {ModersEselToken} = require("C:\\Users\\MCmoderSD\\Desktop\\GitHub\\ModersEsel\\token.js");
const { channel } = require("tmi.js/lib/utils");
var streamer = "rzrwanted"
var check = "ModersEsel"
var prefix = "!"
const allcommands = "!Leo  !ModersIQ !poop !raus !sexistscore !IchHasseFrauen";
var config = {
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
}

var client = new tmi.client(config)
client.connect();


client.on("chat", (streamer, user, message, self) => {
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, streamer, self) 
    } catch (err) {
        return;
    }
    
})




