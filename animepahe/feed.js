const axios = require('axios');
const cheerio = require('cheerio');

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

    feeder.on('new-item', async function(item) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: item.title,
                iconURL: `${await searchImage(item)}`,
                url: item.link
            })
            .setColor(0xD5015B)
            .setImage(`${item.description}`)
            .setTimestamp();

        webhook.send({ embeds: [embed] });
    });

    feeder.on('error', console.error);
}

async function searchImage(item) {
    try {
        const searchPage = await axios.get(`https://gogoanime3.net/search.html?keyword=${item.title.split(" ").slice(0, -3).join(" ")}&page=1`);
        const $ = cheerio.load(searchPage.data);
        return $('div.last_episodes > ul > li > div > a > img').attr('src');
       
    } catch (error) {
        console.error(error);
    }
}

module.exports = { gogoanime };