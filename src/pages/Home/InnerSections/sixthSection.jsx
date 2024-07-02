import React from 'react';

const SixthSection = () => {
    const customCss = `
            @media(min-width: 1200px) {
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text-content .wrapper {
                    padding: 0 80px 0 30px;
                }
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__text--1 {
                    color: #000000;
                    font-size: 20px;
                    margin: 0 0 20px 0;
                }
            }
            @media(min-width: 768px) {
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__text--1 {
                    color: #000000;
                    font-size: 26px;
                    margin: 0 0 30px 0;
                }
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__text--2 {
                    color: #666666;
                    font-size: 14px;
                    margin: 0 0 40px 0;
                }
            }
            @media(min-width: 1200px) {
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__text--1 {
                    font-size: 32px;
                    margin: 0 0 38px 0;
                }
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__text--2 {
                    font-size: 14px;
                    margin: 0 0 50px 0;
                }
            }
            #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__btn--3 {
                font-size: 14px;
                color: #ffffff;
                padding: 19px 48px;
                border-color: #000000;
                background-color: #000000;
            }
            #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__btn--3:hover {
                color: #000000;
                border-color: #000000;
                background-color: #ffffff;
            }
            @media(max-width: 768px) {
                #image-with-text-template--14349991182378__1642328945fc3849b5 .image-with-text__btn--3 {
                    font-size: 14px;
                }
            }
        `

    return (
        <div className="shopify-section velaFramework">
            <style dangerouslySetInnerHTML={{ __html: customCss }} />
            <div id="image-with-text-template--14349991182378__1642328945fc3849b5"
                className="vela-section image-with-text overflow-hidden"
                style={{ padding: '90px 0 120px' }}>
                <div className="container-full">
                    <div className="image-with-text__inner ">
                        <div className="row g-0">
                            <div className=" image-with-text-content text-start col-12 col-md-6 col-xl-6">
                                <div className="wrapper position-relative translate-middle-y top-50">
                                    <div className="image-with-text__text--1 h3 ">
                                        Weekly promotions
                                    </div>
                                    <div className="image-with-text__text--2 text" style={{fontSize:'16px'}}>
                                        Enjoy exclusive savings on our exquisite handcrafted bedsheets,
                                        designed to enhance your bedroom with unparalleled comfort and style.
                                        Discover a rotating selection of our finest creations, each meticulously
                                        crafted to elevate your sleep experience.
                                    </div>
                                    <a className="btn image-with-text__btn--3" href="/collections/all">
                                        VIEW PROMOTIONS
                                    </a>
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