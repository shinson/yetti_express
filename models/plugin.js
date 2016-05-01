var mongoose = require('mongoose');

var PluginSchema = new mongoose.Schema({
  ID: Number,
  name: String,
});

module.exports = mongoose.model('Plugin', PluginSchema);