const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let helpembed = new Discord.RichEmbed()
 .setDescription("~Commands List~")
 .setColor("#86d300")
 .addField("**Ban Command**", "a!ban @user [reason]")
 .addField("**Kick Command**", "a!kick @user [reason]")
 .addField("**Warn Command**", "a!warn @user [reason]")
 .addField("**Report Command**", "a!report @user [reason]")
 .addField("**Clear Command**", "a!clear (for example) [5]")
 .addField("**Say Command**", "a!say (for example) [Hello World]")
 .addField("**Tempmute Command**", "a!tempmute @user (for example) [120s]")
 .addField("**Severinfo Command**", "a!serverinfo")
 .addField("**Botinfo Command**", "a!botinfo")
 .addField("**8ball Command**", "a!8ball [question]")

    return message.channel.send(helpembed);
  }

module.exports.help = {
  name: "help"
}
