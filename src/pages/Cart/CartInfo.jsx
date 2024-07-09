import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartInfo = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart } = useCart();

    useEffect(() => {
        console.log('cart updated', cart);
    }, [cart]);

    const subtotal = cart.reduce((total, item) => total + item.total, 0).toFixed(2);

    const handleViewCart = () => navigate('/My-lettolino/cart');
    const handleCheckout = () => navigate('/My-lettolino/checkout');

    return (
        <div className="header-cart__content">
            <div className="ajaxcart-container" data-cart-container="">
                <div className="ajaxcart__inner">
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <div className="ajaxcart__product" key={item.id}>
                                <div className="ajaxcart__line-item">
                                    <div className="ajaxcart__line-item--left">
                                        <div className="ajaxcart__product-image-wrapper">
                                            <a className="ajaxcart__product-image" href={item.link}>
                                                <img alt={item.name} className="img-fluid" src={item.imgPrimary} />
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
                                                        <span className="money">${item.price.toFixed(2)}</span>
                                                    </span>
                                                </div>
                                                <a className="ajaxcart__remove" style={{ cursor: 'pointer' }}
                                                    onClick={() => removeFromCart(item.id)}>
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
                        ))
                    ) : (
                        <li className="item d-flex align-items-center">Your cart is empty</li>
                    )}
                </div>
                {cart.length > 0 ? (
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
                                onClick={handleViewCart}>
                                View Cart
                            </button>
                            <button className="btn cart-modal__btn cart-modal__btn--checkout" name="checkout"
                                onClick={handleCheckout}>
                                Check out
                            </button>
                        </div>
                    </div>
                ) : null
                }
            </div>
        </div>
    );
}

export default CartInfo;
