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
          <Route path="/lettolino" element={<Navigate to="/lettolino/home" />} />
          <Route path="/lettolino/" element={<Navigate to="/lettolino/home" />} />
          <Route path="/lettolino/home" element={<HomePage />} />
          <Route path="/lettolino/shop" element={<ShopPage />} />
          <Route path="/lettolino/about" element={<AboutPage />} />
          <Route path="/lettolino/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/lettolino/home" />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;