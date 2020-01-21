import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartServer, removeFromCartServer} from '../store/cart'
import {Card} from '@material-ui/core'

class Cart extends Component {
  constructor() {
    super()
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(item) {
    this.props.removeFromCart(item)
    this.props.getCart()
  }

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.props.cart.map(item => (
          <Card key={item.id} className="prod-card">
            <h1>{item.name}</h1>
            <p onClick={() => this.removeItem(item)}>Remove</p>
            <p>${item.price / 100}.00</p>
          </Card>
        ))}
        <h3>Total: ${this.props.total / 100}.00</h3>
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart.cart,
  total: state.cart.total
})

const mapDispatch = dispatch => ({
  getCart: () => dispatch(getCartServer()),
  removeFromCart: item => dispatch(removeFromCartServer(item))
})

export default connect(mapState, mapDispatch)(Cart)
