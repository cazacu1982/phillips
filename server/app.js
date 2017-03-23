var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  //res.setHeader('Content-Type', ' multipart/form-data');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, multipart/form-data, Accept, Authorization, charset=UTF-8');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

var configDB = require('../config/database.js');

var mongoose = require('mongoose');
mongoose.connect(configDB.url); // connect to our database
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var profileSchema = mongoose.Schema({
  nume: String,
  prenume: String,
  tel: Number,
  email: String,
  radio1: Boolean,
  radio2: Boolean
});

var Profile = mongoose.model('Profile', profileSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // APIs
  app.get('/profiles', function(req, res) {
    Profile.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // create
  app.post('/profile', function (req, res) {
    var obj = new Profile(req.body);
    console.log(obj);
    obj.save(function (err, obj) {
      if (err) return console.error(err);
      res.status(200).json(obj);
    });
  });


  app.use('/', index);
  app.use('/users', users);

// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});
module.exports = app;

