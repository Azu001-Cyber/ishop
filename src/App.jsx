import { useState } from 'react';

import './App.css'
import TopBar from './components/layout/TopBar';
import LandingPage from './pages/Home/LandingPage'
import CreateShopPage from './pages/CreateShop/CreateShopPage';
import { Routes, Route} from 'react-router-dom';
import NotfoundPage from './pages/NotFound/NotFoundPage';
// import WaitingList from './pages/Waitlist/WaitingList';
// import ComingSoon from './pages/Comingsoon/ComingSoon';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<TopBar/>}>

      <Route index element={<LandingPage/>}/>
  

      </Route>

      <Route path='/create-shop'>
        <Route index element={<CreateShopPage/>}/>

      </Route>

      {/* Catch-all route for 404 errors */}
      <Route path='*' element={<NotfoundPage/>}/>

      {/* Other Unused route */}
      {/* <Route path='/coming-soon' element={<ComingSoon/>}/> */}
      {/* <Route path='/waiting-list' element={<WaitingList/>}/> */}
    </Routes>
    </>
  )
}

export default App;
