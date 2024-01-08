import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carta from './cart/Cart';
import Product from './products/[ProductId]';
import { createContext, useContext, useState } from 'react';
import CartContext, { ContextInit } from './context/Context';
import ContextWrapper from './context/Context';
import Login from './user/Login';
import Signup from './user/Signup';
import Profile from './user/Profle';
import Checkout from './cart/Checkout';
import ProfileEdit from './user/ProfileEdit';
import Payment from './cart/Payment';
import Orders from './user/Orders';
import SellerLogin from './seller/SellerLogin';
import SellerSignup from './seller/SellerSignup';
import SellerProfile from './seller/SellerProfile';
import { SellerContext } from './context/SellerContext';
import AddProduct from './seller/AddProduct';
import EditSellerProfile from './seller/EditSellerProfile';


function App() {
  const { isLogin } = ContextInit();
  const sellerContext = useContext(SellerContext);


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
          <Route path='/profile/orders' element={isLogin ? <Orders /> : <Login />} />
          <Route path='payment/:shippingDetails' element={isLogin ? <Payment /> : <Login />} />
          {/* Seller */}
          <Route path='/seller/login' element={<SellerLogin />} />
          <Route path='/seller/signup' element={<SellerSignup />} />
          <Route path='/seller/profile' element={<SellerProfile />} />
          <Route path='/seller/addProduct' element={<AddProduct />} />
          <Route path='/seller/editSellerProfile' element={<EditSellerProfile />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
