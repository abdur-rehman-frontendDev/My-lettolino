import React from 'react';
import { NavLink } from 'react-router-dom';

const DetailHeader = () => {
    return (
        <>
            <div className="vela-breadcrumbs d-flex flex-wrap align-items-center">
                <div
                    className="vela-breadcrumbs__image lazyloaded"
                    style={{
                        backgroundImage: 'url("https://i.ibb.co/Wy07j0D/slider3.jpg")'
                    }}
                >
                </div>
                <div className="container">
                    <div className="vela-breadcrumbs__inner align-items-center flex-column">
                        <h1 className="vela-breadcrumbs__title mb-3">
                            Products
                        </h1>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item breadcrumb__item">
                                <NavLink className="breadcrumb__link h5" to="/My-lettolino/home" title="Home" >
                                    Home
                                </NavLink>

                            </li>
                            <li className="breadcrumb-item breadcrumb__item itemprop=">
                                <NavLink className="breadcrumb__link h5" to="/My-lettolino/shop" title="Shop">
                                    Shop
                                </NavLink>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailHeader
