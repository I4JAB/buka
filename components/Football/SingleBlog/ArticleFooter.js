import React from 'react';
import Link from 'next/link';

const ArticleFooter = () => {
    return (
        <div className="article-footer">
            <div className="article-tags">
                <span><i className='bx bx-folder'></i></span>
                <Link href="#"><a>Fashion</a></Link>
                <Link href="#"><a>Games</a></Link>
                <Link href="#"><a>Travel</a></Link>
            </div>

            <div className="article-share">
                <ul className="social">
                    <li><span>Share:</span></li>
                    <li>
                        <Link href="#">
                            <a className="facebook" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="twitter" target="_blank">
                                <i className='bx bxl-twitter'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="linkedin" target="_blank">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="instagram" target="_blank">
                                <i className='bx bxl-instagram'></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ArticleFooter;