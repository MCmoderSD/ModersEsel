const tmi = require("tmi.js");
const { commercial } = require("tmi.js/lib/commands");
        

exports.run = (client, message, user, channel, self) => {
        const channel = 'rzrwanted'
        const args = message.slice(prefix.length).trim().split(/ +/g);
         const cmd = args.shift().toLowerCase();
        try {
//          let commandFile = require(`./commands/${cmd}.js`)
            let commandFile = require(`C:\\Users\\MCmoderSD\\Desktop\\GitHub\\ModerEsel mk2\\commands\\${cmd}.js`)
            commandFile.run(client, message, args, user, channel, self) 
            console.log('Channel RzrWanted was loaded')
        } catch (err) {
            return;
        }
}