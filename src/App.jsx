import React from 'react';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Offer } from './Components/Offer';
import { Stats } from './Components/Stats';
import { Services } from './Components/Services';
import { Process } from './Components/Process';
import { GallerySection } from './Components/GallerySection';
import { ContactSection } from './Components/ContactSection';
import { Socials } from './Components/Socilas';

function App() {
    return (
        <>
            <Socials />
            <Navbar />
            <Hero />
            <Offer />
            <Stats />
            <Services />
            <Process />
            <GallerySection />
            <ContactSection />
        </>
    );
}

export default App;
