import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
