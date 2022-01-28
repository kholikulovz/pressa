import React from 'react';
import './Footer.scss';
import Facebook from '../../Assets/svg/facesbook.tsx';
import Instagram from '../../Assets/svg/instagram.tsx';
import Telegram from '../../Assets/svg/telegram.tsx';
import Tiktok from '../../Assets/svg/tik-tok.tsx';
import Youtube from '../../Assets/svg/Youtube.tsx';
import logo  from '../../Assets/Images/logo.png'
function AppRouter() {
  return(
    <>
    <footer className='footer'>
    <div className='footer__nav container'>
    <div className="footer__left">
    <li className="footer__nav-item footer__logo"><img src={logo} alt="" className="footer__logo__img" />Pressa</li>
    <ul className='footer__nav-item footer__social'>
    <li className='footer__social-item'>
    <a href="#" className='footer__social-link'><Telegram/></a>
    </li>
    <li className='footer__social-item'>
    <a href="#" className='footer__social-link'><Facebook/></a>
    </li>
    <li className='footer__social-item'>
    <a href="#" className='footer__social-link'><Instagram/></a>
    </li>
    <li className='footer__social-item'>
    <a href="#" className='footer__social-link'><Tiktok/></a>
    </li>
    <li className='footer__social-item'>
    <a href="#" className='footer__social-link'><Youtube/></a>
    </li>
    
    
    </ul>
    </div>
    <div className="footer__right">
    <ul className="footer__nav-item footer__navlink">
    <li className="footer__navlink-item">Loyiha haqida</li>
    <li className="footer__navlink-item">Yordam</li>
    </ul>
    
    <li className="footer__item"><a href="#" className="footer__item-link">+998 (90) 325-36-32</a></li>
    </div>
    </div>
    </footer>
    </>
    )
  }
  
  export default AppRouter;
  