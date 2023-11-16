import React from 'react'
import "./About.css"
import aboutBg from "../img/maestropizzini-aboutus-bg-1.jpg"

const About = () => {
    return (
        <>
            <div className="about-banner">
                <div className="box" id="textBx">
                    <h1>About</h1>
                    <h2>WELCOME TO MAESTRO PIZZINI</h2>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynaus,  quise sequitur mutationem consuetudium lectorum.</p>
                    <button className='btn' >Read more</button>
                </div>
                <div className="box" id='imgBx'>
                    <img src={aboutBg} alt="" />
                </div>
            </div>

        </>
    )
}

export default About
