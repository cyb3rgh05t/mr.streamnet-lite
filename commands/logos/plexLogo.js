const { Client, Message, MessageAttachment } = require("discord.js");

module.exports = {
  name: "plexpic",
  description: "plex channel logo",
  category: "logos",
  syntax: "command",
  permission: "ADMINISTRATOR",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    try {
      const imagePath = './src/images/plex.png'; // Replace this with the path to your local image file
      const file = new MessageAttachment(imagePath);

      await message.channel.send({
        files: [file]
      });
    } catch (error) {
      message.channel.send("Some Error Occurred");
      client.logger.error(error);
    }
  }
};