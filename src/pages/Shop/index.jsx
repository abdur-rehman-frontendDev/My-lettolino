import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCart } from '../../context/CartContext';
import DetailHeader from '../Home/ProductDetail/DetailHeader';

const ShopPage = () => {

    const { addToCart } = useCart();

    const initialData = [
        {
            id: 1,
            name: 'Geometric Design Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
            imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
            price: 39.99,
            quantity: 1,
            total: 39.99,
            url: 'geometric-design-bedsheet',
        },
        {
            id: 2,
            name: 'Paisley Pattern Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
            imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
            price: 34.99,
            quantity: 1,
            total: 34.99,
            url: 'paisley-pattern-bedsheet',
        },
        {
            id: 3,
            name: 'Classic White Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
            imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
            price: 25.99,
            quantity: 1,
            total: 25.99,
            url: 'classic-white-bedsheet',
            available: 'SOLD OUT'
        },
        {
            id: 4,
            name: 'Vintage Striped Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
            imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
            price: 37.99,
            quantity: 1,
            total: 37.99,
            url: 'vintage-striped-bedsheet',
        },
        {
            id: 5,
            name: 'Classic White Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
            imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
            price: 25.99,
            quantity: 1,
            total: 25.99,
            url: 'classic-white-bedsheet',
            available: 'SOLD OUT'
        },
        {
            id: 6,
            name: 'Vintage Striped Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
            imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
            price: 37.99,
            quantity: 1,
            total: 37.99,
            url: 'vintage-striped-bedsheet',
            discount: -20,
            newPrice: 25.99
        },
        {
            id: 7,
            name: 'Geometric Design Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
            imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
            price: 39.99,
            quantity: 1,
            total: 39.99,
            url: 'geometric-design-bedsheet',
        },
        {
            id: 8,
            name: 'Paisley Pattern Bedsheet',
            vendor: 'Love & Bravery',
            imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
            imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
            price: 34.99,
            quantity: 1,
            total: 34.99,
            url: 'paisley-pattern-bedsheet',
            discount: -50,
            newPrice: 22.99
        },
    ];

    const totalRecodes = 16;
    const [productData, setProductData] = useState(initialData);
    const [modalShow, setModalShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const fetchData = () => {
        setTimeout(() => {
            const newProducts = [
                {
                    id: 9,
                    name: 'Classic White Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
                    price: 25.99,
                    quantity: 1,
                    total: 25.99,
                    url: 'classic-white-bedsheet',
                    available: 'SOLD OUT'
                },
                {
                    id: 10,
                    name: 'Vintage Striped Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
                    price: 37.99,
                    quantity: 1,
                    total: 37.99,
                    url: 'vintage-striped-bedsheet',
                    discount: -20,
                    newPrice: 25.99
                },
                {
                    id: 11,
                    name: 'Geometric Design Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
                    price: 39.99,
                    quantity: 1,
                    total: 39.99,
                    url: 'geometric-design-bedsheet',
                },
                {
                    id: 12,
                    name: 'Paisley Pattern Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
                    price: 34.99,
                    quantity: 1,
                    total: 34.99,
                    url: 'paisley-pattern-bedsheet',
                    discount: -50,
                    newPrice: 22.99
                },
                {
                    id: 13,
                    name: 'Geometric Design Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
                    price: 39.99,
                    quantity: 1,
                    total: 39.99,
                    url: 'geometric-design-bedsheet',
                },
                {
                    id: 14,
                    name: 'Paisley Pattern Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
                    price: 34.99,
                    quantity: 1,
                    total: 34.99,
                    url: 'paisley-pattern-bedsheet',
                },
                {
                    id: 15,
                    name: 'Classic White Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
                    price: 25.99,
                    quantity: 1,
                    total: 25.99,
                    url: 'classic-white-bedsheet',
                    available: 'SOLD OUT'
                },
                {
                    id: 16,
                    name: 'Vintage Striped Bedsheet',
                    vendor: 'Love & Bravery',
                    imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
                    imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
                    price: 37.99,
                    quantity: 1,
                    total: 37.99,
                    url: 'vintage-striped-bedsheet',
                },
            ];

            if (productData.length === totalRecodes) {
                return false;
            } else {
                setProductData([...productData, ...newProducts]);
            }
        }, 1500);
    };

    const handleCartQuickView = (product) => {
        setModalShow(true);
        setCurrentProduct(product);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (

        <>
            <DetailHeader />
            <div className="shopify-section velaFramework">
                <section className="vela-section overflow-hidden" style={{ padding: '0px 0 50px', margin: '0 0 30px' }}>
                    <div className="container">
                        <div className="vela-section__inner">
                            <div className="vela-section__content">
                                <InfiniteScroll
                                    dataLength={productData.length}
                                    next={fetchData}
                                    endMessage={''}
                                    hasMore={productData.length !== totalRecodes}
                                    style={{ height: '100%', overflow: 'hidden' }}
                                    loader={
                                        <h4 className='infiniteLoader'>
                                            Loading...
                                        </h4>
                                    }
                                >
                                    <div className="row g-md-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
                                        {productData.map((product, index) => (
                                            <div className="col mb-4" key={index}>
                                                <div className="product-card product-grid">
                                                    <div className="product-card__image-wrapper">
                                                        <NavLink className="product-card__image-link" to={`/lettolino/product/${product.url}`}>
                                                            <span className="img-primary">
                                                                <div className="card_wrap">
                                                                    <div className="cartCard__image position-relative js lazyloaded" style={{ paddingTop: '136.58%', backgroundImage: `url(${product.imgPrimary})` }}>
                                                                        {product.discount && (
                                                                            <div className="product-card__label">
                                                                                <span className="label-on-sale">
                                                                                    <span className="d-block overflow-hidden">{product.discount}%</span>
                                                                                </span>
                                                                            </div>
                                                                        )}
                                                                        {product.available && (
                                                                            <div className="product-card__label">
                                                                                <span className="label-sold-out">
                                                                                    <span className="d-block overflow-hidden">{product.available}</span>
                                                                                </span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                            <span className="img-secondary position-absolute">
                                                                <div className="card_wrap">
                                                                    <div className="cartCard__image position-relative js lazyloaded" style={{ paddingTop: '136.58%', backgroundImage: `url(${product.imgSecondary})` }}></div>
                                                                </div>
                                                            </span>
                                                        </NavLink>
                                                        <div className="product-card__buttons position-absolute d-flex w-100 align-items-center start-0 end-0">
                                                            <div className="product-card__form w-100 mx-1">
                                                                <button
                                                                    className="js-btn-addtocart btn btn--add-to-cart btn-default"
                                                                    onClick={() => handleAddToCart(product)}
                                                                    type="submit" value="Submit" title="Add to Cart"
                                                                >
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </div>
                                                            <NavLink
                                                                className="js-btn-quickview d-flex justify-content-center align-items-center btn--quickview mx-1 btn-default"
                                                                title="Quickview" onClick={() => handleCartQuickView(product)}
                                                            >
                                                                <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1056 896">
                                                                    <path fill="currentColor" d="M531 257q-39 0-74.5 15.5t-61 41t-41 61T339 449t15.5 75t41 61.5t61 40.5t74.5 15q53 0 97-25.5t69.5-69.5t25.5-97q0-79-56-135.5T531 257zm0 320q-34 0-64-17.5t-47.5-47T402 448q0-26 10-49.5t27.5-41t41-27.5t49.5-10q53 0 90.5 37.5T658 448t-37 91t-90 38zm509-136q0-1-.5-2.5t-.5-2.5t-.5-1.5l-.5-.5v-1l-1-2q-68-157-206-246.5T530 95q-107 0-206 39T144.5 249.5T18 431v2.5l-1 1.5v3l-1 2q-1 6-1 9q0 2 .5 4t.5 4q0 1 1 3v2l.5 1.5l.5.5v3q69 157 207.5 245.5T528 801q107 0 205.5-38.5T912 648t125-181q1 0 1-1v-1.5l.5-1l.5-.5v-3l1-2q1-6 1-9q0-2-.5-4t-.5-4zM528 737q-142 0-263-74.5T81 449q63-139 185-214.5T530 159q92 0 176.5 32T862 289.5T975 449q-63 139-184 213.5T528 737z" />
                                                                </svg>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="product-card__content text-center pt-1">
                                                        <div className="product-card__content--inner  position-relative mt-3">
                                                            <div className="product-card__name">
                                                                <NavLink className='h6' to={`/lettolino/product/${product.url}`}>{product.name}</NavLink>
                                                            </div>
                                                            <div className="product-group-price d-flex align-items-center justify-content-center">
                                                                <div className="product-price ">
                                                                    <span className="money h6">${product.price}</span>
                                                                </div>
                                                                {
                                                                    product.newPrice && (
                                                                        <div className="product-price product-price--regular ms-1">
                                                                            <span class="money h6">${product.newPrice}</span>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </InfiniteScroll>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal */}
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Body>
                    <button type="button" class="quickview__btn-close"
                        onClick={() => setModalShow(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" fill="none" viewBox="0 0 18 17">
                            <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="quickview-images__list slick-carousel mx-0 slick-initialized slick-slider">
                                <div class="slick-list draggable">
                                    <div class="slick-track"
                                        style={{ opacity: "1", width: '1588px', transform: ' translate3d(0px, 0px, 0px)' }}
                                    >
                                        <div class="slick-carousel__item px-0 slick-slide slick-current slick-active"
                                            style={{ width: '397px' }}>
                                            <div class="quickview-images__item" data-media-id="1499883241514">
                                                <img class="img-fluid" alt="Jean Body Curve"
                                                    src={currentProduct && currentProduct?.imgPrimary} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-4 mt-lg-1">
                            <div class="product__organization__text--type text-uppercase">HANDMADE BEDSHEETS</div>
                            <h2 class="product-quickview__title h3 mb-3">{currentProduct && currentProduct?.name}</h2>
                            <div class="product-avaiable product__organization product-avaiable--instock product-avaiable--active">
                                <div class="product-avaiable__label product__organization__label">
                                    Availability:
                                </div>
                                <div class="js-product-avaiable-text product-avaiable__text product-avaiable__text--instock">
                                    In stock
                                </div>
                            </div>
                            <div class="product__organization product__organization">
                                <div class="product__organization__label">
                                    SKU:
                                </div>
                                <div class="product__organization__text" data-quickview-sku="">
                                    VELA_SKU_21
                                </div>
                            </div>
                            <div class="d-flex align-items-center pt-2 mb-3">
                                <div class="product-quickview__price">
                                    <div class="price-container d-flex align-items-center">
                                        <div class="js-qv-product-price product-single__price">
                                            <span class="money">{currentProduct && currentProduct?.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-quickview__description mb-3">
                                Experience the elegance and comfort of our handmade bedsheet,
                                meticulously crafted from high-quality cotton. Featuring intricate
                                floral embroidery, this bedsheet adds a touch of sophistication
                                to any bedroom.
                            </div>
                            <div class="quickview__tex mt-5">
                                <div class="d-flex">
                                    <span class="me-2">
                                        <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#707070" d="M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm-384-512h384v-256h-158q-13 0-22 9l-195 195q-9 9-9 22v30zm1280 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm256-1088v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-.5q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19v-320q0-8-.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160v-192q0-26 19-45t45-19h1024q26 0 45 19t19 45z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="fw-bold">Free shipping on all orders over $200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ShopPage;
