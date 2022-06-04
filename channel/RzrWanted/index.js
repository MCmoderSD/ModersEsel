const {ModersEselToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'RzrWanted';
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




const allcommands = "!Leo  !ModersIQ !poop !raus !sexistscore !IchHasseFrauen";

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

client.on('chat', (channel, user, message, self) => {                                       //Donowall

    if(message === 'donowall' || message === '!StopAgnessing')
   client.action(streamer, `@RzrWanted ich bitte Sie darum sich wieder auf den chat zu konzentrieren und die überlesenen Nachrichten von ${user.username} vorzulesen! BONKTHESTREAMER`)
    
})

client.on('chat', (channel, user, message, self) => {

    if(message === "!Lena's Phobie")
    client.action(streamer, `Hippopotomonstrosesquippedaliophobie --> ist die Phobie vor langen Wörtern`)

})

client.on('chat', (channel, user, message, self) => {

    if(message === "!IchHasseFrauen" || message === '!ichhassefrauen' || message === '!IchhasseFrauen' || message === '!Ichhassefrauen')
    client.action(streamer, `https://www.twitch.tv/r4kunnn`)

})


/*sexistscore
const random = require('random');

const wait = async () => {
    await delay(5000);
    let i = 0;
    do{
        sexistscore=random.int((min = 0), (max = 100))
    }   while (i < 5);  
};





client.on('chat', (channel, user, message, self) => {

    if(message === "!sexistscore")     
    client.action(check, `${user.username} hat einen Sexistscore von ${sexistscore}% Kappa`)   

})*/