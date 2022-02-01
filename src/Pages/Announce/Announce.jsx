import React from "react";
import "./Announce.scss";
import { Link } from "react-router-dom";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Announce() {
  return (
    <div className="announce">
      <div className="container">
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
                <input className="announce__form-input" type="datetime-local" />
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
                  <option value="" disabled selected>
                    Ichki yo'nalish
                  </option>
                </select>
              </li>
              <li className="announce__form-box announce__form-box--small">
                <label className="announce__form-label" htmlFor="">Tadbir turi</label>
                <div className="announce__criteria-buttons">
                  <button>Online</button>
                  <button>Offline</button>
                </div>
              </li>
              <li className="announce__form-box announce__form-box--middle">
                <label className="announce__form-label" htmlFor="">Link kiriting</label>
                <input className="announce__form-input" type="text" placeholder="Link" />
              </li>
              {/* <li>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DateTimePicker
    renderInput={(props) => <TextField {...props} />}
    label="DateTimePicker"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider>
            </li> */}
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
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;
