import React from "react";
import banner from '../assets/images/photo-grid.png'
import '../style.css'

export default function Banner () {
    return (
        <section className="banner">
            <img src={banner} className="banner--photo"/>
            <h1 className="banner--header">Online Experiences</h1>
            <p className="banner--details">Join unique interactive activities led by one-of-a-kind
                    host--al without leaving home.
            </p>
        </section>
    )
}