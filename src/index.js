const tmi = require("tmi.js");

const opts = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: ["sraaronrock"],
};

const client = new tmi.client(opts);

client.connect();

client.on("chat", (target, ctx, message, self) => {
  if (self) return;

  const commandName = message.trim();

  if (commandName === "!dados") {
    const num = rollDice();
    client.say(target, `Ha salido un ${num}`);
  }
});

function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
