import { useState } from 'react';

import './App.css'
import LandingPage from './pages/Home/LandingPage'
import CreateShopPage from './pages/CreateShopPage';
import { Routes, Route} from 'react-router-dom';
import WaitingList from './pages/Waitlist/WaitingList';
import ComingSoon from './pages/Comingsoon/ComingSoon';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/create-shop' element={<CreateShopPage/>}/>
      <Route path='/waiting-list' element={<WaitingList/>}/>
      <Route path='/coming-soon' element={<ComingSoon/>}/>
      {/* Catch-all route for 404 errors */}
      {/* <Route path='*' element={<NotfoundPage/>}/> */}
    </Routes>
    </>
  )
}

export default App;
