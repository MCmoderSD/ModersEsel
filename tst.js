/*const fs = require("fs").promises

async function main() {
    await commandLoader("commands");
}

main();

async function commandLoader(path) {
    const commandFiles = await fs.readdir(path);
    const filter = commandFiles.filter(file => file.endsWith(".js"));
}
*/
const { allCommands } = require("./r4kunnn");

console.log(allCommands);