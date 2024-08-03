import React from 'react';

const AboutPage = () => {

    const ourServices = [
        { id: 1, title: 'High-Quality Bedsheets', subtitle: 'Crafted with precision and care, our handmade bedsheets offer unparalleled comfort and style. Each piece is a work of art, designed to enhance your bedroom decor.', },
        { id: 2, title: 'Custom Designs and Sizes', subtitle: 'We offer custom designs and sizes to meet your unique needs. Whether you have a specific pattern in mind or need a special size, we can create the perfect bedsheet for you.', },
        { id: 3, title: 'Worldwide Shipping', subtitle: 'No matter where you are in the world, you can enjoy our luxurious handmade bedsheets. We provide reliable and efficient worldwide shipping to ensure your order arrives safely.', },
    ];

    const ourTeam = [
        { id: 1, image: 'https://pitb.gov.pk/system/files/Sajid-Latif1_0.jpg', name: 'Sajid Latif', role: 'CEO & Founder' },
        { id: 2, image: 'https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/437601796_1888090221704073_8245330731416229164_n.jpg?ccb=11-4&oh=01_Q5AaINhkIxfrmk0pag-Li-Lucs1DnEARkTswJAU3-HpBY-4g&oe=66A70F79&_nc_sid=e6ed6c&_nc_cat=111', name: 'Hafiz Salman', role: 'Production Manager' },
        { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqU03BVB47JtHNOeY0t21fcHE5qJr8ED2Ig&s', name: 'Abdur Rehman', role: 'Lead Designer' },
        { id: 4, image: 'https://citybook.pk/blog/wp-content/uploads/2019/08/Hassan-Sharyar-Yasin-HSY-1024x1024.jpeg', name: 'Wahaj Khan', role: 'Marketing Specialist' },
        { id: 5, image: 'https://www.mariab.pk/cdn/shop/files/maria-3.jpg?height=1200&v=1664868424', name: 'Maria B', role: 'Quality Control Manager' },
        { id: 6, image: 'https://hamariweb.com/profiles/images/profile/9910-700-8129.jpg', name: 'Deepak Perwani', role: 'Customer Service Representative' }
    ];

    const lookbookItems = [
        {
            title: "Elegant Floral Bedsheet Collection",
            backgroundImage: 'https://i.ibb.co/2yxWmDj/B102-Flat-Pattern.jpg',
            detailLink: "decent-green",
        },
        {
            title: "Vintage Floral Print Bedsheet",
            backgroundImage: 'https://i.ibb.co/CbdsP0z/B104-Flat-Pattern.jpg',
            detailLink: "elegant-green-b102",
        },
        {
            title: "Luxury Silk Bedsheet Set",
            backgroundImage: 'https://i.ibb.co/X7tDVhG/B103-Flat-Pattern.jpg',
            detailLink: "mixed-brown",
        },

    ];

    return (
        <div className="main-content__inner">

            <div className="container py-5">
                <div className="heading-group">
                    <h2 className="heading mb-2 mb-md-2">
                        <span>
                            Exquisite Collection of Hand-Printed Bedsheets
                        </span>
                    </h2>
                </div>
                <div className="row g-3 g-md-4 row-cols-1 row-cols-ms-1 row-cols-md-2">
                    <div className="col">
                        <h4
                            className="services-title mb-3 mb-md-4"
                            style={{
                                color: '#000000',
                                fontSize: '22px'
                            }}
                        >
                            Artistry and Elegance in Every Piece
                        </h4>
                        <div
                            className="services-desc mt-2"
                            style={{
                                color: '#666666',
                                fontSize: '17px'
                            }}
                        >
                            Letto & Lino offers a variety of patterns and styles in premium
                            materials, ensuring comfort and durability while adding a
                            sophisticated charm to your living space. Enhance your home
                            with beautifully hand-printed bedding.
                        </div>
                    </div>
                    <div className="col">
                        <h4
                            className="services-title mb-3 mb-md-4"
                            style={{
                                color: '#000000',
                                fontSize: '22px'
                            }}
                        >
                            Quality and Unique Designs
                        </h4>
                        <div
                            className="services-desc mt-2"
                            style={{
                                color: '#666666',
                                fontSize: '17px'
                            }}
                        >
                            Letto & Lino promises to enhance your home with
                            beautifully hand-printed bedding that stands out
                            in both beauty and craftsmanship.
                        </div>
                    </div>
                </div>
                <div className="vela-lookbook__content pt-5">
                    {lookbookItems.map((lookbookItem, index) => (
                        <div className="vela-lookbook__item" key={index}
                            style={{ paddingLeft: '0px' }}>
                            <div
                                className="card__image position-relative js lazyloaded"
                                style={{
                                    paddingTop: '109%',
                                    backgroundImage: `url("${lookbookItem.backgroundImage}")`
                                }}
                            />

                        </div>
                    ))}
                </div>
            </div>

            <div className="container py-5" style={{ maxWidth: '1240px' }}>
                <div className="heading-group">
                    <h2 className="heading mb-2 mb-md-2">
                        <span>
                            Exquisite Collection Bedsheets
                        </span>
                    </h2>
                    <div className="sub-heading pt-4">
                        Crafted with artistry and elegance, our hand-printed bedsheets
                        bring <br /> sophistication to your bedroom decor.
                    </div>
                </div>
                <div className="row g-3 g-md-4">
                    <div className="col-12 col-md-6" style={{ paddingLeft: '0px', background: '#f2f2f2' }}>
                        <div className='p-5'>
                            <h4
                                className="services-title mb-3 mb-md-4"
                                style={{ color: '#000000', fontSize: '20px' }}
                            >
                                Unique Designs for Variety
                            </h4>
                            <div
                                className="services-desc mt-2"
                                style={{
                                    color: '#666666',
                                    fontSize: '16px'
                                }}
                            >
                                Showcasing a variety of patterns and styles, our bedsheets
                                cater to diverse tastes and preferences in home decor.
                            </div>
                        </div>
                        <div
                            className="card__image position-relative js lazyloaded"
                            style={{
                                backgroundSize: 'cover',
                                paddingTop: '90%',
                                backgroundImage: `url("https://i.ibb.co/5YSfKr2/B105-Closeup.jpg")`
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6" style={{ paddingRight: '0px', background: '#f2f2f2' }}>
                        <div className='p-5'>
                            <h4
                                className="services-title mb-3 mb-md-4"
                                style={{ color: '#000000', fontSize: '20px' }}
                            >
                                Premium Materials for Comfort
                            </h4>
                            <div
                                className="services-desc mt-2"
                                style={{
                                    color: '#666666',
                                    fontSize: '16px'
                                }}
                            >
                                Our bedsheets are made from premium materials,
                                ensuring comfort and durability while adding a sophisticated charm.
                            </div>
                        </div>
                        <div
                            className="card__image position-relative js lazyloaded"
                            style={{
                                backgroundSize: 'cover',
                                paddingTop: '90%',
                                backgroundImage: `url("https://i.ibb.co/cxj94mm/B102-Display.jpg")`
                            }}
                        />
                    </div>
                </div>
            </div>

            <div
                className="vela-section about-services overflow-hidden"
                style={{
                    backgroundImage: 'url(//vela-demo-1.myshopify.com/cdn/shop/files/vela-image2.jpg?v=1613707478)',
                }}
            >
                <div className="container">
                    <div className="vela-section__inner my-3 py-5">
                        <div className="heading-group">
                            <h3 className="heading mb-3 mb-md-4">
                                <span>
                                    Our Services
                                </span>
                            </h3>
                            <div className="sub-heading">
                                Discover the exceptional services we offer to make your <br />
                                experience with us truly memorable.
                            </div>
                        </div>
                        <div className="row g-3 g-md-4 row-cols-1 row-cols-ms-1 row-cols-md-3 row-cols-lg-3">
                            {ourServices.map((service, index) => (
                                <div className="col" key={index}>
                                    <div className="services-box py-4 py-md-5 px-3 px-md-4 bg-white border">
                                        <div
                                            className="services-count text-primary h4"
                                            style={{
                                                fontSize: '22px'
                                            }}
                                        >
                                            0{index + 1}.
                                        </div>
                                        <div className="services-box__content">
                                            <h4
                                                className="services-title mb-3 mb-md-4"
                                                style={{
                                                    color: '#000000',
                                                    fontSize: '21px'
                                                }}
                                            >
                                                {service.title}
                                            </h4>
                                            <div
                                                className="services-desc mt-2"
                                                style={{
                                                    color: '#666666',
                                                    fontSize: '14px'
                                                }}
                                            >
                                                {service.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 pb-4">
                <p
                    className="text-primary"
                    style={{
                        fontSize: '150px',
                        height: '50px',
                        lineHeight: '120px',
                        textAlign: 'center'
                    }}
                >
                    “
                </p>
                <div
                    className="mx-auto text-center"
                    style={{
                        color: '#000',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '32px',
                    }}
                >
                    We’re passionate about creating the finest handmade bedsheets <br />
                    to bring comfort and elegance to your home.
                </div>

            </div>

            <hr />
            <div className="container py-5">
                <div className="our-teams__inner">
                    <div className="heading-group">
                        <h3 className="heading">
                            <span>
                                Meet Our Team
                            </span>
                        </h3>
                        <div className="sub-heading">
                            Our dedicated team is committed to delivering the best products <br />
                            and services to our customers.
                        </div>
                    </div>
                    <div className="row g-3 g-md-4 row-cols-1 row-cols-ms-1 row-cols-md-2 row-cols-lg-3">
                        {ourTeam.map((team, index) => (
                            <div className="col" key={index}>
                                <div className="about-member text-center">
                                    <div className="card_wrap mb-3">
                                        <div
                                            className="card__image position-relative js lazyloaded"
                                            style={{
                                                backgroundImage: `url(${team.image})`,
                                                paddingTop: '75%'
                                            }}
                                        >
                                        </div>
                                    </div>
                                    <div className="about-member__content mb-3 mb-lg-4">
                                        <h4 className="about-member__name">
                                            {team.name}
                                        </h4>
                                        <div className="about-member__position">
                                            {team.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
