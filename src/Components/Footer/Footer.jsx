

import { NavLink } from 'react-router-dom';
import './Footer.scss';


function Footer() {



  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__top">
          <NavLink className='footer__logo' to='/'>Pressa</NavLink>
          <div className="footer__link-wrapper">
            <NavLink className='footer__link' to='/about'>Loyiha haqida</NavLink>
            <NavLink className='footer__link' to='/help'>Yordam</NavLink>
          </div>
          <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link">Facebook</a>
            <a href="https://www.instagram.com/" className="footer__social-link">Instagram</a>
            <a href="https://telegram.org/" className="footer__social-link">Telegram</a>
          </div>
          <a href="tel:+998 90 123-45-67" className="footer__phone">+998 90 123-45-67</a>
        </section>
        <span className='footer__copyright'>Copyright 2022</span>
      </div>
    </footer>
  )
}
export default Footer