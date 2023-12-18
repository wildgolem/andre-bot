require('dotenv').config();
const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	execute(member) {
        const embed = new EmbedBuilder()
                .setColor(0xCC0000)
                .setTitle('An ally has been slain.')
                .setDescription(`${member.user.username} has left us.`);
                
        member.guild.channels.cache.get(process.env.general).send({ embeds: [embed] });
	},
};