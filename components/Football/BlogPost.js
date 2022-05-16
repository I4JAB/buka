import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (     
        <section id="news" className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <img src="/images/football/blog/footb-blog1.jpg" alt="image" />
                                <Link href="/football-single-blog">
                                    <a target="_blank" className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><Link href="#"><a>Champions League</a></Link></li>
                                    <li>20 April, 2020</li>
                                </ul>

                                <h3>
                                    <Link href="/football-single-blog">
                                        <a target="_blank">Ogbonna blasts 'lax' virus response</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <Link href="/football-single-blog">
                                    <a className="read-more-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <img src="/images/football/blog/footb-blog2.jpg" alt="image" />
                                <Link href="/football-single-blog">
                                    <a target="_blank" className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><Link href="#"><a>Premier League</a></Link></li>
                                    <li>19 April, 2020</li>
                                </ul>

                                <h3>
                                    <Link href="/football-single-blog">
                                        <a target="_blank">Liverpool title will be special</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/football-single-blog">
                                    <a target="_blank" className="read-more-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <img src="/images/football/blog/footb-blog3.jpg" alt="image" />
                                <Link href="/football-single-blog">
                                    <a target="_blank" className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><Link href="#"><a>Football</a></Link></li>
                                    <li>18 April, 2020</li>
                                </ul>

                                <h3>
                                    <Link href="/football-single-blog">
                                        <a target="_blank">Moyes self-isolating as precaution</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/football-single-blog">
                                    <a target="_blank" className="read-more-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;