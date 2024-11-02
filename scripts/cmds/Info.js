const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝐑𝐚𝐧𝐚 𝐁𝐚𝐛𝐮 ";
		const ownAge = "『 19 』";
		const authorFB = "htttps//www.facebook.ccom/ranababu17";
		const authorNumber = "";
		const Status = "";
		const urls = [
"",
"",
"",			
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《  𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  》
\→𝐁𝐨𝐭 𝐍𝐚𝐦𝐞   : ${global.GoatBot.config.nickNameBot}
\→𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱   : ${global.GoatBot.config.prefix}
\→𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : ${authorName}
\→𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧 : ${authorFB}
\→𝐃𝐚𝐭𝐞        : ${date}
\→𝐍𝐨𝐰 𝐓𝐢𝐦𝐞    : ${time}
\→𝐁𝐨𝐭 𝐢𝐬 𝐑𝐮𝐧𝐢𝐧𝐠 : ${uptimeString} 
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
