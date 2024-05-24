import React, { useState } from 'react';
import '../stylesheets/App.css';
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
            <Link to='/'>
                <img id="logo-top" src={Image} alt="Logo Little Lemon restaurant" />
            </Link>
            <ul className={`nav-links ${showNav ? 'show' : ''}`} id="navigation-menu" aria-expanded={showNav}>
                <li><Link to='/specials' className='nav-item'>Specials</Link></li>
                <li><Link to='/bookingpage' className='nav-item'>Reserve a Table</Link></li>
                <li><Link to='/menu' className='nav-item'>Menu</Link></li>
            </ul>

            <div
                className='nav-icon'
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
                aria-controls="navigation-menu"
                aria-expanded={showNav}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        toggleNav();
                    }
                }}
            >
                <HamburgerIcon />
            </div>
        </div>
    );
}

export default Nav;
