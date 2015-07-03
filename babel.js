/* global require, console */

var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
browserify('./public/js/index.js', { debug: true })
  .transform(babelify)
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(fs.createWriteStream('./public/js/indexEM5.js'));