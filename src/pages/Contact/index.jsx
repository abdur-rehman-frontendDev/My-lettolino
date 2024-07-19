import React from 'react';

const ContactPage = () => {
    return (
        <>
            <div className="container py-5" style={{ maxWidth: '1200px' }}>
                <div className="heading-group">
                    <h1 className="heading mb-2 mb-md-2">
                        <span style={{ fontSize: '35px', fontWeight: 'bold' }}>
                            Contact Us for Exclusive <br /> Bedding Collection
                        </span>
                    </h1>
                    <div className="sub-heading pt-3"
                        style={{ fontSize: '18px' }}>
                        Reach out to us for exquisite hand-printed<br /> bedsheets and quality service.
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-6 mb-4" style={{ padding: '0px 30px' }}>
                        <h2 className="contact-form__title mb-4 mb-lg-5 text-uppercase position-relative pb-3">
                            Contact Us
                        </h2>
                        <div className="row g-3 mb-3">
                            <div className="col-12 col-md-6">
                                <label
                                    className="form__label mb-2"
                                    htmlFor="ContactForm-name"
                                >
                                    Name
                                    <span
                                        aria-hidden="true"
                                        className="text-danger"
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    className="form-control"
                                    defaultValue=""
                                    id="-name"
                                    name="contact[Name]"
                                    required
                                    type="text"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label
                                    className="form__label mb-2"
                                    htmlFor="ContactForm-email"
                                >
                                    Email{' '}
                                    <span
                                        aria-hidden="true"
                                        className="text-danger"
                                    >
                                        *
                                    </span>
                                </label>
                                <input
                                    aria-required="true"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    className="form-control"
                                    defaultValue=""
                                    id="-email"
                                    name="contact[email]"
                                    required
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="form-group">
                                <label
                                    className="form__label mb-2"
                                    htmlFor="ContactForm-phone"
                                >
                                    Phone number
                                </label>
                                <input
                                    autoComplete="tel"
                                    className="form-control"
                                    defaultValue=""
                                    id="ContactForm-phone"
                                    name="contact[Phone number]"
                                    pattern="[0-9\-]*"
                                    type="tel"
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label
                                    className="form__label mb-2"
                                    htmlFor="ContactForm-body"
                                >
                                    Comment
                                    <span
                                        aria-hidden="true"
                                        className="text-danger"
                                    >
                                        *
                                    </span>
                                </label>
                                <textarea
                                    className="form-control"
                                    id="-message"
                                    name="contact[Comment]"
                                    required
                                    rows="10"
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-default lh-lg w-100"
                            type="submit"
                        >
                            Send your message
                        </button>
                    </div>
                    <div className="col-12 col-md-6" style={{ padding: '0px 30px' }}>
                        <div className="contact_form__map d-flex w-100">
                            <iframe
                                allowFullScreen
                                height="400px"
                                loading="lazy"
                                src="https://maps.google.com/maps?q=A-8%2C%20Mughal%20Homes%2C%20Lahore&t=m&z=13&ie=UTF8&output=embed"
                                style={{
                                    border: '0'
                                }}
                                width="100%"
                            />
                        </div>
                        <div className="contact_form__infor map-info position-relative p-4">
                            <div className="map-info__content">
                                <div className="map-info__item map-info__address d-flex mb-3">
                                    <i className="icons me-3">
                                        <svg
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </i>
                                    <div>
                                        Palace Building - 221b Baker Street - London - UK
                                    </div>
                                </div>
                                <div className="map-info__item map-info__phone d-flex mb-3">
                                    <i className="icons me-3">
                                        <svg
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </i>
                                    <div>
                                        +92 306 5386682
                                    </div>
                                </div>
                                <div className="map-info__item map-info__email d-flex mb-3">
                                    <i className="icons me-3">
                                        <svg
                                            viewBox="0 0 512 512"
                                            width="16px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </i>
                                    <div>
                                        info@lettolino.com
                                    </div>
                                </div>
                                <div className="map-info__item map-info__email d-flex">
                                    <i className="icons me-3">
                                        <svg
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </i>
                                    <div>
                                        <p>
                                            Mon - Fri : 12:00 - 7:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactPage