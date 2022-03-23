import React from "react"
import {Link} from "react-router-dom"
import '../Public/styles/styles.css'

function Navbar() {
    return (
        <div className="nav-bar">         
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </nav>       
        </div> 
    )
}

export default Navbar