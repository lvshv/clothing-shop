import React from 'react';

import { Categories } from '../components/Categories';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <div className='container'>
      <Categories />
      <Banner />
      <PopularProducts />
    </div>
  );
};

export default Home;
