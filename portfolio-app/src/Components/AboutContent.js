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
            I enjoy coding in C#, Javascript, Typescript, Node(Express), React, and love developing web applications. Backend development is my preference
            as I really like working with data and creating a nice foundation for a full-stack app. I also love art and design in general, 
            so creating an elegant and clean frontend comes naturally to me.

            Even though I love coding, I wasn't always so interested in it. Fresh out of highschool I had plans to obtain
            a political science degree at SFU and go on to become a lawyer. 
            
            After being forced to enroll in a required research course (which had a really fancy name, but was basically just STATS101)
            I unintentionally got my first taste of coding. Other than doing basic statistics, I used R, a programming language used to compute statistics
            and various types of graphs, and got to dabble in the process of learning a new language, getting used to weird syntax and debugging.

            Even though it was extremely foreign and frustrating at times, it was addicting, interestingly enough... and I loved it!
            Fast forward to now, nearly three years later, I'm fully ensconsed in code and I am loving it. I even debug my code in my dreams!
        </p>
    </article> 
    <a href='#'>My Resume</a>
    </div>

  )
}

export default AboutContent