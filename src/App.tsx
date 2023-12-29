import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carta from './Cart';
import Product from './products/[ProductId]';
import { createContext, useState } from 'react';
import CartContext from './context/Context';
import ContextWrapper from './context/Context';
import Login from './user/Login';
import Signup from './user/Signup';


function App() {

  return (
    <ContextWrapper>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Carta />} />
            <Route path='/products/:ProductId' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </ContextWrapper>
  );
}

export default App;
