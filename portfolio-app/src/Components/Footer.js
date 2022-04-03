import React from 'react'
import {Link} from "react-router-dom"
import gitCat from '../Public/Images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
import Lin from '../Public/Images/LinkedIn-Logos/LI-In-Bug.png';
import '../Public/styles/styles.css'

function Footer() {
    return (
        <footer>
            <h1>&copy; Stella Kagri 2022</h1>
            <section className="logos">
                <a className="gitCat" href="https://github.com/StellaRK99">
                    <img src={gitCat}></img>
                </a>
                <a className="l-in" href="https://www.linkedin.com/in/stella-kagrimanyan-45b328157/">
                    <img src={Lin}></img>
                </a>
            </section>

            <section className="links">
                <h1>Links</h1>
                <Link to="/">Home</Link>
                
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </section>
        </footer>
    )
}

export default Footer
