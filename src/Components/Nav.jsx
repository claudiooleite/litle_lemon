import React, { useState } from 'react';
import '../stylesheets/App.css';
import Image from "../Images/Logo.svg";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Nav() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <Flex minWidth='max-content' alignItems='center' className="nav-main">
            <Box>
                <Link to='/'>
                    <img id="logo-top" src={Image} alt="Logo Little Lemon restaurant" />
                </Link>
            </Box>
            <Spacer />
            <Box>
<<<<<<< HEAD
                <ul className={`nav-links ${showNav ? 'show' : ''}`} id="navigation-menu" >
=======
                <ul className={`nav-links ${showNav ? 'show' : ''}`} id="navigation-menu">
>>>>>>> devArea
                    <li><Link to='/specials' className='nav-item'>Specials</Link></li>
                    <li><Link to='/bookingpage' className='nav-item'>Reserve a Table</Link></li>
                    <li><Link to='/menu' className='nav-item'>Menu</Link></li>
                </ul>
                <Box className="nav-icon">
                    <Menu

                    >
                        <MenuButton
                            as={IconButton}
                            aria-label='Toggle navigation menu'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            onClick={toggleNav}
                            aria-expanded={showNav}
                        />
                        <MenuList>
                            <MenuItem>
                                <Link to='/specials' className='nav-item'>Specials</Link>

                            </MenuItem>
                            <MenuItem >
                                <Link to='/bookingpage' className='nav-item'>Reserve a Table</Link>

                            </MenuItem>
                            <MenuItem >
                                <Link to='/menu' className='nav-item'>Menu</Link>
                            </MenuItem>

                        </MenuList>

                    </Menu>
                </Box>
            </Box>
        </Flex >
    );
}

export default Nav;
