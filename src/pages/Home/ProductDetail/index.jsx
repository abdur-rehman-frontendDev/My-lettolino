import React from 'react';
import DetailHeader from './DetailHeader';
import RelatedProducts from './RelatedProducts';
import DetailInform from './DetailInform';
import DetailDescription from './DetailDescription';

const ProductDetail = () => {
    const productDetails = {
        productType: "Handmade Bedsheets",
        title: "Elegant Floral Embroidered Bedsheet",
        availability: "In stock",
        sku: "HBS_SKU_101",
        vendor: {
            name: "Artisan Craftworks",
            link: "/collections/vendors?q=Artisan%20Craftworks"
        },
        price: {
            current: "$35.00",
            original: "$50.00"
        },
        description: `
            Experience the elegance and comfort of our handmade bedsheet, meticulously crafted from high-quality cotton. Featuring intricate floral embroidery, this bedsheet adds a touch of sophistication to any bedroom. Easy to maintain and designed to last, it promises a perfect blend of style and durability.
        `,
        images: [
            {
                original:
                    "https://i.ibb.co/cxj94mm/B102-Display.jpg",
                thumbnail:
                    "https://i.ibb.co/cxj94mm/B102-Display.jpg",
            },
            {
                original:
                    "https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg",
                thumbnail:
                    "https://i.ibb.co/qWHb5bZ/B102-Closeup.jpg",
            },
            {
                original:
                    "https://i.ibb.co/2yxWmDj/B102-Flat-Pattern.jpg",
                thumbnail:
                    "https://i.ibb.co/2yxWmDj/B102-Flat-Pattern.jpg",
            },
            {
                original:
                    "https://i.ibb.co/5KT1Cv6/B102-Pillow.jpg",
                thumbnail:
                    "https://i.ibb.co/5KT1Cv6/B102-Pillow.jpg",
            },

        ]
    };

    const productDeInfo = [
        {
            tab: "Description",
            content: {
                materialDescription: "Cotton",
                dimensions: "90 x 100 inches",
                weight: "1.2 kg",
                shortDescription: "These handmade bedsheets are crafted from premium quality cotton, ensuring a soft and comfortable feel. Each piece is uniquely designed with intricate patterns and vibrant colors that add a touch of elegance to any bedroom decor.",
                sampleUnorderedList: [
                    "100% pure cotton material",
                    "Hand-stitched for extra durability",
                    "Available in various colors and designs",
                    "Easy to wash and maintain"
                ],
                sampleOrderedList: [
                    "Measure your bed to ensure the perfect fit",
                    "Choose your favorite design from our collection",
                    "Place your order through our secure checkout",
                    "Enjoy the comfort and style of your new bedsheets"
                ],
                additionalDescription: "Our handmade bedsheets are designed to provide the ultimate comfort and aesthetic appeal. Each bedsheet is carefully hand-stitched by skilled artisans, ensuring a unique and high-quality product. The breathable cotton fabric keeps you cool in the summer and warm in the winter, making it perfect for year-round use. Machine washable and easy to maintain, these bedsheets are a practical and stylish addition to any home."
            }
        },
        {
            tab: "Shipping & Return",
            content: {
                returnsPolicy: "You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.). You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days). If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.",
                shippingPolicy: "We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations. When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page. Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound."
            }
        },
    ];


    return (
        <>
            <main
                className="main-content content-for-layout" id="MainContent">
                <div className="main-content__inner">
                    {/* <DetailHeader /> */}
                    <DetailDescription productDetails={productDetails} />
                    <DetailInform productDeInfo={productDeInfo} />
                    <RelatedProducts />
                </div>
            </main >
        </>
    )
}

export default ProductDetail
