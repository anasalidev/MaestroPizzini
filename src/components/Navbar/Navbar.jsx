import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../img/logo.png"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [menuopen , setmenuopen] = useState(false)
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
            <div className="menu" onClick={()=>{
              setmenuopen(!menuopen)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        <div className="nav">
          <ul className={menuopen ? "open" : ""}>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>about</li></NavLink>
            <NavLink to="/news"><li>news</li></NavLink>
            <NavLink to="/menu"><li>Menu</li></NavLink>
            <NavLink to="/contact"><li>contact</li></NavLink>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar
