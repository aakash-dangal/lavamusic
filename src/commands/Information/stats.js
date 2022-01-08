const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "stats",
    category: "Information",
    aliases: [ "stats" ],
    description: "Show stats bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setFooter('Made with 💖 By Deadsoul#7999', 'https://media.discordapp.net/attachments/928860250579296296/929049779240075305/vendron-1.gif')
            .setAuthor('| Marley Stats', 'https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg')
          .setThumbnail(message.client.user.displayAvatarURL())
            .setDescription(`
**• STATISTICS**
> • Servers: ${scount}
> • Channels: ${ccount}
> • Users: ${mcount}
> • Discord.js: v${version}
> • Node: ${process.version}

**• SYSTEM**
> • Platfrom: ${os.type}
> • Uptime: ${duration1}

**• CPU**
> • Cores: ${cpu.cores}
> • Model: ${os.cpus()[0].model} 
> • Speed: ${os.cpus()[0].speed} MHz

**• MEMORY**
> • Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps
> • Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps
> • Heap Total: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps
> • Heap Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps
`);
         message.reply({embeds: [embed]});
    }
	}