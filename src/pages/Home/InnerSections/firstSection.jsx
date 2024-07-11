import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from '../../../assets/images/slider1.jpeg';
import Slider2 from '../../../assets/images/slider2.jpeg';
import Slider3 from '../../../assets/images/slider3.jpeg';

const FirstSection = () => {

    const sliderData = [
        {
            id: 1,
            title: 'Hand-Printed Bedsheets Collection',
            subTitle: `Discover our exclusive range of meticulously crafted bedsheets for a touch of artistry and elegance.`,
            image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/d95pXDVw95c58Dkq/img-20240629-wa0052-dJoJv4G0GvI1Kq6Q.jpg',
        },
        {
            id: 2,
            title: 'Hand-Printed Bedsheets Collection',
            subTitle: `Discover our exclusive range of meticulously crafted bedsheets for a touch of artistry and elegance.`,
            image: Slider1
        },
        {
            id: 3,
            title: 'Hand-Printed Bedsheets Collection',
            subTitle: `Discover our exclusive range of meticulously crafted bedsheets for a touch of artistry and elegance.`,
            image: Slider2
        },
        {
            id: 4,
            title: 'Hand-Printed Bedsheets Collection',
            subTitle: `Discover our exclusive range of meticulously crafted bedsheets for a touch of artistry and elegance.`,
            image: Slider3
        },

    ]
    return (

        <div className="shopify-section velaFramework">
            <Swiper
                slidesPerGroup={1}
                autoHeight={true}
                className='cus-First_swiper'
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                rewind={true}
                loop={true}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide className='cus-Slider' key={index}>
                        <div
                            style={{
                                position: 'relative',
                                height: '100%',
                                backgroundImage: `url(${slide.image})`,
                                backgroundAttachment: 'fixed', backgroundPosition: 'center center',
                                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                            }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }}></div>
                            <div className="container-full"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0'
                                }}>
                                <div className="container captionWrap">
                                    <div className="slideshow-caption__inner text-start align-bottom">
                                        <div className="slideshow-caption__content text-start">
                                            <div className="slideshow-caption__heading--small h3"
                                                style={{ color: '#fafafa', fontSize: '58px', fontWeight: 'bold' }}>
                                                {slide.title}
                                            </div>
                                            <div className="slideshow-caption__desc mb-0 text bottomtop-4"
                                                style={{ color: '#fafafa', fontSize: '18px', textAlign: 'start' }}>
                                                {slide.subTitle}
                                            </div>
                                            <div>
                                                <NavLink className="btn slideshow-caption__btn bottomtop-5" to="/My-lettolino/shop"
                                                    style={{
                                                        borderRadius: '30px', borderColor: '#4e4e4e',
                                                        backgroundColor: '#4e4e4e', color: '#ffffff',
                                                        fontSize: '14px', padding: '16px 50px'
                                                    }}
                                                >
                                                    Explore
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
};

export default FirstSection;