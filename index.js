require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { event } = require('./handlers/event');
const { command } = require('./handlers/command');
const { gogoanime } = require('./feeds/gogoanime');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();

event(client);
command(client);

gogoanime();




client.login(process.env.token);