import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DiscountAlert from './components/DiscountAlert';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  HomePage,
  ShopPage,
  AboutPage,
  ContactPage,
  ProductDetail,
  ViewCart,
  CheckoutCart,
  BlogDetail
} from './pages'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <main className="page">
        <div className="top-blocks--sticky top-blocks">
          {/* <DiscountAlert /> */}
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/lettolino" element={<Navigate to="/lettolino/home" />} />
          <Route path="/lettolino/" element={<Navigate to="/lettolino/home" />} />
          <Route path="/lettolino/home" element={<HomePage />} />
          <Route path="/lettolino/product/:slug" element={<ProductDetail />} />
          <Route path="/lettolino/blog-detail" element={<BlogDetail />} />
          <Route path="/lettolino/shop" element={<ShopPage />} />
          <Route path="/lettolino/about" element={<AboutPage />} />
          <Route path="/lettolino/contact" element={<ContactPage />} />
          <Route path="/lettolino/cart" element={<ViewCart />} />
          <Route path="/lettolino/checkout" element={<CheckoutCart />} />
          <Route path="*" element={<Navigate to="/lettolino/home" />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;