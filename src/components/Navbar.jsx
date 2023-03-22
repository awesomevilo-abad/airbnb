import React from 'react';
import logo from '../assets/images/airbnb-logo.png'
import '../style.css'

export default function Navbar () {
    return (
        <div className='nav'>
            <img src={logo} className="logo" />
        </div>
    )
}