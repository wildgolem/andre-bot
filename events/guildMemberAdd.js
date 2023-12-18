const { Events, EmbedBuilder } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        const embed = new EmbedBuilder()
                .setColor('#ff9500')
                .setTitle('Welcome to the server!')
                .setDescription(`${member.user.username} has joined BLACKSMITH!`);
                
        member.roles.add(process.env.test);
        member.guild.channels.cache.get(process.env.general).send({ embeds: [embed] });
	},
};