const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "support",
    category: "Information",
    aliases: [ "support" ],
    description: "support of marley",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/cBptPUN6S5")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('| Support Server', client.user.displayAvatarURL())
             .setColor('#AC0404')
             .setFooter(``)
            .setDescription(`
[Click Here To Join Support Server](https://discord.gg/cBptPUN6S5)`)
     
           message.reply({embeds: [mainPage], components: [row]})
    }
                         }