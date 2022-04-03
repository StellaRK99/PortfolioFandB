import {useState, React} from 'react'
import {Link} from "react-router-dom"
import '../Public/styles/styles.css';

function Burger() {

  const[toggle, setToggle] = useState(true)

  const toggleBurger =() =>{
      setToggle(!toggle)
      console.log(toggle)
      const btn = document.querySelector("button")
      btn.style ="border-radius:50%"
      if(!toggle){
        btn.style ="border-radius:20%"
      }
  }

  return (
    <section className="burger">
        <button className="burger-btn" onClick={toggleBurger}></button>
        {!toggle
          ?(<nav className="burger-nav">
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            </nav>)
          :(<></>)
        }
    </section>
  )
}

export default Burger