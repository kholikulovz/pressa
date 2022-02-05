import React, { useEffect, useState } from "react";
import './Single.scss'
import { Link,NavLink, useParams } from "react-router-dom";
// import ShareBtn from 'react-share-button';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from "../../Components/Cards/Cards";
//import images
import MuhammadAli from '../../Assets/Images/MuhammadAli.png'
import Calendar from '../../Assets/Images/calendar.svg'
import Clock from '../../Assets/Images/clock.svg'
import Eye from '../../Assets/Images/eye.svg'
import Share from '../../Assets/Images/share-2.svg';



function Single() {
   const {id} = useParams();
   console.log(id);
   const [data, setData] = useState({});
   const [fullData, setFullData] = useState([]);
   const [click, setClick] = useState(false)

   useEffect(()=>{
      fetch(`https://doubleressabaza.herokuapp.com/cards/${id}`)
      .then(res=>res.json())
      .then(data=>setData(...data))
   }, [id])

   useEffect(()=>{
    fetch(`https://doubleressabaza.herokuapp.com/cards`)
    .then(res=>res.json())
    .then(data=>{
        setFullData(data)
    })
   }, [])
   useEffect(() => {
    window.scrollTo(0, 0)
  }, [click])
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
              <h3 className="single__left-title">{data.post_thema}</h3>
              <h4 className="single__left-author">{`${data.user_name} ${data.user_fname}`}</h4>
              <span className="single__left-profession">{data.user_job}</span>
              <div className="single__timebox">
                  <span className="single__left-calendar single__times">
                      <img className="single__left-calendar-img single__times-img" src={Calendar} alt="" />{data.start_data}</span>
                  <span className="single__left-clock single__times">
                      <img className="single__left-clock-img single__times-img" src={Clock} alt="" />11:00</span>
              </div>
          </div>
          <div className="single__center">
              <h2 className="single__center-title">{data.post_thema}</h2>
              <span className="single__center-share"><img  src={Share} alt="share" />
              <p className="single__center-share-text">Ulashish</p></span>
              <p className="single__center-description">{data.post_comment}</p>
              <img className="single__center-img" src={`https://doubleressabaza.herokuapp.com${data.post_img}`} alt="" />
              <h5 className="single__center-theme">{data.post_thema}</h5>
              <p className="single__center-text">{data.post_more}</p>
 <br />
 <a href="" className="single__center-text">📞 +{data.user_phone}</a>
 <br />
 <br/>
 <a href="" className="single__center-text">📝 Manzil:  ({data.meeting_place})</a>
<div className="single__timebox">
                  <span className="single__center-calendar single__times">
                      < img className="single__center-calendar-img single__times-img" src={Calendar} alt="" />{data.start_data}</span>
                  
                  <span className="single__center-view single__times">
                      <img className="single__center-view-img single__times-img" src={Eye} alt="" />{data.post_views}</span>
              </div>
          </div>
          <div className="single__right">
                  <span className="single__right-share single__times">
                      <img className="single__right-share-img single__times-img" src={Share} alt="" /><p className="single__right-text">Ulashish</p></span>
          </div>
      </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={window.screen.width>744?2:1}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {fullData&&fullData.map((e, i)=>{
          return <SwiperSlide  key={i}><NavLink to ={`/single/${e.post_id}`}  >
             <Cards
                                
                                postImg={e.post_img}
                                postName={e.post_thema}
                                postAuthor={`${e.user_name} ${e.user_fname}`}
                                type={e.type}
                                date={e.start_data}
                                userJob={e.user_job}
                                id={e.post_id}
                            />
            </NavLink></SwiperSlide>
       })}
      
      {/* <button>prev</button>
      <button>next</button> */}
    </Swiper>
     </div>
    </div>
  );
}

export default Single;
