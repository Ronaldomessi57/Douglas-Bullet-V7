module.exports = {
  config: {
    name: "upt",
    aliases: ["up"],
    version: "1.0",
    author: "Dominre",
    role: 2,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
const days = 
Math.floor(uptime / (3600 * 24));
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${days}𝘿𝙖𝙮𝙨 : ${hours}𝙃𝙤𝙪𝙧𝙨 : ${minutes}𝙈𝙞𝙣𝙪𝙩𝙚𝙨 : ${seconds}𝙎𝙚𝙘𝙤𝙣𝙙𝙨`;
      
      api.sendMessage(`[⚙️] 𝗨𝗽𝘁𝗶𝗺𝗲 𝗦𝗲𝘁𝘁𝗶𝗻𝗴\n\n✪➩ ${uptimeString}\n
[👨🏽‍💻] 𝗡𝗼𝗺𝗯𝗿𝗲 𝗗'𝘂𝘁𝗶𝗹𝗶𝘀𝗮𝘁𝗲𝘂𝗿𝘀\n\n✪➩ ${allUsers.length}\n
[📬] 𝗡𝗼𝗺𝗯𝗿𝗲 𝗗𝗲𝘀 𝗚𝗿𝗼𝘂𝗽𝗲𝘀 𝗜𝗻𝘁𝗲́𝗴𝗿𝗲́𝘀 🍷\n\n✪➩ ${allThreads.length}\n
[🥂]Slogan du jour : 𝐋𝐚 𝐯𝐢𝐞, 𝐜𝐞 𝐧'𝐞𝐬𝐭 𝐩𝐚𝐬 𝐝'𝐚𝐭𝐭𝐞𝐧𝐝𝐫𝐞 𝐪𝐮𝐞 𝐥𝐞𝐬 𝐨𝐫𝐚𝐠𝐞𝐬 𝐩𝐚𝐬𝐬𝐞𝐧𝐭, 𝕔'𝕖𝕤𝕥 𝕕'𝕒𝕡𝕡𝕣𝕖𝕟𝕕𝕣𝕖 𝕔𝕠𝕞𝕞𝕖𝕟𝕥 𝕕𝕒𝕟𝕤𝕖𝕣 𝘀𝗼𝘂𝘀 𝗹𝗮 𝗽𝗹𝘂𝗶𝗲 💫❤😁`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
