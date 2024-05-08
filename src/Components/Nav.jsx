import React from 'react';
import '../App.css'
import Image from "../Images/Logo.svg";

function Nav() {
    return (
        <div className='nav-main'>
            <img id='logo-top' src={Image} alt='Logo Little Lemon restaurant' />
            <ul className='nav-links'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Nav;