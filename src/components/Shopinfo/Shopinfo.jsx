import React, { useState } from 'react'
import "./Shopinfo.css"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Shopinfo = () => {
    const [Count,setCount] = useState(false)
    return (
        <>

        <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
            <div className="shopinfo-banner">
                <div className="shopBx">
                   <h1>{Count &&<CountUp start={0} end={120} duration={3} delay={0} />} </h1>
                    <p>Awesome Employees</p>
                </div>
                <div className="shopBx">
                <h1>{Count &&<CountUp start={0} end={58} duration={3} delay={0} />} </h1>
                    <p>Pizza Types</p>
                </div>
                <div className="shopBx">
                <h1>{Count &&<CountUp start={0} end={1468} duration={3} delay={0} />} </h1>
                    <p>Satisfied Clients</p>
                </div>
                <div className="shopBx">
                <h1>{Count &&<CountUp start={0} end={2031} duration={3} delay={0} />} </h1>
                    <p>Delivery</p>
                </div>
            </div>
        </ScrollTrigger>

        </>
    )
}

export default Shopinfo
