import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiscountAlert from './components/DiscountAlert';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';
import ProductDetail from './pages/Home/ProductDetail';
import ViewCart from './pages/Cart/ViewCart';
import CheckoutCart from './pages/Cart/CheckoutCart';
import './App.css';
import BlogDetail from './pages/Home/Blogs';

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
          <Route path="/My-lettolino" element={<Navigate to="/My-lettolino/home" />} />
          <Route path="/My-lettolino/" element={<Navigate to="/My-lettolino/home" />} />
          <Route path="/My-lettolino/home" element={<HomePage />} />
          <Route path="/My-lettolino/product/:slug" element={<ProductDetail />} />
          <Route path="/My-lettolino/blog-detail" element={<BlogDetail />} />
          <Route path="/My-lettolino/shop" element={<ShopPage />} />
          <Route path="/My-lettolino/about" element={<AboutPage />} />
          <Route path="/My-lettolino/contact" element={<ContactPage />} />
          <Route path="/My-lettolino/cart" element={<ViewCart />} />
          <Route path="/My-lettolino/checkout" element={<CheckoutCart />} />
          <Route path="*" element={<Navigate to="/My-lettolino/home" />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;