const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'r4kunnn';
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
 //   client.action(check, `${ChatColor}`),,
 //   client.action(streamer, `${ChatColor}`),
    client.action(check, `Bot updated and online! Commands: ${allcommands}`),
    client.action(streamer, `Bot updated and online! Commands: ${allcommands}`)
})



const allcommands = "!bizeps !ModerCommands !ModersIQ !poop !raus !unlurk !vip !wt";

client.on('chat', (channel, user, message, self) => {

    if(message === '!ModerCommands')
        client.action(streamer, `Here try them out: ${allcommands}`)

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

    if(message === '!raus' || message === '!Raus')
        client.action(streamer, 'Raus!!! --> 🚪')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!poop' || message === '!Poop'|| message === '!scheißen' || message === '!kacken'|| message === '!Scheißen'|| message === '!Kacken')
        client.action(streamer, `@${user.username} geht jetzt erstmal DICK scheißen!`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!RollEsel' || message === '!roll Esel' || message === '!roll esel' || message === '!Roll Esel' || message === '!GoEsel' || message === '!go Esel' || message === '!Go Esel' || message === '1go esel' || message === '!Go esel')
        client.action(streamer, '!play')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!VIP' || message === '!Vip' || message === '!vip')
        client.action(streamer, `@${user.username} either you buy VIP with Channel Points, gift 100 Subs or cheer 17k Bits`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!bizeps' || message === '!Bizeps')
        client.action(streamer, `Ist offensichtlich nicht vorhanden KEKW`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === 'WER hat gefragt @MCmoderSD Walter')
        client.action(streamer, `MCmoderSD doesn't care @${user.username} `)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!unlurk')
        client.action(streamer, `${user.username} is back! peepoHey`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!wt' || message === '!Wt' || message === '!WT' || message === '!wT')
        client.action(streamer, `!watchtime @${user.username}`)

})

/*wiff

let wiff = 0;

client.on('chat', (channel, user, message, self) => {

    if(message === '!wiff')
        client.action(`${wiff}`)
})

client.on('chat', (channel, user, message, self) => {

    if(message === '!wiff')
    ++wiff
})


//donowall


client.on('chat', (channel, user, message, self) => {                                       //Donowall

    if(message === '! donowall' || message === '!StopAgnessing')
   client.action(streamer, `@${user.brodcaster} ich bitte Sie darum sich wieder auf den chat zu konzentrieren und die überlesenen Nachrichten von ${user.username} vorzulesen! BONKTHESTREAMER`)
    
})

client.on('chat', (channel, user, message, self) => {

    if(message === '!dacs')
        client.action(streamer, 'Steht auf Redheads KEKW')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!Leo' || message === '!leo')
        client.action(streamer, 'ist ein roter großer Riese')

})

*/