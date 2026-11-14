import { useState } from 'react';

import './App.css'
import LandingPage from './pages/LandingPage'
import CreateShopPage from './pages/CreateShopPage';
import { Routes, Route, Link } from 'react-router-dom';
import WaitingList from './pages/WaitingList';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/create-shop' element={<CreateShopPage/>}/>
      <Route path='/waiting-list' element={<WaitingList/>}/>
      {/* Catch-all route for 404 errors */}
      {/* <Route path='*' element={<NotfoundPage/>}/> */}
    </Routes>
    </>
  )
}

export default App;
