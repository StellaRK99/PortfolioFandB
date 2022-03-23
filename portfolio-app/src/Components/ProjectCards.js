import React from 'react'
import { Link } from "react-router-dom";
import A1 from '../Public/Images/ararat1.PNG';
import ProjectOneCarosel from '../Components/ProjectOneCarosel';
import '../Public/styles/styles.css';
import ProjectTwoCarosel from './ProjectTwoCarosel';
function ProjectCards() {
  return (
    <div className="home-content">

    <div className="card">
        <div className="card-front">
        <article> 
            <h2>RuneDen</h2>
            <p>RuneDen is a centralized hub for gamers to download texture packs or seeds for their Minecraft worlds.
            This app was built using ReactJS for the frontend and utilizes a plethora of Amazon Web Services, such as Cognito User Pools,
            Lambda functions & layers, S3 Buckets, API Gateway, Amazon's own DynamoDB and more. These tools were primarily configured through 
            the Amplify Framework's CLI. Click me for more details!</p>
        </article>
        
        </div>

        <div className="card-back">
       <ProjectOneCarosel />
        </div>
    </div>

    <div className="card">
        <div className="card-front">
        <article>
            <h2>AraratAuto Ltd</h2>
            <p>AraratAuto is a local small business in Burnaby, BC that sells vehicles. This application
            was built using ReactJS for the frontend, NodeJS for the backend and uses MySql as the database.
            The design of this application aims to serve a very clean, simple interface that is easy and straightforward
            to navigate through, while also emulating a very "automotive" feel. Click me for more details!</p>
        </article>   
        </div>
        
        <div className="card-back">
          <ProjectTwoCarosel />
        </div>
    </div>

    <div className="card">
        <div className="card-front">
        <article>
            <h2>Dummy Inc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita vel, ex nihil praesentium impedit, nemo molestias veniam 
                tenetur numquam porro natus alias voluptate dolor doloribus deleniti qui? Impedit, adipisci!</p>
        </article>   
        </div>

        <div className="card-back">
        <ProjectOneCarosel />
            
        </div>
    </div>
</div>
  )
}

export default ProjectCards