import React from "react";
import { GridItem } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import PageContainer from "./Components/PageContainer";
import Highlights from "./Components/Highlights";
import ReviewsCard from "./Components/ReviewsCard";

function App() {
  return (
    <PageContainer>
      <GridItem area={"main"} >
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
