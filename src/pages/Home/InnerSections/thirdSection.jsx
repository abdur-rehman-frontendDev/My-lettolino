import React from 'react';

const ThirdSection = () => {
    const customCss = `
        .background-parallax__text--1 {
            color: #e4a958;
            font-size: 30px;
            margin: 0 0 10px;
        }
        @media(min-width: 768px) {
            .background-parallax__text--1 {
                font-size: 50px;
                margin: 0 0 30px;
            }
        }
        @media(min-width: 1200px) {
            .background-parallax__text--1 {
                font-size: 60px;
            }
        }
        .background-parallax__text--2 a{
            color: #121212;
            font-size: 20px;
        }
        .background-parallax__text--2 a:hover{
            color: #e4a958;
        }
        @media(min-width: 768px) {
            .background-parallax__text--2 a{
                font-size: 22px;
            }
            .background-parallax__text--2 a:hover{
            color: #e4a958;
        }
        }
        @media(min-width: 1200px) {
            .background-parallax__text--2 a{
                font-size: 30px;
                color: #121212;
            }
            .background-parallax__text--2 a:hover{
            color: #e4a958;
        }
        }
    `;

    return (
        <div className="shopify-section velaFramework">
            <style dangerouslySetInnerHTML={{ __html: customCss }} />
            <div
                style={{
                    padding: '250px 0', margin: '0 0 30px',
                    backgroundImage: 'url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/d95pXDVw95c58Dkq/whatsapp-image-2024-06-29-at-11.37.12-A0xNBNvEE9FpJxXG.jpeg)',
                    backgroundAttachment: 'fixed', backgroundPosition: 'center center',
                    backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                }}>
                <div className="container-full">
                    <div className="background-parallax__inner py-5 text-center">
                        <div className="background-parallax__text--1 h3 lh-1">
                            FOR YOUR COMFORT
                        </div>
                        <div className="background-parallax__text--2 h3 lh-1">
                            <a href="/shop">
                                View Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;