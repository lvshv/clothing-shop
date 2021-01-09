import { ProductsData } from '../../components/ProductsData';

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: 'SET_PRODUCTS_LOADING',
  });
  setTimeout(() => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: ProductsData,
    });
  }, 2000);
};

export const sortProductsLowPrice = (items) => (dispatch) => {
  dispatch({
    type: 'SET_PRODUCTS_LOADING',
  });
  const newItems = JSON.parse(JSON.stringify(items));
  newItems.forEach((item) => (item.price = +item.price));
  newItems.sort((a, b) => (a.price > b.price ? 1 : -1));
  setTimeout(() => {
    dispatch({
      type: 'SORT_PRODUCTS_LOW_PRICE',
      payload: newItems,
    });
  }, 2000);
};
export const sortProductsHighPrice = (items) => (dispatch) => {
  dispatch({
    type: 'SET_PRODUCTS_LOADING',
  });
  const newItems = JSON.parse(JSON.stringify(items));
  newItems.forEach((item) => (item.price = +item.price));
  newItems.sort((a, b) => (a.price > b.price ? -1 : 1));
  setTimeout(() => {
    dispatch({
      type: 'SORT_PRODUCTS_HIGH_PRICE',
      payload: newItems,
    });
  }, 2000);
};

export const filterProductsData = (keyword) => async (dispatch, getState) => {
  const state = getState();
  // debugger;
  const { products } = state;

  const filtersCopy = JSON.parse(JSON.stringify(products.filters));
  if (filtersCopy.length) {
    const filtredCopy = filtersCopy.findIndex((word) => word === keyword);
    filtersCopy.splice(filtredCopy);
    console.log(filtersCopy);
  } else {
    let arr = [];
    arr.push(keyword);
    dispatch({
      type: 'FILTER_PRODUCTS_BY_BRAND',
      payload: arr,
    });
  }
};
