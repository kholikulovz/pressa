import React from 'react';
import './Header.scss'

function Header() {
  return( 
  <>
<header className='header'>
  <div className='header__nav container'>
  <ul className="header__left header__nav">
    <li className="header__left-item header__nav-item logo">Pressa</li>
    <li className="header__left-item header__nav-item">Kategoriya</li>
  </ul>
  <ul className="header__right header__nav">
    <li className="header__right-item header__nav-item">Loyiha haqida</li>
    <li className="header__right-item header__nav-item">Yordam</li>
    <li className="header__right-item header__nav-item">E'lon berish</li>
  </ul>
  </div>
</header>
  </>
  )
}

export default Header;
