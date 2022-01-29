import React from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

function Header(){


  return (
    <header className="header">
    <div className="container">
     <div className="header__wrapper">
     <div className="header__logo"><Link className='link' to='/'>Pressa</Link></div>
      <ul className="header__list">
        <li className="header__item">
          <NavLink className='link link-page' to='/about'>Loyiha haqida</NavLink></li>
        <li className="header__item">
           <NavLink className='link link-page' to='/help'>Yordam</NavLink></li>
        <li className="header__item">
          <NavLink className='link link-page' to='/enter'>Kirish</NavLink></li>
        <li className="header__item"> 
        <Link className='link add' to='/add'>+E'lon berish</Link></li>
         
          
         
       
      </ul>
     </div>
    </div>
  </header>

  )
}

export default Header;