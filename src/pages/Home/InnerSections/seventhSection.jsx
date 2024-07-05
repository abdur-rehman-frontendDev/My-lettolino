import React from 'react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const blogPosts = [
    {
        href: "#",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Choosing the Perfect Colors for Your Bedroom",
        date: "July 3, 2024",
        author: "Home Decor Experts",
        category: "Home Decor"
    },
    {
        href: "#",
        image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        title: "Caring for Your Handmade Bedsheets: Tips and Tricks",
        date: "June 28, 2024",
        author: "Bedding Care Specialists",
        category: "Bedding Tips"
    },
    {
        href: "#",
        image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        title: "How Handmade Bedsheets Are Made: A Step-by-Step Guide",
        date: "May 15, 2024",
        author: "Crafting Artisans",
        category: "Craftsmanship"
    },
    {
        href: "#",
        image: "https://images.unsplash.com/photo-1554861148-982401c111fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        title: "Creating a Cozy Bedroom with Handmade Bedsheets",
        date: "April 5, 2024",
        author: "Interior Design Enthusiasts",
        category: "Home Inspiration"
    },
    {
        href: "#",
        image: "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        title: "Why Choose Handmade Bedsheets Over Mass-Produced Ones",
        date: "March 20, 2024",
        author: "Quality Advocates",
        category: "Handmade Benefits"
    },
    {
        href: "#",
        image: "https://images.unsplash.com/photo-1506720186575-11354d325017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
        title: "How to Style Your Bedroom with Handmade Bedsheets",
        date: "February 10, 2024",
        author: "Decor Stylists",
        category: "Bedroom Styling"
    }
];

const BlogPost = ({ href, image, title, date, author, category }) => (
    <div className="slick-carousel__item slick-slide slick-cloned">
        <a className="article__featured-image-link d-block" href={href}>
            <div
                className="card__image position-relative js lazyloaded"
                style={{
                    paddingTop: '67%',
                    backgroundImage: `url("${image}")`
                }}
            />
        </a>
        <div className="article__content text-center pt-3 mt-2">
            <div className="article__content-wrap">
                <div className="article__meta d-flex flex-wrap justify-content-center align-items-center text-uppercase">
                    <span className="article__meta-author">
                        <span>By:</span>
                        {author}
                    </span>
                    <span className="article__meta-date">
                        <time dateTime={date} className="date">
                            {date}
                        </time>
                    </span>
                    <span className="article__meta-blog">in {category}</span>
                </div>
                <h4 className="article__title position-relative mb-3 cus-ellipsis">
                    <a className="link" href={href} title={title}>
                        {title}
                    </a>
                </h4>
            </div>
        </div>
    </div>
);

const SeventhSection = () => {
    return (
        <div className="shopify-section velaFramework">
            <section className="overflow-hidden"
                style={{
                    padding: '45px 0', margin: 0,
                    backgroundImage: 'url(//vela-demo-1.myshopify.com/cdn/shop/files/vela-image2.jpg?v=1613707478)'
                }}>
                <div className="container">
                    <div className="vela-section__inner my-3 py-5">
                        <div className="heading-group">
                            <h3 className="heading"><span>FROM OUR BLOG</span></h3>
                            <div className="sub-heading">
                                Explore the comfort of our exquisite handmade bedsheets.
                                Dive into insightful articles and design inspirations
                                that celebrate the beauty of handmade craftsmanship.
                            </div>
                        </div>
                        <div className="vela-section__content">
                            <Swiper
                                spaceBetween={30}
                                slidesPerGroup={3}
                                autoHeight={true}
                                className='cus-swiper'
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                rewind={true}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                    },
                                    1199: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                    },
                                }}
                            >
                                {blogPosts.map((post, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slick-carousel slick-initialized slick-slider">
                                            <BlogPost key={index} {...post} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeventhSection;
