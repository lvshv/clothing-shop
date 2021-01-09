const initialState = {
  items: [],
  loading: false,
  filters: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'SORT_PRODUCTS_LOW_PRICE':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'SORT_PRODUCTS_HIGH_PRICE':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'FILTER_PRODUCTS_BY_BRAND':
      const newArr = [...state.filters, ...action.payload];

      return {
        ...state,
        // items: action.payload,
        loading: false,
        filters: newArr,
      };
    default:
      return state;
  }
};

export default products;
