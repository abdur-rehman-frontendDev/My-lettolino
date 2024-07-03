import React from 'react';

const productData = [
    {
        id: 1,
        name: 'Geometric Design Bedsheet',
        price: '$39.99',
        imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
        imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
        url: '/products/geometric-design-bedsheet',
    },
    {
        id: 2,
        name: 'Paisley Pattern Bedsheet',
        price: '$34.99',
        imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
        imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
        url: '/products/paisley-pattern-bedsheet',
    },
    {
        id: 3,
        name: 'Classic White Bedsheet',
        price: '$25.99',
        imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
        imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
        url: '/products/classic-white-bedsheet',
    },
    {
        id: 4,
        name: 'Vintage Striped Bedsheet',
        price: '$37.99',
        imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
        imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
        url: '/products/vintage-striped-bedsheet',
    },
    {
        id: 5,
        name: 'Geometric Design Bedsheet',
        price: '$39.99',
        imgPrimary: 'https://i.ibb.co/cxj94mm/B102-Display.jpg',
        imgSecondary: 'https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg',
        url: '/products/geometric-design-bedsheet',
    },
    {
        id: 6,
        name: 'Paisley Pattern Bedsheet',
        price: '$34.99',
        imgPrimary: 'https://i.ibb.co/qjFgsW9/B103-Display.jpg',
        imgSecondary: 'https://i.ibb.co/Bqqd2MN/B103-Closeup.jpg',
        url: '/products/paisley-pattern-bedsheet',
        discount: -50
    },
    {
        id: 7,
        name: 'Classic White Bedsheet',
        price: '$25.99',
        imgPrimary: 'https://i.ibb.co/mqD5FWP/B104-Display.jpg',
        imgSecondary: 'https://i.ibb.co/s1qxWXj/B104-Closeup.jpg',
        url: '/products/classic-white-bedsheet',
    },
    {
        id: 8,
        name: 'Vintage Striped Bedsheet',
        price: '$37.99',
        imgPrimary: 'https://i.ibb.co/qnrW0d9/B105-Main-Display.jpg',
        imgSecondary: 'https://i.ibb.co/5YSfKr2/B105-Closeup.jpg',
        url: '/products/vintage-striped-bedsheet',
        discount: -20
    },
];

const FourthSection = () => {
    return (
        <div className="shopify-section velaFramework">
            <section className="vela-section overflow-hidden"
                style={{ padding: '90px 0 50px', margin: '0 0 30px' }}>
                <div className="container">
                    <div className="vela-section__inner">
                        <div className="heading-group">
                            <h3 className="heading">
                                <span>New Arrivals</span>
                            </h3>
                            <div className="sub-heading">
                                Explore our artisanal handmade bedsheets, each piece crafted with care to elevate your comfort and style.
                            </div>
                        </div>
                        <div className="vela-section__content">
                            <div className="js-carousel slick-carousel slick-initialized slick-slider" data-nav="true" data-infinite="true" data-autoplay="false" data-autoplayspeed={10000} data-columnone={4} data-columntwo={3} data-columnthree={2} data-columnfour={2}>
                                <button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
                                <div className="slick-list draggable">
                                    <div className="slick-track" style={{ opacity: 1, width: '5860px', transform: 'translate3d(-1172px, 0px, 0px)' }}>
                                        {productData.map((product, index) => (
                                            <div className="slick-carousel__item slick-slide" style={{ width: '293px' }} key={index}>
                                                <div className="product-card product-grid">
                                                    <div className="product-card__image-wrapper">
                                                        <a className="product-card__image-link" href={product.url} >
                                                            <span className="img-primary">
                                                                <div className="card_wrap">
                                                                    <div className="card__image position-relative js lazyloaded"
                                                                        style={{
                                                                            paddingTop: '136.58%',
                                                                            backgroundImage: `url(${product.imgPrimary})`
                                                                        }}
                                                                    >
                                                                        {product.discount &&
                                                                            (<div className="product-card__label">
                                                                                <span className="label-on-sale">
                                                                                    <span className="d-block overflow-hidden">{product.discount}%</span>
                                                                                </span>
                                                                            </div>)
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </span>
                                                            <span className="img-secondary position-absolute">
                                                                <div className="card_wrap">
                                                                    <div className="card__image position-relative js lazyloaded"
                                                                        style={{
                                                                            paddingTop: '136.58%',
                                                                            backgroundImage: `url(${product.imgSecondary})`
                                                                        }}
                                                                    >
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </a>
                                                        <div className="product-card__buttons position-absolute d-flex w-100 align-items-center start-0 end-0">
                                                            <div className="product-card__form w-100 mx-1">
                                                                <form action="/cart/add" method="post" encType="multipart/form-data" className="form-addtocart" data-product-form>
                                                                    <input type="hidden" name="id" defaultValue={product.id} />
                                                                    <button className="js-btn-addtocart btn btn--add-to-cart btn-default" type="submit" value="Submit" title="Add to Cart" >
                                                                        <span>Add to Cart</span>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                            <a className="js-btn-quickview d-flex justify-content-center align-items-center btn--quickview mx-1 btn-default" href="#" data-handle="jean-body-curve" title="Quickview" >
                                                                <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 1056 896">
                                                                    <path fill="currentColor" d="M531 257q-39 0-74.5 15.5t-61 41t-41 61T339 449t15.5 75t41 61.5t61 40.5t74.5 15q53 0 97-25.5t69.5-69.5t25.5-97q0-79-56-135.5T531 257zm0 320q-34 0-64-17.5t-47.5-47T402 448q0-26 10-49.5t27.5-41t41-27.5t49.5-10q53 0 90.5 37.5T658 448t-37 91t-90 38zm509-136q0-1-.5-2.5t-.5-2.5t-.5-1.5l-.5-.5v-1l-1-2q-68-157-206-246.5T530 95q-107 0-206 39T144.5 249.5T18 431v2.5l-1 1.5v3l-1 2q-1 6-1 9q0 2 .5 4t.5 4q0 1 1 3v2l.5 1.5l.5.5v3q69 157 207.5 245.5T528 801q107 0 205.5-38.5T912 648t125-181q1 0 1-1v-1.5l.5-1l.5-.5v-3l1-2q1-6 1-9q0-2-.5-4t-.5-4zM528 737q-142 0-263-74.5T81 449q63-139 185-214.5T530 159q92 0 176.5 32T862 289.5T975 449q-63 139-184 213.5T528 737z" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-card__content text-center pt-1">
                                                        <div className="product-card__content--inner  position-relative mt-3">
                                                            <div className="product-card__name">
                                                                <a href={product.url}>{product.name}</a>
                                                            </div>
                                                            <div className="product-group-price d-flex align-items-center justify-content-center">
                                                                <div className="product-price ">
                                                                    <span className="money">{product.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FourthSection;
