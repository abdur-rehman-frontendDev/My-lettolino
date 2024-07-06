import React from 'react';

const DetailInform = ({ productDeInfo }) => {
    return (
        <section className="shopify-section">
            <div className="vela-section product-more-info" style={{ padding: '0 0 30px' }}>
                <div className="container">
                    <div className="product-more-info__inner mb-5 pb-md-2">
                        <div className="more-info-tabs__heading mb-3 mb-md-4">
                            <ul className="more-info-tabs__nav nav list-unstyled mb-1 border-bottom">
                                {productDeInfo.map((detail, index) => (
                                    <li key={index} className="more-info-tabs__nav-item ms-3 ms-md-4">
                                        <a
                                            className={`more-info-tabs__nav-link pb-2 ${index === 0 ? 'active' : ''}`}
                                            data-bs-toggle="tab"
                                            href={`#js-more-info-tabs-${index + 1}`}
                                        >
                                            {detail.tab}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="more-info-tabs__content tab-content pt-3">
                            {productDeInfo.map((detail, index) => (
                                <div
                                    key={index}
                                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                    id={`js-more-info-tabs-${index + 1}`}
                                >
                                    <div className="rte">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailInform;
