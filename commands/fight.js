exports.run = (client, message, args, config) => {
    let victim = message.mentions.members.first();
    let t = [2, 1, 1];
    
    let winner = t[Math.floor(Math.random() * t.length)];

    if (winner === 1){
      winner = message.author;
    }else{
    winner = victim;
  }

    message.channel.send(`*${message.author} fought ${victim} to the death and ${winner} won!*`);
}
