const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'Phirippu';
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
    console.log('Verbindungsaufbau Erfolgreich'),
 //   client.action(check, `${ChatColor}`),
 //   client.action(streamer, `${ChatColor}`)
    client.action(check, `Bot Online! Commands: ${allcommands}`),
    client.action(streamer, `Bot Online! Commands: ${allcommands}`)
})

const allcommands = "!dacs !Leo !lurk !ModersIQ !sexistscore";

//Commands:


client.on('chat', (channel, user, message, self) => {

    if(message === '!modercommands' || message === 'commands' || message === '!commands' || message === 'EselCommands' || message === '!ModersEsel' || message === '!modersesel' || message === 'Modersesel')
        client.action(streamer, `Here try them out: ${allcommands}`)

})


client.on('chat', (channel, user, message, self) => {

    if(message === '!dacs')
        client.action(streamer, 'Steht auf Redheads KEKW')

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
        client.action(streamer, `@${user.username} ist jetzt im Lurk TriSad`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!TwitchClips' || message === '!Clips'|| message === '!clips')
        client.action(streamer, '!double !einkaufen !sprint')

})


client.on('chat', (channel, user, message, self) => {

    if(message === '!Einkaufen' || message === '!einkaufen')
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/SmokyIncredulousBibimbapTooSpicy-UPcfbRL3DkBx6cPB')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!sprint' || message === '!sprinten')
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/GleamingSmokyYamTheRinger-y1ww_DZjenVdJgFG')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!double')
        client.action(streamer, 'https://www.twitch.tv/derbenator/clip/GleamingSmokyYamTheRinger-y1ww_DZjenVdJgFG')

})



//sexistscore
const random = require('random');
let sexistscore = random.int(0, 100);



client.on('chat', (channel, user, message, self) => {

    if(message === `!sexistscore`)
        client.action(streamer, `@${user.username} hat einen Sexistscore von ${sexistscore}%`)

})