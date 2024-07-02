import React from 'react';
import ProductFlatPattern1 from '../../../assets/Products/B102FlatPattern.jpg';
import ProductFlatPattern2 from '../../../assets/Products/B103FlatPattern.jpg';
import ProductFlatPattern3 from '../../../assets/Products/B104FlatPattern.jpg';
import ProductDislpay4 from '../../../assets/Products/B102Display.jpg';
import ProductDislpay5 from '../../../assets/Products/B102Pillow.jpg';
import ProductDislpay6 from '../../../assets/Products/B104Display.jpg';
import ProductDislpay7 from '../../../assets/Products/B104Pillow.jpg';
import ProductDislpay8 from '../../../assets/Products/B103Display.jpg';
import ProductDislpay9 from '../../../assets/Products/B103Pillow.jpg';

const SecondSection = () => {
    const lookbookItems = [
        {
            title: "Elegant Floral Bedsheet Collection",
            backgroundImage: ProductFlatPattern1,
            items: [
                {
                    title: "Elegant Floral Bedsheet - Queen Size",
                    image: ProductDislpay4,
                    price: "$89.99",
                    regularPrice: "$99.99",
                    detailLink: "/products/elegant-floral-bedsheet-queen",
                    position: { top: '45%', left: '59%' },
                    modalId: "elegant-floral-queen-modal"
                },
                {
                    title: "Elegant Floral Bedsheet - King Size",
                    image: ProductDislpay5,
                    price: "$99.99",
                    detailLink: "/products/elegant-floral-bedsheet-king",
                    position: { top: '90%', left: '79%' },
                    modalId: "elegant-floral-king-modal"
                }
            ]
        },
        {
            title: "Vintage Floral Print Bedsheet",
            backgroundImage: ProductFlatPattern3,
            items: [
                {
                    title: "Vintage Floral Bedsheet - Double Size",
                    image: ProductDislpay6,
                    price: "$79.90",
                    regularPrice: "$89.90",
                    detailLink: "/products/vintage-floral-bedsheet-double",
                    position: { top: '36%', left: '40%' },
                    modalId: "vintage-floral-double-modal"
                },
                {
                    title: "Vintage Floral Bedsheet - Single Size",
                    image: ProductDislpay7,
                    price: "$59.90",
                    detailLink: "/products/vintage-floral-bedsheet-single",
                    position: { top: '80%', left: '51%' },
                    modalId: "vintage-floral-single-modal"
                }
            ]
        },
        {
            title: "Luxury Silk Bedsheet Set",
            backgroundImage: ProductFlatPattern2,
            items: [
                {
                    title: "Luxury Silk Bedsheet - Queen Size",
                    image: ProductDislpay8,
                    price: "$149.00",
                    regularPrice: "$179.00",
                    detailLink: "/products/luxury-silk-bedsheet-queen",
                    position: { top: '39%', left: '39%' },
                    modalId: "luxury-silk-queen-modal"
                },
                {
                    title: "Luxury Silk Bedsheet - King Size",
                    image: ProductDislpay9,
                    price: "$169.00",
                    detailLink: "/products/luxury-silk-bedsheet-king",
                    position: { top: '56%', left: '61%' },
                    modalId: "luxury-silk-king-modal"
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
                                    style={{
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
                                                <a className="lookbook-product__img img-fluid" href={item.detailLink}>
                                                    <img className="img-fluid" src={item.image} alt={item.title} />
                                                </a>
                                                <div className="lookbook-product__content">
                                                    <a className="lookbook-product__title" href={item.detailLink}>{item.title}</a>
                                                    <div className="lookbook-product__price">
                                                        <div className="product-price"><span className="money">{item.price}</span></div>
                                                        {item.regularPrice && (
                                                            <div className="product-price product-price--regular ms-1"><span className="money">{item.regularPrice}</span></div>
                                                        )}
                                                    </div>
                                                    <div className="lookbook-product__bottom">
                                                        <a className="lookbook-product__detail" href={item.detailLink}>View detail</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id={item.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{item.title}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="lookbook-product">
                                                        <a className="lookbook-product__img img-fluid" href={item.detailLink}>
                                                            <img className="img-fluid" src={item.image} alt={item.title} />
                                                        </a>
                                                        <div className="lookbook-product__content">
                                                            <a className="lookbook-product__title" href={item.detailLink}>{item.title}</a>
                                                            <div className="lookbook-product__price">
                                                                <div className="product-price"><span className="money">{item.price}</span></div>
                                                                {item.regularPrice && (
                                                                    <div className="product-price product-price--regular ms-1"><span className="money">{item.regularPrice}</span></div>
                                                                )}
                                                            </div>
                                                            <div className="lookbook-product__bottom">
                                                                <a className="lookbook-product__detail" href={item.detailLink}>View detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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