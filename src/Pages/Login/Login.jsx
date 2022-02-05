import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { Navigate } from 'react-router';

function Login() {
  const userName = useRef();
  const password = useRef();
  const [send, setSend] = useState(false);
  return (
    <div className='login'>
      <div className="container">
        <div className="login__wrapper">
          <form action="" className='login__form' method='post' onSubmit={(e) => {
            e.preventDefault();
            fetch('https://doubleressabaza.herokuapp.com/auth/login', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: userName.current.value,
                password: password.current.value
              })
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.token) {
                  window.localStorage.setItem('token', data.token);
                 window.location.href = 'https://pressakhzra.netlify.app/login'

                }
              })
          }}>
            <h1 className='login__title'>LOGIN</h1>
            <label className='login__label' htmlFor="">Username kiriting</label>
            <input className='login__input' ref={userName} type="text" placeholder='Username kiriting' />
            <label className='login__label' htmlFor="">Password kiriting</label>
            <input className='login__input' ref={password} type="password" placeholder='Password kiriting' />
            <button className='login__btn'>Tekshirish</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
