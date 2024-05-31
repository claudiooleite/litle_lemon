import React from 'react';
import {
    Box, Spacer, Image, Flex, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image from '../../Images/logo.jpg';
import { ChevronRightIcon } from '@chakra-ui/icons';

function NavLargeDisplay() {
    return (
        <nav>
            <Flex alignItems={'center'}>
                <Box>
                    <Link to='/'>
                        <Image width={'16rem'} id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                    </Link>
                </Box>
                <Spacer />
                <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/bookingpage' sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                            Reserve a Table
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/menu' sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                            Our Menu
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/about' sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                            About
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
        </nav>
    );
}

export default NavLargeDisplay;
