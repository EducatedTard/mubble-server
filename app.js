var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var app = express();
var bpjson = app.use(bodyParser.json());

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

app.get('/users', (req,res) => {
  mongoose.model('User').find(function(err, users){
    res.send(users);
  });
});

app.post('/users', (req,res) => {
  var p_name = req.body.name;
  var User = mongoose.model('User');
  var newUser = new User({name: p_name});
  newUser.save();
  res.sendStatus(200);
});

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
