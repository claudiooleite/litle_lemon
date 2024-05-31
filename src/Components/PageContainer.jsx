import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./NavBarResponsive/Nav";
import Footer from "./Footer"; 

const PageContainer = ({ children }) => {
  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
      <Grid
        templateAreas={`"header"
                        "main"
                        "footer"`}
        gap={6}
      >
        <GridItem area={"header"} mb={4}>
          <Nav />
        </GridItem>
        <GridItem area={"main"} mb={4}>
          {children}
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PageContainer;