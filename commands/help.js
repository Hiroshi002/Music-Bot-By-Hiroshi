/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "ดูคำสั่งทั้งหมด",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'เล่นเพลงที่ต้องการ' },
          { name: '⏹️ Stop', value: 'ปิดเพลงและออกจากห้อง' },
          { name: '📊 Queue', value: 'เช็คคิวเพลงทั้งหมด' },
          { name: '⏭️ Skip', value: 'ข้ามมเพลงที่กำลังเล่น' },
          { name: '⏸️ Pause', value: 'หยุดเพลงที่กำลังเล่น' },
          { name: '▶️ Resume', value: 'เล่นเพลงที่หยุด' },
          { name: '🔁 Loop', value: 'เปิดลูปเพลงนั้นๆ' },
          { name: '🔄 Autoplay', value: 'เปิดการรเล่นออโค้ [สุ่มเพลงที่เล่น ]' },
          { name: '⏩ Seek', value: 'เล่นเพลงต่อไป' },
          { name: '⏮️ Previous', value: 'เล่นเพลงก่อนหน้า' },
          { name: '🔀 Shuffle', value: 'สับเปลี่ยนเพลงในคิว' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      // const button1 = new ButtonBuilder()
      //   .setLabel('YouTube')
      //   .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
      //   .setStyle(ButtonStyle.Link);

      // const button2 = new ButtonBuilder()
      //   .setLabel('Discord')
      //   .setURL('https://discord.gg/FUEHs7RCqz')
      //   .setStyle(ButtonStyle.Link);

      // const button3 = new ButtonBuilder()
      //   .setLabel('Code')
      //   .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
      //   .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/