import React, { useState} from 'react'


import ProjectCards from '../Components/ProjectCards';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Burger from '../Components/Burger';
import BackToTop from "../Components/BackToTop";
import '../Public/styles/styles.css';


function Projects() {
  document.title = "Projects - Stella Kagri"


  return (
    <div className="projects">
      <Navbar />
      <Burger />
      <ProjectCards />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Projects
