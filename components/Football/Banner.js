import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div id="home" className="main-banner jarallax">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="main-banner-content">
                            <span className="sub-title">Sharikadze</span>
                            <h1>BUKA</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-footer-content">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                            <span className="email-link">info@buka.ge</span>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <ul className="social">
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="flaticon-twitter-1"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="flaticon-instagram-1"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="flaticon-linkedin-1"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="flaticon-youtube-1"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;