const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { event } = require('./handlers/event');
const { command } = require('./handlers/command');

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

client.login(process.env.token).then(() => {
    event(client);
    command(client);    
});