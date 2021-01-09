import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { brandData } from './ProductsData';
import { useDispatch } from 'react-redux';
import { filterProductsData } from '../redux/actions/productsActions';

const ProductsFilters = ({ onChecked }) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [brandList, setBrandList] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setBrandList(brandData);
  }, []);
  const hideFilter = () => setShowFilter(!showFilter);
  const inputFilter = (e) => {
    const data = brandData.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setBrandList(data);
  };

  return (
    <div className='catalog-filters'>
      <div className='catalog-filter'>
        <div className='catalog-filter__top'>
          <div className='catalog-filter__caption' onClick={hideFilter}>
            <h3 className='catalog-filter__title'>BRANDS</h3>
            <span className='catalog-filter__toggle'>
              {showFilter ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </div>
        </div>
        <div
          className={
            showFilter
              ? 'catalog-filter__bottom active'
              : 'catalog-filter__bottom'
          }
        >
          <div className='catalog-filter__input filter__input'>
            <input
              type='text'
              placeholder='Search'
              className='filter__input-input'
              onChange={inputFilter}
            />
            <button className='filter__input-btn'>
              <FiSearch />
            </button>
          </div>
          <ul className='catalog-filter__items active'>
            {brandList.map((item, index) => {
              return (
                <li className='catalog-filter__item' key={index}>
                  <label className='custom-checkbox'>
                    <input
                      type='checkbox'
                      className='custom-checkbox__input'
                      value={item.name}
                      onChange={onChecked}
                    />
                    <span className='custom-checkbox__control'></span>
                    <span className='custom-checkbox__text'>{item.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
