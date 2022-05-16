import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
}

class UpcomingMatches extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section id="matches" className="upcoming-matches-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Upcoming Matches</h2>
                        <p>Georgia have secured their place at Rugby World Cup 2023 after all remaining games involving Russia in the Rugby Europe Championship 2022 were abandoned following a decision by the Rugby World Cup Board on Wednesday. Georgia are unbeaten in the Championship, winning eight and drawing one, and have accrued 35 points – 10 more than Spain who are in second place with two games also left to play.</p>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="upcoming-matches-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-upcoming-matches-item">
                            <div className="date">
                                <span>09 September, 2022</span>
                            </div>
                            <h3>Group Fixtures</h3>
                            <span className="sub-title">World Cup 2023</span>

                            <div className="vs-matches">
                                <img src="/images/football/georgia.png" alt="image" />
                                <h4>Georgia</h4>
                                <span>VS</span>
                                <h4>Australia</h4>
                                <img src="/images/football/australia.png" alt="image" />
                            </div>

                            <Link href="https://www.flashscore.com/match/Y5zwqsbF/#/match-summary">
                                <a className="default-btn">Match Detailes</a>
                            </Link>
                        </div>

                        <div className="single-upcoming-matches-item">
                            <div className="date">
                                <span>30 September, 2022</span>
                            </div>
                            <h3>Group Fixtures</h3>
                            <span className="sub-title">World Cup 2023</span>

                            <div className="vs-matches">
                                <img src="/images/football/georgia.png" alt="image" />
                                <h4>Georgia</h4>
                                <span>VS</span>
                                <h4>Fiji</h4>
                                <img src="/images/football/fiji.png" alt="image" />
                            </div>
                            
                            <Link href="https://www.flashscore.com/match/CdZtr1DL/#/match-summary">
                                <a className="default-btn">Match Detailes</a>
                            </Link>
                        </div>

                        <div className="single-upcoming-matches-item">
                            <div className="date">
                                <span>07 October, 2022</span>
                            </div>
                            <h3>Group Fixtures</h3>
                            <span className="sub-title">World Cup 2023</span>

                            <div className="vs-matches">
                                <img src="/images/football/georgia.png" alt="image" />
                                <h4>Georgia</h4>
                                <span>VS</span>
                                <h4>Wales</h4>
                                <img src="/images/football/wales.png" alt="image" />
                            </div>
                            
                            <Link href="https://www.flashscore.com/match/fLOosLSR/#/match-summary">
                                <a className="default-btn">Match Detailes</a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="upcoming-matches-shape1">
                    <img src="/images/football/footb-player1.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default UpcomingMatches;