import React from 'react'
import "./Menu.css"
import menuBg from "../img/maestropizzini-pizzamenu-bg.jpg"

const Menu = () => {
  return (
    <>
       <div className="menu-banner">
                <div className="boxs" id="textBxs">
                    <h1>The Pizza Menu</h1>
                    <h2>CHICAGOTHIN CRUST</h2>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynaus,  quise sequitur mutationem consuetudium lectorum.</p>
                    <button className='btn' >Read more</button>
                </div>
                <div className="boxs" id='imgBxs'>
                    <img src={menuBg} alt="" />
                </div>
            </div>
    </>
  )
}

export default Menu
