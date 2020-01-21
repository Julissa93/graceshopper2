import axios from 'axios'
import history from '../history'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const getProducts = payload => ({type: GET_PRODUCTS, payload})
const getSingleProduct = payload => ({type: GET_SINGLE_PRODUCT, payload})

export const getProductsFromServer = () => async dispatch => {
  try {
    const res = await axios.get('/api/items')
    dispatch(getProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleProductFromServer = id => async dispatch => {
  try {
    const res = await axios.get(`/api/items/${id}`)
    dispatch(getSingleProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

let initialState = {
  allProducts: [],
  selectedProduct: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, allProducts: action.payload}
    case GET_SINGLE_PRODUCT:
      return {...state, selectedProduct: action.payload}
    default:
      return state
  }
}
