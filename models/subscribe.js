var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},	
	email: {
		type: String
	}
});

var User = module.exports = mongoose.model('subscribe', UserSchema);
