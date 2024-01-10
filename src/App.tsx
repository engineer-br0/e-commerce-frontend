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
import { ContextItems, SellerContext, sellerInterface } from './context/SellerContext';
import AddProduct from './seller/AddProduct';
import EditSellerProfile from './seller/EditSellerProfile';
import Seller404 from './seller/Seller404';
import User404 from './user/User404';


function App() {
  const { isLogin } = ContextInit();
  const { sellerLogin } = useContext(SellerContext) as ContextItems;
  console.log(sellerLogin);

  return (
    <div className="App " >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<Home />} />
          <Route path='/cart' element={isLogin ? <Carta /> : <User404 />} />
          <Route path='/products/:ProductId' element={isLogin ? <Product /> : <User404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={isLogin ? <Profile /> : <User404 />} />
          <Route path='/checkout' element={isLogin ? <Checkout /> : <User404 />} />
          <Route path='/profile/edit' element={isLogin ? <ProfileEdit /> : <User404 />} />
          <Route path='/profile/orders' element={isLogin ? <Orders /> : <User404 />} />
          <Route path='payment/:shippingDetails' element={isLogin ? <Payment /> : <User404 />} />
          {/* Seller */}
          <Route path='/seller/login' element={<SellerLogin />} />
          <Route path='/seller/signup' element={<SellerSignup />} />
          <Route path='/seller/profile' element={sellerLogin ? <SellerProfile /> : <Seller404 />} />
          <Route path='/seller/addProduct' element={sellerLogin ? <AddProduct /> : <Seller404 />} />
          <Route path='/seller/editSellerProfile' element={sellerLogin ? <EditSellerProfile /> : <Seller404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
