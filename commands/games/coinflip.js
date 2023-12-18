const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flip a coin.'),
	async execute(interaction) {
        const number = Math.round(Math.random());
        const result = number ? "Heads" : "Tails";
        return interaction.reply(result);
	},
};