import React from 'react'
import "./Header.css"
import bg from "../img/bg (1).jpg"
const Header = () => {
  return (
    <>
        <img src={bg} alt="a" className='bgImg' />
      <div className="banner">
    
        <div className="banner-content">
          <div className="text">
            <h1>Pizza delivery</h1>
            <h2>maestro pizinni</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque repellendus mollitia commodi ducimus rerum, officia magni.</p>
            <button className="btn">
              delivery now
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
