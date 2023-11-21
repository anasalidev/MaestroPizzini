import React, {useEffect} from 'react'
import "./Header.css"
import bg from "../img/bg (1).jpg"
import Aos from 'aos'
import "aos/dist/aos.css"
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
        <img src={bg} alt="a" className='bgImg' />
      <div className="banner">
    
        <div className="banner-content">
          <div className="text" data-aos="fade-right">
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
