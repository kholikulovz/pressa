import React, { useState } from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function Header() {
    const [modal, setModal] = useState(false);
    let [scrollNav, setScrollNav] = useState('')

    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            setScrollNav("header--active");
        } else {
            setScrollNav('')
        }
      });
  return (
    <header className={`header ${scrollNav}`} onScroll={(e) =>{
      
    }}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo"><Link className='link header__logo' to='/'>Pressa</Link></div>
          <div className="header__left">
            <div data-id='modal' className={`mobile__modal ${modal?'modal__active':''}`} onClick={(e)=>{
                 return e.target.dataset.id !='list'?setModal(!modal):''
            }}>
              <ul data-id = 'list' className={`header__list ${modal?'list__active':''}`}>
                <li className="header__item">
                  <NavLink className='link link-page' to='/about' onClick={()=>{
                    setModal(!modal)
                  }}>Loyiha haqida</NavLink></li>
                <li className="header__item">
                  <NavLink className='link link-page' to='/'  onClick={()=>{
                    setModal(!modal)
                  }}>Yordam</NavLink></li>
          

              </ul>
            </div>
            <Link className='link add' to='/announce'>+E'lon berish</Link>
          </div>
          <div onClick={()=>{
            setModal(!modal)
          }} className={`header__menu-icon ${modal?'modal__icon':''}`}>
            <div className={`menu__icon ${modal?'modal__icon-item':''}`}></div>
            <div className={`menu__icon ${modal?'modal__icon-item':''}`}></div>
            <div className={`menu__icon ${modal?'modal__icon-item':''}`}></div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header;