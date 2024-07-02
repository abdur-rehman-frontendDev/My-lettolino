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
          <Route path="/My-lettolino" element={<Navigate to="/My-lettolino/home" />} />
          <Route path="/My-lettolino/" element={<Navigate to="/My-lettolino/home" />} />
          <Route path="/My-lettolino/home" element={<HomePage />} />
          <Route path="/My-lettolino/shop" element={<ShopPage />} />
          <Route path="/My-lettolino/about" element={<AboutPage />} />
          <Route path="/My-lettolino/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/My-lettolino/home" />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;