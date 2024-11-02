const axios = require('axios');
const https = require('https');

module.exports = {
    config: {
        name: "music",
			aliases: ["sing"],
        version: "1.1",
        author: "UPoL SAHA",
        countDown: 5,
        role: 0,
        shortDescription: "Search for a song and play audio.",
        description: "Fetch and play audio based on the provided song name.",
        category: "Music",
        guide: "{pn} <song name>"
    },

    onStart: async function ({ message, args }) {
        if (!args.length) return message.reply("Please provide a song name.");

        const songName = args.join(' ');
		await message.reply("please wait...⏳");

        try {
            const response = await axios.get(`https://upol-search.onrender.com/yt-audio?name=${encodeURIComponent(songName)}`);
            const songData = response.data;

            const audioStream = await axios({
                url: songData.downloadUrl,
                method: 'GET',
                responseType: 'stream',
                httpsAgent: new https.Agent({ rejectUnauthorized: false }) 
            });

            return message.reply({
                body: `🎶 Now playing: ${songData.title} by ${songData.artist}`,
                attachment: audioStream.data
            });
        } catch (error) {
            console.error(error);
            return message.reply("An error occurred while fetching the song. Please try again later.");
        }
    }
};
