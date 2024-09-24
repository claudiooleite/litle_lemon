import React, { useRef } from 'react';
import image from "../../Images/logo2.png"
import { HamburgerIcon } from '@chakra-ui/icons';
import { Image, Spacer, Flex, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <nav>
            <Flex
                m={4}
                alignItems='center'>
                <RouterLink to='/'>
                    <Image width={'2rem'} id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                </RouterLink>
                <Spacer />
                <IconButton
                    boxSize='2.4rem'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    ref={btnRef}
                    onClick={onOpen}
                    aria-label="Open menu"
                />

            </Flex>
            <Drawer onClose={onClose} isOpen={isOpen} size='sm' placement='top'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack as="nav" mt={4} spacing={2}>
                            <Button variant='ghost' >
                                <Link as={RouterLink} to='/' onClick={onClose} fontSize={'md'} className='nav-item'>
                                    Home
                                </Link>
                            </Button>
                            <Button variant='ghost' >
                                <Link as={RouterLink} to='/bookingpage' onClick={onClose} fontSize={'md'} className='nav-item'>
                                    Reserve a Table
                                </Link>
                            </Button>
                            <Button variant='ghost'>
                                <Link as={RouterLink} to='/menu' onClick={onClose} fontSize={'md'} className='nav-item'>
                                    Our Menu
                                </Link>
                            </Button>
                            <Button variant='ghost'>
                                <Link as={RouterLink} to='/about' onClick={onClose} fontSize={'md'} className='nav-item'>
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
