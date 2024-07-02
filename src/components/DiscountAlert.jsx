import React from 'react';

const DiscountAlert = () => {
    return (
        <div
            className="shopify-section"
            id="shopify-section-announcement-bar"
        >
            <link
                href="//vela-demo-1.myshopify.com/cdn/shop/t/19/assets/disclosure.css?v=111603181540343972631642350575"
                media="all"
                rel="stylesheet"
                type="text/css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: '    .announcement-bar {        color: #999999;        background-color: #000000;        font-family: var(--font-special-family);        font-size: 14px;}    .announcement-bar .disclosure__button {        color: #999999;        font-size: 14px;    }    .announcement-bar .text,    .announcement-bar a {        color: #999999;    }    .announcement-bar .text:hover,    .announcement-bar a:hover {        color: var(--primary);    }'
                }}
                data-shopify=""
            />
            <div className="announcement-bar">
                <div className="container">
                    <div className="announcement-bar__inner">
                        <div className="announcement-bar__text-left">
                            <a
                                className="topbar-text"
                                href="tel:0123456789"
                            >
                                <i className="icon-phone" />
                                {' '}+0123 456 789
                            </a>
                            <a
                                className="topbar-text"
                                href="mailto:support@email.com"
                            >
                                <i className="icon-envelope" />
                                {' '}support@email.com
                            </a>
                        </div>
                        <div className="announcement-bar__disclosure">
                            <div className="header-account">
                                <a href="/account/login">
                                    Log in
                                </a>
                                <a href="/account/register">
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountAlert;