import React from 'react';

const Footer = () => {
    return (
        <div id="shopify-section-footer" className="shopify-section">
            <footer id="footer" className="footer">
                <div className="footer-inner position-relative js lazyloaded">
                    {/* <div className="footer__top">
                        <div className="container">
                            <div className="footer__top-inner">
                                <div className="row g-3 g-lg-4"><div className="col-12 col-md-6 col-lg-4">
                                    <div className="footer-info accordion-footer"><h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">Contact us<svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4><div className="footer-info-content  accordion-footer__content">
                                        <div className="footer-info--address py-1 mb-md-2 d-flex align-items-center">
                                            <i className="icons me-3 d-none">
                                                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" /></svg>
                                            </i>
                                            221b Notingham Forest - London - UK
                                        </div>
                                        <div className="footer-info--phone py-1 mb-md-2 d-flex align-items-center">
                                            <i className="icons me-3 d-none">
                                                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" /></svg>
                                            </i>
                                            0123 456 789 - 0123 987 654
                                        </div>
                                        <div className="footer-info--email py-1 mb-md-2 d-flex align-items-center">
                                            <i className="icons me-3 d-none">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                                            </i>
                                            info@yourdomain.com
                                        </div>
                                    </div>
                                    </div>
                                </div><div className="col-12 col-md-6 col-lg-4">
                                        <div className="footer-twitter accordion-footer"><h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">Recent Tweet<svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4><div className="footer-info-content  accordion-footer__content"><a className="twitter-timeline" href="https://twitter.com/velatheme" data-chrome="noheader nofooter noborders transparent " data-theme="dark" data-link-color="#fe5252" data-tweet-limit={2} />
                                        </div>
                                        </div>
                                    </div><div className="col-12 col-md-6 col-lg-4">
                                        <div className="footer-image-list accordion-footer"><h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">Instagram<svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4><div className="footer-info-content pt-2 accordion-footer__content">
                                            <div className="row g-2 row-cols-4">
                                                <a href="https://www.instagram.com/p/BgQsZZLlb9c/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_1080x1080_crop_center.jpg?v=1641696513 1080w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_1080x1080_crop_center.jpg?v=1641696513 1080w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-1_1080x1080_crop_center.jpg?v=1641696513 1080w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsSKVl7LX/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_612x612_crop_center.jpg?v=1641696513 612w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_612x612_crop_center.jpg?v=1641696513 612w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-2_612x612_crop_center.jpg?v=1641696513 612w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsQymFuHU/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_180x180_crop_center.jpg?v=1641696514")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_1080x1080_crop_center.jpg?v=1641696514 1080w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3.jpg?v=1641696514" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_1080x1080_crop_center.jpg?v=1641696514 1080w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-3_1080x1080_crop_center.jpg?v=1641696514 1080w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsOeplJVo/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_180x180_crop_center.jpg?v=1641696514")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_1080x1080_crop_center.jpg?v=1641696514 1080w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5.jpg?v=1641696514" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_1080x1080_crop_center.jpg?v=1641696514 1080w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_180x180_crop_center.jpg?v=1641696514 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_360x360_crop_center.jpg?v=1641696514 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_540x540_crop_center.jpg?v=1641696514 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_720x720_crop_center.jpg?v=1641696514 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_900x900_crop_center.jpg?v=1641696514 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-5_1080x1080_crop_center.jpg?v=1641696514 1080w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsPdvlOr5/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_958x958_crop_center.jpg?v=1641696513 958w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_958x958_crop_center.jpg?v=1641696513 958w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-4_958x958_crop_center.jpg?v=1641696513 958w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsNaUFikk/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_899x899_crop_center.jpg?v=1641696513 899w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_899x899_crop_center.jpg?v=1641696513 899w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-6_899x899_crop_center.jpg?v=1641696513 899w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsL9Klyzw/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_1080x1080_crop_center.jpg?v=1641696513 1080w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_1080x1080_crop_center.jpg?v=1641696513 1080w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-7_1080x1080_crop_center.jpg?v=1641696513 1080w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                                <a href="https://www.instagram.com/p/BgQsHVYFdNd/" title="Velatheme" target="_blank">
                                                    <div className="card_wrap">
                                                        <div className="card__image position-relative js lazyloaded" style={{ paddingTop: '100%', backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_180x180_crop_center.jpg?v=1641696513")' }} aria-label data-alt data-bgset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_997x997_crop_center.jpg?v=1641696513 997w">
                                                            <noscript>&lt;img class="img-fluid noscript" src="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8.jpg?v=1641696513" /&gt;</noscript><div className="pre-loading position-absolute">
                                                                <span className="pre-loading__bar" style={{ display: 'inline-block', width: '100%' }} />
                                                                <div className="vela-loading__icon"><span /><span /><span /><span /></div>
                                                            </div><picture style={{ display: 'none' }}><source data-srcset="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_997x997_crop_center.jpg?v=1641696513 997w" sizes="97px" srcSet="//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_180x180_crop_center.jpg?v=1641696513 180w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_360x360_crop_center.jpg?v=1641696513 360w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_540x540_crop_center.jpg?v=1641696513 540w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_720x720_crop_center.jpg?v=1641696513 720w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_900x900_crop_center.jpg?v=1641696513 900w ,//vela-demo-1.myshopify.com/cdn/shop/files/instagram-8_997x997_crop_center.jpg?v=1641696513 997w" /><img alt="" className="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="contain" sizes="97px" /></picture></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div> */}
                    <div className="footer__center">
                        <div className="container">
                            <div className="footer__center-inner">
                                <div className="row g-3 g-lg-4">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer"><h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">About us <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/pages/about-us" title>About us</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/pages/contact-us" title>Contact</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/collections/all" title>Official Store</a>
                                                    </li>
                                                    <li className="py-1">
                                                        <a href="/pages/contact-us" title>Join us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">Support <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/policies/shipping-policy" title>Shipping &amp; Return</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/policies/privacy-policy" title>Privacy Policy</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/policies/terms-of-service" title>Terms &amp; Conditions</a>
                                                    </li>
                                                    <li className="py-1">
                                                        <a href="/pages/faqs" title>F.A.Qs</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer"><h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">My account <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg></h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/account/login" title>Login</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/account/register" title>Register</a>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <a href="/account" title>Order History</a>
                                                    </li>
                                                    <li className="py-1">
                                                        <a href="/checkout" title>Check out</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-newsletter accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">Newsletter
                                                <svg className="float-end d-block d-sm-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024"><path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" /></svg>
                                            </h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <div className="section-newsletter__desc">
                                                    Make sure that you're always the first who receive our latest news and promotions
                                                </div>
                                                <form action="https://velatheme.us13.list-manage.com/subscribe/post-json?u=4d8c80acdd82f3c48d27467f6&id=d52e6e4f14&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="js-vela-newsletter formNewsletter clearfix">
                                                    <div className="input-group">
                                                        <input className="js-input-newsletter form-control" type="email" defaultValue='' placeholder="Enter your email..." name="EMAIL" id="mail" aria-label="Enter your email..." aria-describedby="btn-newsletter" required />
                                                        <span className="p-0">
                                                            <button className="btn btn--newsletter btn-default" type="submit">
                                                                <span className="text">Register</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="footer__bottom-inner py-3">
                                <div className="row align-items-center justify-content-between py-1"><div className="copyright col-12 col-md-auto d-flex justify-content-center mt-1 mt-md-0">
                                    Copyright © 2024 lettolino. All Right Reserved.
                                </div><div className="copyright-social col-12 col-md-auto mt-1 mt-md-0"><div className="social-link">
                                    <ul className="d-flex flex-wrap footer-social list-unstyled mb-0"><li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative" href="https://facebook.com" title="Facebook"><svg className="icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z" /></svg><span className="text">Facebook</span>
                                        </a>
                                    </li><li className="social-icons-item">
                                            <a className="social-icons--link text-center position-relative" href="https://twitter.com" title="Twitter"><svg className="icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg><span className="text">Twitter</span>
                                            </a>
                                        </li><li className="social-icons-item">
                                            <a className="social-icons--link text-center position-relative" href="http://instagram.com" title="Instagram"><svg className="icon-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg><span className="text">Instagram</span>
                                            </a>
                                        </li><li className="social-icons-item">
                                            <a className="social-icons--link text-center position-relative" href="https://tiktok.com" title="Tiktok"><svg className="icon-tiktok" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 838 588" xmlSpace="preserve"><g><path fill="currentColor" d="M643.3,166.4c-29.2,0-56.2-9.7-77.8-26c-24.8-18.7-42.7-46.2-49-77.8c-1.6-7.8-2.4-15.9-2.5-24.2h-83.5v228.1l-0.1,124.9 c0,33.4-21.8,61.7-51.9,71.7c-8.8,2.9-18.2,4.3-28,3.7c-12.6-0.7-24.3-4.5-34.6-10.6c-21.8-13-36.5-36.6-36.9-63.7 c-0.6-42.2,33.5-76.7,75.7-76.7c8.3,0,16.3,1.4,23.8,3.8v-62.3V235c-7.9-1.2-15.9-1.8-24.1-1.8c-46.2,0-89.4,19.2-120.3,53.8 c-23.3,26.1-37.3,59.5-39.5,94.5c-2.8,45.9,14,89.6,46.6,121.8c4.8,4.7,9.8,9.1,15.1,13.2c27.9,21.5,62.1,33.2,98.1,33.2 c8.1,0,16.2-0.6,24.1-1.8c33.6-5,64.6-20.4,89.1-44.6c30.1-29.7,46.7-69.2,46.9-111.2l-0.4-186.6c14.3,11.1,30,20.2,46.9,27.3 c26.2,11.1,54,16.6,82.5,16.6v-60.6v-22.5C643.6,166.4,643.3,166.4,643.3,166.4L643.3,166.4z" /></g></svg><span className="text">Tiktok</span>
                                            </a>
                                        </li><li className="social-icons-item">
                                            <a className="social-icons--link text-center position-relative" href="https://www.youtube.com" title="YouTube"><svg className="icon-youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg><span className="text">YouTube</span>
                                            </a>
                                        </li></ul>
                                </div></div></div>
                            </div>
                        </div>
                    </div >
                </div>
            </footer >
        </div>
    );
};

export default Footer;