import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/jacket.jpg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

const CartItem = ({ title, image_one, color, size, price, count, id }) => {
  const dispatch = useDispatch();
  // console.log(id);
  const incCount = () => {
    dispatch({
      type: 'INC_PRODUCT_CART',
      payload: { id, size },
    });
  };
  const decCount = () => {
    dispatch({
      type: 'DEC_PRODUCT_CART',
      payload: { id, size },
    });
  };
  const deleteItemFromCart = () => {
    dispatch({
      type: 'DELETE_ITEM_FROM_CART',
      payload: { id, size },
    });
  };
  return (
    <div className='cart-item'>
      <div className='cart-item__image'>
        <img src={image_one} alt='' />
      </div>
      <div className='cart-item__content'>
        <div className='cart-item__content-header'>
          <span className='cart-item__content-title'>{title}</span>
          <button
            className='cart-item__content-btn'
            onClick={deleteItemFromCart}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
        <p className='cart-item__color'>{color}</p>
        <p className='cart-item__size'>{size}</p>
        <div className='cart-item__bottom cart-bottom'>
          <span className='cart-bottom__qty'>QTY</span>
          <button onClick={decCount}>-</button>
          <span>{count}</span>
          <button onClick={incCount}>+</button>
          <span className='cart-bottom__price'>{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
