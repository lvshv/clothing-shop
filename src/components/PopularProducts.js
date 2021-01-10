import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PopularProducts = () => {
  return (
    <section className='popular'>
      <div className='container'>
        <h2 className='popular__title'>Latest</h2>
        <Link to='/latest' className='popular__link'>
          view all
        </Link>
        <div className='popular__items'>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoHeight={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            pagination={{
              // el: 'swiperr-pagination',
              dynamicBullets: true,
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-slider'>
                <ProductCard />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
