import React from 'react'
import Me from '../Public/Images/me.jpg';
import '../Public/styles/styles.css';

function AboutContent() {
  return (
    <div className="about-content">
    <h1>Hi, I'm Stella...</h1>
    <img src={Me}></img>
    <article>
    <p> 
            I'm currently a Software Development student at BCIT in the Software Systems Developer program.
            Even though I love coding, I wasn't always so interested in it. Fresh out of highschool I had plans to obtain
            a political science degree at SFU and go on to become a lawyer. 
            
            After being forced to enroll in a required research course (which had a really fancy name, but was basically just STATS101)
            I unintentionally got my first taste of coding. Other than doing basic statistics, I used R, a programming language used to compute statistics
            and various types of graphs, and got to dabble in the process of learning a new language, getting used to weird syntax and debugging.

            As an arts student for a couple of years at this point, POL203 was a rude awakening to the extremeley concise, technical and procedural
            realm of software. Even though it was extremely foreign and frustrating at times, it was addicting, interestingly enough... and I loved it!

            Fast forward to now, nearly three years later, I'm fully ensconsed in code and I am loving it. I even debug my code in my dreams!
        </p>
    </article> 

    </div>

  )
}

export default AboutContent