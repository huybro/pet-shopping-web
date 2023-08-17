import './App.css';
import React from 'react';
import Header from "./Header"
import Main from "./Main/Main"
import Footer from "./Footer"
import Card from './Card';
import AboutPage from './AboutPage';
import PetCloth from './PetCloth';
import PetBed from './PetBed';
import Contact from './Contact';

import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter basename='/'>
      <Header />  
        <Routes>
          <Route path="/" element={<Main/>} exact/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path="/card" element={<Card/>} exact/>
          <Route path="/cloth" element={<PetCloth/>} exact/>
          <Route path='/bed' element={<PetBed/>} exact />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
