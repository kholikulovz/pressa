import React, { useEffect, useRef, useState } from "react";
import "./Announce.scss";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import arrow from '../../Assets/Images/arrow.svg';
import Download from '../../Assets/Images/download.svg'


function Announce() {
  //states
  const [categ, setCateg] = useState('');
  const [subcat, setSubcat] = useState('');
  const [wer, setWer] = useState();
  const [line, setLine] = useState('');
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [isAbled, setisAbled] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(new Date('2022-01-01T00:00:00'));
  const [time, setTime] = useState('');



  //refs

  const name = useRef();
  const surname = useRef();
  const link = useRef();
  const tel = useRef();
  const job = useRef();
  const theme = useRef();
  const short = useRef();
  const desc = useRef();
  const file = useRef();
  const dropDown = useRef();
  const subDrop = useRef();

  useEffect(() => {
    fetch(`https://doubleressabaza.herokuapp.com/catigories`)
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      })

  }, [])


  const handleChange = (newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    active ? dropDown.current.classList.add('mySelect__active') : dropDown.current.classList.remove('mySelect__active')
  }, [active]);
  useEffect(() => {
    isAbled ? subDrop.current.classList.add('mySelect__active') : subDrop.current.classList.remove('mySelect__active')
  }, [isAbled]);

  return (
    <div className="announce">
      <div className="container">
        <div className="announce__modal" >
          <div className="announce__modal-box">
            <h4 className="announce__modal-title">E'lon tekshirishga yuborildi</h4>
            <p className="announce__modal-text">Sizning e‘loningiz 10 daqiqa ichida saytga joylanadi.</p>
            <a className="announce__modal-btn" href="/">Bosh sahifa</a>
          </div>
        </div>
        <div className="announce__intro">
          <div className="announce__intro-link">
            <Link className="announce__intro-navlink" to="/">
              Bosh sahifa |
            </Link>
            <Link className="announce__intro-navlink" to="/add">
              E'lon berish
            </Link>
          </div>
          <h1 className="announce__intro-title">E'lon berish</h1>
          <p className="announce__intro-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, qui.
          </p>
        </div>

        <form action=""
          onSubmit={(e) => {
            e.preventDefault();
            
            let formdata=new FormData();
            formdata.append("file", file.current.files[0])
            formdata.append("user_name", name.current.value)
            formdata.append("user_fname", surname.current.value)
            formdata.append("user_job", job.current.value )
            formdata.append("user_phone",tel.current.value)
            formdata.append("post_thema", theme.current.value)
            formdata.append("post_comment",short.current.value )
            formdata.append("post_more",desc.current.value )
            formdata.append("type",line )
            formdata.append("start_data",time)
            formdata.append("catigories", categ)
            formdata.append("subcatigories", subcat)
            formdata.append("meeting_place",link.current.value )

            fetch('https://doubleressabaza.herokuapp.com/poster', {
              method:"POST", 
              body:formdata
            })
            .then(res=> res.json())
            .then(data=>console.log(data))
            
            //  console.log({
            //    time:time, 
            //    category:categ, 
            //    subcategory:subcat, 
            //    type:line,
            //    link: link.current.value,
            //    name:name.current.value, 
            //    surname:surname.current.value, 
            //    tel:tel.current.value, 
            //    job:job.current.value, 
            //    theme:theme.current.value, 
            //    short:short.current.value, 
            //    desc:desc.current.value,
            //    file:file.current.value

            //  })




          }}>
          <section className="announce__criteria announce__cards">
            <h3 className="announce__cards-title">Tadbir kriteriyasi</h3>
            <section className="announce__form" >
              <ul className="announce__form-menu">
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">O’tkaziladigan sanani kiriting</label>
                  {/* <input className="announce__form-input" type="datetime-local" /> */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>



           
                      <DateTimePicker className="announce__form-input"
                        value={value}
                        // label='Sana va vaqt'
                        onChange={handleChange}
                        renderInput={(params) => {
                            let date = new Date(params.inputProps.value)
                            let mnth = ("0" + (date.getMonth() + 1)).slice(-2)
                            let day = ("0" + date.getDate()).slice(-2);
                            let hours = ("0" + date.getHours()).slice(-2);
                            let minut = ("0" + date.getMinutes()).slice(-2);
                            let sekund = ("0" + date.getSeconds()).slice(-2);
                          
                            let sana = [date.getFullYear(), mnth, day].join("-");
                            let vaqat = [hours, minut].join(":");
                            console.log( sana +' '+vaqat);
                            let log = sana +' '+vaqat
                            setTime(log.toString())

                          // console.log(params.inputProps.value);
                          return <TextField {...params} />
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>
                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Yo’nalishni belgilang</label>
                  <div className="announce__form-input mySelect" name="route" onClick={() => {

                    setActive(!active);
                    setSubcat('');

                  }}><span className="announce__category">{categ ? categ : 'Yo’nalish'}</span><img className="announce__arrow" src={arrow} style={{ 'transform': `rotate(${active ? '180deg' : '0deg'})` }} alt="" />

                    <ul className="announce__dropdown-list" ref={dropDown} >
                      {category.map((e, i) => {
                        return <li key={i} className="announce__dropdown-item" onClick={() => {
                          setCateg(e.cat_name);
                          setChosen(i);
                          setsubCategory(category[i].subcat)

                          dropDown.current.classList.remove('mySelect__active');
                        }}>{e.cat_name}</li>
                      })}
                    </ul>

                  </div>

                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Ichki yo’nalishni belgilang</label>


                  <div className="announce__form-input mySubSelect" onClick={() => {

                    setisAbled(!isAbled);


                  }}><span className="announce__category">{subcat ? subcat : 'Ichki yo’nalish'}</span><img className="announce__arrow" src={arrow} style={{ 'transform': `rotate(${isAbled ? '180deg' : '0deg'})` }} alt="" />

                    <ul className="announce__dropdown-list" ref={subDrop} >
                      {subCategory.map((e, i) => {
                        return <li key={i} className="announce__dropdown-item" onClick={() => {
                          subDrop.current.classList.remove('mySelect__active');
                          setSubcat(e)

                        }}>{e}</li>
                      })}
                    </ul>
                  </div>
                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Tadbir turi</label>
                  <div className="announce__criteria-buttons">
                    <button type='button' className={`announce__criteria-btn ${line == 1 ? 'announce__criteria-btn--active' : ''}`} onClick={() => {
                      setLine(1);
                    }}>Online</button>
                    <button type="button" className={`announce__criteria-btn ${line == 2 ? 'announce__criteria-btn--active' : ''}`} onClick={() => {
                      setLine(2);
                    }}>Offline</button>
                  </div>
                </li>
                <li className="announce__form-box announce__form-box--middle">
                  <label className="announce__form-label" htmlFor="">Link kiriting</label>
                  <input className="announce__form-input" ref={link} type="text" placeholder="Link" />
                </li>
              </ul>
            </section>
          </section>
          <section className="announce__personal announce__cards">
            <h3 className="announce__cards-title">Shaxsiy ma’lumotlar:</h3>
            <section className="announce__form">
              <ul className="announce__form-menu">
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label"  htmlFor="">Ism</label>
                  <input className="announce__form-input" ref={name} type="text" placeholder="Ism" />
                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Familiya</label>
                  <input className="announce__form-input" ref={surname} type="text" placeholder="Familiya" />
                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Telefon raqamingiz(99893234..)</label>
                  <input className="announce__form-input" ref={tel} type="tel" placeholder="+998.." />
                </li>
                <li className="announce__form-box announce__form-box--small">
                  <label className="announce__form-label" htmlFor="">Kasb</label>
                  <input className="announce__form-input" ref={job} type="tel" placeholder="job.." />
                </li>
              </ul>
            </section>
          </section>
          <section className="announce__post announce__cards">
            <h3 className="announce__cards-title">Post</h3>
            <section action="" className="announce__form">
              <div className="announce__form-sides">
              <ul className="announce__form-menu">
                <li className="announce__form-box announce__form-box--big">
                  <label className="announce__form-label" htmlFor="">Mavzu nomini kiriting</label>
                  <input className="announce__form-input" type="text" ref={theme} placeholder="Mavzu" />
                </li>
                <li className="announce__form-box announce__form-box--big">
                  <label className="announce__form-label" htmlFor="">Qisqa izoh kiriting</label>
                  <input className="announce__form-input" ref={short} type="text" placeholder="Izoh" />
                </li>
                <li className="announce__form-box announce__form-box--big">
                  <label className="announce__form-label" htmlFor="">Batafsil ma'lumot</label>
                  <textarea className="announce__form-input announce__form-teaxtarea" ref={desc} type="text" placeholder="Batafsil ma'lumot" />
                </li>
                <li className="announce__form-box announce__form-box--big"></li> 
              </ul>
              <div className="picture">
                  <div className="picture__box">
                    <input className="pic" type="file" ref={file} />
                    <span className="picture__span">
                      <img className="picture__img" src={Download} alt="" />
                      Mavzu rasmini yuklang</span>
                  </div>
                      <div className="picture__bottom">
                        <p className="picture__text">620x480 px o’lchamdagi rasm yuklash tavsiya etiladi.</p>
                        <div className="picture__preview"></div>
                      </div>
                  </div> 
              </div>
              <div className="announce__post-buttons">
                <button className="announce__post-btn announce__post-btn--white" id="reject-btn">Bekor qilish</button>
                <button className="announce__post-btn announce__post-btn--blue" id="send-btn">Yuborish</button>
              </div>
           
            </section>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Announce;













