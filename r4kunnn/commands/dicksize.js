const random = require("random")
exports.run = (client, message, args, user, channel, self) => {

    const dicknames = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel'];

    function getRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    let laenge = random.int(-3, 32);
    let breite = random.int(1, 7);

    client.say(channel,`${user.username}'s ${getRandom(dicknames)} ist ${laenge}cm lang und ${breite}cm breit`)
}