const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Deletes last 100 messages.'),
	async execute(interaction) {
		await interaction.channel.bulkDelete(100).then(() => {
			interaction.reply('Messages deleted').catch(console.error);
		});
	},
};