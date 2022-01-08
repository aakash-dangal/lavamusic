const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite Marley",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite(Admin)")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=8&scope=bot`),
			new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=139652885312&scope=bot"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/cBptPUN6S5")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('| Invite Marley', client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
             .setColor('#AC0404')
             .setFooter(``)
            .setDescription(`
**Invite Without Admin**
[Get Marley](https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=139652885312&scope=bot)

**Invite With Admin**
[Get Marley](https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=8&scope=bot)

**Need Help**
[Support Server](https://discord.gg/cBptPUN6S5)`)
     
           message.reply({embeds: [mainPage], components: [row]})
    }
				}