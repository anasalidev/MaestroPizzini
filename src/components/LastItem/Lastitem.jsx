import React from 'react'
import "./LastItem.css"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiMail } from "react-icons/hi"
import { FaMapMarkerAlt } from "react-icons/fa"
import {AiOutlineGooglePlus} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"

const Lastitem = () => {
    return (
        <>
            <div className="Last-banner">
                <div className='lastbox' id="lift-text">
                    <h1>About us</h1>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
                    <h4>Closed Sunday to focus on faith and family</h4>
                    <h3><b> Monday to Saturday:</b> 9.00 am to 9.00 pm</h3>
                </div>
                <div className='lastbox' id="lift-text">

                    <h1>Details</h1>

                    <p><BsFillTelephoneFill className='icon' />(+92) 3104225157</p>
                    <p><HiMail className='icon'/> office@example.com</p>
                    <h4> <FaMapMarkerAlt className='icon'/> Great Harvest Bread Company
                        150 Athens Hwy Suite 700
                        Loganville, GA 30052 </h4>
                        <p><AiOutlineGooglePlus className='icons'/> <BiLogoFacebook className='icons' /> <BiLogoInstagram className='icons'/> </p>
                </div>
            </div>


        </>
    )
}

export default Lastitem
