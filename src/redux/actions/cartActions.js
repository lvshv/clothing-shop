import { ADD_PRODUCT_CART } from '../constants';

export const addItemToCart = (product) => async (dispatch) => {
  dispatch({
    type: 'SET_CART_LOADING',
  });
  setTimeout(() => {
    dispatch({
      type: 'ADD_PRODUCT_CART',
      payload: product,
    });
  }, 2000);
};
