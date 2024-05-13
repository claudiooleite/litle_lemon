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
import { BookingForm } from "./BookingForm";


function BookingPage() {
    // Define initial state for form values
    const defaultValues = {
        date: '2024-10-23', // Date input requires 'YYYY-MM-DD' format
        time: '17:00', // Default time
        numberGuests: '2', // Default number of guests
        occasion: 'Birthday' // Default occasion
    };

    // Define initial state for available times
    const defaultAvailableTimes = {
        time1: '17:00',
        time2: '18:00',
        time3: '19:00',
        time4: '20:00',
        time5: '21:00',
        time6: '22:00'
    };

    // Initialize state with default values for date, time, occasion, and available times
    const [formValue, setFormValue] = useState(defaultValues);
    const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);

    return (
        <BookingForm formValue={formValue} setFormValue={setFormValue} availableTimes={availableTimes} />
    );
}

export default BookingPage;
