let cmdlist = `
fight - battle someone to the death! : Ex: fight TARGET
kill - get rid of someone. : Ex: kill TARGET
gift - give someone a present. : Ex: gift TARGET
host - tell others you are hosting terraria! : Ex: host 12345
kick - Staff only. : Ex: kick TARGET
say -  make me say anything! : Ex: say hello!
`

exports.run = (client, message, args, config) => {
   message.reply(cmdlist);
}
