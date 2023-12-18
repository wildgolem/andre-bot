require('dotenv').config();
const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        const embed = new EmbedBuilder()
                .setColor(0x6AA84F)
                .setTitle('Welcome to BLACKSMITH!')
                .setDescription(`${member.user.username} has joined us.`);
                
        member.roles.add(process.env.test);
        member.guild.channels.cache.get(process.env.general).send({ embeds: [embed] });
	},
};