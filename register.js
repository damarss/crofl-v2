import { REST, Routes } from "discord.js";
import commands from "./data/commands.json";

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (err) {
  console.log(err.message);
}
