import React from 'react';
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./NavBarResponsive/Nav";

function Menu() {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const headingPadding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <>
      <Nav />
      <Box textAlign="center" py={headingPadding}>
        <Heading id='hero-title' size={headingSize} color="brand.primary" fontFamily="heading">
          Coming Very Soon...
        </Heading>
      </Box>
      <Footer />
    </>
  );
}

export default Menu;
