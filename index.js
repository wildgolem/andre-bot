const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { event } = require('./handlers/event');
const { command } = require('./handlers/command');

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();

event(client);
command(client);

client.login(process.env.token);