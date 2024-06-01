import React, { useRef } from 'react';
import image from "../../Images/logo2.png"
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Image, Spacer, Flex, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <nav>
            <Flex alignItems='center'>
                <Box p='4' >
                    <RouterLink to='/'>
                        <Image width={'3rem'} id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                    </RouterLink>
                </Box>
                <Spacer />
                <Box p='4'>
                    <IconButton
                        boxSize='3rem'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        ref={btnRef}
                        onClick={onOpen}
                        aria-label="Open menu"
                    />
                </Box>
            </Flex>
            <Drawer onClose={onClose} isOpen={isOpen} size='sm' placement='top'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack as="nav" spacing={4}>
                            <Button variant='ghost' >
                                <Link as={RouterLink} to='/' onClick={onClose} className='nav-item'>
                                    Home
                                </Link>
                            </Button>
                            <Button variant='ghost' >
                                <Link as={RouterLink} to='/bookingpage' onClick={onClose} className='nav-item'>
                                    Reserve a Table
                                </Link>
                            </Button>
                            <Button variant='ghost'>
                                <Link as={RouterLink} to='/menu' onClick={onClose} className='nav-item'>
                                    Our Menu
                                </Link>
                            </Button>
                            <Button variant='ghost'>
                                <Link as={RouterLink} to='/about' onClick={onClose} className='nav-item'>
                                    About
                                </Link>
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </nav>
    );
}

export default NavMobile;
