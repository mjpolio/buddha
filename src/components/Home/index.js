import React from 'react';

import Navbar from '../Navbar';
import Header from '../Header';
import About from '../About';
import Menu from '../Menu';
import SocialBar from '../SocialBar';
import Numbers from '../Numbers';
import Cards from '../Cards';
import Gallery from '../Gallery';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Menu />
            <SocialBar />
            <Numbers />
            <Cards />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home;
