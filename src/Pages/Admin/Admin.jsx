import React from 'react';
import './Admin.scss'

function Admin() {
    return (<div className="admin">
    <div className="container">
    <div className="admin__wrapper">
    <div className="left__column">
    <ul  className='left__column-menu'>
    <li className='left__column-circle'></li>
    <li className='left__column-circle'></li>
    <li className='left__column-circle'></li>
    <li className='left__column-circle'></li>
    </ul>
    </div>
    <div className="column">
    <ul className="column__buttons">
    <li className="column__buttons-item">
    <button className='column__btn'>Kutilmoqda</button>
    </li>
    <li className="column__buttons-item">
    <button className='column__btn'>Qabul qilingan</button>
    </li>
    <li className="column__buttons-item">
    <button className='column__btn'>Rad etilgan</button>
    </li>
    </ul>
    <ul className='column__menu'>
    <li className='column__card'>
    <div className="column__card-left">
    <h2 className='column__card-title'>Ochiq logo marafon taqdimotiga marhamat</h2>
    <span className='column__card-author column__card-span'>Alisher Sadullayev</span>
    <span className='column__card-date column__card-span'>28 Yanvar  |  20:00</span>
    <span className='column__card-phone column__card-span'>+998 90 325 36 32</span>
    </div>
    <div className="column__card-right">
    <button className='column__card-btn column__card-btn--blue'>Tasdiqlash</button>
    <button className='column__card-btn column__card-btn--white'>Bekor qilish</button>
    </div>
    </li>
    </ul>
    </div>
    </div>
    
    </div>
    </div>)
}

export default Admin;
