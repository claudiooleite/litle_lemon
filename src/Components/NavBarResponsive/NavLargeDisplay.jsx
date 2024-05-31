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
      <Flex>
        <Box>
          <Link to='/'>
            <Image id="logo-top" src={image} alt="Logo Little Lemon restaurant" />
          </Link>
        </Box>
        <Spacer />
        <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/bookingpage'>
              Reserve a Table
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/menu'>
              Our Menu
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/about'>
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </nav>
  );
}

export default NavLargeDisplay;
