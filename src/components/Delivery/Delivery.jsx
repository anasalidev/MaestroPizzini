import React from 'react'
import "./Delivery.css"
import guy from "../img/pizza guy.png"

const Delivery = () => {
  return (
    <>
      <div className="delivery-banner">
        <div className="delivery-box" id='textBox'>
            <h1>Quick Delivery</h1>
            <h2>ORDER A PIZZA NOW</h2>
            <p>Investigationes demonstraverunt lectores legere me liusquod ii legunt saepius. Claritas est etiam processus.</p>
            <div className="inputBx">
                <input type="name" placeholder='First Name'/>
                <input type="name" placeholder='Last Name' />
                <input type="adress" placeholder='enter street adress' className='long'/>
                <input type="room" placeholder='apartment/room'/>
                <input type="phone number" placeholder='phone number' />
                <input type="type" placeholder='pizza types' className='long'/>
                <input type="number" placeholder='Enter number' />
                <input type="size" placeholder='size' />
                <div className="btns">

                <button className='btn'>quick Delivery</button>
                </div>
            </div>
        </div>
        <div className="delivery-box" id='imgBox'>
            <img src={guy} alt="" className='guyImg' />
        </div>
      </div>



    </>
  )
}

export default Delivery
