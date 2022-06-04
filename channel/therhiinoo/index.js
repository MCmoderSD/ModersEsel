const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'therhiinoo';
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
    client.action(check, `Bot Online! Commands: ${allcommands}`)//,
 //   client.action(streamer, `Bot Online! Commands: ${allcommands}`)
})



const allcommands = "!dacs !Leo !lurk !ModersIQ !poop !raus";


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

    if(message === '!raus')
        client.action(streamer, 'Raus!!! --> 🚪')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!poop' || message === '!Poop'|| message === '!scheißen' || message === '!kacken'|| message === '!Scheißen'|| message === '!Kacken')
        client.action(streamer, `@${user.username} geht jetzt erstmal DICK scheißen!`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!lurk')
        client.action(streamer, `@${user.username} ist jetzt im Lurk muted `)

})

//wiff

let wiff = 0;

client.on('chat', (channel, user, message, self) => {

    if(message === '!wiff')
        client.action(`${wiff}`)
})

client.on('chat', (channel, user, message, self) => {

    if(message === '!wiff')
    ++wiff
})
