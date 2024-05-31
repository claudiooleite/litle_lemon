import { Route, Routes } from "react-router-dom"

import App from "./App"
import BookingPage from "./Components/Bookings/BookingPage"
import ConfirmedBooking from "./Components/Bookings/ConfirmedBooking"
import About from "./Components/About"
import ReviewsCard from "./Components/ReviewsCard"
import Menu from "./Components/Menu"
import NoPage from "./Components/NoPage"



function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/bookingpage" element={<BookingPage />} />{" "}
                <Route path="/confirmedbooking" element={<ConfirmedBooking />} />{" "}
                <Route path="/about" element={<About />} />{" "}
                <Route path="/reviews" element={<ReviewsCard />} />{" "}
                <Route path="/menu" element={<Menu />} />{" "}
                <Route path="/confirmedbooking" element={<ConfirmedBooking />} />{" "}
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes;