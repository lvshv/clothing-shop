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
import '../components/HeroCatalog.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reports = () => {
  return (
    <div className='hero-catalog'>
      <div className='container'></div>
    </div>
  );
};

export default Reports;
