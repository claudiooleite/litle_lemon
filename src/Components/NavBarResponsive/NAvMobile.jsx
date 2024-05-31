import React, { useRef } from 'react';
import image from "../../Images/Logo.svg"
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <nav>
            <Box >
                <RouterLink to='/'>
                    <img id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                </RouterLink>
                <IconButton
                    icon={<HamburgerIcon />}
                    variant='outline'
                    ref={btnRef}
                    onClick={onOpen}
                    aria-label="Open menu"
                />
            </Box>

            <Drawer onClose={onClose} isOpen={isOpen} size='full' placement='right'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack as="nav" spacing={4}>
                            <Link as={RouterLink} to='/bookingpage' onClick={onClose} className='nav-item'>
                                Reserve a Table
                            </Link>
                            <Link as={RouterLink} to='/menu' onClick={onClose} className='nav-item'>
                                Menu
                            </Link>
                            <Link as={RouterLink} to='/about' onClick={onClose} className='nav-item'>
                                About
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </nav>
    );
}

export default NavMobile;
