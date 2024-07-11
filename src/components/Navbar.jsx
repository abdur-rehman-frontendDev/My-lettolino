import React from 'react';
import { NavLink } from 'react-router-dom';
import LettoLinoGray from '../assets/LettoLino-Gray.png';
import LettoLinoGolden from '../assets/LettoLino-Golden.png';
import CartInfo from '../pages/Cart/CartInfo';
import { useCart } from '../context/CartContext';

const Navbar = () => {

    const { cart } = useCart();
    const cartItemCount = cart.length;

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
                                                src={LettoLinoGray}
                                                style={{ filter: 'drop-shadow(0px 0px 0px #333a3f)' }}
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
                                                {cartItemCount}
                                            </span>
                                        </NavLink>
                                        <CartInfo />
                                        <p />
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
