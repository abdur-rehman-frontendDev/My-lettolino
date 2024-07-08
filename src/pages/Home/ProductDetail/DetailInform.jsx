import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DetailInform = ({ productDeInfo }) => {
    return (
        <section className="shopify-section">
            <div className="vela-section product-more-info" style={{ padding: '0 0 30px' }}>
                <div className="container">
                    <div className="product-more-info__inner mb-5 pb-md-2">
                        <div className="more-info-tabs__heading mb-3 mb-md-4">
                            <Tabs defaultActiveKey={productDeInfo[0]?.tab}
                                id="product-detail-tabs" className="mb-3">
                                {productDeInfo.map((detail, index) => (
                                    <Tab eventKey={detail.tab} title={detail.tab} key={index}>
                                        <div className="rte pt-3">
                                            {detail.tab === "Description" && (
                                                <>
                                                    <h5>Material Description</h5>
                                                    <ul>
                                                        <li><strong>Material Description:</strong> {detail.content.materialDescription}</li>
                                                        <li><strong>Dimensions:</strong> {detail.content.dimensions}</li>
                                                        <li><strong>Weight:</strong> {detail.content.weight}</li>
                                                    </ul>
                                                    <strong style={{ color: 'var(--primary)' }}>[SHORT DESCRIPTION]</strong>
                                                    <p>{detail.content.shortDescription}</p>
                                                    <h4>Sample Unordered List</h4>
                                                    <ul>
                                                        {detail.content.sampleUnorderedList.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                    <h4>Sample Ordered List</h4>
                                                    <ol>
                                                        {detail.content.sampleOrderedList.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ol>
                                                    <p>{detail.content.additionalDescription}</p>
                                                </>
                                            )}
                                            {detail.tab === "Shipping & Return" && (
                                                <>
                                                    <h5 className="mb-3">Returns Policy</h5>
                                                    <p>{detail.content.returnsPolicy}</p>
                                                    <h5 className="mt-4 mb-3">Shipping</h5>
                                                    <p>{detail.content.shippingPolicy}</p>
                                                </>
                                            )}
                                        </div>
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailInform;
