import React from 'react';
import './Login.scss'

function Login() {
  return (
  <div className='login'>
<div className="container">
    <div className="login__wrapper">
        <form action="" className='login__form' method='post'>
        <h1 className='login__title'>LOGIN</h1>
            <label className='login__label' htmlFor="">Username kiriting</label>
<input className='login__input' type="text" placeholder='Username kiriting'/>
<label className='login__label' htmlFor="">Password kiriting</label>
<input className='login__input' type="password" placeholder='Password kiriting'/>
<button className='login__btn'>Tekshirish</button>
        </form>
    </div>
</div>
  </div>
  )
}

export default Login;
