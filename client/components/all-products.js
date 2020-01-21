import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProductsFromServer} from '../store/products'
import {Card} from '@material-ui/core'
import {addToCartServer} from '../store/cart'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        {this.props.products.map(p => (
          <Card key={p.id} className="prod-card">
            <Link to={`/products/${p.id}`}> {p.name}</Link>
            <i
              className="fa fa-plus-circle"
              onClick={() => this.props.addToCart(p)}
            />
            <p>Price: ${p.price / 100}.00</p>
          </Card>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products.allProducts
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(getProductsFromServer()),
  addToCart: item => dispatch(addToCartServer(item))
})

export default connect(mapState, mapDispatch)(AllProducts)
