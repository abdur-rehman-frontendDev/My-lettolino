import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const SecondSection = () => {
    const navigate = useNavigate();
    const lookbookItems = [
        {
            title: "Elegant Floral Bedsheet Collection",
            backgroundImage: 'https://i.ibb.co/2yxWmDj/B102-Flat-Pattern.jpg',
            detailLink: "decent-green",
            items: [
                {
                    title: "Elegant Floral Bedsheet",
                    image: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
                    price: "$89.99",
                    regularPrice: "$99.99",
                    detailLink: "decent-green",
                    position: { top: '45%', left: '59%' },
                    modalId: "elegant-floral-bedsheet-modal"
                },
                {
                    title: "Elegant Floral Pillow",
                    image: 'https://i.ibb.co/5KT1Cv6/B102-Pillow.jpg',
                    price: "$99.99",
                    detailLink: "decent-green",
                    position: { top: '90%', left: '79%' },
                    modalId: "elegant-floral-Pillow-modal"
                }
            ]
        },
        {
            title: "Vintage Floral Print Bedsheet",
            backgroundImage: 'https://i.ibb.co/CbdsP0z/B104-Flat-Pattern.jpg',
            detailLink: "elegant-green-b102",
            items: [
                {
                    title: "Vintage Floral Bedsheet - Double Size",
                    image: 'https://i.ibb.co/qFY56J9/B104-Pillow.jpg',
                    price: "$79.90",
                    regularPrice: "$89.90",
                    detailLink: "elegant-green-b102",
                    position: { top: '36%', left: '40%' },
                    modalId: "vintage-floral-double-modal"
                },
                {
                    title: "Vintage Floral Bedsheet - Single Size",
                    image: 'https://i.ibb.co/G2xQ3Sr/B104-Display.jpg',
                    price: "$59.90",
                    detailLink: "elegant-green-b102",
                    position: { top: '80%', left: '51%' },
                    modalId: "vintage-floral-single-modal"
                }
            ]
        },
        {
            title: "Luxury Silk Bedsheet Set",
            backgroundImage: 'https://i.ibb.co/X7tDVhG/B103-Flat-Pattern.jpg',
            detailLink: "mixed-brown",
            items: [
                {
                    title: "Luxury Silk Bedsheet",
                    image: 'https://i.ibb.co/MMMWk06/B103-Closeup.jpg',
                    price: "$149.00",
                    regularPrice: "$179.00",
                    detailLink: "mixed-brown",
                    position: { top: '39%', left: '39%' },
                    modalId: "luxury-silk-bedsheet-modal"
                },
                {
                    title: "Luxury Silk Bedsheet",
                    image: 'https://i.ibb.co/0CbcpR1/B103-Pillow.jpg',
                    price: "$169.00",
                    detailLink: "mixed-brown",
                    position: { top: '56%', left: '61%' },
                    modalId: "luxury-silk-pillow-modal"
                }
            ]
        },

    ];

    return (
        <div className="vela-section__inner" style={{ padding: '60px 0 90px', margin: '0 0 30px' }}>
            <div className="heading-group">
                <h3 className="heading">
                    <span>Stay inspired with <br /> our collections this week</span>
                </h3>
                <div className="sub-heading">
                    Discover the artistry and craftsmanship of our handmade bedsheets,
                    each piece designed to bring elegance and comfort to your home.
                    Elevate your bedroom décor with our exclusive collections, available this week only.
                </div>
            </div>
            <div className="vela-lookbook__content">
                {lookbookItems.map((lookbookItem, index) => (
                    <div className="vela-lookbook__item" key={index}>
                        <div className="lookbook-card">
                            <div className="card_wrap">
                                <div
                                    className="card__image position-relative js lazyloaded"
                                    onClick={() => { navigate(`/My-lettolino/product/${lookbookItem.detailLink}`) }}
                                    style={{
                                        cursor: 'pointer',
                                        paddingTop: '100%',
                                        backgroundImage: `url("${lookbookItem.backgroundImage}")`
                                    }}
                                />
                            </div>
                            {lookbookItem.items.map((item, itemIndex) => (
                                <div className="lookbook-card__item" key={itemIndex} style={item.position}>
                                    <div className={`lookbook-card__point lookbook-card--${item.position.top === '45%' ? 'center-left' : item.position.top === '90%' ? 'top-left' : item.position.top === '39%' ? 'center-right' : 'center-top'}`}>
                                        <div className="lookbook-card__button">
                                            <button className="lookbook-card__btn" data-bs-toggle="modal" data-bs-target={`#${item.modalId}`}>
                                                <span>{item.title}</span>
                                            </button>
                                        </div>
                                        <div className="lookbook-card__content">
                                            <div className="lookbook-product">
                                                <NavLink className="lookbook-product__img img-fluid"
                                                    to={`/My-lettolino/product/${item.detailLink}`}>
                                                    <img className="img-fluid" src={item.image} alt={item.title} />
                                                </NavLink>
                                                <div className="lookbook-product__content">
                                                    <NavLink className="lookbook-product__title"
                                                        to={`/My-lettolino/product/${item.detailLink}`}>
                                                        {item.title}
                                                    </NavLink>
                                                    <div className="lookbook-product__price">
                                                        <div className="product-price">
                                                            <span className="money">{item.price}</span>
                                                        </div>
                                                        {item.regularPrice && (
                                                            <div className="product-price product-price--regular ms-1">
                                                                <span className="money">{item.regularPrice}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="lookbook-product__bottom">
                                                        <NavLink className="lookbook-product__detail"
                                                            to={`/My-lettolino/product/${item.detailLink}`}>View detail</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;