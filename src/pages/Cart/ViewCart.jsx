import React, { useState } from 'react';
import { RemoveOutline, AddOutline, CloseOutline } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Maude Flutter Sleeve',
            vendor: 'Love & Bravery',
            image: '//cdn.shopify.com/s/files/1/2721/4382/products/product_image110_150x.jpg?v=1517830375',
            price: 48.00,
            quantity: 2,
            total: 96.00
        },
        {
            id: 2,
            name: 'Maude Flutter Sleeve',
            vendor: 'Love & Bravery',
            image: '//cdn.shopify.com/s/files/1/2721/4382/products/product_image110_150x.jpg?v=1517830375',
            price: 60.00,
            quantity: 1,
            total: 60.00
        },

    ]);

    const handleQuantityChange = (e, index) => {
        const value = Math.max(1, parseInt(e.target.value, 10) || 1);
        const updatedItems = cartItems.map((item, idx) => idx === index ? { ...item, quantity: value, total: value * item.price } : item);
        setCartItems(updatedItems);
    };

    const increaseQuantity = (index) => {
        const updatedItems = cartItems.map((item, idx) => idx === index ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price } : item);
        setCartItems(updatedItems);
    };

    const decreaseQuantity = (index) => {
        const updatedItems = cartItems.map((item, idx) => idx === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1, total: (item.quantity > 1 ? item.quantity - 1 : 1) * item.price } : item);
        setCartItems(updatedItems);
    };

    return (
        <>
            <div className="container d-flex flex-wrap py-5 position-relative main-cart-wrap">
                <div className="col-12 col-lg-8 pe-0 pe-lg-4">
                    <h1 className="mb-4 page-title">
                        Your cart
                    </h1>
                    <div className="cart__items">
                        <div className="js-contents">
                            <div className="cart__items--wrapp">
                                <div className="cart-items">
                                    <div className="cart-items--heading ff-special py-2"
                                        style={{ backgroundColor: '#f8f8f8' }}>
                                        <div className="row fw-bold text-uppercase">
                                            <div className="col-4 col-sm-3">
                                                <span className="px-3">
                                                    Product
                                                </span>
                                            </div>
                                            <div className="col-8 col-sm-6">
                                                <span className="px-3">
                                                    Quantity
                                                </span>
                                            </div>
                                            <div className="col-3 text-end d-none d-sm-block">
                                                <span className="px-3">
                                                    Total
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-items--body">
                                        {cartItems.map((item, index) => (
                                            <div className="cart-item py-4 border-bottom" key={item.id}>
                                                <div className="row">
                                                    <div className="cart-item__media col-4 col-sm-3">
                                                        <div className="position-relative d-inline-block">
                                                            <div style={{
                                                                position: 'absolute',
                                                                right: '0',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <CloseOutline color='red' width='35px' height='35px' />
                                                            </div>

                                                            <img
                                                                alt="cart"
                                                                className="cart-item__image img-fluid"
                                                                src={item.image}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="cart-item__details col-8 col-sm-6">
                                                        <p className="cart-item_vendor mb-2">
                                                            {item.vendor}
                                                        </p>
                                                        <a className="cart-item__name mb-1 link h5">
                                                            {item.name}
                                                        </a>
                                                        <div className="cart-item__price-wrapper mb-3 mt-2">
                                                            <span className="price product-price">
                                                                <span className="money h5">
                                                                    ${item.price.toFixed(2)}
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="cart-item__quantity">
                                                            <label
                                                                className="d-none"
                                                                htmlFor={`Quantity-${item.id}`}
                                                            >
                                                                Quantity
                                                            </label>
                                                            <div className="cart-quantity">
                                                                <button
                                                                    className="js-qty-adjust vela-qty__adjust vela-qty__adjust--minus"
                                                                    type="button"
                                                                    onClick={() => decreaseQuantity(index)}
                                                                    aria-label="Decrease item quantity by one"
                                                                >
                                                                    <RemoveOutline color={'#00000'} />
                                                                </button>
                                                                <input
                                                                    className="js-qty-number vela-qty__number"
                                                                    value={item.quantity}
                                                                    min="1"
                                                                    name={`quantity-${item.id}`}
                                                                    pattern="[0-9]*"
                                                                    type="text"
                                                                    onChange={(e) => handleQuantityChange(e, index)}
                                                                    aria-label="Product quantity"
                                                                />
                                                                <button
                                                                    className="js-qty-adjust vela-qty__adjust vela-qty__adjust--plus"
                                                                    type="button"
                                                                    onClick={() => increaseQuantity(index)}
                                                                    aria-label="Increase item quantity by one"
                                                                >
                                                                    <AddOutline color={'#00000'} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item__totals col-12 col-sm-3 text-sm-end">
                                                        <div className="row pt-3 pt-sm-0">
                                                            <div className="col-4 d-block d-sm-none">
                                                                <span className="fw-bold h5">
                                                                    Total:
                                                                </span>
                                                            </div>
                                                            <div className="col-8 col-sm-12 position-relative">
                                                                <div className="cart-item__price-wrapper medium-up">
                                                                    <span className="price product-price">
                                                                        <span className="money h5">
                                                                            ${item.total.toFixed(2)}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-4 mt-3 mt-lg-5">
                    <div className=" p-3 p-lg-4 mt-3" style={{ backgroundColor: '#f8f8f8' }}>
                        <div className="cart__footer">
                            <div clas="cart__footer--body">
                                <div className="js-contents1">
                                    <div className="totals d-flex justify-content-between">
                                        <h5 className="totals__subtotal">
                                            Subtotal:
                                        </h5>
                                        <p className="totals__subtotal-value product-price">
                                            <span className="money h5">
                                                ${cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="tax-note text-end mb-3">
                                        Taxes and{' '}
                                        <a href="/policies/shipping-policy">
                                            shipping
                                        </a>
                                        {' '}calculated at checkout
                                    </div>
                                </div>
                                <div className="cart__ctas">
                                    <button
                                        className="cart__checkout-button btn btn-default"
                                        style={{ width: '100%' }} name="checkout"
                                        onClick={() => { navigate(`/My-lettolino/checkout`) }}>
                                        Check out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewCart;
