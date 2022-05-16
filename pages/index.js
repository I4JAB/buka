import React from 'react';
import Banner from '../components/Football/Banner';
import NextMatch from '../components/Football/NextMatch';
import UpcomingMatches from '../components/Football/UpcomingMatches';
import Partners from '../components/Football/Partners';
import Gallery from '../components/Football/Gallery';


const Home = () => {
    return(
        <>
            <Banner />

            <NextMatch />

            <UpcomingMatches />

            <Partners />
            
            <Gallery />
            

        </>
    );
}

export default Home;