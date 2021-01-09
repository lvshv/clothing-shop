import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { ProductsData } from '../components/ProductsData';
import Thumb from '../images/thumb.jpg';
import Hoodie from '../images/hoodie.jpg';
import { useDispatch, useSelector } from 'react-redux';
import TabContent from '../components/TabContent';
import { addItemToCart } from '../redux/actions/cartActions';
import Loader from '../components/Loader';

const ProductScreen = ({ match }) => {
  const [activeSize, setActiveSize] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const cartState = useSelector((state) => state.cart);
  const { loading } = cartState;
  const dispatch = useDispatch();

  const productData = ProductsData.find(
    (product) => product.id === match.params.id
  );

  const chooseSize = (size) => setActiveSize(size);
  const addProductToCart = () => {
    dispatch(addItemToCart({ ...productData, size: activeSize, count: 1 }));
  };
  console.log(productData);

  return (
    <div className='Product'>
      <div className='container'>
        <Breadcrumbs title='' />
        <div className='card-content'>
          <div className='card-content__left'>
            <div className='card-slider'>
              <div className='card-slider__thumbs'>
                <div className='card-slider__thumb'>
                  <img src={productData.image_two} alt='' />
                </div>
              </div>
              <div className='card-slider__main'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <img src={productData.image_one} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content__right'>
            <div className='card-info'>
              <h1 className='card-info__title'>{productData.title}</h1>
              <span className='card-info__color'>{productData.color}</span>
              <span className='card-info__price'>{productData.price}$</span>
            </div>
            <div className='card-sizes'>
              <ul className='card-sizes__list'>
                {productData.availableSizes.map((size, index) => {
                  return (
                    <li
                      className={
                        activeSize === size
                          ? 'card-sizes__item active'
                          : 'card-sizes__item'
                      }
                      key={index}
                      onClick={() => chooseSize(size)}
                    >
                      <span>{size}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <div className='card-buttons'>
                <button
                  className='card-buttons__cart product-button'
                  onClick={addProductToCart}
                >
                  add to card
                </button>
                <button className='card-buttons__wish product-button'>
                  add to wishlist
                </button>
              </div>
            )}
            <div className='card-tabs'>
              <ul className='card-tabs__list'>
                <li
                  className={
                    activeTab === 0
                      ? 'card-tabs__item active'
                      : 'card-tabs__item'
                  }
                  onClick={() => setActiveTab(0)}
                >
                  <span>Description</span>
                </li>
                <li
                  className={
                    activeTab === 1
                      ? 'card-tabs__item active'
                      : 'card-tabs__item'
                  }
                  onClick={() => setActiveTab(1)}
                >
                  <span>sizing</span>
                </li>
                <li
                  className={
                    activeTab === 2
                      ? 'card-tabs__item active'
                      : 'card-tabs__item'
                  }
                  onClick={() => setActiveTab(2)}
                >
                  <span>shipping</span>
                </li>
                <li
                  className={
                    activeTab === 3
                      ? 'card-tabs__item active'
                      : 'card-tabs__item'
                  }
                  onClick={() => setActiveTab(3)}
                >
                  <span>returns</span>
                </li>
              </ul>
              <TabContent active={activeTab === 0}>
                Nike and Stüssy are well known for their fusion of sportswear
                and streetwear, and their latest collection follows tradition.
                With this pullover jacket, though, it’s geared towards colder
                days spent in the city, too, with an insulated build and a
                hand-warming pouch pocket. Co-branding — an embroidered Swoosh
                at one sleeve, Stüssy’s signature scribble at the other —
                completes the look.
              </TabContent>
              <TabContent active={activeTab === 1}>
                Model is 6ft 2in/1.88m with a 37”/94cm chest and wears a size
                Medium.
              </TabContent>
              <TabContent active={activeTab === 2}>
                RUB1,800.00 via FEDEX Priority Service Order within 3 Hours 41
                Minutes to receive Mon 11 Jan FREE FEDEX Priority Service on
                orders over RUB27,500.00 Order within 3 Hours 41 Minutes to
                receive Mon 11 Jan
              </TabContent>
              <TabContent active={activeTab === 3}>
                dsdIf for some reason you are not happy with your purchase you
                can return it to us within 14 days for an exchange or refund.
                For more information please visit our returns pagesd
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
