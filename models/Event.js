var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  userId:  Number,
  pluginId:  Number,
  event:  String,
  timestamp:  { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);