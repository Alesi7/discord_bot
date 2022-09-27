const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gei')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('el miguelter');
	},
};