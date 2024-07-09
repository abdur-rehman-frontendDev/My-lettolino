import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartInfo = ({ cartItems, subtotal }) => {
    const navigate = useNavigate();

    return (
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
    )
}

export default CartInfo;