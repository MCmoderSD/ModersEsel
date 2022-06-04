const {ChatTheRhinoToken} = require("/home/modersesel/ModersEsel/token.js");
const streamer = 'MCmoderSD';
const check = 'ModersEsel';
const own = 'ChatTheRhino';
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
        username: 'ChatTheRhino',
        password: ChatTheRhinoToken
    },

    channels: [own, check, streamer, 'r4kunnn', 'RzrWanted', 'DerBenator', 'dst_dacs', 'AloyniumLike', 'XXXOG69' , 'brickyr6', 'alter3go', 'lililax', '4manuu', 'abbyyjoe', 'astraeustf', 'bolty_dk', 'bractionfps', 'briibtw', 'cranksr6', 'darkwoolv', 'degrantlerin', 'eseraa', 'expedianus', 'gambling_garry', 'gerkara', 'gulliderdulli', 'hd_sonne73', 'Hungrike', 'L3nn0x2112', 'lownleystroll', 'marslmars', 'Meberson', 'misssoysauce', 'Nilon2020', 'Palunarimusic', 'Phirippu', 'Pong_Blog', 'Rainbow6', 'realjansowa', 'riderinred_','schmirly', 'SchubinatorHD', 'snoopr6s', 'squeepii', 'sukimks', 'TheRhiinoo', 'Tilos02', 'tommy4000', 'TwentysGamingStream', 'UnwelYT', 'v3nshi', 'Xirux_HD', 'yaqquz', 'zamero', 'ch1ngiskaan', 'steffsii', 'peachfight', 'kixstar', 'imcatjam', 'karylia', 'MR_NO_NAME', 'affe_im_pyjama', 'colduniverse', 'SakiChanx3', 'anime2nerd', 'KeToqt_', 'ThicNicc', 'SxTy_One', 'ItsLiteOne', 'bySLDR'],
}


const client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})



