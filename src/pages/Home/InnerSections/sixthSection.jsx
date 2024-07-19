import React from 'react';
import { NavLink } from 'react-router-dom';

const SixthSection = () => {

    return (
        <div className="shopify-section velaFramework">
            <div id=""
                className="vela-section image-with-text overflow-hidden"
                style={{ padding: '40px 20px 60px' }}>
                <div className="container-full">
                    <div className="image-with-text__inner ">
                        <div className="row g-0">
                            <div className=" image-with-text-content text-start col-12 col-md-6 col-xl-6">
                                <div className="wrapper position-relative translate-middle-y top-50">
                                    <div className="image-with-text__text--1 h3 ">
                                        Weekly promotions
                                    </div>
                                    <div className="image-with-text__text--2 text" style={{ fontSize: '16px' }}>
                                        Enjoy exclusive savings on our exquisite handcrafted bedsheets,
                                        designed to enhance your bedroom with unparalleled comfort and style.
                                        Discover a rotating selection of our finest creations, each meticulously
                                        crafted to elevate your sleep experience.
                                    </div>
                                    <NavLink className="btn image-with-text__btn--3" to="/My-lettolino/shop">
                                        VIEW PROMOTIONS
                                    </NavLink>
                                </div>
                            </div><div className=" col-12 col-md-6 col-xl-6">
                                <div className="image-with-text__image position-relative">
                                    <div className="card_wrap">
                                        <div className="card__image position-relative js lazyloaded"
                                            style={{
                                                paddingTop: '56%',
                                                backgroundImage: 'url("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/d95pXDVw95c58Dkq/whatsapp-image-2024-06-29-at-11.37.30-YBgp2pjPXqsg25w7.jpeg")'
                                            }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;