import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Lightbox from 'react-image-lightbox';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    navText: [
        "<i class='flaticon-right-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
};

const images = [
    ('/images/football/gallery/footb-gallery1.jpg'),
    ('/images/football/gallery/footb-gallery2.jpg'),
    ('/images/football/gallery/footb-gallery3.jpg'),
    ('/images/football/gallery/footb-gallery4.jpg'),
];

const Gallery = () => {
    const [display, setDisplay] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <section id="gallery" className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Photo Gallery</h2>
                        <p></p>
                    </div>

                    {display ? <OwlCarousel 
                        className="gallery-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-gallery-item">
                            <img src="/images/football/gallery/footb-gallery1.jpg" alt="image" />
                            <Link href="#popup">
                                <a 
                                    className="link-btn popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                ></a>
                            </Link>
                        </div>

                        <div className="single-gallery-item">
                            <img src="/images/football/gallery/footb-gallery2.jpg" alt="image" />
                            
                            <Link href="#">
                                <a 
                                    className="link-btn popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                ></a>
                            </Link>
                        </div>

                        <div className="single-gallery-item">
                            <img src="/images/football/gallery/footb-gallery3.jpg" alt="image" />
                            
                            <Link href="#">
                                <a 
                                    className="link-btn popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                ></a>
                            </Link>
                        </div>

                        <div className="single-gallery-item">
                            <img src="/images/football/gallery/footb-gallery4.jpg" alt="image" />
                            
                            <Link href="#">
                                <a 
                                    className="link-btn popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3); }}
                                ></a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="gallery-shape1">
                    <img src="/images/football/footb-player2.png" alt="image" />
                </div>

                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </section>
        </>
    );
}

export default Gallery;