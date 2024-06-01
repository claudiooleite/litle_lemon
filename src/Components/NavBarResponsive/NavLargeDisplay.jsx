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
        <Box
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            display="flex"
            justifyContent="center"
        >
            <Flex
                alignItems="center"
                maxWidth="1024px"
                width="100%"
                mx="auto"
            >
                <Box p='4'>
                    <Link to='/'>
                        <Image width={'16rem'} id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
                    </Link>
                </Box>
                <Spacer />
                <Breadcrumb p='4' separator={<ChevronRightIcon color='gray.500' />}>
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
        </Box>
    );
}

export default NavLargeDisplay;
