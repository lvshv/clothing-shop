import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Logo from '../images/Logo.svg';
import CartSidebar from './CartSidebar';
import Overlay from './Overlay';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [cartSidebar, setCartSidebar] = useState(false);
  const itemsInCart = useSelector((state) => state.cart.items);
  const showSidebar = () => setSidebar(!sidebar);
  const showLoginModal = () => setLoginModal(!loginModal);
  const showCart = () => setCartSidebar(!cartSidebar);

  const closeModal = () => {
    setSidebar(false);
    setLoginModal(false);
    setCartSidebar(false);
  };

  return (
    <header className='header'>
      <div className='header__news'>
        New In: BURBERRY | DRÔLE DE MONSIEUR | HERON PRESTON
      </div>
      {loginModal && (
        <div className='login'>
          <div className='container'>
            <h2>Login or register</h2>
            <p>Please enter your email addres to continue</p>
            <label htmlFor='uname'>
              <b>Username</b>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              name='uname'
              required
            />

            <label htmlFor='psw'>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <button type='submit'>Login</button>
          </div>
        </div>
      )}

      {sidebar || loginModal || cartSidebar ? (
        <Overlay onClick={closeModal} />
      ) : (
        ''
      )}
      <IconContext.Provider value={{ color: '#000', size: '20px' }}>
        <div className='container header__container'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineMenu onClick={showSidebar} />
          </Link>
          <Link to='/' className='logo header__logo'>
            <img src={Logo} alt='logo'></img>
          </Link>
          <nav className='navbar__navigation nav header__nav'>
            <ul className='nav__list'>
              {SidebarData.map((item, index) => {
                return (
                  <li key={item.title} className='nav__item'>
                    <Link
                      to={item.path}
                      className='nav__link'
                      aria-label='logo'
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className='user-nav header__user-nav'>
            <li className='user-nav__item'>
              <button className='user-nav__btn'>
                <BiSearch />
              </button>
            </li>
            <li className='user-nav__item'>
              <button className='user-nav__btn' onClick={showCart}>
                <BsBag />
                <span className='user-nav__btn--items'>
                  {itemsInCart.length ? itemsInCart.length : ''}
                </span>
              </button>
            </li>
            <li className='user-nav__item'>
              <button className='user-nav__btn' onClick={showLoginModal}>
                <AiIcons.AiOutlineUser />
              </button>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? 'side-nav active' : 'side-nav'}>
          <ul className='side-nav__items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='side-nav__text'>
                  <Link className='side-nav__link' to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <CartSidebar active={cartSidebar} />
    </header>
  );
}

export default Navbar;
