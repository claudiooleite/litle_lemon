import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import BookingPage from "./Components/Bookings/BookingPage";
import ReviewsCard from "./Components/ReviewsCard";
import NoPage from "./Components/NoPage";
import About from "./Components/About";
import ConfirmedBooking from "../src/Components/Bookings/ConfirmedBooking";
import Menu from "./Components/Menu";
import "../src/stylesheets/App.css";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
    >
      <GridItem area={"header"}>
        <Nav />
      </GridItem>
      <GridItem area={"main"}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Highlights />
              </div>
            }
          />
          <Route path="/specials" element={<Highlights />} />{" "}
          <Route path="/bookingpage" element={<BookingPage />} />{" "}
          <Route path="/confirmedbooking" element={<ConfirmedBooking />} />{" "}
          <Route path="/menu" element={<Menu />} />{" "}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </GridItem>
      <GridItem>
        <ReviewsCard />
      </GridItem>
      <GridItem>
        <About/>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
