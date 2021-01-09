import { combineReducers } from 'redux';
import cart from './cartReducer';

// import filters from './filters';
// import pizzas from './pizzas';
import products from './productsReducer';

const rootReducer = combineReducers({
  cart,
  products,
  // filters,
  // pizzas,
});

export default rootReducer;
