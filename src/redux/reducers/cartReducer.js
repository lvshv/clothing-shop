const initialState = {
  items: [],
  showCartSidebar: false,
  totalPrice: 0,
  totalCount: 0,
  loading: false,
};
const calcTotalPrice = (arr) => {
  return arr.reduce(
    (acc, item) => acc + parseFloat(item.count) * parseFloat(item.price),
    0
  );
};
const calcTotalCount = (arr) => {
  return arr.reduce((acc, item) => acc + parseFloat(item.count), 0);
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PRODUCT_CART':
      const idx = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (idx !== -1) {
        const newArr = [...state.items];
        newArr[idx].count += 1;
        const newPrice = calcTotalPrice(newArr);
        const newTotalCount = calcTotalCount(newArr);
        return {
          ...state,
          items: newArr,
          totalPrice: newPrice,
          totalCount: newTotalCount,
          loading: false,
        };
      }
      const newArr = [...state.items, action.payload];
      const newPrice = calcTotalPrice(newArr);
      const newTotalCount = calcTotalCount(newArr);
      return {
        ...state,
        items: newArr,
        showCartSidebar: true,
        totalPrice: newPrice,
        totalCount: newTotalCount,
        loading: false,
      };
    case 'INC_PRODUCT_CART': {
      const idx = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      const newArr = [...state.items];
      newArr[idx].count += 1;
      const newPrice = calcTotalPrice(newArr);
      const newTotalCount = calcTotalCount(newArr);
      return {
        ...state,
        items: newArr,
        totalPrice: newPrice,
        totalCount: newTotalCount,
        loading: false,
      };
    }
    case 'DEC_PRODUCT_CART': {
      const idx = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (state.items[idx].count === 1) {
        return state;
      }
      const newArr = [...state.items];
      newArr[idx].count -= 1;
      const newPrice = calcTotalPrice(newArr);
      const newTotalCount = calcTotalCount(newArr);
      return {
        ...state,
        items: newArr,
        totalPrice: newPrice,
        totalCount: newTotalCount,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default cart;
