import React from 'react';
import ProductCard from './ProductCard';
import './PopularProducts.scss';

const PopularProducts = () => {
  return (
    <section className='popular'>
      <div className='container'>
        <h2 className='popular__title'>Popular products</h2>
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
