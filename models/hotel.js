var Sequelize = require('Sequelize')

var Hotel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {min: 1, max: 5}
  },

  amenities:{
    type: Sequelize.TEXT,
    allowNull: false,
  },


}

module.exports = Hotel;
