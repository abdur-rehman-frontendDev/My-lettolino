import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DiscountAlert from './components/DiscountAlert';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <main className="page">
        <div className="top-blocks--sticky top-blocks">
          {/* <DiscountAlert /> */}
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;