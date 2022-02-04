import React, { useRef, useState } from "react";
import "./Announce.scss";
import { Link } from "react-router-dom";
// import { DatePicker } from "rsuite";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


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
// const [state, setState] = useState({
//     profileImg:
//       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//   })
//   state = {
//     profileImg:
//       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//   };
//  const imageHandler = e => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         this.setState({ profileImg: reader.result });
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };
//   const { profileImg } = this.state;

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
                {/* <label className="announce__form-label" htmlFor="">O’tkaziladigan sanani kiriting</label> */}
                {/* <input className="announce__form-input" type="datetime-local" /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
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
          <form action="" className="announce__form">
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
<input type="file" />
{/* <div className="page">
        <div className="my-container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </div>
      </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;
