import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import R1 from '../Public/Images/runeden1.PNG';
import R2 from '../Public/Images/runeden2.PNG';
import R3 from '../Public/Images/runeden3.PNG';
import R4 from '../Public/Images/runeden4.PNG';
import R5 from '../Public/Images/runeden5.PNG';
import '../Public/styles/styles.css';

function ProjectThreeCarosel() {
  return (
      
    <div className='project-three-carosel'>

        <div className="Card">
    
        
            <Carousel>
            <div>
                <figure>
                    <img src={R1} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={R2} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={R3} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={R4} />
                </figure>
            </div>
            <div>
                <figure>
                    <img src={R5} />
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

export default ProjectThreeCarosel