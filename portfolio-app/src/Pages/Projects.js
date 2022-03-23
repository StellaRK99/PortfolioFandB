import React, { useState} from 'react'

import A1 from '../Public/Images/ararat1.PNG';
import A2 from '../Public/Images/ararat2.PNG';
import A3 from '../Public/Images/ararat3.PNG';
import A4 from '../Public/Images/ararat4.PNG';
import ProjectCards from '../Components/ProjectCards';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Burger from '../Components/Burger';
import '../Public/styles/styles.css';
import { Link } from 'react-router-dom';

function Projects() {
  document.title = "Projects - Stella Kagri"


  return (
    <div className="projects">
      <Navbar />
      <Burger />
      <ProjectCards />
        {/* <div className="project-content">
          <Link to="/RuneDen">
          <div className="card1">
      
            
         
            </div>
            </Link>

            <Link to="/AraratAuto">
            <div className="card2">
            
            </div> 
            </Link>

            <Link to="/Project3">
          <div className="card3">
            <article>
            <h1>Third Project</h1>
            <p>AraratAuto is a local small business in Burnaby, BC that sells vehicles. This application
            was built using ReactJS for the frontend, NodeJS for the backend and uses MySql as the database.
            The design of this application aims to serve a very clean, simple interface that is easy and straightforward
            to navigate through, while also emulating a very "automotive" feel. Click me for more details!</p>
            
            </article>
            </div>
            </Link>
        </div> */}
       
      <Footer />
    </div>
  )
}

export default Projects
