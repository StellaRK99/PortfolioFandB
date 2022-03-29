import React, { useState } from 'react'
import ProjectOneCarosel from '../Components/ProjectOneCarosel';
import ProjectTwoCarosel from '../Components/ProjectTwoCarosel';
import ProjectThreeCarosel from './ProjectThreeCarosel';
import '../Public/styles/styles.css';

function ProjectCards() {

    // const [tapped1, setTapped1]= useState(false)
    // const [tapped2, setTapped2]= useState(false)
    // const [tapped3, setTapped3]= useState(false)

    // function toggle1(){
    //     setTapped1(!tapped1)
    //     console.log(tapped1)
    // }
    // function toggle2(){
    //     setTapped2(!tapped2)
    //     console.log(tapped2)
    // }
    // function toggle3(){
    //     setTapped3(!tapped3)
    //     console.log(tapped3)
    // }
  return (
    <div className="home-content">
    <div className="card">
        
        <div className="card-front">
        <article> 
            <h2>RuneDen</h2>
            <p>RuneDen is a centralized hub for gamers to download texture packs or seeds for their Minecraft worlds.
            This app was built using ReactJS for the frontend and utilizes a plethora of Amazon Web Services, such as Cognito User Pools,
            Lambda functions & layers, S3 Buckets, API Gateway, Amazon's own DynamoDB and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
            Facere pariatur eveniet quae.orem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
            Facere pariatur eveniet quae.orem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
            </p>
      
            
        </article>
        
        <div className="tools-used">
                <h2>Tools Used</h2>
                <ul>
                    <li>ReactJS, NodeJS</li>
                    <li>Amazon Web Services: Amplify, DynamoDB, Cognito, S3 Bucket</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing el</li>
                </ul>
                {/* <button className="mobile-toggle" onClick={toggle1}>View Images</button> */}
            </div>
            
        </div>
        <div className="card-back">
        <ProjectOneCarosel />
        </div>

{/* 
        {tapped1
        ?(<div className="card-front-mobile">
        <ProjectOneCarosel />
        <button onClick={toggle1}>Back</button>
        </div>): <></>} */}
      
       

       
    </div>

    <div className="card">
        <div className="card-front">
        <article>
            <h2>AraratAuto Ltd</h2>
            <p>AraratAuto is a local small business in Burnaby, BC that sells vehicles. This application
            was built using ReactJS for the frontend, NodeJS for the backend and uses MySql as the database.
            The design of this application aims to serve a very clean, simple interface that is easy and straightforward
            to navigate through.RuneDen is a centralized hub for gamers to download texture packs or seeds for their Minecraft worlds.
            This app was built using ReactJS for the frontend and utilizes a plethora of Amazon Web Services, such as Cognito User Pools,
            Lambda functions & layers, S3 Buckets, API Gateway, Amazon's own DynamoDB and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
       </p>

            
        </article>   
        
        <div className="tools-used">
                <h2>Tools Used</h2>
                <ul>
                    <li>ReactJS, NodeJS</li>
                    <li>Amazon Web Services: Amplify, DynamoDB, Cognito, S3 Bucket</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing el</li>
                </ul>
                {/* <button className="mobile-toggle" onClick={toggle2}>View Images</button> */}
            </div>
        </div>
        
        <div className="card-back">
          <ProjectTwoCarosel />
        </div>
{/* 
        {tapped2
        ?(<div className="card-front-mobile">
        <ProjectTwoCarosel />
        <button onClick={toggle2}>Back</button>
        </div>): <></>} */}
      
       
    </div>

    <div className="card">
        <div className="card-front">
        <article>
            <h2>Dummy Inc</h2>
            <p>RuneDen is a centralized hub for gamers to download texture packs or seeds for their Minecraft worlds.
            This app was built using ReactJS for the frontend and utilizes a plethora of Amazon Web Services, such as Cognito User Pools,
            Lambda functions & layers, S3 Buckets, API Gateway, Amazon's own DynamoDB and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
            Facere pariatur eveniet quae.orem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
            Facere pariatur eveniet quae.orem ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt aut quidem dolores, fuga suscipit, eum quaerat dolore aperiam eligendi, est corrupti. Atque sit omnis expedita consequatur. 
        </p>
          
               
        </article>  
        
        <div className="tools-used">
                <h2>Tools Used</h2>
                <ul>
                    <li>ReactJS, NodeJS</li>
                    <li>Amazon Web Services: Amplify, DynamoDB, Cognito, S3 Bucket</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing el</li>

                </ul>
                {/* <button className="mobile-toggle" onClick={toggle3}>View Images</button> */}
            </div> 
        </div>

        <div className="card-back">
        <ProjectThreeCarosel />
            
        </div>

        {/* {tapped3
        ?(<div className="card-front-mobile">
        <ProjectThreeCarosel />
        <button onClick={toggle3}>Back</button>
        </div>): <></>}
       */}
       
    </div>
</div>
  )
}

export default ProjectCards