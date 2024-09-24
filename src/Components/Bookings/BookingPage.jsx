import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import PageContainer from "../PageContainer";
import { fetchAPI, submitAPI } from "../Bookings/apiSimulator";

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
            const times = await fetchAPI(date);
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        } catch (error) {
            console.error("Error updating available times:", error);
        }
    };

    const initializeTimes = async () => {
        try {
            const today = new Date().toISOString().split("T")[0];
            const times = await fetchAPI(today);
            dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    useEffect(() => {
        initializeTimes();
    }, []);

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        try {
            const response = await submitAPI(formData);
            if (response) {
                navigate("/confirmedbooking", { state: formData });
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
            alert("Error submitting booking. Please try again.");
        }
    };

    return (
        <PageContainer>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
            />
        </PageContainer>
    );
};

export default BookingPage;
