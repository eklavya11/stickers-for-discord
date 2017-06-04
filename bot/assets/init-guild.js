const rp = require('request-promise');
const covert = require('../../covert.js');

module.exports = function(guild){
	rp({
		method: 'POST',
		uri: `${covert.app_url}/api/guilds/`,
		body: {
			id: guild.id,
			guildName: guild.name,	
			icon: guild.icon || null
		},
		json: true
	})
	.then(() => {
		console.log(`Guild ${guild.id} added!`);
	})
	.catch(err => {
		
		rp({
			method: 'PATCH',
			uri: `${covert.app_url}/api/guilds/${guild.id}`,
			body: {isActive: true},
			json: true
		})
		.then(res => {
			console.log(`Guild ${guild.id} activated!`);
		})
		.catch(err => {
			console.error(err.message);
		});

	});
}