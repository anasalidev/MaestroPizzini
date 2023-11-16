import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Secbg from './components/SecBg/Secbg';
import Shopinfo from './components/Shopinfo/Shopinfo';
import Delivery from './components/Delivery/Delivery';
import Category from './components/Category/Category';
import Lastitem from './components/LastItem/Lastitem';
function All() {
  return (
    <>
<div className="contanier">

      <Header />
      <About />
      <Secbg />
      <Menu />
      <Shopinfo />
      <Delivery />
      <Category />
      <Lastitem />
</div>

    </>
  );
}

export default All;
