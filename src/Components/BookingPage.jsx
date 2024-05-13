import { React, useState } from "react";
import BookingForm from "./BookingForm";
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



function BookingPage() {
    // Define initial state for form values
    const defaultValues = {
        date: '2024-10-23', // Date input requires 'YYYY-MM-DD' format
        time: '17:00', // Default time
        numberGuests: '2', // Default number of guests
        occasion: 'Birthday' // Default occasion
    };


    // Initialize state with default values for date, time, occasion, and available times
    const [formValue, setFormValue] = useState(defaultValues);


    return (
        <BookingForm formValue={formValue} setFormValue={setFormValue} />
    );
}

export default BookingPage;
