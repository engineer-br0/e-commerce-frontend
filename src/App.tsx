import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carta from './cart/Cart';
import Product from './products/[ProductId]';
import { createContext, useState } from 'react';
import CartContext, { ContextInit } from './context/Context';
import ContextWrapper from './context/Context';
import Login from './user/Login';
import Signup from './user/Signup';
import Profile from './user/Profle';
import Checkout from './cart/Checkout';
import ProfileEdit from './user/ProfileEdit';
import Payment from './cart/Payment';


function App() {
  const { isLogin } = ContextInit();


  return (
    <div className="App " >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<Home />} />
          <Route path='/cart' element={isLogin ? <Carta /> : <Login />} />
          <Route path='/products/:ProductId' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={isLogin ? <Home /> : <Signup />} />
          <Route path='/profile' element={isLogin ? <Profile /> : <Login />} />
          <Route path='/checkout' element={isLogin ? <Checkout /> : <Login />} />
          <Route path='/profile/edit' element={isLogin ? <ProfileEdit /> : <Login />} />
          <Route path='payment/:shippingDetails' element={isLogin ? <Payment /> : <Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
