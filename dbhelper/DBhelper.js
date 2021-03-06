/* global require, module, console */

var request = require('request');
var cheerio = require('cheerio');
var playersSchema = require('../models/playersSchema');

module.exports.writePlayerDB = function() {
 var playerName = [];
 var playerImg = [];
 var playerNumber = [];
 var urlArsenalPage = 'http://www.arsenal.com/first-team/players';


 request(urlArsenalPage, function(err, response, body) {
   if(err || response.statusCode !== 200)
     throw(err);

   var $ = cheerio.load(body);

   $('figure a figcaption').each(function(i, node) {
     var name = $(node).html();
     playerName.push(name);
   });
   $('figure a img').each(function(i, node) {
     var img = urlArsenalPage + $(node).attr('src');
     playerImg.push(img);
   });
   $('figure a span.number').each(function(i, node) {
     var number = $(node).html();
     playerNumber.push(number);
   });

   playersSchema.remove({}, function(err) {
     if(err) throw(err);

     console.log('removed all');
   });

   playerName.forEach(function(e, i) {
    var players = new playersSchema({
     name: playerName[i],
     img: playerImg[i],
     number: playerNumber[i]
    });

    players.save(function(err) {
     if(err) throw(err);

     console.log(playerName[i] + ' saved to database');
    });
   });

   //callback(playerData, res);
 });
};