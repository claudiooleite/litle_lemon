
import React, { useState, useEffect } from "react";
import '../stylesheets/App.css'
import {
    Input, Select,
    Button,
    VStack
} from "@chakra-ui/react";

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
        <VStack gap='24px'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="res-date" className='sub-header'>Choose date</label>
                <Input
                    focusBorderColor='#F4CE14'
                    variant='outline'
                    type="date"
                    id="res-date"
                    value={selectedDate}
                    onChange={handleDateChange} />


                <label htmlFor="res-time">Choose time</label>
                <Select variant='outline' focusBorderColor='#F4CE14' id="res-time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    {availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </Select>

                <label htmlFor="guests" className='sub-header'>Number of guests</label>
                <Input variant='outline' focusBorderColor='#F4CE14' min="1" max="10" type="number" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />

                <label htmlFor="occasion">Occasion</label>
                <Select variant='outline' focusBorderColor='#F4CE14' id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </Select>

                <Button style={{ marginTop: '20px' }} align='center' borderRadius='16px' color='Black' background={'#F4CE14'} variant='solid' size='lg' type="submit">Make Your reservation</Button>
            </form>
        </VStack>
    );
};

export default BookingForm;
