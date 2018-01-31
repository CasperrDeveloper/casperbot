exports.run = (client, message, args, config) => {
  let victim = message.mentions.members.first();

  let t = ["a spear", "a shotgun", "a car", "a tiger"];

  let death = t[Math.floor(Math.random() * t.length)];
  message.channel.send(`*${victim} was killed by ${death}*`);
}
