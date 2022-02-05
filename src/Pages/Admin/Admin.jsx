import React, { useEffect, useState } from 'react';
import './Admin.scss';

function Admin() {
    const [data, setData] = useState();
    const token = window.localStorage.getItem('token') || '';
    const [currentPage, setCurrentPage] = useState(1);
    const [refresh, setRefresh] = useState(false);
    



    useEffect(()=>{
        fetch('https://doubleressabaza.herokuapp.com/cards/admin/check', {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "token": token,
                "is_accept":currentPage
            } 
        })
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    }, [currentPage, refresh])


    // useEffect(()=>{
        
    // }, [refresh])
//column__btn--active

    return (<div className="admin">
        <div className="container">
            <div className="admin__wrapper">
                <div className="left__column">
                    <ul className='left__column-menu'>
                        <li className='left__column-circle'></li>
                        <li className='left__column-circle'></li>
                        <li className='left__column-circle'></li>
                        <li className='left__column-circle'></li>
                    </ul>
                </div>
                <div className="column">
                    <ul className="column__buttons">
                        <li className="column__buttons-item">
                            <button className={`column__btn  ${currentPage==1?'column__btn--active':''}`} onClick={()=>{
                                
                                setCurrentPage(1)
                            }}>Kutilmoqda</button>
                        </li>
                        <li className="column__buttons-item">
                            <button className={`column__btn  ${currentPage==2?'column__btn--active':''}`}  onClick={()=>{
                                setCurrentPage(2)
                            }}>Qabul qilingan</button>
                        </li>
                        <li className="column__buttons-item">
                            <button className={`column__btn  ${currentPage==3?'column__btn--active':''}`}  onClick={()=>{
                                setCurrentPage(3)
                            }}>Rad etilgan</button>
                        </li>
                    </ul>
                    <ul className='column__menu'>
                       {data&&data.map((e, i)=>{
                              

                              return  <li key={i} className='column__card'>
                            <div className="column__card-left">
                                <h2 className='column__card-title'>{e.post_thema}</h2>
                                <span className='column__card-author column__card-span'>{`${e.user_name} ${e.user_fname}`}</span>
                                <span className='column__card-date column__card-span'>{e.start_data}</span>
                                <span className='column__card-phone column__card-span'>{e.user_phone}</span>
                            </div>
                            <div className="column__card-right">
                                <button className='column__card-btn column__card-btn--blue' id={e.post_id} onClick={()=>{
                                    fetch(`https://pressabackend.herokuapp.com/poster`, {
                                        method:"PUT", 
                                        headers:{
                                            "Content-Type":"application/json",
                                            "token":token
                                        },
                                        body:JSON.stringify({
                                            post_id:e.post_id
                                        })
                                    }).then(e=>{
                                         setRefresh(!refresh);
                                    })                                   


                                    // let index = data.findIndex(elem=>elem.post_id==e.post_id);
                                    // console.log(index);
                                    // data.splice(index, 1);
                                    // setData(data);
                                    // console.log(data);
                                }}>Tasdiqlash</button>
                                <button className='column__card-btn column__card-btn--white' onClick={()=>{
                                    fetch(`https://doubleressabaza.herokuapp.com/poster`, {
                                        method:"DELETE", 
                                        headers:{
                                            "Content-Type":"application/json",
                                            "token":token
                                        },
                                        body:JSON.stringify({
                                            post_id:e.post_id
                                        })
                                    }).then(e=>{
                                        setRefresh(!refresh);

                                    })

                    
                                }}>Bekor qilish</button>
                            </div>
                        </li>
                       })}
                    </ul>
                </div>
            </div>

        </div>
    </div>)
}

export default Admin;
