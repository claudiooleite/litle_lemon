import React from 'react';
import { Box, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from "../../Images/logo.jpg";

function NavLargeDisplay() {
    return (
        <nav>

            <Box>
                <Link to='/'>
                    <img id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                </Link>
            </Box>
            <Spacer />
            <Box>
                <ul id="navigation-menu">
                    <li><Link to='/bookingpage' className='nav-item'>Reserve a Table</Link></li>
                    <li><Link to='/menu' className='nav-item'>Our Menu</Link></li>
                    <li><Link to='about' className='nav-item' >About</Link></li>
                </ul>

            </Box>

        </nav>
    );
}

export default NavLargeDisplay;