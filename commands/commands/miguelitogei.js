const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qn es gei')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('el miguelter');
	},
};