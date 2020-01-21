import React, {Component} from 'react'
import {getSingleProductFromServer} from '../store/products'
import {connect} from 'react-redux'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.selectProduct(this.props.match.params.id)
  }

  render() {
    return (
      <div key={this.props.product.id}>
        <h1>{this.props.product.name}</h1>
        <p>Price: ${this.props.product.price / 100}.00</p>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.products.selectedProduct
})

const mapDispatch = dispatch => ({
  selectProduct: id => dispatch(getSingleProductFromServer(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
