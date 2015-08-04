/* global require, __dirname, console, setTimeout */

var express = require('express');
var async = require('async');
var requestFn = require('./models/requestHelper');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

var c = function(data, res) {
  if(data !== undefined) {
    res.json({playerData: data});
  }
};

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/data', function(req, res) {
  requestFn.dataRequest(c, res);
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Server Error');
});

console.log('Server is happily listening on port 3000');
app.listen(3000);