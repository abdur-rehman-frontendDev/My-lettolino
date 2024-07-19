import React from 'react';
import { NavLink } from 'react-router-dom';
import ComingSoon from '../../../components/ComingSoon';

const BlogDetail = () => {
    return (
        <ComingSoon page={'Blog Detail'} />
        /*
        <div className="main-blog p-5">
            <div className="main-blog__content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-9">
                            <div className="article__list me-lg-4">
                                <div className="row">
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/lightly-dress-you-may-not-know-how-to-wear"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="Lightly dress! You may not know how to wear"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="Lightly dress! You may not know how to wear"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_180x.jpg?v=1517242146 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_360x.jpg?v=1517242146 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_540x.jpg?v=1517242146 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_720x.jpg?v=1517242146 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_900x.jpg?v=1517242146 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1080x.jpg?v=1517242146 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1170x584.jpg?v=1517242146 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_540x.jpg?v=1517242146")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11.jpg?v=1517242146"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_180x.jpg?v=1517242146 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_360x.jpg?v=1517242146 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_540x.jpg?v=1517242146 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_720x.jpg?v=1517242146 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_900x.jpg?v=1517242146 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1080x.jpg?v=1517242146 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1170x584.jpg?v=1517242146 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_180x.jpg?v=1517242146 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_360x.jpg?v=1517242146 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_540x.jpg?v=1517242146 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_720x.jpg?v=1517242146 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_900x.jpg?v=1517242146 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1080x.jpg?v=1517242146 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_1170x584.jpg?v=1517242146 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/lightly-dress-you-may-not-know-how-to-wear"
                                                        title="Lightly dress! You may not know how to wear"
                                                    >
                                                        Lightly dress! You may not know how to wear
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:18:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        1 comment
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/accessories-for-both-him-her-some-suggestions"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="Accessories for both him & her! Some suggestions"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="Accessories for both him & her! Some suggestions"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_180x.jpg?v=1517242278 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_360x.jpg?v=1517242278 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_540x.jpg?v=1517242278 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_720x.jpg?v=1517242278 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_900x.jpg?v=1517242278 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1080x.jpg?v=1517242278 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1170x584.jpg?v=1517242278 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_540x.jpg?v=1517242278")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15.jpg?v=1517242278"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_180x.jpg?v=1517242278 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_360x.jpg?v=1517242278 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_540x.jpg?v=1517242278 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_720x.jpg?v=1517242278 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_900x.jpg?v=1517242278 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1080x.jpg?v=1517242278 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1170x584.jpg?v=1517242278 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_180x.jpg?v=1517242278 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_360x.jpg?v=1517242278 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_540x.jpg?v=1517242278 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_720x.jpg?v=1517242278 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_900x.jpg?v=1517242278 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1080x.jpg?v=1517242278 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_1170x584.jpg?v=1517242278 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/accessories-for-both-him-her-some-suggestions"
                                                        title="Accessories for both him & her! Some suggestions"
                                                    >
                                                        Accessories for both him & her! Some suggestions
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:18:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        2 comments
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/hipster-style-something-that-never-get-old"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="Hipster style! Something that never get old"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="Hipster style! Something that never get old"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_180x.jpg?v=1517240184 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_360x.jpg?v=1517240184 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_540x.jpg?v=1517240184 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_720x.jpg?v=1517240184 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_900x.jpg?v=1517240184 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1080x.jpg?v=1517240184 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1170x584.jpg?v=1517240184 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_540x.jpg?v=1517240184")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9.jpg?v=1517240184"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_180x.jpg?v=1517240184 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_360x.jpg?v=1517240184 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_540x.jpg?v=1517240184 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_720x.jpg?v=1517240184 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_900x.jpg?v=1517240184 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1080x.jpg?v=1517240184 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1170x584.jpg?v=1517240184 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_180x.jpg?v=1517240184 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_360x.jpg?v=1517240184 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_540x.jpg?v=1517240184 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_720x.jpg?v=1517240184 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_900x.jpg?v=1517240184 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1080x.jpg?v=1517240184 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_1170x584.jpg?v=1517240184 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/hipster-style-something-that-never-get-old"
                                                        title="Hipster style! Something that never get old"
                                                    >
                                                        Hipster style! Something that never get old
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:18:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        0 comment
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/we-know-how-to-be-shine"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="We know how to be shine"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="We know how to be shine"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_180x.jpg?v=1517242215 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_360x.jpg?v=1517242215 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_540x.jpg?v=1517242215 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_720x.jpg?v=1517242215 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_900x.jpg?v=1517242215 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1080x.jpg?v=1517242215 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1170x584.jpg?v=1517242215 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_540x.jpg?v=1517242215")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13.jpg?v=1517242215"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_180x.jpg?v=1517242215 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_360x.jpg?v=1517242215 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_540x.jpg?v=1517242215 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_720x.jpg?v=1517242215 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_900x.jpg?v=1517242215 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1080x.jpg?v=1517242215 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1170x584.jpg?v=1517242215 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_180x.jpg?v=1517242215 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_360x.jpg?v=1517242215 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_540x.jpg?v=1517242215 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_720x.jpg?v=1517242215 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_900x.jpg?v=1517242215 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1080x.jpg?v=1517242215 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_1170x584.jpg?v=1517242215 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/we-know-how-to-be-shine"
                                                        title="We know how to be shine"
                                                    >
                                                        We know how to be shine
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:17:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        0 comment
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/how-to-be-a-gentleman-here-is-5-tips-for-you-guy"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="How to be a gentleman? Here is 5 tips for you, guy"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="How to be a gentleman? Here is 5 tips for you, guy"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_180x.jpg?v=1517240161 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_360x.jpg?v=1517240161 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_540x.jpg?v=1517240161 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_720x.jpg?v=1517240161 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_900x.jpg?v=1517240161 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1080x.jpg?v=1517240161 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1170x584.jpg?v=1517240161 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_540x.jpg?v=1517240161")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7.jpg?v=1517240161"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_180x.jpg?v=1517240161 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_360x.jpg?v=1517240161 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_540x.jpg?v=1517240161 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_720x.jpg?v=1517240161 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_900x.jpg?v=1517240161 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1080x.jpg?v=1517240161 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1170x584.jpg?v=1517240161 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_180x.jpg?v=1517240161 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_360x.jpg?v=1517240161 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_540x.jpg?v=1517240161 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_720x.jpg?v=1517240161 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_900x.jpg?v=1517240161 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1080x.jpg?v=1517240161 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_1170x584.jpg?v=1517240161 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/how-to-be-a-gentleman-here-is-5-tips-for-you-guy"
                                                        title="How to be a gentleman? Here is 5 tips for you, guy"
                                                    >
                                                        How to be a gentleman? Here is 5 tips for you, guy
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:17:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        0 comment
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <article className="article blog__grid pb-4 pb-sm-5">
                                            <div className="article__image mb-3">
                                                <a
                                                    className="article__featured-image-link"
                                                    href="/blogs/news/top-10-fashion-styles-all-girls-must-have-in-summer"
                                                >
                                                    <div className="card_wrap">
                                                        <div
                                                            aria-label="Top 10 fashion styles all girls must have in summer"
                                                            className="card__image position-relative js lazyloaded"
                                                            data-alt="Top 10 fashion styles all girls must have in summer"
                                                            data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_180x.jpg?v=1517240155 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_360x.jpg?v=1517240155 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_540x.jpg?v=1517240155 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_720x.jpg?v=1517240155 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_900x.jpg?v=1517240155 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1080x.jpg?v=1517240155 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1170x584.jpg?v=1517240155 1170w"
                                                            style={{
                                                                backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_540x.jpg?v=1517240155")',
                                                                paddingTop: '49.9145%'
                                                            }}
                                                        >
                                                            <noscript>
                                                                <img
                                                                    className="img-fluid noscript"
                                                                    src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6.jpg?v=1517240155"
                                                                />
                                                            </noscript>
                                                            <div className="pre-loading position-absolute">
                                                                <span
                                                                    className="pre-loading__bar"
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                                <div className="vela-loading__icon">
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                    <span />
                                                                </div>
                                                            </div>
                                                            <picture
                                                                style={{
                                                                    display: 'none'
                                                                }}
                                                            >
                                                                <source
                                                                    data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_180x.jpg?v=1517240155 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_360x.jpg?v=1517240155 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_540x.jpg?v=1517240155 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_720x.jpg?v=1517240155 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_900x.jpg?v=1517240155 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1080x.jpg?v=1517240155 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1170x584.jpg?v=1517240155 1170w"
                                                                    sizes="394px"
                                                                    srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_180x.jpg?v=1517240155 180w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_360x.jpg?v=1517240155 360w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_540x.jpg?v=1517240155 540w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_720x.jpg?v=1517240155 720w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_900x.jpg?v=1517240155 900w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1080x.jpg?v=1517240155 1080w ,//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_1170x584.jpg?v=1517240155 1170w"
                                                                />
                                                                <img
                                                                    alt=""
                                                                    className="lazyautosizes lazyloaded ls-is-cached"
                                                                    data-parent-fit="contain"
                                                                    data-sizes="auto"
                                                                    sizes="394px"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="article__content pt-1">
                                                <h4 className="article__title">
                                                    <a
                                                        href="/blogs/news/top-10-fashion-styles-all-girls-must-have-in-summer"
                                                        title="Top 10 fashion styles all girls must have in summer"
                                                    >
                                                        Top 10 fashion styles all girls must have in summer
                                                    </a>
                                                </h4>
                                                <div className="article__meta d-flex flex-wrap align-items-center mb-3">
                                                    <span className="article__meta-author">
                                                        <span>
                                                            By:
                                                        </span>
                                                        {' '}Vela Theme
                                                    </span>
                                                    <span className="article__meta-date">
                                                        <time
                                                            className="date"
                                                            dateTime="2018-01-28T10:17:00Z"
                                                        >
                                                            January 28, 2018
                                                        </time>
                                                    </span>
                                                    <span className="article__meta-comment">
                                                        0 comment
                                                    </span>
                                                </div>
                                                <div className="rte article__excerpt">
                                                    Fusce mollis risus posuere orci sodales, sed tempor ex convallis. Vivamus ullamcorper efficitur quam. Nulla viverra leo in suscipit sollicitudin....
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper d-flex justify-content-center pt-5">
                                <nav
                                    aria-label="Pagination"
                                    className="navigation"
                                >
                                    <ul className="list-unstyled pagination">
                                        <li
                                            aria-current="page"
                                            className="page-item active"
                                        >
                                            <a
                                                aria-label="Page 1"
                                                className="pagination__item page-link mx-1"
                                                href=""
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item ">
                                            <a
                                                aria-label="Page 2"
                                                className="pagination__item page-link mx-1"
                                                href="/blogs/news?page=2"
                                            >
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                aria-label="Next page"
                                                className="pagination__item pagination__item--prev pagination__item-arrow page-link motion-reduce mx-1"
                                                href="/blogs/news?page=2"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    role="presentation"
                                                    style={{
                                                        transform: 'rotate(-90deg)'
                                                    }}
                                                    viewBox="0 0 10 6"
                                                    width="12px"
                                                >
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3">
                            <div
                                className="blog-sidebar visible"
                                data-bs-backdrop="false"
                                id="sidebar_right"
                            >
                                <a
                                    aria-controls="sidebar_right"
                                    className="d-block d-xl-none btn-sidebar btn-sidebar--open position-absolute"
                                    data-bs-toggle="offcanvas"
                                    href="#sidebar_right"
                                    role="button"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <div className="offcanvas-body pb-0 p-xl-0">
                                    <div className="d-block d-xl-none text-end">
                                        <a
                                            aria-controls="sidebar_right"
                                            className="btn btn-sidebar btn-sidebar--close position-relative sidebar_right"
                                            data-bs-toggle="offcanvas"
                                            href="#sidebar_right"
                                            role="button"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                fill="none"
                                                focusable="false"
                                                role="presentation"
                                                viewBox="0 0 18 17"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="blog-sidebar--inner overflow-hidden">
                                        <div className="blog-search mb-4 mb-xl-5">
                                            <div className="block-sidebar__content position-relative">
                                                <div className="block-sidebar__content--inner">
                                                    <form
                                                        action="/search"
                                                        className="blog-search__form"
                                                        method="get"
                                                        role="search"
                                                    >
                                                        <input
                                                            defaultValue="article"
                                                            name="type"
                                                            type="hidden"
                                                        />
                                                        <div className="input-group border">
                                                            <input
                                                                aria-label="Search our blog..."
                                                                className="form-control blog-search__input border-0"
                                                                defaultValue=""
                                                                name="q"
                                                                placeholder="Search our blog..."
                                                                type="search"
                                                            />
                                                            <button
                                                                className="btn blog-search__btn bg-transparent"
                                                                type="submit"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="mb-1"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    role="img"
                                                                    viewBox="0 0 1040 1024"
                                                                    width="18px"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                >
                                                                    <path
                                                                        d="M1031 969L720 656q93-111 93-256q0-109-53.5-201t-146-145.5T412.5 0T212 53.5T66.5 199T13 400t53.5 201T212 746.5T413 800q149 0 262-98l310 312q10 10 23 10t22.5-9.5t9.5-23t-9-22.5zM413 737q-92 0-169.5-45.5T121 568.5T76 400t45-168.5t122.5-123t169-45.5t169 45.5t122.5 123T749 400q0 39-9 77t-25.5 71t-39.5 62.5t-52 52.5t-62 39.5t-71 25.5t-77 9z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="related-artibles mb-4 mb-xl-5">
                                            <h4 className="related-artibles__title block-sidebar__title">
                                                Recent Posts
                                            </h4>
                                            <div
                                                className="block-sidebar__content related-artibles__content position-relative"
                                                id="related2"
                                            >
                                                <div className="block-sidebar__content--inner">
                                                    <ul className="related-artibles__list mb-0">
                                                        <li className="related-artibles__item mb-3">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/lightly-dress-you-may-not-know-how-to-wear">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="Lightly dress! You may not know how to wear"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="Lightly dress! You may not know how to wear"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_70x70_crop_center.jpg?v=1517242146 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_70x70_crop_center.jpg?v=1517242146")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11.jpg?v=1517242146"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_70x70_crop_center.jpg?v=1517242146 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image11_70x70_crop_center.jpg?v=1517242146 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/lightly-dress-you-may-not-know-how-to-wear">
                                                                        Lightly dress! You may not know how to wear
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="related-artibles__item mb-3">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/accessories-for-both-him-her-some-suggestions">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="Accessories for both him & her! Some suggestions"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="Accessories for both him & her! Some suggestions"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_70x70_crop_center.jpg?v=1517242278 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_70x70_crop_center.jpg?v=1517242278")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15.jpg?v=1517242278"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_70x70_crop_center.jpg?v=1517242278 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image15_70x70_crop_center.jpg?v=1517242278 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/accessories-for-both-him-her-some-suggestions">
                                                                        Accessories for both him & her! Some suggestions
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="related-artibles__item mb-3">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/hipster-style-something-that-never-get-old">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="Hipster style! Something that never get old"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="Hipster style! Something that never get old"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_70x70_crop_center.jpg?v=1517240184 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_70x70_crop_center.jpg?v=1517240184")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9.jpg?v=1517240184"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_70x70_crop_center.jpg?v=1517240184 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image9_70x70_crop_center.jpg?v=1517240184 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/hipster-style-something-that-never-get-old">
                                                                        Hipster style! Something that never get old
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="related-artibles__item mb-3">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/we-know-how-to-be-shine">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="We know how to be shine"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="We know how to be shine"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_70x70_crop_center.jpg?v=1517242215 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_70x70_crop_center.jpg?v=1517242215")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13.jpg?v=1517242215"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_70x70_crop_center.jpg?v=1517242215 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image13_70x70_crop_center.jpg?v=1517242215 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/we-know-how-to-be-shine">
                                                                        We know how to be shine
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="related-artibles__item mb-3">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/how-to-be-a-gentleman-here-is-5-tips-for-you-guy">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="How to be a gentleman? Here is 5 tips for you, guy"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="How to be a gentleman? Here is 5 tips for you, guy"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_70x70_crop_center.jpg?v=1517240161 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_70x70_crop_center.jpg?v=1517240161")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7.jpg?v=1517240161"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_70x70_crop_center.jpg?v=1517240161 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image7_70x70_crop_center.jpg?v=1517240161 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/how-to-be-a-gentleman-here-is-5-tips-for-you-guy">
                                                                        How to be a gentleman? Here is 5 tips for you, guy
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="related-artibles__item">
                                                            <div className="related-artibles__card d-flex">
                                                                <div className="related-artibles__card-image">
                                                                    <a href="/blogs/news/top-10-fashion-styles-all-girls-must-have-in-summer">
                                                                        <div className="card_wrap">
                                                                            <div
                                                                                aria-label="Top 10 fashion styles all girls must have in summer"
                                                                                className="card__image position-relative js lazyloaded"
                                                                                data-alt="Top 10 fashion styles all girls must have in summer"
                                                                                data-bgset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_70x70_crop_center.jpg?v=1517240155 70w"
                                                                                style={{
                                                                                    backgroundImage: 'url("https://vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_70x70_crop_center.jpg?v=1517240155")',
                                                                                    paddingTop: '100%'
                                                                                }}
                                                                            >
                                                                                <noscript>
                                                                                    <img
                                                                                        className="img-fluid noscript"
                                                                                        src="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6.jpg?v=1517240155"
                                                                                    />
                                                                                </noscript>
                                                                                <div className="pre-loading position-absolute">
                                                                                    <span
                                                                                        className="pre-loading__bar"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            width: '100%'
                                                                                        }}
                                                                                    />
                                                                                    <div className="vela-loading__icon">
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                        <span />
                                                                                    </div>
                                                                                </div>
                                                                                <picture
                                                                                    style={{
                                                                                        display: 'none'
                                                                                    }}
                                                                                >
                                                                                    <source
                                                                                        data-srcset="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_70x70_crop_center.jpg?v=1517240155 70w"
                                                                                        sizes="70px"
                                                                                        srcSet="//vela-demo-1.myshopify.com/cdn/shop/articles/blog_image6_70x70_crop_center.jpg?v=1517240155 70w"
                                                                                    />
                                                                                    <img
                                                                                        alt=""
                                                                                        className="lazyautosizes lazyloaded ls-is-cached"
                                                                                        data-parent-fit="contain"
                                                                                        data-sizes="auto"
                                                                                        sizes="70px"
                                                                                    />
                                                                                </picture>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="related-artibles__card-content">
                                                                    <a href="/blogs/news/top-10-fashion-styles-all-girls-must-have-in-summer">
                                                                        Top 10 fashion styles all girls must have in summer
                                                                    </a>
                                                                    <time dateTime="2018-01-28">
                                                                        January 28, 2018
                                                                    </time>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-tags mb-4 mb-xl-5">
                                            <h4 className="blog-tags__title block-sidebar__title">
                                                Articles Tags
                                            </h4>
                                            <div
                                                className="block-sidebar__content blog-tags__content position-relative"
                                                id="tags3"
                                            >
                                                <div className="block-sidebar__content--inner  pt-3">
                                                    <ul className="blog-tags__list">
                                                        <li className="blog-tags__item">
                                                            <a
                                                                href="/blogs/news/tagged/fashion-store"
                                                                title="Show articles tagged Fashion store"
                                                            >
                                                                Fashion store
                                                            </a>
                                                        </li>
                                                        <li className="blog-tags__item">
                                                            <a
                                                                href="/blogs/news/tagged/shoes-store"
                                                                title="Show articles tagged Shoes store"
                                                            >
                                                                Shoes store
                                                            </a>
                                                        </li>
                                                        <li className="blog-tags__item">
                                                            <a
                                                                href="/blogs/news/tagged/shopify-theme"
                                                                title="Show articles tagged Shopify theme"
                                                            >
                                                                Shopify theme
                                                            </a>
                                                        </li>
                                                        <li className="blog-tags__item">
                                                            <a
                                                                href="/blogs/news/tagged/the-best-theme"
                                                                title="Show articles tagged The best theme"
                                                            >
                                                                The best theme
                                                            </a>
                                                        </li>
                                                        <li className="blog-tags__item">
                                                            <a
                                                                href="/blogs/news/tagged/velatheme"
                                                                title="Show articles tagged Velatheme"
                                                            >
                                                                Velatheme
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-html mb-4 mb-xl-5">
                                            <h4 className="blog-tags__title block-sidebar__title">
                                                CUSTOM HTML
                                            </h4>
                                            <div
                                                className="block-sidebar__content blog-html__content"
                                                id="html5"
                                            >
                                                <div className="block-sidebar__content--inner  pt-3">
                                                    <div className="rte">
                                                        <p>
                                                            Use HTML to format your text so it can be easily read.
                                                        </p>
                                                        <p>
                                                            This text can be used to share information about your brand with customers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        */
    );
};

export default BlogDetail;