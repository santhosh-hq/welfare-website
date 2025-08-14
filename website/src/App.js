import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Schemes from './components/Schemes';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Schemes />
            <ImageCarousel />
            <Contact />
            <Footer />
          </>
        } />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
