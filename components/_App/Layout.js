import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import GoTop from '../Shared/GoTop';

const Layout = ({ children }) => {
    const router = useRouter();
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                    
                <title>Buka</title>
                <meta 
                    name="description" 
                    content="Merab Sharikadze Official Website" 
                />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Merab Sharikadze Official Website"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Merab Sharikadze Official Website"
                ></meta>
                <link rel="canonical" href="https://buka.ge"></link>
            </Head>
            
            {
                router.pathname === '/football-single-blog' ? null : <Navbar />
            }

            {children}

            <Footer />

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;