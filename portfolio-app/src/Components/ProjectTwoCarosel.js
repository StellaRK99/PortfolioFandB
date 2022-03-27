import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import A1 from '../Public/Images/ararat1.PNG';
import A2 from '../Public/Images/ararat2.PNG';
import A3 from '../Public/Images/ararat3.PNG';
import A4 from '../Public/Images/ararat4.PNG';
import '../Public/styles/styles.css';

function ProjectTwoCarosel() {
  return (
      
    <div className='project-two-carosel'>

        <div className="Card">
    
        
            <Carousel>
            <div>
                <figure>
                    <img src={A1} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={A2} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={A3} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={A4} />
                </figure>
            </div>
        
            </Carousel>
            <div className="tools-used">
                <h2>Tools Used</h2>
                <div className="line"></div>
                <ul>
                    <li>ReactJS</li>
                    <li>Amplify</li>
                    <li>NodeJs</li>
                    <li>DynamoDB</li>
                    <li>Lambda</li>
                    <li>S3 Bucket</li>
                </ul>
            </div>
            </div>
     
        </div>
  )
}

export default ProjectTwoCarosel