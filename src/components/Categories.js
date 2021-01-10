import React from 'react';
import { Link } from 'react-router-dom';
import Slide1 from '../images/jacket.webp';
import Slide2 from '../images/slide2.jpg';

export const Categories = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <div className='hero__item'>
            <Link className='hero__item-image' to='/clothing'>
              <img src={Slide1} alt='' className='hero__item-img' />
            </Link>
            <h2 className='hero__item-title'>Clothing</h2>
            <Link to='/latest' className='hero__item-link'>
              view
            </Link>
          </div>
          <div className='hero__item'>
            <Link className='hero__item-image' to='/sneakers'>
              <img src={Slide2} alt='' className='hero__item-img' />
            </Link>
            <h2 className='hero__item-title'>Sneakers</h2>
            <Link to='/latest' className='hero__item-link'>
              view
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
