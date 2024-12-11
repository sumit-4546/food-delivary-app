import React, { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/verify/Verify1';
// import MyOrders from './pages/myOrders/MyOrder1s';
import MyOrders1 from './pages/myOrders/MyOrders1';



const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders1/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
