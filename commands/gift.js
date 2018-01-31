exports.run = (client, message, args, config) => {
  let victim = message.mentions.members.first();

  let t = ["a cake", "a PS4", "a cupcake", "$5", "popcorn", "an iPhone", "$25", "$1"];

  let item = t[Math.floor(Math.random() * t.length)];
  message.channel.send(`*${message.author} gave ${victim} ${item}*`);
}
