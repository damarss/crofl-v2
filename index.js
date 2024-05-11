import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

try {
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }

    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
  });

  client.login(process.env.TOKEN);
} catch (err) {
  console.log(err.message);
}
