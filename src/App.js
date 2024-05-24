import "../src/stylesheets/App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import BookingPage from "./Components/Bookings/BookingPage";
import NoPage from "./Components/NoPage";
import ConfirmedBooking from "../src/Components/Bookings/ConfirmedBooking";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="parent">
      <Nav />
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
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
