import React from 'react';
import jacket from '../images/jacket.jpg';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className='product'>
      <div to='/product' className='product__image'>
        <img src={jacket} alt='jacket' />
      </div>

      <h3 className='product__title'>
        <Link to='/product'>Champion Reverse Weave</Link>
      </h3>

      <p className='product__desc'>
        Mens jacket Water Rpelient Shiny Nylon Hooded
      </p>
      <span className='product__price'>19 990Р</span>
    </div>
  );
};

export default ProductCard;
