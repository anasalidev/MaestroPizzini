import React from 'react';
import './App.css';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
// import Secbg from './components/SecBg/Secbg';
// import Shopinfo from './components/Shopinfo/Shopinfo';
import Delivery from './components/Delivery/Delivery';
import Category from './components/Category/Category';
import Lastitem from './components/LastItem/Lastitem';
import { Routes, Route } from 'react-router-dom';
import All from './All';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<All />} />
        <Route exact path='*' element={<All />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<Menu />} />
        <Route path='/menu' element={<Category />} />
        <Route path='/contact' element={<Delivery />} />
        <Route path='/help' element={<Lastitem />} />
      </Routes>

    </>
  );
}

export default App;
