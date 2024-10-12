module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "AceGun x Samir Œ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["100088038803005"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "🗿🔥𝙏𝙪 𝙚𝙨𝙨𝙖𝙞𝙚 𝙙𝙚 𝙛𝙖𝙞𝙧𝙚 𝙦𝙪𝙤𝙞? .....𝙩𝙪 𝙣'𝙖𝙨 𝙥𝙖𝙨 𝙚𝙣𝙘𝙤𝙧𝙚 𝙡𝙚 𝙣𝙞𝙫𝙚𝙖𝙪 𝙥𝙤𝙪𝙧 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙘𝙚𝙩𝙩𝙚 {[𝙘𝙢𝙙]}😈",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `👑😐𝙅𝙚 𝙢𝙚 𝙥𝙧𝙤𝙨𝙩𝙚𝙧𝙣𝙚 𝙙𝙚𝙫𝙖𝙣𝙩 𝙡𝙚 𝙣𝙤𝙪𝙫𝙚𝙖𝙪 𝙧𝙤𝙞 𝙙𝙚 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 🍭𝘿𝙤𝙢𝙞𝙣𝙧𝙚.𝙓𝙖𝙨 𝙢𝙖î𝙩𝙧𝙚 𝙫𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙩𝙤𝙪𝙩 𝙢𝙤𝙣 𝙧𝙚𝙨𝙥𝙚𝙘𝙩 🙇🏿‍♂ je vous lecherais les pieds même .`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("🍭 𝘿é𝙨𝙤𝙡é cette commande n'est pas mise au point veuillez trouvé le problème qui s'y oppose et ressayer 🎯.", event.threadID);
    }
  },
};
