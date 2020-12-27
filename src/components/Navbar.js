import React, { useState, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { BsBag } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import Logo from '../images/Logo.svg';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showLoginModal = () => setLoginModal(!loginModal);
  const overlay = useRef();

  const hideSidebar = () => {
    if (overlay.current) {
      setSidebar(false);
      setLoginModal(false);
    }
  };

  return (
    <header className='header'>
      <div className='header__news'>
        New In: BURBERRY | DRÔLE DE MONSIEUR | HERON PRESTON
      </div>
      {loginModal && (
        <div className='login'>
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
      )}

      {sidebar || loginModal ? (
        <div className='overlay' ref={overlay} onClick={hideSidebar}></div>
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
                    <Link to='/' className='nav__link' aria-label='logo'>
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
              <button className='user-nav__btn'>
                <BsBag />
              </button>
            </li>
            <li className='user-nav__item'>
              <button className='user-nav__btn' onClick={showLoginModal}>
                <AiIcons.AiOutlineUser />
              </button>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
}

export default Navbar;
