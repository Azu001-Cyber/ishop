import { useState } from 'react';

import './App.css'
import LandingPage from './pages/LandingPage'
import CreateShopPage from './pages/CreateShopPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/create-shop' element={<CreateShopPage/>}/>
      {/* Catch-all route for 404 errors */}
      {/* <Route path='*' element={<NotfoundPage/>}/> */}
    </Routes>
    </>
  )
}

export default App;
