/* global require, module */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playersSchema = new Schema({
  name: String,
  img: String,
  number: Number
});

var Players = mongoose.model('Players', playersSchema);

module.exports = Players;