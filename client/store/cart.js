import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const GET_CART = 'GET_CART'

const addToCart = payload => ({type: ADD_TO_CART, payload})
const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload})
const getCart = () => ({type: GET_CART})

export const addToCartServer = item => async dispatch => {
  try {
    //const res = await axios.post(`/api/cart`, item)
    dispatch(addToCart(item))
  } catch (err) {
    console.error(err)
  }
}

export const removeFromCartServer = item => async dispatch => {
  try {
    //const res = await axios.delete('/api/cart', item)
    dispatch(removeFromCart(item))
  } catch (err) {
    console.error(err)
  }
}

export const getCartServer = () => async dispatch => {
  try {
    //const res = axios.get('/api/cart')
    dispatch(getCart())
  } catch (err) {
    console.error(err)
  }
}

let initialState = {
  cart: [],
  total: 0
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, cart: state.cart}
    case ADD_TO_CART:
      let newTotal = (state.total += action.payload.price)
      return {cart: [...state.cart, action.payload], total: newTotal}
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter(item => item.id !== action.payload.id),
        total: (state.total -= action.payload.price)
      }
    default:
      return state
  }
}
