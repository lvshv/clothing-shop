import React from 'react';
import { Link } from 'react-router-dom';
import saleImage from '../images/sale.jpg';
import './Banner.scss';

const Banner = () => {
  return (
    <div className='container'>
      <Link to='/sale' className='banner_link'>
        <img src={saleImage} alt='' />
      </Link>
    </div>
  );
};

export default Banner;
