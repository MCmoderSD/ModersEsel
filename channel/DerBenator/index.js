const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'DerBenator';
const check = 'ModersEsel';
//const ChatColor = '/color #8030d3';



const tmi = require('tmi.js');
const { channel, username } = require('tmi.js/lib/utils');

const options = {
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

const client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
    console.log('Verbindungsaufbau Erfolgreich')//,
 //   client.action(check, `${ChatColor}`),
 //   client.action(streamer, `${ChatColor}`)
    client.action(check, `Bot updated and online! Commands: ${allcommands}`)//,
    client.action(streamer, `Bot updated and online! Commands: ${allcommands}`)
})

const allcommands = "!AgnesScare !clips !dacs !Leo !lurk !ModersIQ !poop !raus !toni-";

//Commands:


client.on('chat', (channel, user, message, self) => {

    if(message === '!modercommands' || message === 'commands' || message === '!commands' || message === 'EselCommands' || message === '!ModersEsel' || message === '!modersesel' || message === 'Modersesel')
        client.action(streamer, `Here try them out: ${allcommands}`)

})


client.on('chat', (channel, user, message, self) => {

    if(message === '!dacs')
        client.action(streamer, 'Sagt er steht auf Schwarzhaarige, steht aber in Wahrheit auf Redheads KEKW')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!ModersIQ' || message === '!modersIQ' || message === '!modersiq')
        client.action(streamer, 'ist größer als 130 5Head')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!Leo' || message === '!leo')
        client.action(streamer, 'ist ein roter großer Riese')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!AgnesScare' || message === '!r4kunnnScare')
        client.action(streamer, 'https://clips.twitch.tv/AgitatedDignifiedEchidnaJKanStyle-YvqxB7AArY9FyruF?tt_content=url&tt_medium=clips_api')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!lurk')
        client.action(streamer, `@${user.username} ist jetzt im Lurk peepoLeave`)

})


client.on('chat', (channel, user, message, self) => {

    if(message === '!TwitchClips help' || message === '!Clips'|| message === '!clips')
        client.action(streamer, 'TwitchClip "CLIP" | [double] [einkaufen] [sprint]')

})


client.on('chat', (channel, user, message, self) => {

    if(message === '!TwitchClip einkaufen' )
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/SmokyIncredulousBibimbapTooSpicy-UPcfbRL3DkBx6cPB')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!TwitchClip sprint')
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/GleamingSmokyYamTheRinger-y1ww_DZjenVdJgFG')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!TwitchClip double')
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/GleamingSmokyYamTheRinger-y1ww_DZjenVdJgFG')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!raus' || message === '!Raus')
        client.action(streamer, 'Raus!!! --> 🚪')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!poop' || message === '!Poop' || message === '!scheißen' || message === '!kacken'|| message === '!Scheißen'|| message === '!Kacken')
        client.action(streamer, `@${user.username} geht jetzt erstmal DICK scheißen!`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === "!Lena's Phobie")
    client.action(streamer, `Hippopotomonstrosesquippedaliophobie --> ist die Phobie vor langen Wörtern`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === "ModersEsel" || message === 'Moders Esel'  || message === 'ModerBot' || message === 'Moderbot')
    client.action(streamer, `Whaaaz up? I'm the ModersEsel! Here are my commands ${allcommands}`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === "!ModersEsel" || message === '!Moders Esel'  || message === '!ModerBot' || message === '!Moderbot')
    client.action(streamer, `Whaaaz up? I'm the ModersEsel! Here are my commands ${allcommands}`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === "!toni" || message === '!Toni')
    client.action(streamer, `Call me Babygirl +491727706098`)

})

//sexistscore
/*const random = require('random');
let sexistscore = random.int(0, 100);
let sexist = 


client.on('chat', (channel, user, message, self) => {

    if(message === `!sexistscore @${sexist}`)
        client.action(streamer, `@${sexist} hat einen Sexistscore von ${sexistscore}%`)

})*/