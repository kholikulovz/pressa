import React, { useRef, useState } from "react";
import "./Announce.scss";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Download from '../../Assets/Images/download.svg'

function Announce() {
  //states
  const [type, setType] = useState('');
  const [categ, setCateg] = useState('');
  const [subcat, setSubcat] = useState('');
  const [job, setJob] = useState();
  const [line, setLine] = useState(2); // otvorayabti
  
  //refs
  const time = useRef();
  const name = useRef();
  const surname = useRef();
  const link = useRef();
  const tel = useRef();
  const theme = useRef();
  const short = useRef();
  const desc = useRef();

  const [value, setValue] = useState(new Date('2022-01-01T00:00:00'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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

        <div className="announce__criteria announce__cards">
          <h3 className="announce__cards-title">Tadbir kriteriyasi</h3>
          <form action="" className="announce__form">
            <ul className="announce__form-menu">
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">O’tkaziladigan sanani kiriting</label>
                {/* <input className="announce__form-input" type="datetime-local" /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker className="announce__form-input"
          // label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Yo’nalishni belgilang</label>
                <select className="announce__form-input" name="route" id="">
                  <option value="" disabled selected>
                    Yo’nalish
                  </option>
                </select>
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Ichki yo’nalishni belgilang</label>
                <select className="announce__form-input" name="inner-route" id="">
                  <option value=""disabled selected>
                    Ichki yo'nalish
                  </option>
                </select>
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Tadbir turi</label>
                <div className="announce__criteria-buttons">
                  <button className={`announce__criteria-btn ${line==1?'announce__criteria-btn--active':''}`} onClick={()=>{
                                setLine(1)
                            }}>Online</button>
                  <button className={`announce__criteria-btn ${line==2?'announce__criteria-btn--active':''}`} onClick={()=>{
                                setLine(2)
                            }}>Offline</button>
                </div>
              </li>
              <li className="announce__form-box announce__form-box--middle">
                <label className="announce__form-label" htmlFor="">Link kiriting</label>
                <input className="announce__form-input" type="text" placeholder="Link" />
              </li>
            </ul>
          </form>
        </div>
        <div className="announce__personal announce__cards">
          <h3 className="announce__cards-title">Shaxsiy ma’lumotlar:</h3>
          <form action="" className="announce__form">
            <ul className="announce__form-menu">
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Ism</label>
                <input className="announce__form-input" type="text" placeholder="Ism" />
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Familiya</label>
                <input className="announce__form-input" type="text" placeholder="Familiya" />
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Telefon raqamingiz</label>
                <input className="announce__form-input" type="tel" placeholder="+998" />
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Kasb</label>
                <select className="announce__form-input" name="inner-route" id="">
                  <option value="" disabled selected>
                    Kasbingiz
                  </option>
                </select>
              </li>
            </ul>
          </form>
        </div>
        <div className="announce__post announce__cards">
          <h3 className="announce__cards-title">Post</h3>
          <form action="" className="announce__form announce__form-sides">
            <div className="announce__form--left">
            <ul className="announce__form-menu">
              <li className="announce__form-box announce__form-box--big">
                <label className="announce__form-label" htmlFor="">Mavzu nomini kiriting</label>
                <input className="announce__form-input" type="text" placeholder="Mavzu" />
              </li>
              <li className="announce__form-box announce__form-box--big">
                <label className="announce__form-label" htmlFor="">Qisqa izoh kiriting</label>
                <input className="announce__form-input" type="text" placeholder="Izoh" />
              </li>
              <li className="announce__form-box announce__form-box--big">
                <label className="announce__form-label" htmlFor="">Batafsil ma'lumot</label>
                <textarea className="announce__form-input announce__form-teaxtarea" type="text" placeholder="Batafsil ma'lumot" />
              </li>
            </ul>
            <div className="announce__post-buttons">
              <button className="announce__post-btn announce__post-btn--white" id="reject-btn">Bekor qilish</button>
              <button className="announce__post-btn announce__post-btn--blue" id="send-btn">Yuborish</button>
            </div>
            </div>
            <div className="picture">
            <div className="picture__box">
        <input type="file" id="fileupload"  className="pic"/>
          <span className="picture__span">
            <img className="picture__img" src={Download} alt="" />
            Mavzu rasmini yuklang</span>
            </div>
            <div className="picture__bottom">
            <p className="picture__text">620x480 px o’lchamdagi rasm yuklash tavsiya etiladi.</p>
            <div className="picture__preview" id="dvPreview"></div>
            </div>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;
