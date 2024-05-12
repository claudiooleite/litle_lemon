import React, { useState } from 'react';
import '../stylesheets/App.css'
import Image from "../Images/Logo.svg";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


function Nav() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <div className="nav-main">
            <img id="logo-top" src={Image} alt="Logo Little Lemon restaurant" />
            <ul className={`nav-links ${showNav ? 'show' : ''}`}>
                <li><Link to='/' className='nav-item'>Homepage</Link></li>
                <li><Link to='/specials' className='nav-item'>Specials</Link></li>
            </ul>

            <div className='nav-icon' onClick={toggleNav}>
                <HamburgerIcon />
            </div>
        </div>
    )
}

export default Nav;