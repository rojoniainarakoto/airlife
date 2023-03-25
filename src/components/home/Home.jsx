import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Cards from './Cards';
import Hero from './Hero';
import Informations from './Informations';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <>
            <Navbar className="z-10"/>
            <Hero />
            <Informations />
            <Newsletter />
            <Cards />
            <Footer />
        </>
    )
}

export default Home