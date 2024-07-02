import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            className="shopify-section"
            id="shopify-section-header"
        >
            <header className="header">
                <div
                    className="header-wrap sticky-header"
                    data-section-id="header"
                    data-section-type="header-section"
                >
                    <div className="container">
                        <div
                            className="header__inner"
                            style={{
                                padding: '0px'
                            }}
                        >
                            <div className="row align-items-center justify-content-between">
                                <div className="header-menu-mobile d-block d-lg-none col-auto">
                                    <header-drawer>
                                        <details className="menu-drawer-container">
                                            <summary
                                                aria-label="Menu"
                                                className="header__icon header__icon--menu header__icon--summary"
                                            >
                                                <span className="d-flex align-items-center">
                                                    <svg
                                                        className="icon icon-hamburger"
                                                        fill="currentColor"
                                                        viewBox="0 0 32 32"
                                                        width="32px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <g>
                                                            <path d="M 7,16l 18,0 C 25.552,16, 26,15.552, 26,15C 26,14.448, 25.552,14, 25,14l-18,0 C 6.448,14, 6,14.448, 6,15 C 6,15.552, 6.448,16, 7,16zM 7,10l 18,0 C 25.552,10, 26,9.552, 26,9C 26,8.448, 25.552,8, 25,8l-18,0 C 6.448,8, 6,8.448, 6,9 C 6,9.552, 6.448,10, 7,10zM 7,22l 18,0 c 0.552,0, 1-0.448, 1-1c0-0.552-0.448-1-1-1l-18,0 C 6.448,20, 6,20.448, 6,21 C 6,21.552, 6.448,22, 7,22z" />
                                                        </g>
                                                    </svg>
                                                    <svg
                                                        aria-hidden="true"
                                                        className="icon icon-close ms-1"
                                                        fill="none"
                                                        focusable="false"
                                                        role="presentation"
                                                        viewBox="0 0 12 13"
                                                        width="26px"
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
                                                </span>
                                            </summary>
                                            <div
                                                className="menu-drawer motion-reduce"
                                                id="menu-drawer"
                                                tabIndex="-1"
                                            >
                                                <div className="menu-drawer__inner-container">
                                                    <div className="menu-drawer__navigation-container d-flex align-items-start flex-column h-100">
                                                        <nav className="menu-drawer__navigation mb-auto w-100">
                                                            <ul className="menu-drawer__menu list-menu">
                                                                <li>
                                                                    <details>
                                                                        <summary className="menu-drawer__menu-item list-menu__item">
                                                                            Home
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                className="icon icon-arrow"
                                                                                fill="none"
                                                                                focusable="false"
                                                                                role="presentation"
                                                                                viewBox="0 0 14 10"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    clipRule="evenodd"
                                                                                    d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                    fill="currentColor"
                                                                                    fillRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </summary>
                                                                        <div
                                                                            className="menu-drawer__submenu motion-reduce"
                                                                            id="link-Home"
                                                                            tabIndex="-1"
                                                                        >
                                                                            <div className="menu-drawer__inner-submenu">
                                                                                <button
                                                                                    aria-expanded="true"
                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                >
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="icon icon-arrow"
                                                                                        fill="none"
                                                                                        focusable="false"
                                                                                        role="presentation"
                                                                                        viewBox="0 0 14 10"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            clipRule="evenodd"
                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                            fill="currentColor"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                    Home
                                                                                </button>
                                                                                <ul
                                                                                    className="menu-drawer__menu list-menu"
                                                                                    tabIndex="-1"
                                                                                >
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121555157034"
                                                                                        >
                                                                                            Manor Home 1
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121749438506"
                                                                                        >
                                                                                            Manor Home 2
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121766182954"
                                                                                        >
                                                                                            Manor Home 3
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121791774762"
                                                                                        >
                                                                                            Manor Home 4
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121769492522"
                                                                                        >
                                                                                            Manor Home 5
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121551781930"
                                                                                        >
                                                                                            Manor Home 6
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121653461034"
                                                                                        >
                                                                                            Manor Home 7
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121668993066"
                                                                                        >
                                                                                            Manor Home 8
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-1.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=121654181930"
                                                                                        >
                                                                                            Manor Home 9
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="https://vela-demo-2.myshopify.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=120772460607"
                                                                                        >
                                                                                            Manor Home 10
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                </li>
                                                                <li>
                                                                    <details>
                                                                        <summary className="menu-drawer__menu-item list-menu__item">
                                                                            Shops
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                className="icon icon-arrow"
                                                                                fill="none"
                                                                                focusable="false"
                                                                                role="presentation"
                                                                                viewBox="0 0 14 10"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    clipRule="evenodd"
                                                                                    d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                    fill="currentColor"
                                                                                    fillRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </summary>
                                                                        <div
                                                                            className="menu-drawer__submenu motion-reduce"
                                                                            id="link-Shops"
                                                                            tabIndex="-1"
                                                                        >
                                                                            <div className="menu-drawer__inner-submenu">
                                                                                <button
                                                                                    aria-expanded="true"
                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                >
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="icon icon-arrow"
                                                                                        fill="none"
                                                                                        focusable="false"
                                                                                        role="presentation"
                                                                                        viewBox="0 0 14 10"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            clipRule="evenodd"
                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                            fill="currentColor"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                    Shops
                                                                                </button>
                                                                                <ul
                                                                                    className="menu-drawer__menu list-menu"
                                                                                    tabIndex="-1"
                                                                                >
                                                                                    <li>
                                                                                        <details>
                                                                                            <summary className="menu-drawer__menu-item list-menu__item focus-inset">
                                                                                                Shop page
                                                                                                <svg
                                                                                                    aria-hidden="true"
                                                                                                    className="icon icon-arrow"
                                                                                                    fill="none"
                                                                                                    focusable="false"
                                                                                                    role="presentation"
                                                                                                    viewBox="0 0 14 10"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path
                                                                                                        clipRule="evenodd"
                                                                                                        d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                                        fill="currentColor"
                                                                                                        fillRule="evenodd"
                                                                                                    />
                                                                                                </svg>
                                                                                            </summary>
                                                                                            <div
                                                                                                className="menu-drawer__submenu motion-reduce"
                                                                                                id="childlink-shop-page"
                                                                                            >
                                                                                                <button
                                                                                                    aria-expanded="true"
                                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                                >
                                                                                                    <svg
                                                                                                        aria-hidden="true"
                                                                                                        className="icon icon-arrow"
                                                                                                        fill="none"
                                                                                                        focusable="false"
                                                                                                        role="presentation"
                                                                                                        viewBox="0 0 14 10"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path
                                                                                                            clipRule="evenodd"
                                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                                            fill="currentColor"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                    Shop page
                                                                                                </button>
                                                                                                <ul
                                                                                                    className="menu-drawer__menu list-menu"
                                                                                                    tabIndex="-1"
                                                                                                >
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=full-width"
                                                                                                        >
                                                                                                            Fullwidth
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=no-filter"
                                                                                                        >
                                                                                                            Fullwidth - No filter
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=left-sidebar"
                                                                                                        >
                                                                                                            Left sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=right-sidebar"
                                                                                                        >
                                                                                                            Right sidebar
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=filter-top"
                                                                                                        >
                                                                                                            Filter top
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=pagination"
                                                                                                        >
                                                                                                            Pagination
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/collections/all?view=loadmore"
                                                                                                        >
                                                                                                            Load more
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </details>
                                                                                    </li>
                                                                                    <li>
                                                                                        <details>
                                                                                            <summary className="menu-drawer__menu-item list-menu__item focus-inset">
                                                                                                Product page
                                                                                                <svg
                                                                                                    aria-hidden="true"
                                                                                                    className="icon icon-arrow"
                                                                                                    fill="none"
                                                                                                    focusable="false"
                                                                                                    role="presentation"
                                                                                                    viewBox="0 0 14 10"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path
                                                                                                        clipRule="evenodd"
                                                                                                        d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                                        fill="currentColor"
                                                                                                        fillRule="evenodd"
                                                                                                    />
                                                                                                </svg>
                                                                                            </summary>
                                                                                            <div
                                                                                                className="menu-drawer__submenu motion-reduce"
                                                                                                id="childlink-product-page"
                                                                                            >
                                                                                                <button
                                                                                                    aria-expanded="true"
                                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                                >
                                                                                                    <svg
                                                                                                        aria-hidden="true"
                                                                                                        className="icon icon-arrow"
                                                                                                        fill="none"
                                                                                                        focusable="false"
                                                                                                        role="presentation"
                                                                                                        viewBox="0 0 14 10"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path
                                                                                                            clipRule="evenodd"
                                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                                            fill="currentColor"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                    Product page
                                                                                                </button>
                                                                                                <ul
                                                                                                    className="menu-drawer__menu list-menu"
                                                                                                    tabIndex="-1"
                                                                                                >
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=thumbnail-left"
                                                                                                        >
                                                                                                            Product thumbnail left
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=thumbnail-right"
                                                                                                        >
                                                                                                            Product thumbnail right
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=thumbnail-top"
                                                                                                        >
                                                                                                            Product thumbnail top
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=thumbnail-bottom"
                                                                                                        >
                                                                                                            Product thumbnail bottom
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt"
                                                                                                        >
                                                                                                            Product variants
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=dropdown-variant"
                                                                                                        >
                                                                                                            Product variants dropdown
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/daley-tank"
                                                                                                        >
                                                                                                            Product Video,3D, AR models
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a
                                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                                            href="/products/ageratum-t-shirt?view=gallery-stacked"
                                                                                                        >
                                                                                                            Product gallery stacked
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </details>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="menu-drawer__menu-item list-menu__item"
                                                                        href="/collections"
                                                                    >
                                                                        Collections
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <details>
                                                                        <summary className="menu-drawer__menu-item list-menu__item">
                                                                            Blog
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                className="icon icon-arrow"
                                                                                fill="none"
                                                                                focusable="false"
                                                                                role="presentation"
                                                                                viewBox="0 0 14 10"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    clipRule="evenodd"
                                                                                    d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                    fill="currentColor"
                                                                                    fillRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </summary>
                                                                        <div
                                                                            className="menu-drawer__submenu motion-reduce"
                                                                            id="link-Blog"
                                                                            tabIndex="-1"
                                                                        >
                                                                            <div className="menu-drawer__inner-submenu">
                                                                                <button
                                                                                    aria-expanded="true"
                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                >
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="icon icon-arrow"
                                                                                        fill="none"
                                                                                        focusable="false"
                                                                                        role="presentation"
                                                                                        viewBox="0 0 14 10"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            clipRule="evenodd"
                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                            fill="currentColor"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                    Blog
                                                                                </button>
                                                                                <ul
                                                                                    className="menu-drawer__menu list-menu"
                                                                                    tabIndex="-1"
                                                                                >
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/blogs/news"
                                                                                        >
                                                                                            Blog right sidebar
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/blogs/news?view=sidebar-left"
                                                                                        >
                                                                                            Blog left sidebar
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/blogs/news?view=full-width"
                                                                                        >
                                                                                            Blog fullwidth
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/search?view=blog&type=article&q=a"
                                                                                        >
                                                                                            Blog search
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/blogs/news/accessories-for-both-him-her-some-suggestions"
                                                                                        >
                                                                                            Blog post sidebar
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/blogs/news/lightly-dress-you-may-not-know-how-to-wear?view=full-width"
                                                                                        >
                                                                                            Blog post no sidebar
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                </li>
                                                                <li>
                                                                    <details>
                                                                        <summary className="menu-drawer__menu-item list-menu__item">
                                                                            Pages
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                className="icon icon-arrow"
                                                                                fill="none"
                                                                                focusable="false"
                                                                                role="presentation"
                                                                                viewBox="0 0 14 10"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    clipRule="evenodd"
                                                                                    d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                    fill="currentColor"
                                                                                    fillRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </summary>
                                                                        <div
                                                                            className="menu-drawer__submenu motion-reduce"
                                                                            id="link-Pages"
                                                                            tabIndex="-1"
                                                                        >
                                                                            <div className="menu-drawer__inner-submenu">
                                                                                <button
                                                                                    aria-expanded="true"
                                                                                    className="menu-drawer__close-button border-0 btn-secondary"
                                                                                >
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="icon icon-arrow"
                                                                                        fill="none"
                                                                                        focusable="false"
                                                                                        role="presentation"
                                                                                        viewBox="0 0 14 10"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            clipRule="evenodd"
                                                                                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                                                                            fill="currentColor"
                                                                                            fillRule="evenodd"
                                                                                        />
                                                                                    </svg>
                                                                                    Pages
                                                                                </button>
                                                                                <ul
                                                                                    className="menu-drawer__menu list-menu"
                                                                                    tabIndex="-1"
                                                                                >
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/about-us"
                                                                                        >
                                                                                            About us
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/faqs"
                                                                                        >
                                                                                            F.A.Qs page
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/lookbook"
                                                                                        >
                                                                                            Lookbook page
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/404-page"
                                                                                        >
                                                                                            404 page
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/password"
                                                                                        >
                                                                                            Password page
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a
                                                                                            className="menu-drawer__menu-item list-menu__item focus-inset"
                                                                                            href="/pages/sitemap"
                                                                                        >
                                                                                            Sitemap page
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="menu-drawer__menu-item list-menu__item"
                                                                        href="/pages/contact-us"
                                                                    >
                                                                        Contact
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        <div className="menu-drawer__utility-links w-100">
                                                            <a
                                                                className="menu-drawer__account btn btn-secondary  d-block text-uppercase"
                                                                href="/account/login"
                                                            >
                                                                Log in
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    </header-drawer>
                                </div>
                                <div className="header-left px-0 px-sm-3 col col-lg-auto">
                                    <div
                                        className="header-logo"
                                        style={{
                                            maxWidth: '115px'
                                        }}
                                    >
                                        <h1 className="sr-only">
                                            Exquisite hand-printed bedsheets
                                        </h1>
                                        <a
                                            className="header__heading-link d-flex"
                                            href="/"
                                        >
                                            <img
                                                alt="Velatheme"
                                                className="header__heading-logo img-fluid"
                                                loading="lazy"
                                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=228,fit=crop,q=95/d95pXDVw95c58Dkq/img-20240629-wa0044-YanBN93xnWuXx59v.jpg"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-center col-auto d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav className="main-menu__wrap">
                                            <ul className="main-menu__nav list-unstyled d-flex flex-wrap m-0">
                                                <li className="main-menu__nav-item active">
                                                    <NavLink
                                                        to="/My-lettolino/home"
                                                        title="Home"
                                                    >
                                                        Home

                                                    </NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink
                                                        to="/My-lettolino/shop"
                                                        title="Shops"
                                                    >
                                                        Shops

                                                    </NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink
                                                        className="main-menu__link"
                                                        to="/My-lettolino/about"
                                                        title="About"
                                                    >
                                                        About
                                                    </NavLink>
                                                </li>
                                                <li className="main-menu__nav-item">
                                                    <NavLink
                                                        className="main-menu__link"
                                                        to="/My-lettolino/contact"
                                                        title="Contact"
                                                    >
                                                        Contact
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right d-flex align-items-center col-auto">
                                    <div className="header-cart cart-hover">
                                        <a
                                            className="js-header-cart header__icon position-relative"
                                            href="javascript:void(0)"
                                            id="cart-icon-bubble"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="icon icon-cart"
                                                height="16"
                                                preserveAspectRatio="xMidYMid meet"
                                                role="img"
                                                viewBox="0 0 832 1024"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M768 159H577V97q0-26-13-48t-35-35t-48-13H353q-15 0-30 5t-26.5 14T276 40.5T262 67t-5 30v62H64q-27 0-45.5 18.5T0 223v736q0 26 18.5 45t45.5 19h704q27 0 45.5-19t18.5-45V223q0-27-18.5-45.5T768 159zM321 97q0-13 9.5-22.5T353 65h128q13 0 22.5 9.5T513 97v62H321V97zm447 862H64V223h193v66q0 3 1 8.5t8.5 14.5t22.5 9q16 0 24-8t8-16v-74h192v69l1.5 7.5l4.5 10l9.5 8L545 321q9 0 15.5-3.5t9.5-8t4.5-9.5t2.5-8v-69h191v736z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="header-cart__span d-none">
                                                Cart
                                            </span>
                                            <span
                                                className="header-cart__count cart-count-bubble"
                                                data-cart-count=""
                                            >
                                                0
                                            </span>
                                            <span className="header-cart__span d-none">
                                                item
                                            </span>
                                            <span
                                                className="header-cart__span d-none"
                                                data-cart-cost=""
                                            >
                                                <span className="money">
                                                    $0.00
                                                </span>
                                            </span>
                                        </a>
                                        <div className="header-cart__content">
                                            <div
                                                className="ajaxcart-container"
                                                data-cart-container=""
                                            >
                                                <p className="cart-empty-message">
                                                    Your cart is empty
                                                </p>
                                                <p className="cookie-message">
                                                    Enable cookies to use the shopping cart
                                                </p>
                                            </div>
                                        </div>
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
