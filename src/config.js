module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "_", // bot prefix
    ownerID: process.env.OWNERID || "896268797906911273", //your discord id
    SpotifyID: process.env.SPOTIFYID || "52ad218fe09e463f8cb9e110902946ef", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "8cba16cad2e243cda21c3fcf4538e5f8", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb+srv://bot:bot@cluster0.up7wh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#AC0404", // embed colour
    logs: process.env.LOGS || "920704024565665862", // channel id for guild create and delete logs 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}
