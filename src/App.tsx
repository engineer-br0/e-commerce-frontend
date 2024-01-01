import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carta from './Cart';
import Product from './products/[ProductId]';
import { createContext, useState } from 'react';
import CartContext, { ContextInit } from './context/Context';
import ContextWrapper from './context/Context';
import Login from './user/Login';
import Signup from './user/Signup';
import Profile from './user/Profle';


function App() {
  const { isLogin } = ContextInit();

  return (
    <div className="App " >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={isLogin ? <Carta /> : <Login />} />
          <Route path='/products/:ProductId' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={isLogin ? <Signup /> : <Home />} />
          <Route path='/profile' element={isLogin ? <Profile /> : <Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
