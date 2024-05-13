import { React, useReducer } from "react";

const ActionTypes = {
    UPDATE_AVAILABLE_TIMES: 'UPDATE_AVAILABLE_TIMES'
};

function availableTimesReducer(state, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_AVAILABLE_TIMES:
            // Logic to update available times based on selected date
            return {
                ...state,
                // Update available times here
            };
        default:
            return state;
    }
}

// Initial state for available times
const initialAvailableTimesState = {
    time1: '17:00',
    time2: '18:00',
    time3: '19:00',
    time4: '20:00',
    time5: '21:00',
    time6: '22:00'
};

function BookingForm({ formValue, setFormValue }) {
    const [availableTimesState, dispatch] = useReducer(
        availableTimesReducer,
        initialAvailableTimesState
    );

    // Function to handle date change
    function handleDateChange(e) {
        setFormValue({
            ...formValue,
            date: e.target.value
        });
        dispatch({
            type: ActionTypes.UPDATE_AVAILABLE_TIMES,
            payload: e.target.value // Pass selected date as payload
        });
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
                {Object.values(availableTimesState).map((time, index) => (
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