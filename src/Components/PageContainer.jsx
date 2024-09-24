import React from "react";
import Nav from "./NavBarResponsive/Nav";
import Footer from "./Footer";
import { Flex, Box } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Nav />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default PageContainer;
