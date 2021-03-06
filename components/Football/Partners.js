import React from 'react';
import Link from 'next/link';

const Partners = () => {
    return (     
        <section id="partners" className="partners-area bg-161616 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Brand Partners</h2>
                    <p></p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/knauf.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/glovo.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/mollers.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/m2.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/alfa.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/vake.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/sno.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-4 col-md-4 col-6">
                        <div className="single-partners-box">
                            <Link href="#">
                                <a>
                                    <img src="/images/football/partner/me16.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
