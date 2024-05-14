import { React, useState, useReducer } from "react";
import BookingForm from "./BookingForm";


export const ActionTypes = {
    UPDATE_AVAILABLE_TIMES: 'UPDATE_AVAILABLE_TIMES'
};

export function availableTimesReducer(state, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_AVAILABLE_TIMES:
            const selectedDate = action.payload;
            // Logic to update available times based on the selected date
            // For now, let's return the same available times regardless of the date
            return {
                time1: '17:00',
                time2: '18:00',
                time3: '19:00',
                time4: '20:00',
                time5: '21:00',
                time6: '22:00'
            };
        default:
            return state;
    }
}

// Function to initialize available times state
export function initializeTimesState() {
    return {
        time1: '17:00',
        time2: '18:00',
        time3: '19:00',
        time4: '20:00',
        time5: '21:00',
        time6: '22:00'
    };
}


function BookingPage() {
    // Initialize available times state using reducer
    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer,
        initializeTimesState()
    );

    const currentDate = new Date();

    // Get current hour and add one hour to it
    const nextHour = currentDate.getHours() + 1;

    // Format current date in 'YYYY-MM-DD' format
    const formattedDate = currentDate.toISOString().slice(0, 10);

    // Format next hour to always have two digits (e.g., '07' instead of '7')
    const formattedNextHour = String(nextHour).padStart(2, '0');

    // Combine date and time to form default values
    const defaultValues = {
        date: formattedDate,
        time: `${formattedNextHour}:00`, // Set time to one hour after the current hour
        numberGuests: '2', // Default number of guests
        occasion: 'Birthday' // Default occasion
    };


    // Initialize state with default values for date, time, occasion, and available times
    const [formValue, setFormValue] = useState(defaultValues);


    return (
        <BookingForm formValue={formValue} setFormValue={setFormValue} availableTimes={availableTimes} dispatch={dispatch} />
    );
}

export default BookingPage;
