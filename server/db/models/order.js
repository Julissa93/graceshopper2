const Sequelize = require('sequelize')
const db = require('../db')
const OrderItem = require('./orderItem')

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER
  }
})

Order.prototype.calculateTotal = async function() {
  let total = 0
  const orderItems = await OrderItem.findAll({
    where: {
      orderId: this.id
    }
  })
  orderItems.map(item => {
    total += item.price * item.quantity
  })
  return total
}

module.exports = Order
