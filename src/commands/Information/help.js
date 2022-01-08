const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {

  const embed = new MessageEmbed()
    .setTitle(``)
    .setAuthor(`| Help Menu`,client.user.displayAvatarURL())
    .setDescription(`
• My current prefix in this server is ${prefix}
• Type ${prefix}help to get information about a specific command.
• A Discord Music Bot With Many Awesome Features.
• [Get Marley](https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=8&scope=bot) | [Support Server](https://discord.gg/cBptPUN6S5) | [Vote Me](https://discordbotlist.com/bots/marley-5858/upvote)

• Choose an category below button to see commands`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.embedColor)
    .setFooter(`Requested by ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true }))
                
    let but1 = new MessageButton().setCustomId("home").setLabel("Home").setStyle("SECONDARY")
  
    let but2 = new MessageButton().setCustomId("music").setLabel("Music").setStyle("SECONDARY")
  
    let but3 = new   MessageButton().setCustomId("info").setLabel("Info").setStyle("SECONDARY");

    let but4 = new MessageButton().setCustomId("config").setLabel("Config").setStyle("SECONDARY");

     let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.reply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] });

    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true))] }).catch(() => {});
    });
    collector.on('collect', async (b) => {
        if(b.customId === "home") {
           if(!m) return;
           return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId === "music") {
         _commands = client.commands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Music Commands").setFooter(`| Total ${_commands.length} Music commands.`, 'https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg');
           if(!m) return;
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
         if(b.customId == "info") {
         _commands = client.commands.filter((x) => x.category && x.category === "Information").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Information Commands").setFooter(`| Total ${_commands.length} Information commands.`, 'https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg')
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         }
         if(b.customId == "config") {
         _commands = client.commands.filter((x) => x.category && x.category === "Config").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(_commands.join(", ")).setTitle("Configuration Commands").setFooter(`| Total ${_commands.length} Config commands.`, 'https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg')
          return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         
        }
     });
   }
 }
