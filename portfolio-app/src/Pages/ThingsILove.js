import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Burger from "../Components/Burger";
import getAllPaintings from "../context"

function ThingsILove(){
    document.title = "Things I Love - Stella Kagri"
    
    function AllPaintings (){
        getAllPaintings()
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return(
        <div className="thingsILove-wrapper">
            <div className="nav">
                <Navbar />
            </div>

            <div className="thingsILove-content-container">
                    <h1>Things I Love</h1>
                        <ul>
                            <li>Cooking</li>
                            <li>Painting</li>
                            <li>Animals</li>
                        </ul>
            <Footer />
            </div>
        </div>

    
    )
}

export default ThingsILove