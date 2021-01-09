import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
  return (
    <div className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        <li className='breadcrumbs__item'>
          <Link to='/' className='breadcrumbs__link'>
            Home
          </Link>
        </li>
        <li className='breadcrumbs__item'>
          <Link to='/' className='breadcrumbs__link'>
            {title}
          </Link>
        </li>
      </ul>
      <h2 className='breadcrumbs__title'>{title}</h2>
    </div>
  );
};

export default Breadcrumbs;
