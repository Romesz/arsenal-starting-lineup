/* global require, __dirname, console, process */

// node run-script build

require('dotenv').load();

var express = require('express');
var mongoose = require('mongoose');
var schedule = require('node-schedule');
var DBhelper = require('./dbhelper/DBhelper');
var playersSchema = require('./models/playersSchema');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_LINK);

/*
var c = function(data, res) {
  if(data !== undefined) {
    res.json({playerData: data});
  }
};
//to call it:
DBhelper.writePlayerDB(c, res);
*/

schedule.scheduleJob({hour: 0, minute: 0, dayOfWeek: 1}, function(){
  console.log('This job executes every Monday 0:00 and refresh the DB.');
  DBhelper.writePlayerDB();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/data', function(req, res) {
  playersSchema.find({}, function(err, players) {
    if(err) throw(err);

    res.json({playerData: players});
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Server Error');
});

console.log('Server is happily listening on port 3000');
app.listen(3000);