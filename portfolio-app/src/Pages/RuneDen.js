import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import R1 from '../Public/Images/runeden1.PNG';
import R2 from '../Public/Images/runeden2.PNG';
import R3 from '../Public/Images/runeden3.PNG';
import R4 from '../Public/Images/runeden4.PNG';
import R5 from '../Public/Images/runeden5.PNG';
import '../Public/styles/styles.css';
function RuneDen() {
  return (
      
    <div className='runeDen'>
        <Navbar />
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
            <article>
            <h1>RuneDen</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aliquam, similique 
                sequi iste eum in quas quia, nam tempora officia repudiandae at amet eius nisi dignissimos 
                voluptatibus voluptate earum animi soluta?</p></article>
            </div>
        <Footer />
        </div>
  )
}

export default RuneDen