import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LettoLinoGray from '../assets/LettoLino-Gray.png';
import LettoLinoGolden from '../assets/LettoLino-Golden.png';

const Navbar = () => {
    const navigate = useNavigate();

    const cartItems = [
        {
            id: 1,
            name: "Maude Flutter Sleeve",
            price: "$144.00",
            image: "https://cdn.shopify.com/s/files/1/2721/4382/products/product_image110_small.jpg?v=1517830375",
            link: "/products/maude-flutter-sleeve?variant=10064236478506"
        },
        {
            id: 2,
            name: "Ruched Mini Dress",
            price: "$34.99",
            image: "https://cdn.shopify.com/s/files/1/2721/4382/products/product_image87_small.jpg?v=1516509761",
            link: "/products/ruched-mini-dress?variant=10040286117930"
        },
        {
            id: 3,
            name: "Rocket Crop Lazuli",
            price: "$218.00",
            image: "https://cdn.shopify.com/s/files/1/2721/4382/products/product_image46_small.jpg?v=1516504730",
            link: "/products/rocket-crop-lazuli?variant=10064236478506"
        },
        {
            id: 4,
            name: "Ruched Mini Dress",
            price: "$34.99",
            image: "https://cdn.shopify.com/s/files/1/2721/4382/products/product_image87_small.jpg?v=1516509761",
            link: "/products/ruched-mini-dress?variant=10040286117930"
        }
    ];

    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);

    return (
        <div className="shopify-section" id="shopify-section-header">
            <header className="header">
                <div className="header-wrap sticky-header" data-section-id="header" data-section-type="header-section">
                    <div className="container">
                        <div className="header__inner" style={{ padding: '0px' }}>
                            <div className="row align-items-center justify-content-between">
                                <div className="header-left px-0 px-sm-3 col col-lg-auto">
                                    <div className="header-logo" style={{ maxWidth: '115px' }}>
                                        <h1 className="sr-only">Exquisite hand-printed bedsheets</h1>
                                        <NavLink to="/My-lettolino/home" className="header__heading-link d-flex">
                                            <img
                                                alt="Letto & Lino"
                                                className="header__heading-logo img-fluid"
                                                loading="lazy"
                                                src={LettoLinoGolden}
                                                style={{ filter: 'drop-shadow(0px 0px 0px gold)' }}
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="header-center col-auto d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav className="main-menu__wrap">
                                            <ul className="main-menu__nav list-unstyled d-flex flex-wrap m-0">
                                                <li className="main-menu__nav-item">
                                                    <NavLink to="/My-lettolino/home">Home</NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink to="/My-lettolino/shop">Shop</NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink to="/My-lettolino/about">About</NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink to="/My-lettolino/contact">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right d-flex align-items-center col-auto">
                                    <div className="header-cart cart-hover d-flex">
                                        <NavLink
                                            className="js-header-cart header__icon position-relative"
                                            to="/My-lettolino/cart"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="icon icon-cart"
                                                height="20"
                                                preserveAspectRatio="xMidYMid meet"
                                                role="img"
                                                viewBox="0 0 832 1024"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M768 159H577V97q0-26-13-48t-35-35t-48-13H353q-15 0-30 5t-26.5 14T276 40.5T262 67t-5 30v62H64q-27 0-45.5 18.5T0 223v736q0 26 18.5 45t45.5 19h704q27 0 45.5-19t18.5-45V223q0-27-18.5-45.5T768 159zM321 97q0-13 9.5-22.5T353 65h128q13 0 22.5 9.5T513 97v62H321V97zm447 862H64V223h193v66q0 3 1 8.5t8.5 14.5t22.5 9q16 0 24-8t8-16v-74h192v69l1.5 7.5l4.5 10l9.5 8L545 321q9 0 15.5-3.5t9.5-8t4.5-9.5t2.5-8v-69h191v736z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="header-cart__span d-none">Cart</span>
                                            <span className="header-cart__count cart-count-bubble" data-cart-count="">
                                                {cartItems.length}
                                            </span>
                                        </NavLink>
                                        <p className="cart-empty-message"></p>
                                        <div className="header-cart__content">
                                            <div className="ajaxcart-container" data-cart-container="">
                                                <div className="ajaxcart__inner">
                                                    {cartItems.map(item => (
                                                        <div className="ajaxcart__product" key={item.id}>
                                                            <div className="ajaxcart__line-item">
                                                                <div className="ajaxcart__line-item--left">
                                                                    <div className="ajaxcart__product-image-wrapper">
                                                                        <a className="ajaxcart__product-image" href={item.link}>
                                                                            <img alt={item.name} className="img-fluid" src={item.image} />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="ajaxcart__line-item--right">
                                                                    <div className="ajaxcart__product-description">
                                                                        <div className="ajaxcart__product-name-wrapper">
                                                                            <a className="ajaxcart__product-name d-block mb-1" href={item.link}>
                                                                                {item.name}
                                                                            </a>
                                                                            <div className="ajaxcart__product-price-wrapper product-price">
                                                                                <span className="ajaxcart__price">
                                                                                    <span className="money">{item.price}</span>
                                                                                </span>
                                                                            </div>
                                                                            <a className="ajaxcart__remove">
                                                                                <svg
                                                                                    aria-hidden="true"
                                                                                    className="icon-close"
                                                                                    fill="none"
                                                                                    focusable="false"
                                                                                    role="presentation"
                                                                                    viewBox="0 0 12 13"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M8.48627 9.32917L2.82849 3.67098"
                                                                                        stroke="currentColor"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    />
                                                                                    <path
                                                                                        d="M2.88539 9.38504L8.42932 3.61524"
                                                                                        stroke="currentColor"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    />
                                                                                </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="ajaxcart__footer">
                                                    <div className="ajaxcart__footer-price">
                                                        <span className="ajaxcart__subtotal-name">Subtotal</span>
                                                        <span className="ajaxcart__subtotal">
                                                            <span className="money">${subtotal}</span>
                                                        </span>
                                                    </div>
                                                    <p className="ajaxcart__policies">
                                                        Taxes and{' '}
                                                        <a href="/policies/shipping-policy">shipping</a>{' '}
                                                        calculated at checkout
                                                    </p>
                                                    <div className="ajaxcart__footer-buttons d-flex justify-content-between">
                                                        <button className="btn cart-modal__btn cart-modal__btn--viewcart"
                                                            onClick={() => { navigate('/My-lettolino/cart') }}>
                                                            View Cart
                                                        </button>
                                                        <button className="btn cart-modal__btn cart-modal__btn--checkout" name="checkout"
                                                            onClick={() => { navigate('/My-lettolino/checkout') }}>
                                                            Check out
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p />
                                        <p className="cookie-message">Enable cookies to use the shopping cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
