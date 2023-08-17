import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main/Main';
import Footer from './Footer';
import Card from './Card';
import AboutPage from './AboutPage';
import PetCloth from './PetCloth';
import PetBed from './PetBed';
import Contact from './Contact';
import Cart from './Cart';
import {db} from "./service/firebaseConfig";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [CartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.code === product.code);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.code === product.code ? { ...productExit, qty: productExit.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.code === product.code);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.code !== product.code));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.code === product.code ? { ...productExit, qty: productExit.qty - 1 } : item
        )
      );
    }
  };

  return (
    <BrowserRouter basename='/'>
      <Header />  
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/card" element={<Card addToCart={addToCart} decreaseQty={decreaseQty} />} exact />
        <Route path="/cloth" element={<PetCloth />} exact />
        <Route path='/bed' element={<PetBed />} exact />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart CartItem={CartItem} setCartItem={setCartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
