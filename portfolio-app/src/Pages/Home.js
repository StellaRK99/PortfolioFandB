import React from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner";
import Burger from "../Components/Burger";
import AboutContent from "../Components/AboutContent";
import BackToTop from "../Components/BackToTop";
import Skills from "../Components/Skills";
import '../Public/styles/styles.css';

function Home(){
    document.title = "Home - Stella Kagri"
    
    return(
        <div className="home">
            <Navbar />
            <Burger />
            <Banner/>
            <AboutContent />
            <Skills />
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Home