//const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const {ModersEselToken} = require("C:\\Users\\MCmoderSD\\Desktop\\GitHub\\ModersEsel\\token.js");
const allcommands = "!bizeps !ModerCommands !ModersIQ !poop !raus !unlurk !vip !wt";
const tmi = require("tmi.js");
const commands = require("tmi.js/lib/commands");
var fs = require('fs');
var prefix = "!"
var streamer = 'r4kunnn'


var config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: "MCmoderSD",

        password: ModersEselToken
    },
    channels: [streamer]
}

var client = new tmi.client(config)
client.connect();

client.on('connected', (adress, port) => {
    console.log(`Verbindungsaufbau Erfolgreich ${allcommands}`),
    client.action(streamer, `Bot updated and online! Commands: ${allcommands}`)
})

client.on("chat", (channel, user, message, self) => {

    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self)
        console.log(cmd)
    } catch (err) {
        return;
    }
    
})