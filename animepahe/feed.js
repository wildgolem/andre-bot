function gogoanime() {
    require('dotenv').config();
    const { EmbedBuilder, WebhookClient } = require('discord.js');
    const RssFeedEmitter = require('rss-feed-emitter');

    const webhook = new WebhookClient({ id: process.env.test_id, token: process.env.test_token });

    const feeder = new RssFeedEmitter();

    feeder.add({
        url: 'https://raw.githubusercontent.com/wildgolem/andre-bot/main/animepahe/animepahe-rss.xml',
        refresh: 300000,
    });

    feeder.on('new-item', function(item) {
        const embed = new EmbedBuilder()
            .setColor(0xFF00FF)
            .setTitle(`${item.title}`)
            .setURL(`${item.link}`)
            .setImage(`${item.description}`);

        webhook.send({ embeds: [embed] });
    });

    feeder.on('error', console.error);
}

module.exports = { gogoanime };