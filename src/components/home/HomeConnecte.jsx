import React from 'react';
import Footer from '../Footer';
import Cards from './Cards';
import Hero from './Hero';
import Informations from './Informations';
import Newsletter from './Newsletter';
import NavbarConnecte from '../NavbarConnecte';

const HomeConnecte = () => {
    return (
        <>
            <NavbarConnecte/>
            <Hero />
            <Informations />
            <Newsletter />
            <Cards />
            <Footer />
        </>
    )
}

export default HomeConnecte;