import React from 'react';
import CopyrightFooter from './Copyright';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="shopify-section-footer" className="shopify-section">
            <footer id="footer" className="footer">
                <div className="footer-inner position-relative js lazyloaded">
                    <div className="footer__center">
                        <div className="container">
                            <div className="footer__center-inner">
                                <div className="row g-3 g-lg-4">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">
                                                About us
                                                <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024">
                                                    <path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" />
                                                </svg>
                                            </h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/pages/about-us" title='About us'>About us</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/pages/contact-us" title='Contact'>Contact</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/collections/all" title='Official Store'>Official Store</NavLink>
                                                    </li>
                                                    <li className="py-1">
                                                        <NavLink to="/pages/contact-us" title='Join us'>Join us</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">
                                                Support
                                                <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024">
                                                    <path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" />
                                                </svg>
                                            </h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/policies/shipping-policy" title='Shipping & Return'>Shipping &amp; Return</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/policies/privacy-policy" title='Privacy Policy'>Privacy Policy</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/policies/terms-of-service" title='Terms & Conditions'>Terms &amp; Conditions</NavLink>
                                                    </li>
                                                    <li className="py-1">
                                                        <NavLink to="/pages/faqs" title='F.A.Qs'>F.A.Qs</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-link-list accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">
                                                My account
                                                <svg className="float-end d-block d-md-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024">
                                                    <path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" />
                                                </svg>
                                            </h4>
                                            <div className="footer-link-list-content accordion-footer__content">
                                                <ul className="footer-links list-unstyled mb-0">
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/account/login" title='Login'>Login</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/account/register" title='Register'>Register</NavLink>
                                                    </li>
                                                    <li className="py-1 mb-md-2">
                                                        <NavLink to="/account" title='Order History'>Order History</NavLink>
                                                    </li>
                                                    <li className="py-1">
                                                        <NavLink to="/checkout" title='Check out'>Check out</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="footer-newsletter accordion-footer">
                                            <h4 className="footer__title py-2 py-md-3 mb-0 mb-md-3">
                                                Newsletter
                                                <svg className="float-end d-block d-sm-none me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 1024">
                                                    <path d="M528 0q14 0 24 10q4 3 6 7t3 8.5t1 9t-1 8.5t-3 8t-6 8L96 515l450 450q6 6 8.5 15t0 18t-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z" fill="currentColor" />
                                                </svg>
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
                    <CopyrightFooter />
                </div>
            </footer >
        </div>
    );
};

export default Footer;