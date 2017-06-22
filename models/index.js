const db = require('./db');
const activity = require("activity");
const hotel = require("hotel");
const place= require("place");
const restaurant = require("restaurant");

var Activity = db.define('activity', activity);
var Hotel = db.define('hotel', hotel);
var Place = db.define('place', place);
var Restaurant = db.define('restaurant', restaurant);

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
