const { EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "nowplaying",
  description: "รับเพลงด้วยตรง.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ ไม่มีเพลงกำลังเล่น!`, ephemeral: true }).catch(e => { })

      const track = queue.songs[0];
      if (!track) return interaction.reply({ content: `⚠️ ไม่มีเพลงกำลังเล่น!`, ephemeral: true }).catch(e => { })

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setThumbnail(track.thumbnail);
      embed.setTitle(track.name)
      embed.setDescription(`> **เสียง** \`%${queue.volume}\`
> **Duration :** \`${track.formattedDuration}\`
> **URL :** **${track.url}**
> **Loop Mode :** \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'คิวทั้งหมด' : 'เพลง') : 'ปิด'}\`
> **Filter**: \`${queue.filters.names.join(', ') || 'ปิด'}\`
> **By :** <@${track.user.id}>`);


      interaction.reply({ embeds: [embed] }).catch(e => { })

    }  catch (e) {
    console.error(e); 
  }
  },
};
