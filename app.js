const express = require('express');
const app = express();
const models = require('./models');
const Place = models.Place;
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;
const db = models.db;
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/', function(req, res, next) {
  var promiseArray = [Hotel.findAll(), Restaurant.findAll(), Activity.findAll()];
  Promise.all(promiseArray).then(function(databaseArray){
    res.render('index', {Hotels:databaseArray[0], Restaurants:databaseArray[1], Activities:databaseArray[2]});

  }).catch(next);
  
});

// add routes here

app.use(function(req, res, next) {
  const err = new Error('That page doesn\'t exist!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  err.status = err.status || 500;
  console.log(err);
  res.status(err.status).render('error', { err: err });
});



db.sync()
.then(function() {
  app.listen(1337, function() {
    console.log("Server is listening on port 1337");
  });
});
