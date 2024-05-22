// BookingForm.jsx
import React, { useState } from "react";
import { submitAPI } from "./apiSimulator"; // Assuming you have the submitAPI function defined in api.js

const BookingForm = ({ availableTimes, updateTimes }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        updateTimes(date);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date: selectedDate,
            time: selectedTime,
            guests: guests,
            occasion: occasion
        };
        try {
            const response = await submitAPI(formData);
            if (response) {
                alert("Booking submitted successfully!");
                setSelectedDate(""); // Reset form fields
                setSelectedTime("");
                setGuests(1);
                setOccasion("Birthday");

                updateTimes(selectedDate);
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" min="1" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit">Make Your reservation</button>
        </form>
    );
};

export default BookingForm;
