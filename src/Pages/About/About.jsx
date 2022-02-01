import React from 'react';
import './About.scss'
import { Link } from "react-router-dom";


//import images
import MuhammadAli from '../../Assets/Images/MuhammadAli.png'
import Calendar from '../../Assets/Images/calendar.svg'
import Clock from '../../Assets/Images/clock.svg'
import Eye from '../../Assets/Images/eye.svg'
import Share from '../../Assets/Images/share-2.svg'
function About() {
  return( 
  <div className='about'>
 <div className="about">
     <div className="container">
     <div className="about__link">
        <Link className="about__navlink" to="/">
          Bosh sahifa |
        </Link>
        <Link className="about__navlink" to="/">
          Loyiha haqida
        </Link>
      </div>
      <div className="about__wrapper">
          <div className="about__left">
              <h3 className="about__left-title">Savollaringiz bormi?</h3>
              <ul className='about__left-list'>
                  <li className='about__left-item'>
                      <a className='about__left-question' href="#">SMS tasdiqlash kodi kelmayabdi!</a>
                  </li>
                  <li className='about__left-item'>
                      <a className='about__left-question' href="#">SMS kodi nima?!</a>
                  </li>
              </ul>
              <h3 className="about__left-title">Ma'muriyat so'zlari</h3>
<p className="about__left-text">Biz bilan, siz o’zingiz istagan seminar yoki brifinglarda ishtirok etishingiz mumkin bo’ladi,
yoki siz biznes egasi bo’lasgiz va odamlarga o’zingizning bilim va ko’nikmalaringizni o’rgatishingiz mumkin bo’ladi</p>
          </div>
          <div className="about__center">
              <h2 className="about__center-title">Loyiha haqida</h2>
              <p className="about__center-description">Biz bilan, siz o’zingiz istagan seminar yoki brifinglarda 
              ishtirok etishingiz mumkin bo’ladi, yoki siz biznes egasi bo’lasgiz va odamlarga o’zingizning bilim va
               ko’nikmalaringizni o’rgatishingiz mumkin bo’ladi</p>
              <img className="about__center-img" src={MuhammadAli} alt="" />
              <h5 className="about__center-theme">Shaxsiy rivojlanish insonlarga nima uchun kerak?</h5>
              <p className="about__center-text">Dizayn va kompozitsiyani baholashda o'qilishi mumkin bo'lgan
               matn diqqatni jamlashni qiyinlashtirishi uzoq vaqtdan beri aniqlangan.  chunki u ko'proq yoki
                kamroq standart naqshlarni to'ldirishni ta'minlaydi, shuningdek, xat va bo'shliqlarni xatboshilardagi 
                haqiqiy taqsimlashni ta'minlaydi, bu shunchaki "Mana sizning matningiz.. Mana sizning matningiz.. 
                Mana sizning matningiz." matn.." Ko'pgina dasturlar veb-sahifa maketlari va HTML muharrirlari standart
                 matn sifatida  uchun  kalit so'zini qidirish darhol qancha veb-sahifalar tug'ilishni kutayotganini 
                 ko'rsatadi. Yillar davomida matni ko'plab versiyalarni oldi. </p>
                 <div className='about__center-citaty-box'>
                 <p className="about__center-citaty">Biz bilan, siz o’zingiz istagan seminar yoki brifinglarda ishtirok 
                 etishingiz mumkin bo’ladi, Yoki siz biznes egasi bo’lasgiz va odamlarga o’zingizning bilim va
                  ko’nikmalaringizni o’rgatishingiz mumkin bo’ladi</p>
                 </div>
              <p className="about__center-text"> Mana sizning matningiz.. Mana sizning matningiz." matn.." 
              Ko'pgina dasturlar veb-sahifa maketlari va HTML muharrirlari standart matn sifatida Lorem Ipsum-dan
               foydalanadilar, shuning uchun "lorem ipsum" kalit so'zini qidirish darhol qancha veb-sahifalar 
               tug'ilishni kutayotganini ko'rsatadi. Yillar davomida Lorem Ipsum matni ko'plab versiyalarni oldi. 
               Ba'zi versiyalar noto'g'ri paydo bo'lgan, ba'zilari - ataylab (masalan, kulgili versiyalar).</p>
<div className="about__timebox">
                  <span className="about__center-clock about__times">
                      <img className="about__center-clock-img about__times-img" src={Clock} alt="" />27-yanvar</span>
                      <span className="single__right-share single__times">
                      <img className="single__right-share-img single__times-img" src={Share} alt="" />Ulashish</span>
              </div>
          </div>
      </div>
     </div>
    </div>
  </div>
  )
}

export default About;
