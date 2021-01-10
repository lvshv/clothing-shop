import React from 'react';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Overlay from './Overlay';
import { Link } from 'react-router-dom';

const CartSidebar = ({ active }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const [openPromo, setOpenPromo] = React.useState(false);

  return (
    <>
      <div className={active ? 'cart-sidebar active' : 'cart-sidebar'}>
        <div className='cart-sidebar__header'>
          <h3 className='cart-sidebar__title'>your cart</h3>
        </div>
        {!items.length ? (
          <div className='empty-cart'>
            <div className='empty-cart__image'>
              <BsBag />
            </div>
            <p className='empty-cart__title'>You have no items in your cart</p>
            <Link className='empty-cart__link' to='/latest'>
              View Latest
            </Link>
          </div>
        ) : (
          <>
            <div className='cart-items'>
              {items.map((product, index) => {
                return <CartItem key={`${product.id}_${index}`} {...product} />;
              })}
            </div>
            <div className='cart-total'>
              <div className='cart-total__subtotal'>
                <span>Subtotal:</span>
                <span>500$</span>
              </div>
              <div className='cart-total__shipping'>
                <span>Shippingl:</span>
                <span>0$</span>
              </div>
              <div className='cart-total__total'>
                <span>Total:</span>
                <span>{totalPrice}$</span>
              </div>
            </div>
            <div className={openPromo ? 'cart-promo active' : 'cart-promo'}>
              <p onClick={() => setOpenPromo(!openPromo)}>
                GIFTCARD / PROMOCODE
              </p>
              <div className='cart-promo__input'>
                <input type='text' placeholder='Enter Code' />
                <button>APPLY</button>
              </div>
            </div>
            <div className='checkout'>
              <Link to='/checkout' className='checkout-btn'>
                GO TO CHECKOUT
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
