import React from 'react';
import {Link} from "react-router-dom"
import Typist from 'react-typist';
import '../Public/styles/styles.css';
import BoucingArrow from './BoucingArrow';

function Banner() {
  return (
    <div className="banner">
      <Link to="/"> 
      <Typist>
        <h1>Stella Kagri</h1>
        <Typist.Delay ms={900} />
        <h2>Full Stack Developer...</h2>
        <Typist.Backspace count={3} delay={500} />
      </Typist>
      </Link>   
      <BoucingArrow />
    </div>
  )
}

export default Banner;
