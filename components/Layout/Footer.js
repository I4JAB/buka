import React from 'react';
import Link from 'next/link';

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <p><i className="flaticon-copyright"></i> {currentYear} JAB.ge All Rights Reserved <a href="http://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ul className="social">
                            <li>
                                <Link href="#">
                                    <a target="_blank"><i className="flaticon-facebook-logo"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><i className="flaticon-twitter"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><i className="flaticon-instagram"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><i className="flaticon-linkedin"></i></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a target="_blank"><i className="flaticon-youtube"></i></a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;