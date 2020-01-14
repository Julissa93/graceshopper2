const Sequelize = require('sequelize')
const db = require('../db')

const orderItem = db.define('orderItem', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = orderItem
