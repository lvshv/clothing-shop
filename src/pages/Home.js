import React from 'react';

import { Categories } from '../components/Categories';
// import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import PopularProducts from '../components/PopularProducts';
import { HeroSlider } from '../components/HeroSlider';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <PopularProducts />
      <Banner />
      <Categories />
    </>
  );
};

export default Home;
