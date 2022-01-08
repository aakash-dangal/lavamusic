const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('DEADSOUL OP!!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);const MusicBot = require("./src/structures/MusicClient");

const client = new MusicBot();

client.connect()

module.exports = client; 
