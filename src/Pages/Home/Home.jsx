import search from '../../Assets/svg/search.svg';
import './Home.scss';
import { useRef, useState, useEffect} from 'react';
import arrow from '../../Assets/Images/arrow.svg';










function Home(){
    const [state, setState] = useState('');
    const [drop, setDrop] = useState(false)
    const dropDown = useRef();
    useEffect(()=>{
        drop?dropDown.current.classList.add('active'):dropDown.current.classList.remove('active')
    }, [drop])
    
    return(
        <main className="main__wrapper">
            <div className="header__background"></div>
            <div className="container home__wrapper">
            <h1 className='home__title'>Biz bilan to’g’ri yo’lni tanlash osonroq</h1>
            <form className="form">
                <input type='date' name='date' className="form__date" data-date-inline-picker="true"/>
                <div  className="form__select" ><span onClick={()=>{
                    setDrop(!drop);
                    console.log(drop)
                }}>Sohani tanlang</span><img style={{'transform':`rotate(${drop?'180deg':'0deg'})`}} src={arrow} alt="" className="form__arrow" />
                    <div ref={dropDown} className="dropdown">
                        <ul className="dropdown__main">
                            <li className="dropdown__main-item">IT</li>
                            <li className="dropdown__main-item">Ta’lim</li>
                            <li className="dropdown__main-item">Biznes</li>
                            <li className="dropdown__main-item">Marketing</li>
                            <li className="dropdown__main-item">Iqtisodiyot</li>
                            <li className="dropdown__main-item">Dizayn</li>
                            <li className="dropdown__main-item">Sog’liqni saqlash</li>
                            <li className="dropdown__main-item">Qurilish</li>
                        </ul>
                        <ul className="dropdown__submenu">
                            <li className="dropdown__submenu-item">Backend</li>
                            <li className="dropdown__submenu-item">Frontend</li>
                            <li className="dropdown__submenu-item">Ux/ui Dizayn</li>
                            <li className="dropdown__submenu-item">Grafik dizayn</li>
                            <li className="dropdown__submenu-item">Mobile development</li>
                            <li className="dropdown__submenu-item">Python</li>
                            <li className="dropdown__submenu-item">Kopirayter</li>
                        </ul>
                    </div>
                </div>
                <label className='form__label' htmlFor="online" style={{'color':state=='online'?'#3585FF':'#3C4866'}} onClick={(e)=>{
                    setState('online')
                }}><input name='method' type="radio" id='online' onClick={(e)=>{
                    setState(e.target.id)
                }}/>Online</label>
                <label className='form__label' htmlFor="offline" style={{'color':state=='offline'?'#3585FF':'#3C4866'}} onClick={(e)=>{
                    setState('offline')
                }}><input name='method' type="radio" id='offline' onClick={(e)=>{
                    setState(e.target.id)
                }}/>Offline</label>
                <div className="search__wrapper">
                    <button className="search__icon">
                        <img src={search} alt="#" />
                    </button>
                    <input type="text" className='search__field' placeholder='Ism kiritish'/>
                </div>
                <button className='form__submit' type='submit'>Natijani ko'rsatish</button>
            </form>
            </div>


        </main>
    )
}



export default Home;