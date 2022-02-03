import React from 'react';
import { Router, useParams } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Announce from './Pages/Announce/Announce';
import Footer from './Components/Footer/Footer';
// ------------------------
import { Route, Routes } from 'react-router-dom';
import Single from './Pages/Single/Single';
import About from './Pages/About/About';
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Login/Login';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/single' element={<Single/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/announce' element={<Announce/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
     <Footer />
   </>
  );
}

export default App;
