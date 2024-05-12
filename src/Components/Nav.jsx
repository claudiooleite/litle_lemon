import React, { useState } from 'react';
import '../stylesheets/App.css'
import Image from "../Images/Logo.svg";
import { HamburgerIcon } from '@chakra-ui/icons';


function Nav() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <div className="nav-main">
            <img id="logo-top" src={Image} alt="Logo Little Lemon restaurant" />
            <ul className={`nav-links ${showNav ? 'show' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>

            <div className='nav-icon' onClick={toggleNav}>
                <HamburgerIcon />
            </div>
        </div>
    )
}

export default Nav;