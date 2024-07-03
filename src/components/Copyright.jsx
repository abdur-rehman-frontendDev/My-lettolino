import React from 'react';

const CopyrightFooter = () => {
    return (
        <div className="footer__bottom">
            <div className="container">
                <div className="footer__bottom-inner py-3">
                    <div className="row align-items-center justify-content-between py-1">
                        <div className="copyright col-12 col-md-auto d-flex justify-content-center mt-1 mt-md-0">
                            Copyright © 2024 lettolino. All Right Reserved.
                        </div>
                        <div className="copyright-social col-12 col-md-auto mt-1 mt-md-0">
                            <div className="social-link">
                                <ul className="d-flex flex-wrap footer-social list-unstyled mb-0">
                                    <li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative"
                                            href="https://facebook.com" title="Facebook">
                                            <svg className="icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512">
                                                <path fill="currentColor" d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z" />
                                            </svg>
                                            <span className="text">
                                                Facebook
                                            </span>
                                        </a>
                                    </li>
                                    <li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative"
                                            href="https://twitter.com" title="Twitter">
                                            <svg className="icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                            <span className="text">
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                    <li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative"
                                            href="http://instagram.com" title="Instagram">
                                            <svg className="icon-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                            <span className="text">
                                                Instagram
                                            </span>
                                        </a>
                                    </li>
                                    <li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative"
                                            href="https://tiktok.com" title="Tiktok">
                                            <svg className="icon-tiktok" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 838 588" xmlSpace="preserve"><g>
                                                <path fill="currentColor" d="M643.3,166.4c-29.2,0-56.2-9.7-77.8-26c-24.8-18.7-42.7-46.2-49-77.8c-1.6-7.8-2.4-15.9-2.5-24.2h-83.5v228.1l-0.1,124.9 c0,33.4-21.8,61.7-51.9,71.7c-8.8,2.9-18.2,4.3-28,3.7c-12.6-0.7-24.3-4.5-34.6-10.6c-21.8-13-36.5-36.6-36.9-63.7 c-0.6-42.2,33.5-76.7,75.7-76.7c8.3,0,16.3,1.4,23.8,3.8v-62.3V235c-7.9-1.2-15.9-1.8-24.1-1.8c-46.2,0-89.4,19.2-120.3,53.8 c-23.3,26.1-37.3,59.5-39.5,94.5c-2.8,45.9,14,89.6,46.6,121.8c4.8,4.7,9.8,9.1,15.1,13.2c27.9,21.5,62.1,33.2,98.1,33.2 c8.1,0,16.2-0.6,24.1-1.8c33.6-5,64.6-20.4,89.1-44.6c30.1-29.7,46.7-69.2,46.9-111.2l-0.4-186.6c14.3,11.1,30,20.2,46.9,27.3 c26.2,11.1,54,16.6,82.5,16.6v-60.6v-22.5C643.6,166.4,643.3,166.4,643.3,166.4L643.3,166.4z" /></g>
                                            </svg>
                                            <span className="text">
                                                Tiktok
                                            </span>
                                        </a>
                                    </li>
                                    <li className="social-icons-item">
                                        <a className="social-icons--link text-center position-relative"
                                            href="https://www.youtube.com" title="YouTube"
                                        ><svg className="icon-youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                            </svg>
                                            <span className="text">
                                                YouTube
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CopyrightFooter;