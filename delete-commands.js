require('dotenv').config();
const { REST, Routes } = require('discord.js');

const rest = new REST().setToken(process.env.token);

rest.put(Routes.applicationCommands(process.env.client_id), { body: [] })
	.then(() => console.log('Successfully deleted all commands.'))
	.catch(console.error);