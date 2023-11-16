import React, { useState } from 'react'
import Categorymenu from './Categorymenu'
import "./Category.css"
import blackbg from "../img/blackbg (6).jpg"
const Category = () => {
    const [item] = useState(Categorymenu)

    return (
        <>
            <div className="category-banner">
                <img src={blackbg} alt="" />
                <div className="heading-text">
                    <h1>Pizza Menu</h1>
                    <h2>WELCOME TO MAESTRO PIZZINI</h2>
                </div>
                <div className="categoryBoxs">
                    {
                        item.map((element) => {
                            const { name, img, price, description } = element;
                            return (
                                <div className="categoryBx">
                                    {/* <img src={pizza} alt="" /> */}
                                    <img src={img} alt="" />
                                    <div className="cateText">
                                        <h2>{name} </h2>
                                        <p>{description} </p>
                                    </div>
                                    <span className='price'>{price} </span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}

export default Category
