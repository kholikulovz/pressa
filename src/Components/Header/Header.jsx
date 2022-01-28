import React from 'react';
import './Header.scss';
import logo from '../../Assets/Images/logo.png';
import arrow from '../../Assets/Images/arrow.png';

function Header() {
  return( 
  <>
<header className='header'>
  <div className='header__nav container'>
  <ul className="header__left header__nav">
    <li className="header__left-item header__nav-item logo"><img src={logo} alt="" className="logo__img" /> Pressa</li>
    <li className="header__left-item header__nav-item category"><span>Kategoriya</span> <img src={arrow} alt="#" className="arrow" />
    <ul className="category__list">
      <li className="category__item" value='talim'>Ta'lim</li>
      <li className="category__item" value='biznes'>Biznes</li>
      <li className="category__item" value='marketing'>Marketing</li>
      <li className="category__item" value='iqtisodiyot'>Iqtisodiyot</li>
      <li className="category__item" value='dizayn'>Dizayn</li>
      <li className="category__item" value='sogliqni saqlash'>Sog’liqni saqlash</li>
      <li className="category__item" value='qurislish'>Qurilish</li>
      <li className="category__dropdown">
        <ul className="category__dropdown-list">
          <li className="category__dropdown-item">Abbos Janizakov</li>
          <li className="category__dropdown-item">Javoxir Berdiyev</li>
          <li className="category__dropdown-item">Muhammadali Eshonqulov</li>
          <li className="category__dropdown-item">Temurbek Adhamov</li>
          <li className="category__dropdown-item">Valijon Turakulov</li>
        </ul>
      </li>
    </ul>
    </li>
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
