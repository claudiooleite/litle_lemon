
import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./apiSimulator"; // Assuming you have API functions defined in api.js

const BookingPage = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_AVAILABLE_TIMES":
                return action.payload;
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, []);

    const updateTimes = async (date) => {
        try {
            // Fetch available times for the selected date
            const times = await fetchAPI(date);
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        } catch (error) {
            console.error("Error updating available times:", error);
        }
    };

    const initializeTimes = async () => {
        try {
            // Fetch available times for today's date initially
            const today = new Date().toISOString().split("T")[0];
            const times = await fetchAPI(today);
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    useEffect(() => {
        // Call initializeTimes when the component mounts
        initializeTimes();
    }, []);

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        try {
            const response = await submitAPI(formData);
            if (response) {
                navigate("/confirmedbooking");
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
            alert("Error submitting booking. Please try again.");
        }
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;
