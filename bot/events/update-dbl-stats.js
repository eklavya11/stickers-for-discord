const DBL = require('dblapi.js');
const covert = require('../../covert.js');

//Update guild count on Discord Bot List
module.exports = function(guild_count){

	if(!covert.discord_bot_list.integrated || !covert.discord_bot_list.api_key) return false;	
	const dbl = new DBL(covert.discord_bot_list.api_key);

	dbl.postStats(guild_count);

}
