var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	ID: Number,
  fname: String,
  lname: String,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);