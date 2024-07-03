import React from 'react';

const FirstSection = () => {
    return (
        <div className="js-vela-slideshow vela-slideshow slick-initialized slick-slider" data-autoplay="false" data-autoplayinterval={8000} data-navigation="true" data-pagination="false" data-fade="true">
            <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
            <div className="slick-track" style={{ opacity: 1 }}>
                <div className="vela-slideshow__item slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false"
                    style={{ width: '100%', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1 }}>
                    <div className="card__image position-relative js lazyloaded"
                        style={{
                            padding: '19%',
                            backgroundImage: 'url("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/d95pXDVw95c58Dkq/img-20240629-wa0052-dJoJv4G0GvI1Kq6Q.jpg")'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}></div>
                    </div>
                    <div className="slideshow-caption">
                        <div className="container captionWrap">
                            <div className="slideshow-caption__inner text-start align-bottom">
                                <div className="slideshow-caption__content text-start">
                                    <div className="slideshow-caption__heading--small h3" style={{ color: '#fafafa', fontSize: '60px' }}>
                                        Hand-Printed Bedsheets Collection
                                    </div>
                                    <div className="slideshow-caption__desc mb-0 text bottomtop-4" style={{ color: '#fafafa', fontSize: '19px', textAlign: 'start' }}>
                                        Discover our exclusive range of meticulously crafted bedsheets for a <br /> touch of artistry and elegance.
                                    </div>
                                    <div>
                                        <a className="btn slideshow-caption__btn bottomtop-5" href="#"
                                            style={{ borderRadius: '30px', borderColor: '#4e4e4e', backgroundColor: '#4e4e4e', color: '#ffffff', fontSize: '14px', padding: '16px 50px' }}
                                        >
                                            Explore
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>
        </div>
    );
};

export default FirstSection;