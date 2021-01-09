import React from 'react';

import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [openPromo, setOpenPromo] = React.useState(false);

  const cartState = useSelector((state) => state.cart);
  const { items, totalPrice } = cartState;
  return (
    <div className='checkout'>
      <div className='container'>
        <div className='checkout-wrapper'>
          <div className='checkout-items'>
            <div>
              {items.map((product, index) => {
                return <CartItem key={`${product.id}_${index}`} {...product} />;
              })}
            </div>
            <div className='cart-total'>
              <div className='cart-total__subtotal'>
                <span>Subtotal:</span>
                <span>{totalPrice} $</span>
              </div>
              <div className='cart-total__shipping'>
                <span>Shippingl:</span>
                <span>0$</span>
              </div>
              <div className='cart-total__total'>
                <span>Total:</span>
                <span>500$</span>
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
                PLACE ORDER
              </Link>
            </div>
          </div>
          <div className='checkout-data'>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quidem fugit fuga nobis facere, eos iste alias impedit
              quod quas? Doloremque veniam totam maxime necessitatibus aut!
              Omnis harum illo ipsa nisi numquam mollitia animi voluptatibus
              sed. Reiciendis, accusantium error. Tempore ad recusandae maiores
              rem. Fuga, doloremque eos aperiam unde iste accusamus eaque
              voluptate natus ipsa, exercitationem architecto doloribus
              inventore quisquam ullam necessitatibus aliquam delectus saepe
              molestiae nobis rerum, est repudiandae ad officia non! Voluptates,
              ab libero obcaecati iure, nihil dolorem possimus unde amet rerum,
              assumenda illo similique qui nulla recusandae nam laboriosam
              laborum. Odit, sapiente incidunt voluptas quibusdam quos
              laboriosam!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
