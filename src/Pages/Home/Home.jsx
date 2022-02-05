import search from '../../Assets/svg/search.svg';
import './Home.scss';
import { useRef, useState, useEffect } from 'react';
import arrow from '../../Assets/Images/arrow.svg';
import Cards from '../../Components/Crads/Cards';
import auditory from '../../Assets/Images/auditory.png'
import faster from '../../Assets/Images/faster.png'
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';



function Home() {
    //states
    const [state, setState] = useState('');
    const [drop, setDrop] = useState(false);
    const [data, setData] = useState([]);
    const [sixArray, setsixArray] = useState();
    const [categorylist, setCatecorylist] = useState(false);
    const [currentCategory, setcurrentCategory] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [type, setType] = useState(false);
    const [subcat, setSubcat]=useState(false);
    const [send, setSend] = useState(false);

    const [value, setValue] = useState(new Date('2022-01-01T00:00:00'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    //states/ 
    const searchVal = useRef();
    const time = useRef();
    //refs
    const dropDown = useRef();
    const submit = useRef();
    
    let initial = 0;

    // dropdown
    useEffect(() => {
        drop ? dropDown.current.classList.add('active') : dropDown.current.classList.remove('active')
    }, [drop]);
    // fetch
    useEffect(() => {
        fetch(`https://doubleressabaza.herokuapp.com/cards/?type=${type?type:3}&data=${time.current.value}&search=${searchVal.current.value}&catigor=${subcat?subcat:''}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [send])
    // 6 element array
    useEffect(() => {
        setsixArray(data.map((e, i) => {
            return initial <= i && i <= initial + 5 ? e : null
        }).filter(e => e))
        data.length != 0 ? initial = initial + 6 : initial = initial;
        initial > data.length ? initial = 0 : initial = initial
    }, [data]);
    // categrori

    useEffect(() => {
        fetch(`https://doubleressabaza.herokuapp.com/cards/`)
            .then(res => res.json())
            .then(data => {
                setCatecorylist(data);
            })
          
    })
    

   
    return (
        <main className="main__wrapper">
            <div className="header__background"></div>
            <div className="container">
                <div className="home__wrapper">
                    <h1 className='home__title'>Biz bilan to’g’ri yo’lni tanlash osonroq</h1>
                    <form className="form" onSubmit={(e)=>{
                        setSend(!send)
                        e.preventDefault();
                        console.log({
                            type:type?type:1, 
                            search: searchVal.current.value, 
                            subcat:subcat?subcat:'', 
                            time:time.current.value
                        })
                    }}>
                        {/* <input type='date' name='date' ref={time} className="form__date" data-date-inline-picker="true" /> */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker className="form__date" ref={time}
          // label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
                        <div className="form__select" ><span className='form__select-spes' onClick={() => {
                            setDrop(!drop);
                        }}>{subcat?subcat:'Sohani tanlang'} </span><img style={{ 'transform': `rotate(${drop ? '180deg' : '0deg'})` }} src={arrow} alt="" className="form__arrow" />
                            <div ref={dropDown} className="dropdown">
                                <ul className="dropdown__main"  >
                                    {categorylist && categorylist.map((elem, i) => {
                                        return <li key={i} id={elem.cat_id} className="dropdown__main-item" onClick={() => {
                                            if (dropDown.current.classList.contains('lengthen') && currentId == elem.cat_id) {
                                                dropDown.current.classList.remove('lengthen');
                                            }
                                            else { dropDown.current.classList.add('lengthen'); }
                                            let found = categorylist.find(e => e.cat_id == elem.cat_id)
                                            setCurrentId(elem.cat_id)
                                            setcurrentCategory(found)
                                             
                                        }}>{elem.cat_name}</li>
                                    })}

                                </ul>
                                <ul className="dropdown__submenu">
                                    {currentCategory && currentCategory.subcat.map((e, i) => {
                                        return <li key={i} className="dropdown__submenu-item" data-id='backend' onClick={()=>{
                                            setSubcat(e);
                                            dropDown.current.classList.remove('lengthen')
                                        }}>{e}</li>
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='form__linebox'>
                        <label className='form__label' htmlFor="online" style={{ 'color': state == 'online' ? '#3585FF' : '#3C4866' }} onClick={() => {
                            setState('online')
                            setType(1);
                        }}><input name='method' type="radio" id='online'/>Online</label>
                        <label className='form__label' htmlFor="offline" style={{ 'color': state == 'offline' ? '#3585FF' : '#3C4866' }} onClick={() => {
                            setState('offline');
                            setType(2)
                        }}><input name='method' type="radio" id='offline'/>Offline</label>
                        </div>
                        <div className="search__container">
                            <div className="search__wrapper">
                                <button className="search__icon">
                                    <img src={search} alt="#" />
                                </button>
                                <input ref={searchVal} type="text" className='search__field' placeholder='Ism kiritish' />
                            </div>
                            <button className='form__submit' ref={submit} type='submit'>Natijani ko'rsatish</button>
                        </div>
                    </form>
                </div>
                <ul className="card__list" style={{'gridTemplateRows':data.length<=2?'99%':data.length<4?"49% 49%":'32% 32% 32%'}}>

                    {data && data.map((e, i) => {
                        return (
                             <NavLink key={i} to={`/single/${e.post_id}`}>
                                 <Cards
                                
                                postImg={e.post_img}
                                postName={e.post_thema}
                                postAuthor={`${e.user_name} ${e.user_fname}`}
                                type={e.type}
                                date={e.start_data}
                                userJob={e.user_job}
                                id={e.post_id}
                            />

                             </NavLink>
                        )
                    })
                    }
                </ul>
                <button className="card__new">Yana ko'rsatish</button>
                <div className="home__img">
                    <NavLink to='/announce'><img width={625} height={378} src={auditory} alt="" className="home__img-item" /></NavLink>
                    <NavLink to='/announce'><img width={625} height={378} src={faster} alt="" className="home__img-item" /></NavLink>

                </div>
            </div>

        </main>

    )
}





export default Home;