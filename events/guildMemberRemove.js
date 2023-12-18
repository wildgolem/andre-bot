require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	execute(member) {
        const embed = new EmbedBuilder()
            .setColor(0xCC0000)
            .setTitle('An ally has been slain.')
            .setDescription(`${member.user.username} has left us.`);

		const webhook = new WebhookClient({ id: process.env.golem_id, token: process.env.golem_token });
        
		webhook.send({ embeds: [embed] });
	},
};