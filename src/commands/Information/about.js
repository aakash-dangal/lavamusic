const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=924635835704414218&permissions=139652885312&scope=bot`),
    new MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/cBptPUN6S5"),
        new MessageButton()
        .setLabel("Vote")
        .setStyle("LINK")
        .setURL("https://discordbotlist.com/bots/marley-5858/upvote")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('| About Marley', 'https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/928860250579296296/929035389136691290/20220107_211524.jpg')
            .setColor('#AC0404')
            .setFooter('Made with 💖 By Deadsoul#799', 'https://media.discordapp.net/attachments/928860250579296296/929049779240075305/vendron-1.gif')
            .addField('Creator', '[Deadsoul#7999](https://discord.com/users/913643193629827082) And [Sarkar#9307](https://discord.com/users/842768350375313438)', true)
            .addField('Organization', '[Marley Music](https://discord.gg/cBptPUN6S5)', true)
            .addField('\u200b',
                `[Marley Music](https://discord.com/users/924635835704414218) is created by Deadsoul and Sarkar. They really wants to make his first Over Powered Music Bot. Because They wants more for coding experience. In this project, They were challenged to make project with less bugs. Hope you enjoy using Marley music!`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}