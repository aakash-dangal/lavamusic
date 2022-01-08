const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    category: "Information",
    aliases: [ "vote" ],
    description: "vote marley",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Vote")
    .setStyle("LINK")
    .setURL("https://discord.ly/marley-5858/upvote")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('| Vote Marley', client.user.displayAvatarURL())
             .setColor('#AC0404')
             .setFooter(``)
            .setDescription(`
[Click Here To Vote Marley](https://discord.ly/marley-5858/upvote)`)
     
           message.reply({embeds: [mainPage], components: [row]})
    }
}