import React from 'react';
import sneaker from '../images/sneakers.webp';
import jacket from '../images/jacket.webp';

import { Link } from 'react-router-dom';

const ProductCard = ({
  title,
  color,
  price,
  image_one,
  image_two,
  id,
  cardViewType,
}) => {
  const [image, setImage] = React.useState(true);

  const mouseOver = () => {
    setImage(!image);
  };

  return (
    <article
      className='product'
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOver}
    >
      <div className='product__image'>
        <img
          src={cardViewType === 0 ? image_one : image_two || sneaker}
          alt='jacket'
        />
      </div>

      <h3 className='product__title'>
        <Link to={`/product/${id}`}>{title || 'Champion Reverse Weave'}</Link>
      </h3>

      <p className='product__desc'>
        {color || 'Mens jacket Water Rpelient Shiny Nylon Hooded'}
      </p>
      <span className='product__price'>{price || '1999'} $</span>
    </article>
  );
};

export default ProductCard;
