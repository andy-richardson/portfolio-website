var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');


var app = express();

app.set('json spaces', 2);

app.use(favicon(path.join(__dirname, 'public/fav256.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Access log
var accessLogStream = fs.createWriteStream('/var/log/express/access.log');
app.use(logger('combined', {stream: accessLogStream}));

// API Routes
const api = require('./routes/api');
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.redirect('/');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
