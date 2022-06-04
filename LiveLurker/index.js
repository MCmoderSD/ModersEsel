const {MCmoderSDToken} = require("/home/modersesel/ModersEsel/token.js");
const lurker = 'MCmoderSD';
const lurk = ['MCmoderSD', 'ModersEsel', 'ChatTheRhino', 'r4kunnn', 'RzrWanted', 'DerBenator', 'dst_dacs', 'AloyniumLike', 'alter3go', 'XXXOG69' , 'brickyr6', 'lililax', 'astraeustf', 'bractionfps', 'briibtw', 'cranksr6', 'darkwoolv', 'degrantlerin', 'eseraa', 'expedianus','gerkara', 'gulliderdulli', 'Hungrike', 'L3nn0x2112', 'marslmars', 'misssoysauce', 'Nilon2020', 'Palunarimusic', 'Phirippu', 'Pong_Blog', 'Rainbow6', 'riderinred_', 'SchubinatorHD', 'snoopr6s', 'squeepii', 'sukimks', 'TheRhiinoo', 'Tilos02', 'tommy4000', 'TwentysGamingStream', 'UnwelYT', 'v3nshi', 'Xirux_HD', 'yaqquz', 'zamero', 'ch1ngiskaan', 'steffsii', 'peachfight', 'kixstar', 'imcatjam', 'karylia', 'MR_NO_NAME', 'affe_im_pyjama', 'colduniverse', 'SakiChanx3', 'anime2nerd', 'KeToqt_', 'ThicNicc', 'SxTy_One', 'bySLDR'];



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
        username: lurker,
        password: MCmoderSDToken
    },

    channels: lurk,
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})



