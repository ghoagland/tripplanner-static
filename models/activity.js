var Sequelize = require('Sequelize')

var Activity = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}

module.exports = Activity;

