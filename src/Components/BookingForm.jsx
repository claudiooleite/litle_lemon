import { React } from "react";
import {
    Input, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Select,
    Button
} from "@chakra-ui/react";
import { ActionTypes } from "./BookingPage";


function BookingForm({ formValue, setFormValue, availableTimes, dispatch }) {

    // Function to handle date change
    function handleDateChange(e) {
        setFormValue({
            ...formValue,
            date: e.target.value
        });

        // Dispatch action to update available times based on selected date
        dispatch({ type: ActionTypes.UPDATE_AVAILABLE_TIMES });
    }


    // Function to handle time change
    function handleTimeChange(e) {
        setFormValue({
            ...formValue,
            time: e.target.value
        });
    }

    // Function to handle number of guests change
    function handleNumberGuestsChange(e) {
        setFormValue({
            ...formValue,
            numberGuests: e.target.value
        });
    }

    // Function to handle occasion change
    function handleOccasionChange(e) {
        setFormValue({
            ...formValue,
            occasion: e.target.value
        });
    }

    // Function to handle form submit
    function handleSubmit(e) {
        e.preventDefault();

        // Perform actions on form submission, such as sending data to server
        console.log('Date:', formValue.date);
        console.log('Time:', formValue.time);
        console.log('Guests:', formValue.numberGuests);
        console.log('Occasion:', formValue.occasion);
        // Show alert on form submission
        alert('Form submitted successfully!');
        setFormValue({
            date: '2024-10-23', // Reset date to default
            time: '17:00', // Reset time to default
            numberGuests: '2', // Reset number of guests to default
            occasion: 'Birthday' // Reset occasion to default
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={formValue.date}
                onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={formValue.time} onChange={handleTimeChange}>
                {Object.values(availableTimes).map((time, index) => (
                    <option key={index}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formValue.numberGuests} onChange={handleNumberGuestsChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formValue.occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Make Your Reservation</button>
        </form>
    );
}


export default BookingForm;