import React from 'react';
import { Router, useParams } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Announce from './Pages/Home/Announce/Announce';
// ------------------------
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/announce' element={<Announce/>}></Route>
    </Routes>
   </>
  );
}

export default App;
