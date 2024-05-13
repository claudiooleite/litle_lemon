import { React, useState } from "react";
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

function BookingForm() {
    // Default values
    const defaultValues = {
        date: '2024-10-23', // Date input requires 'YYYY-MM-DD' format
        time: '17:00', // Default time
        numberGuests: '2', // Default number of guests
        occasion: 'Birthday' // Default occasion
    };
    // Initialize state with default values for date, time, occasion
    const [formValue, setFormValue] = useState(defaultValues);
    // Function to handle date change
    function handleDateChange(e) {
        setFormValue({
            ...formValue,
            date: e.target.value
        })
    }
    const [availableTimes, setAvailableTimes] = useState({
        time1: '17:00',
        time2: '18:00',
        time3: '19:00',
        time4: '20:00',
        time5: '21:00',
        time6: '22:00'
    })

    // Function to handle available times
    // function availableTimes() {

    // }

    // Function to handle time change
    function handleTimeChange(e) {
        setFormValue({
            ...formValue,
            time: e.target.value
        })
    }
    // Function to handle number of guests change
    function handleNumberGuestsChange(e) {
        setFormValue({
            ...formValue,
            numberGuests: e.target.value
        })
    }
    // Function to handle occasion change
    function handleOccasionChange(e) {
        setFormValue({
            ...formValue,
            occasion: e.target.value
        })
    }

    //Function to handle form submit
    function handleSubmit(e) {
        e.preventDefault();

        // Perform actions on form submission, such as sending data to server
        console.log('Date:', formValue.date);
        console.log('Time:', formValue.time);
        console.log('Guests:', formValue.numberGuests);
        console.log('Occasion:', formValue.occasion);
        // Show alert on form submission
        alert('Form submitted successfully!')
        setFormValue(defaultValues)
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label forHTML="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={formValue.date}
                onChange={handleDateChange}
            />
            <label forHTML="res-time">Choose time</label>
            <select id="res-time " value={formValue.time} onChange={handleTimeChange}>
                <option>{availableTimes.time1}</option>
                <option>{availableTimes.time2}</option>
                <option>{availableTimes.time3}</option>
                <option>{availableTimes.time4}</option>
                <option>{availableTimes.time5}</option>
                <option>{availableTimes.time6}</option>
            </select>
            <label forHTML="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formValue.numberGuests} onChange={handleNumberGuestsChange} />
            <label forHTML="occasion">Occasion</label>
            <select id="occasion" value={formValue.occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <Button type="submit" value="Make Your reservation">Make Your Reservation</Button>
        </form>
    )
}
// function BookingForm() {
//     const [input, setInput] = useState('')

//     const handleInputChange = (e) => setInput(e.target.value)

//     const isError = input === ''
//     return (
//         <>
//             <FormControl isInvalid={isError}>
//                 <FormLabel for="res-date">Choose date</FormLabel>
//                 <NumberInput defaultValue={2} min={1} max={20}>
//                     <NumberInputField />
//                     <NumberInputStepper>
//                         <NumberIncrementStepper />
//                         <NumberDecrementStepper />
//                     </NumberInputStepper>
//                 </NumberInput>
//                 <Input variant='filled' placeholder='Filled' />
//                 <Input placeholder='Select Date and Time' size='md' type='formValue-local' />
//                 <FormLabel>Ocasion</FormLabel>
//                 <Select placeholder='Occasion'>
//                     <option>Birthday</option>
//                     <option>Anniversary</option>
//                 </Select>
//                 <FormLabel>Email</FormLabel>
//                 <Input type='email' value={input} onChange={handleInputChange} />
//                 {!isError ? (
//                     <FormHelperText>
//                         Enter the email you'd like to receive the newsletter on.
//                     </FormHelperText>
//                 ) : (
//                     <FormErrorMessage>Email is required.</FormErrorMessage>
//                 )}
//             </FormControl>

//         </>
//     )
// }

function BookingPage() {

    return (
        <BookingForm>

        </BookingForm>
    )
}

export default BookingPage;