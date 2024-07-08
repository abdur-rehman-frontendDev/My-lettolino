import React from 'react';

const products = [
    {
        id: 1,
        name: "Maude Flutter Sleeve",
        vendor: "Love & Bravery",
        image: "//cdn.shopify.com/s/files/1/2721/4382/products/product_image110_150x.jpg?v=1517830375",
        price: 48.00,
        quantity: 3,
    },
    {
        id: 1,
        name: "Maude Flutter Sleeve",
        vendor: "Love & Bravery",
        image: "//cdn.shopify.com/s/files/1/2721/4382/products/product_image110_150x.jpg?v=1517830375",
        price: 26.99,
        quantity: 1,
    },
];

const CheckoutCart = () => {
    const subtotal = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const shipping = 10.00;
    const total = subtotal + shipping;

    return (
        <div className="checkout-container">
            <div className="checkout-details">
                <div className="checkout-items">
                    {products.map((product) => (
                        <div className="row justify-content-between mb-3" key={product.id}>
                            <div className="col-auto col-md-7">
                                <div className="media d-flex flex-column flex-sm-row align-items-center">
                                    <img className="checkout-img-fluid" width="60px" 
                                        src={product.image} alt={product.name} />
                                    <p className="boxed m-4 h5">{product.name}</p>
                                </div>
                            </div>
                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                <p className="boxed h5">{product.quantity}</p>
                            </div>
                            <div className="pl-0 flex-sm-col col-auto my-auto h5">
                                <p><b>${product.price.toFixed(2)}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="checkout-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-item">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="summary-item">
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>
                    <div className="summary-item total">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;