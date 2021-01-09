import React from 'react';
import { Link } from 'react-router-dom';
import saleImage from '../images/sale.jpg';

const Banner = () => {
  return (
    <div className='banner_wrapper'>
      <div className='container'>
        <Link to='/sale' className='banner_link'>
          <img src={saleImage} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
