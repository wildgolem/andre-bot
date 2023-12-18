require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        const embed = new EmbedBuilder()
            .setColor(0x6AA84F)
            .setTitle('Welcome to BLACKSMITH!')
            .setDescription(`${member.user.username} has joined us.`);
        
        const webhook = new WebhookClient({ id: process.env.golem_id, token: process.env.golem_token });
                
        member.roles.add(process.env.test);
		webhook.send({ embeds: [embed] });
	},
};