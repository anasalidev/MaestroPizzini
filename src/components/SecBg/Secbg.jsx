import React from 'react'
import "./SecBg.css"
import Secbgs from "../img/secbg (4).jpg"

const Secbg = () => {
    return (
        <>
            <div className="secbg-banner">
                <img src={Secbgs} alt="" className='secbg' />
                <div className="secText">
                    <h1>Free Delivery With</h1>
                    <h2>PIZZA OF THE DAY</h2>
                    <h3>Only 8.99 USD</h3>
                    <button className='btn'>call now</button>
                </div>
            </div>

        </>
    )
}

export default Secbg
