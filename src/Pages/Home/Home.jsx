import search from '../../Assets/svg/search.svg';
import './Home.scss';
import { useRef, useState } from 'react';










function Home(){
    const [state, setState] = useState('')
 
    
    return(
        <main className="main__wrapper">
            <div className="header__background"></div>
            <div className="container home__wrapper">
            <h1 className='home__title'>Biz bilan to’g’ri yo’lni tanlash osonroq</h1>
            <form className="form">
                <input type='date' name='date' className="form__date" data-date-inline-picker="true"/>
                <select name="profession" id="">
                    <option value="" disabled selected>Sohani tanlang</option>
                </select>
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
                <div className="search-wrapper">
                    <button className="search__icon">
                        <img src={search} alt="#" />
                    </button>
                    <input type="text" className='search__filed'/>
                </div>
                <button type='submit'>Natijani ko'rsatish</button>
            </form>
            </div>


        </main>
    )
}



export default Home;