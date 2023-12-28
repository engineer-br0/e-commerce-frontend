import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carta from './Cart';
import Product from './products/[ProductId]';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Product />} />
          <Route path='/products/:ProductId' element={<Product />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
