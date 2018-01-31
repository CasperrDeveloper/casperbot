exports.run = (client, message, args, config) => {
    if(!message.member.roles.has(399069844890451979)){
    message.reply("Sorry, you are not allowed to host!");
    return;
    }

    let code = args[0];
    message.channel.send(`${message.author} is hosting a terraria server with the code ${code}!`);
}
