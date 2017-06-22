var Sequelize = require('Sequelize')

var Restaurant = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cuisine: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  price:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 1, max: 5}
  },


}

module.exports = Restaurant;
