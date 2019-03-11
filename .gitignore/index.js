const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Aquapela, ?help");
    console.log("Aquapela Bot connecté !");
});

bot.login("NTU0NzM2Mjk5NzEwMzQ5MzIy.D2hDkA.lkfW8rxMabMzM9yJdJGVjscrclc");
