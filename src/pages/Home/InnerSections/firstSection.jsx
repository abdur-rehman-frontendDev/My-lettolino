import React from 'react';

const FirstSection = () => {
    return (

        <div className="shopify-section velaFramework">
            <div
                style={{
                    padding: '230px 0 70px 0', margin: '0 0 30px',
                    backgroundImage: 'url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/d95pXDVw95c58Dkq/img-20240629-wa0052-dJoJv4G0GvI1Kq6Q.jpg)',
                    backgroundAttachment: 'fixed', backgroundPosition: 'center center',
                    backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '114.5%',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}></div>
                <div className="container-full">
                    <div className="container captionWrap">
                        <div className="slideshow-caption__inner text-start align-bottom">
                            <div className="slideshow-caption__content text-start">
                                <div className="slideshow-caption__heading--small h3"
                                    style={{ color: '#fafafa', fontSize: '58px',fontWeight:'bold' }}>
                                    Hand-Printed Bedsheets Collection
                                </div>
                                <div className="slideshow-caption__desc mb-0 text bottomtop-4"
                                    style={{ color: '#fafafa', fontSize: '18px', textAlign: 'start' }}>
                                    Discover our exclusive range of meticulously crafted bedsheets
                                    for a <br /> touch of artistry and elegance.
                                </div>
                                <div>
                                    <a className="btn slideshow-caption__btn bottomtop-5" href="#"
                                        style={{
                                            borderRadius: '30px', borderColor: '#4e4e4e',
                                            backgroundColor: '#4e4e4e', color: '#ffffff',
                                            fontSize: '14px', padding: '16px 50px'
                                        }}
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
    );
};

export default FirstSection;