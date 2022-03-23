import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import Burger from "../Components/Burger";
import Skills from "../Components/Skills";
import Me from '../Public/Images/me.jpg';
import '../Public/styles/styles.css';

function About(){
    document.title = "About - Stella Kagri"
    return(
        <div className="about">
            <Navbar />
            <Burger />
        
           
            <Skills />
            <Footer />
        </div>
    
    )
}

export default About