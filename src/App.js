import React from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import PageContainer from "./Components/PageContainer";
import Highlights from "./Components/Highlights";
import ReviewsCard from "./Components/ReviewsCard";
import "../src/stylesheets/App.css";

function App() {
  return (
    <PageContainer>
        <GridItem area={"main"} mb={4}>
          <Hero />
        </GridItem>
        <GridItem area={"specials"} mb={4}>
          <Highlights />
        </GridItem>
        <GridItem area={"reviews"} mb={4}>
          <ReviewsCard />
        </GridItem>
        </PageContainer>
       
  );
}

export default App;
