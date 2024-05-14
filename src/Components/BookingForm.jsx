import { React } from "react";
import '../stylesheets/App.css'
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
    Button,
    VStack
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
        <VStack gap='24px'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="res-date" className='sub-header'>Choose date</label>
                <Input
                    focusBorderColor='#F4CE14'
                    variant='outline'
                    type="date"
                    id="res-date"
                    value={formValue.date}
                    onChange={handleDateChange} />
                <label htmlFor="res-time" className='sub-header'>Choose time</label>
                <Select variant='outline' focusBorderColor='#F4CE14' id="res-time" value={formValue.time} onChange={handleTimeChange}>
                    {Object.values(availableTimes).map((time, index) => (
                        <option key={index}>{time}</option>
                    ))}
                </Select>
                <label htmlFor="guests" className='sub-header'>Number of guests</label>
                <Input variant='outline' focusBorderColor='#F4CE14' type="number" placeholder="1" min="1" max="10" id="guests" value={formValue.numberGuests} onChange={handleNumberGuestsChange} />
                <label htmlFor="occasion" className='sub-header'>Occasion</label>
                <Select variant='outline' focusBorderColor='#F4CE14' id="occasion" value={formValue.occasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                <Button style={{ marginTop: '20px' }} align='center' borderRadius='16px' color='Black' background={'#F4CE14'} variant='solid' size='lg' type="submit">Make Your Reservation</Button>
            </form>
        </VStack >
    );
}


export default BookingForm;