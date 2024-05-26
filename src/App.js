import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import BookingPage from "./Components/Bookings/BookingPage";
import NoPage from "./Components/NoPage";
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
      <GridItem margin="20px" area={"header"}>
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
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
