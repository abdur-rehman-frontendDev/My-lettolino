import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CheckoutCart = () => {
    const navigate = useNavigate();

    const { cart } = useCart();

    const subtotal = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const shippingCost = 10.00;
    const shippingTaxe = 5.00;
    const total = subtotal + shippingCost + shippingTaxe;

    return (
        <div className="container d-flex flex-wrap py-5 position-relative main-cart-wrap">
            <div className="col-12 col-lg-8 pe-0 pe-lg-5">
                <h1 className="mb-4 page-title">
                    Order Checkout
                </h1>
                <div className="cart-items--heading ff-special py-2" style={{ backgroundColor: '#f8f8f8' }}>
                    <div className="row fw-bold text-uppercase">
                        <div className="col-4 col-sm-7">
                            <span className="px-3">
                                Product
                            </span>
                        </div>
                        <div className="col-8 col-sm-2">
                            <span className="px-3">
                                Quantity
                            </span>
                        </div>
                        <div className="col-3 col-sm-3 text-end">
                            <span className="px-3">
                                Total
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cart-items--body pt-3 px-1">
                    {cart.map((product) => (
                        <div className="row justify-content-between mb-3" key={product.id}>
                            <div className="col-auto col-sm-7">
                                <div className="media d-flex flex-column flex-sm-row align-items-center">
                                    <img className="checkout-img-fluid" width="60px"
                                        src={product.imgPrimary} alt={product.name} />
                                    <p className="boxed m-4 h5">{product.name}</p>
                                </div>
                            </div>
                            <div className="col-auto col-sm-2 my-auto text-center">
                                <p className="boxed h5">{product.quantity}</p>
                            </div>
                            <div className="col-auto col-sm-3 my-auto h5 text-end">
                                <p><b>${product.total.toFixed(2)}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 mt-lg-5">
                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-item mt-4 h5">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="summary-item h5">
                        <p>Shipping cost</p>
                        <p>${shippingCost.toFixed(2)}</p>
                    </div>
                    <div className="summary-item h5">
                        <p>Taxes total</p>
                        <p>${shippingTaxe.toFixed(2)}</p>
                    </div>
                    <div className="summary-item total h5">
                        <p>Order Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <button
                        className="btn btn-default"
                        style={{ width: '100%' }} name="checkout"
                        onClick={() => { navigate(`/My-lettolino/shop`) }}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;