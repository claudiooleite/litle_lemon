import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from "../../Images/Logo.svg";

function NavLargeDisplay() {
    return (
        <nav>
            <Flex>
                <Box>
                    <Link to='/'>
                        <img id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <ul id="navigation-menu">
                        <li><Link to='/bookingpage' className='nav-item'>Reserve a Table</Link></li>
                        <li><Link to='/menu' className='nav-item'>Menu</Link></li>
                        <li><Link  to='about' className='nav-item' >About</Link></li>
                        <li><Link  to='reviews' className='nav-item' >Reviews</Link></li>
                    </ul>

                </Box>
            </Flex >
        </nav>
    );
}

export default NavLargeDisplay;