import React from "react";
import './Single.scss'
import { Link } from "react-router-dom";
// import ShareBtn from 'react-share-button';


//import images
import MuhammadAli from '../../Assets/Images/MuhammadAli.png'
import Calendar from '../../Assets/Images/calendar.svg'
import Clock from '../../Assets/Images/clock.svg'
import Eye from '../../Assets/Images/eye.svg'
import Share from '../../Assets/Images/share-2.svg'


function Single() {
  return (
    <div className="single">
     <div className="container">
     <div className="single__link">
        <Link className="single__navlink intro__link--inactive" to="/">
          Bosh sahifa |
        </Link>
        <Link className="single__navlink intro__link--active" to="/">
          100 yillik strategiya
        </Link>
      </div>
      <div className="single__wrapper">
          <div className="single__left">
              <h3 className="single__left-title">Ochiq logo marafon taqdimotiga marhamat</h3>
              <h4 className="single__left-author">Muhammad Ali Eshonqulov</h4>
              <span className="single__left-profession">Speaker</span>
              <div className="single__timebox">
                  <span className="single__left-calendar single__times">
                      <img className="single__left-calendar-img single__times-img" src={Calendar} alt="" />15.03.2022</span>
                  <span className="single__left-clock single__times">
                      <img className="single__left-clock-img single__times-img" src={Clock} alt="" />11:00</span>
              </div>
          </div>
          <div className="single__center">
              <h2 className="single__center-title">Ochiq logo marafon taqdimotiga marhamat</h2>
              <p className="single__center-description">Shaxsiy rivojlanish sirlarini bilishni istaganlar  biz sizlarni kutib qolamiz...</p>
              <img className="single__center-img" src={MuhammadAli} alt="" />
              <h5 className="single__center-theme">Shaxsiy rivojlanish insonlarga nima uchun kerak?</h5>
              <p className="single__center-text">🙋🏻‍♂️ Har birimiz uchun birinchi qadamdan uchinchi qadamga oʻtish uchun ikkinchi qadam rejasi boʻlishi zarur! Buni qanday amalga oshiramiz, qanday qilib shaxsiy rivojlanishni shakllantiramiz deysizmi?
<br />
<br />
📆 Barchasini 20-dekabr kuni Big Data Biznes akademiyasida Muhammadali Eshonqulovning “ Shaxsiy Rivojlanish: 100yillik Strategiya” mavzusida boʻlib oʻtadigan treningida bilib olishingiz mumkin.
<br />
<br />
📌 Imkoniyatni boy bermang, oʻz kelajagingiz uchun muhim qarorni qabul qilishning ayni vaqti! 
<br />
<br />
🏻‍♂️ Trening narxlari va batafsil maʼlumot uchun quyidagi raqamlarga murojaat qiling:
<br />
<br />
🏛 Toshkent shahrida boʻlib oʻtadigan oflayn treningimizda qatnashganlar nafaqat bilim,
 Big Data tomonidan beriladigan SERTIFIKAT bilan ham taqdirlanadi.</p>
 <br />
 <a href="" className="single__center-text">📞 +998555000900</a>
 <br />
 <a href="" className="single__center-text">📝 Manzil:  (https://forms.gle/qkdmQpjrA6niSetn6)</a>
<div className="single__timebox">
                  <span className="single__center-calendar single__times">
                      < img className="single__center-calendar-img single__times-img" src={Calendar} alt="" />15.03.2022</span>
                  <span className="single__center-clock single__times">
                      <img className="single__center-clock-img single__times-img" src={Clock} alt="" />11:00</span>
                  <span className="single__center-view single__times">
                      <img className="single__center-view-img single__times-img" src={Eye} alt="" />218</span>
              </div>
          </div>
          <div className="single__right">
                  <span className="single__right-share single__times">
                      <img className="single__right-share-img single__times-img" src={Share} alt="" />Ulashish</span>
          </div>
      </div>
     </div>
    </div>
  );
}

export default Single;
