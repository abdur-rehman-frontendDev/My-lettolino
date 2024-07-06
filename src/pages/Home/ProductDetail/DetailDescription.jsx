import React, { useState } from 'react';
import ReactImageGallery from "react-image-gallery";
import "react-rater/lib/react-rater.css";
import { RemoveOutline } from 'react-ionicons';
import { AddOutline } from 'react-ionicons';
import { NavLink } from 'react-router-dom';

const DetailDescription = ({ productDetails }) => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value, 10) || 1);
        setQuantity(value);
    };

    return (
        <>
            <div className="container pt-5">
                <div className="row product__row pb-3 pb-lg-5">
                    <div className="col-12 col-lg-6 product__media-wrapper mb-4">
                        <ReactImageGallery
                            showBullets={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            items={productDetails.images}
                        />
                    </div>
                    <div className="col-12 col-lg-6 product__info-wrapper mb-4">
                        <div className="ps-xl-2 ps-xxl-5">
                            <div className="product-single__product-type text-uppercase mb-0"
                                style={{ color: '#9e9999' }}>
                                {productDetails.productType}
                            </div>
                            <h1 className="product-single__title mb-3">
                                {productDetails.title}
                            </h1>
                            <div className="product__organization--wrap mb-3">
                                <div className="js-product-avaiable product-avaiable position-relative product__organization">
                                    <div className="product-avaiable__label product__organization__label">
                                        Availability:
                                    </div>
                                    <div className="js-product-avaiable-text product-avaiable__text product-avaiable__text--instock">
                                        {productDetails.availability}
                                    </div>
                                </div>
                                <div className="product__organization ">
                                    <div className="product__organization__label">
                                        SKU:
                                    </div>
                                    <div className="js-variant-sku product__organization__text">
                                        {productDetails.sku}
                                    </div>
                                </div>
                                <div className="product__organization">
                                    <div className="product__organization__label">
                                        Vendor:
                                    </div>
                                    <div className="product__organization__text">
                                        <NavLink to={productDetails.vendor.link}
                                            title={productDetails.vendor.name}>
                                            {productDetails.vendor.name}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="price-container d-flex align-items-center flex-wrap pt-2  mb-3">
                                <span className="js-product-price product-single__price on-sale"
                                    content="35.0" itemProp="price">
                                    <span className="money">
                                        {productDetails.price.current}
                                    </span>
                                </span>
                                <span className="product-single__price--wrapper ms-1">
                                    <span className="js-product-compare-price product-single__price--compare-at">
                                        <span className="money">
                                            {productDetails.price.original}
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="product-single__border mb-4"
                                style={{ borderTop: 'solid 1px #e5e5e5', lineHeight: '0' }}>
                            </div>
                            <div className="product-single__text mb-5"
                                style={{ color: '#666666', fontSize: '16px' }}>
                                <p>
                                    {productDetails.description}
                                </p>
                            </div>
                            <div className="buy_buttons--wrap mb-3">
                                <form action="#"
                                    className="js-addtocart-form product-single__form product-single__form--no-variants">
                                    <div className="js-quantity-selector product-quantity mb-3">
                                        <label
                                            className="product-quantity__label pb-1"
                                            htmlFor="Quantity"
                                        >
                                            Quantity
                                        </label>
                                        <div className="product-quantity__selector">
                                            <div className="vela-qty">
                                                <button
                                                    className="js-qty-adjust vela-qty__adjust vela-qty__adjust--minus"
                                                    type="button"
                                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                                    aria-label="Decrease item quantity by one"
                                                >
                                                    <RemoveOutline color={'#00000'} />
                                                </button>
                                                <input
                                                    className="js-qty-number vela-qty__number"
                                                    value={quantity}
                                                    min="1"
                                                    name="quantity"
                                                    pattern="[0-9]*"
                                                    type="text"
                                                    onChange={handleQuantityChange}
                                                    aria-label="Product quantity"
                                                />
                                                <button
                                                    className="js-qty-adjust vela-qty__adjust vela-qty__adjust--plus"
                                                    type="button"
                                                    onClick={() => setQuantity(quantity + 1)}
                                                    aria-label="Increase item quantity by one"
                                                >
                                                    <AddOutline color={'#00000'} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-single__buttons d-flex align-item-start">
                                        <button
                                            className="btn btn--add-to-cart btn-default"
                                            name="add"
                                            type="submit">
                                            <span className="btn__text">
                                                Add to Cart
                                            </span>
                                        </button>

                                        <div className="shopify-payment-button">
                                            <button
                                                className="shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw"
                                                data-testid="Checkout-button"
                                                type="button">
                                                Buy it now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="custom_liquid--wrap mb-4">
                                <div className="ourservice row gx-2">
                                    <div className="col">
                                        <div className="bg-light text-center px-1 py-2">
                                            <div className="icon mb-1 pb-1">
                                                <svg
                                                    fill="currentColor"
                                                    height="20"
                                                    viewBox="0 0 32.784000396728516 32"
                                                    width="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <g>
                                                        <path d="M 17.066,2.134c-3.822,0-7.644,1.458-10.56,4.374c-5.832,5.832-5.832,15.288,0,21.118 C 9.424,30.542, 13.244,32, 17.066,32s 7.644-1.458, 10.56-4.374c 5.832-5.832, 5.832-15.288,0-21.118C 24.71,3.592, 20.888,2.134, 17.066,2.134z M 26.212,26.212C 23.77,28.654, 20.522,30, 17.066,30c-3.454,0-6.702-1.346-9.146-3.788c-2.442-2.442-3.788-5.69-3.788-9.146 s 1.346-6.702, 3.788-9.146c 2.442-2.442, 5.69-3.788, 9.146-3.788c 3.454,0, 6.702,1.346, 9.146,3.788S 30,13.612, 30,17.066 S 28.654,23.77, 26.212,26.212zM 23,16L 18,16 L 18,8.986 c0-0.552-0.448-1-1-1S 16,8.434, 16,8.986l0,8.008 c0,0,0,0.002,0,0.002L 16,17 C 16,17.552, 16.448,18, 17,18l 6,0 C 23.552,18, 24,17.552, 24,17C 24,16.448, 23.552,16, 23,16z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div
                                                className="text h5"
                                                style={{
                                                    fontSize: '12px'
                                                }}
                                            >
                                                24/48 HOUR DELIVERY
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="bg-light text-center px-1 py-2">
                                            <div className="icon mb-1 pb-1">
                                                <svg
                                                    enableBackground="new 0 0 16 16"
                                                    fill="currentColor"
                                                    height="20"
                                                    viewBox="0 0 32 32"
                                                    width="20"
                                                    x="0px"
                                                    xmlSpace="preserve"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    y="0px"
                                                >
                                                    {' '}
                                                    <g>
                                                        <path d="M 17,2C 8.716,2, 2,8.716, 2,17S 8.716,32, 17,32S 32,25.284, 32,17S 25.284,2, 17,2z M 27.938,10l-2.98,0 c-0.58-1.824-1.376-3.422-2.336-4.704C 24.798,6.346, 26.64,7.98, 27.938,10z M 18,10L 18,4.164 C 19.89,4.722, 21.732,6.818, 22.866,10L 18,10 z M 23.448,12c 0.282,1.224, 0.464,2.564, 0.522,4L 18,16 L 18,12 L 23.448,12 z M 16,4.164L 16,10 L 11.134,10 C 12.268,6.818, 14.11,4.722, 16,4.164z M 16,12l0,4 L 10.030,16 c 0.058-1.436, 0.24-2.776, 0.522-4L 16,12 z M 8.030,16l-3.98,0 c 0.108-1.406, 0.43-2.754, 0.952-4l 3.52,0 C 8.254,13.266, 8.086,14.604, 8.030,16z M 8.030,18c 0.056,1.396, 0.224,2.734, 0.492,4l-3.52,0 c-0.522-1.246-0.844-2.594-0.952-4L 8.030,18 z M 10.030,18L 16,18 l0,4 L 10.552,22 C 10.27,20.776, 10.088,19.436, 10.030,18z M 16,24l0,5.836 C 14.11,29.278, 12.268,27.182, 11.134,24L 16,24 z M 18,29.836L 18,24 l 4.866,0 C 21.732,27.182, 19.89,29.278, 18,29.836z M 18,22L 18,18 l 5.97,0 c-0.058,1.436-0.24,2.776-0.522,4L 18,22 z M 25.97,18l 3.98,0 c-0.108,1.406-0.43,2.754-0.952,4l-3.52,0 C 25.746,20.734, 25.914,19.396, 25.97,18z M 25.97,16c-0.056-1.396-0.224-2.734-0.492-4l 3.52,0 c 0.522,1.246, 0.844,2.594, 0.952,4L 25.97,16 z M 11.378,5.296C 10.42,6.578, 9.622,8.176, 9.042,10l-2.98,0 C 7.36,7.98, 9.202,6.346, 11.378,5.296z M 6.062,24l 2.98,0 c 0.58,1.824, 1.376,3.422, 2.336,4.704C 9.202,27.654, 7.36,26.020, 6.062,24z M 22.622,28.704 c 0.958-1.282, 1.756-2.88, 2.336-4.704l 2.98,0 C 26.64,26.020, 24.798,27.654, 22.622,28.704z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div
                                                className="text h5"
                                                style={{
                                                    fontSize: '12px'
                                                }}
                                            >
                                                SHIPPING TRACKING
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="bg-light text-center px-1 py-2">
                                            <div className="icon mb-1 pb-1">
                                                <svg
                                                    enableBackground="new 0 0 16 16"
                                                    fill="currentColor"
                                                    height="20"
                                                    viewBox="0 0 32 32"
                                                    width="20"
                                                    x="0px"
                                                    xmlSpace="preserve"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    y="0px"
                                                >
                                                    {' '}
                                                    <g>
                                                        <path d="M 15.45,31.922C 15.63,31.974, 15.816,32, 16,32s 0.37-0.026, 0.55-0.078c 12.378-3.536, 14.2-16.048, 13.436-22.172 C 29.86,8.752, 29.008,8, 28,8c-0.286-0.022-2-0.318-2-4c0-0.53-0.21-1.040-0.586-1.414C 24.982,2.154, 22.5,0, 16,0 S 7.018,2.154, 6.586,2.586C 6.21,2.96, 6,3.47, 6,4c0,3.682-1.714,3.978-2.058,4.002c-1.008,0-1.802,0.75-1.928,1.75 C 1.25,15.874, 3.074,28.386, 15.45,31.922z M 4,10c0,0, 4,0, 4-6c0,0, 2-2, 8-2l0,14 l 11.778,0 c-0.788,4.982-3.432,11.616-11.778,14L 16,16 L 4.222,16 C 3.69,12.624, 4,10, 4,10z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div
                                                className="text h5"
                                                style={{
                                                    fontSize: '12px'
                                                }}
                                            >
                                                GUARANTEED PRODUCTS
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="product-single__border mb-3"
                                style={{
                                    borderTop: 'solid 1px #e5e5e5',
                                    lineHeight: '0'
                                }}
                            />
                            <div className="product-single__meta mb-4">
                                <div className="social-sharing d-flex align-items-center">
                                    <label className="social-sharing_title">
                                        Share:
                                    </label>
                                    <ul className="list-social d-flex list-unstyled m-0">
                                        <li className="list-social__item ms-3">
                                            <a
                                                className="list-social__link link link--text"
                                                href="//www.facebook.com/lettolino"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <svg
                                                    className="icon icon-facebook"
                                                    height="15px"
                                                    viewBox="0 0 264 512"
                                                    width="15px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Share on Facebook
                                                </span>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Opens in a new window.
                                                </span>
                                            </a>
                                        </li>
                                        <li className="list-social__item ms-3">
                                            <a
                                                className="list-social__link link link--text"
                                                href="//twitter.com/lettolino"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <svg
                                                    className="icon icon-twitter"
                                                    viewBox="0 0 512 512"
                                                    width="15px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Tweet on Twitter
                                                </span>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Opens in a new window.
                                                </span>
                                            </a>
                                        </li>
                                        <li className="list-social__item ms-3">
                                            <a
                                                className="list-social__link link link--text"
                                                href="//pinterest.com/pin/lettolino"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <svg
                                                    className="icon icon-pinterest"
                                                    viewBox="0 0 496 512"
                                                    width="15px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Pin on Pinterest
                                                </span>
                                                <span className="visually-hidden visually-hidden--inline">
                                                    Opens in a new window.
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailDescription;