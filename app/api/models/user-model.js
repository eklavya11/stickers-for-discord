const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
	id: {type: String, unique: true},
	username: {type: String, required: true},
	avatar: {type: String, default: null},
	refresh_token: {type: String, default: ''},
	customStickers: {
		type: [{
			name: {type: String, required: true, maxlength: 20},
			url: {type: String, required: true},
			uses: {type: Number, default: 0},
			createdAt: {type: Date, default: Date.now}
		}],
		validate: []
	},
	createdStickerPacks: [String],
	stickerPacks: [String]
});

const stickerLimit = val => val.length <= 200;

const User = mongoose.model('User', userSchema);

module.exports = User;
