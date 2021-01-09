import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  return (
    <section className='popular'>
      <div className='container'>
        <h2 className='popular__title'>Latest</h2>
        <Link to='/products' className='popular__link'>
          view all
        </Link>
        <div className='popular__items'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
