import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import Nav from "./Components/NavBarResponsive/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import ReviewsCard from "./Components/ReviewsCard";
import "../src/stylesheets/App.css";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "specials"
                      "reviews"
                      "footer"`}
    >
      <GridItem area={"header"}>
        <Nav />
      </GridItem>
      {/* <GridItem area={"main"}>
        <Hero/>
      </GridItem>
      <GridItem area={"specials"}>
        <Highlights/>
      </GridItem>
      <GridItem area={"reviews"}>
        <ReviewsCard />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem> */}
    </Grid>
  );
}

export default App;
