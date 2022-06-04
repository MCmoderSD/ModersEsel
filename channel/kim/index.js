const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'alter3go';
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
    client.action(check, `Bot updated and online! Commands: ${allcommands}`)//,
    client.action(streamer, `Bot updated and online! Commands: ${allcommands}`)
})



const allcommands = "!Commands !dc !ModersIQ !poop !raus !lurk !tip !ts !r6";

client.on('chat', (channel, user, message, self) => {

    if(message === '!ModerCommands' || message === '!Commands' || message === '!commands' || message === '!Befehle' || message === '!ModersEsel')
        client.action(streamer, `Here try them out: ${allcommands}`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!ModersIQ' || message === '!modersIQ' || message === '!modersiq')
        client.action(streamer, 'ist größer als 130 5Head')

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

    if(message === '!RollEsel' || message === '!roll Esel' || message === '!roll esel' || message === 'Roll Esel')
        client.action(streamer, '!play')

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!lurk')
        client.action(streamer, `@${user.username} ist jetzt im Lurk peepoLeave`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!Uplay' || message === '!Ubi' || message === '!R6' || message === '!r6' || message === '!uplay' || message === '!ubi' )
        client.action(streamer, `@${user.username} Username: Alterego.-`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!TeamSpeak' || message === '!ts' || message === '!teamspeak' )
        client.action(streamer, `@${user.username} IP: Wolves esports | Password: howlythewolf`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!dc' || message === '!discord' || message === '!Discord')
        client.action(streamer, `@${user.username} you can add me on discord: kimberlykueck#4599`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!donate' || message === '!spent' || message === '!spenden' || message === '!Donate' || message === '!Donaten' || message === '!Spenden' || message === '!tip' || message === '!Tip')
        client.action(streamer, `@${user.username} donate if you want: https://www.tipeeestream.com/alter3go/donation`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === '!Sub' || message === '!sub' || message === '!subscribe' || message === '!prime' || message === '!Prime')
        client.action(streamer, `@${user.username} you can sub here:https://www.twitch.tv/subs/alter3go`)

})



//Events 

client.on('subscription', (channel, username, method, message, userstate) => {

    console.log('subscription', {channel, username, method, message, userstate})
    client.say(streamer, `Thanks @${username} for your Sub!`)

})

client.on('resub', (channel, username, _months, message, userstate, methods) => {

    console.log('resub', {channel, username, _months, message, userstate, methods})
    let streakmonths = userstate['msg-param-streak-months'];
    let cumulativeMonths = userstate['msg-param-cumulative-months'];
    let sharedStreak = userstate['msg-param-should-share-streak'];

    if(sharedStreak) {
        client.say(streamer, `Thanks @${username} for ${streakmonths} Months in a row!`)
    }
    else{
        client.say(streamer, `Thanks @${username} for your ${cumulativeMonths} Sub!`)
    }

})

/*client.on('follow', (channel, username, method, message, userstate) => {

    console.log('subscription', {channel, username, method, message, userstate})
    client.say(streamer, `@${username} thanks for your follow!`)

})*/