import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <div className='footer__top'>
            <div className='footer__column'>
              <h3 className='footer__title'>About</h3>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <Link to='/careers'>Careers</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/press'>Press</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/stores'>Stores</Link>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>CUSTOMER SERVICE</h3>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <Link to='/help'>Help</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/shipping'>Shipping</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/returns'>Returns</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/payments'>Payments</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/orders'>Your Order</Link>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>CONTACT US</h3>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#'>+44 (0)333 323 7728</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Email us</a>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>OUR NEWSLETTER</h3>
              <form action='' className='footer__form subscribe__form'>
                <h4 className='subscribe__form-title'>
                  Sign up for exclusive early sale access and tailored new
                  arrivals
                </h4>
                <label htmlFor='' className='subscribe__form-field'>
                  <input
                    type='email'
                    name=''
                    id=''
                    required
                    placeholder='Email Adrdress'
                  />
                </label>
                <button type='submit' className='subscribe__form-btn'>
                  Subscribe
                </button>
              </form>
              <div className='footer__social'>123</div>
            </div>
          </div>
          <div className='footer__bottom'>
            <div className='footer__left'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <Link to='/#'>Terms & Conditions</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/#'>Privacy Policy</Link>
                </li>
                <li className='footer__item'>
                  <Link to='/#'>Other Policies</Link>
                </li>
              </ul>
            </div>
            <div className='footer__right'></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
