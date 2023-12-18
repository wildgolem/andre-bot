const { REST, Routes } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

const rest = new REST().setToken(process.env.token);

rest.put(Routes.applicationCommands(process.env.client_id), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);