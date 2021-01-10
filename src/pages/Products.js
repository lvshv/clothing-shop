import React from 'react';
import ProductsFilters from '../components/ProductsFilters';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
// @ts-ignore
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productsActions';
import Loader from '../components/Loader';
import {
  sortProductsLowPrice,
  sortProductsHighPrice,
  // @ts-ignore
  filterProductsData,
} from '../redux/actions/productsActions';

const Products = () => {
  const [view, setView] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(false);
  const [cardViewType, setCardViewType] = React.useState(0);
  const [activeSortBy, setActiveSortBy] = React.useState(0);
  // const [products, setProducts] = React.useState([]);
  const [keywords, setKeywords] = React.useState([]);
  const dispatch = useDispatch();
  // @ts-ignore
  const productsState = useSelector((state) => state.products);
  const { items, loading } = productsState;

  const toolbarRef = React.useRef();
  const outsideClickHandler = (e) => {
    if (!e.path.includes(toolbarRef.current)) {
      setView(false);
      setSortBy(false);
    }
  };
  React.useEffect(() => {
    window.document.body.addEventListener('click', outsideClickHandler);
    dispatch(fetchProducts());
    return () =>
      window.document.body.removeEventListener('click', outsideClickHandler);
  }, []);

  // @ts-ignore
  const openViewHandler = (e) => {
    setSortBy(false);
    setView(!view);
  };
  // @ts-ignore
  const openSortByHandler = (e) => {
    setView(false);
    setSortBy(!sortBy);
  };
  const sortByLowPrice = () => {
    setActiveSortBy(1);
    dispatch(sortProductsLowPrice(items));
  };
  const sortByHighPrice = () => {
    setActiveSortBy(2);
    dispatch(sortProductsHighPrice(items));
  };
  const sortByFeatured = () => {
    setActiveSortBy(0);
    dispatch(fetchProducts());
  };
  const setCardViewProduct = () => {
    setCardViewType(0);
  };
  const setCardViewOutfit = () => {
    setCardViewType(1);
  };
  const checkedHandler = (e) => {
    if (keywords.includes(e.target.value)) {
      const newArr = keywords.filter((word) => word !== e.target.value);
      // console.log(newArr);
      setKeywords(newArr);
    } else {
      setKeywords([...keywords, e.target.value]);
    }
  };

  const myArrayFiltered = (arr) => {
    if (!keywords.length) {
      return arr;
    }
    return arr.filter((item) => {
      return keywords.some((brand) => {
        return item.brand.toLowerCase() === brand.toLowerCase();
      });
    });
  };
  return (
    <section className='products__section'>
      <div className='container'>
        <Breadcrumbs title={'NEW THIS WEEK'} />
        {loading ? (
          <Loader />
        ) : (
          <div className='products__items'>
            <ProductsFilters onChecked={checkedHandler} />
            <div className='products__items-main'>
              <div className='products__toolbar'>
                <div className='products__toolbar-counter'>
                  {items.length} items
                </div>
                <div ref={toolbarRef} className='products__toolbar-handlers'>
                  <button
                    className='products__toolbar-view btn-toolbar'
                    onClick={openViewHandler}
                  >
                    <span>View</span>
                    <BsChevronDown className='btn-toolbar__icon' />
                    <ul
                      className={
                        view
                          ? 'products__toolbar-list active'
                          : 'products__toolbar-list'
                      }
                    >
                      <li
                        className={
                          cardViewType === 0
                            ? 'products__toolbar-item active'
                            : 'products__toolbar-item'
                        }
                        onClick={setCardViewProduct}
                      >
                        Product
                      </li>
                      <li
                        className={
                          cardViewType === 1
                            ? 'products__toolbar-item active'
                            : 'products__toolbar-item'
                        }
                        onClick={setCardViewOutfit}
                      >
                        Outfit
                      </li>
                    </ul>
                  </button>
                  <button
                    className='products__toolbar-sort btn-toolbar'
                    onClick={openSortByHandler}
                  >
                    <span>
                      {activeSortBy === 0
                        ? 'Featured'
                        : activeSortBy === 1
                        ? 'Price (Low)'
                        : 'Price (High)'}
                    </span>
                    <BsChevronDown className='btn-toolbar__icon' />
                    <ul
                      className={
                        sortBy
                          ? 'products__toolbar-list active'
                          : 'products__toolbar-list'
                      }
                    >
                      <li
                        className={
                          activeSortBy === 0
                            ? 'products__toolbar-item active'
                            : 'products__toolbar-item'
                        }
                        onClick={sortByFeatured}
                      >
                        Featured
                      </li>
                      <li
                        className={
                          activeSortBy === 1
                            ? 'products__toolbar-item active'
                            : 'products__toolbar-item'
                        }
                        onClick={sortByLowPrice}
                      >
                        Price (Low)
                      </li>
                      <li
                        className={
                          activeSortBy === 2
                            ? 'products__toolbar-item active'
                            : 'products__toolbar-item'
                        }
                        onClick={sortByHighPrice}
                      >
                        Price (High)
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
              <div className='product__items-cards'>
                {myArrayFiltered(items)
                  // @ts-ignore
                  .map((item, index) => {
                    return (
                      <ProductCard
                        key={item.id}
                        {...item}
                        cardViewType={cardViewType}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
