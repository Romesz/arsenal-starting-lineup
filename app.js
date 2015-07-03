/* global require, __dirname, console */

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('*', function(req, res) {

  var playerData = [];
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

    playerName.forEach(function(e, i) {
      playerData.push({'id': i, 'name': playerName[i], 'img': playerImg[i], 'number': playerNumber[i]});
    });

    res.render('index', {playerData: playerData});
  });

});

console.log('Server is happily listening on port 3000');
app.listen(3000);
