import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Image1 from '../images/slide1.png';
import Image2 from '../images/slide2.jpg';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export const HeroSlider = () => {
  return (
    <div className='hero-catalog__slider'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='swiper-slide-one'>
          <div className='container'>
            <div className='swiper-slide__content'>
              <h2 className='swiper-slide__title'>GIVENCHY</h2>
              <p className='swiper-slide__desc'>The Season's Latest</p>
              <Link className='swiper-slide__link' to='/latest'>
                SHOP NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-two'>
          <div className='container'>
            <div className='swiper-slide__content'>
              <h2 className='swiper-slide__title'>GIVENCHY</h2>
              <p className='swiper-slide__desc'>The Season's Latest</p>
              <Link className='swiper-slide__link' to='/latest'>
                SHOP NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
