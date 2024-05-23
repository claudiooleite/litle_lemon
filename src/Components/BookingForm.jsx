
import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        updateTimes(date);
    };

    useEffect(() => {
        if (availableTimes.length > 0) {
            setSelectedTime(availableTimes[0]); // Set default time to the first available time
        }
    }, [availableTimes]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date: selectedDate,
            time: selectedTime,
            guests: guests,
            occasion: occasion
        };
        submitForm(formData); // Call the submitForm function passed as a prop
    };

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
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
