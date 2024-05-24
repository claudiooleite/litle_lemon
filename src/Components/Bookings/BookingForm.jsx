import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Input, Select,
    Button, VStack, FormLabel, FormControl, FormErrorMessage
} from "@chakra-ui/react";
import { SliderInput } from "./sliderInputNumberGuests";

// Define the validation schema with Yup
const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number().min(1).max(10).required("Number of guests is required"),
    occasion: Yup.string().required("Occasion is required")
});

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            time: availableTimes[0] || "",
            guests: 1,
            occasion: "Birthday"
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            await submitForm(values);
            resetForm();
        }
    });

    useEffect(() => {
        if (availableTimes.length > 0 && formik.values.time !== availableTimes[0]) {
            formik.setFieldValue("time", availableTimes[0]);
        }
    }, [availableTimes]);

    const handleDateChange = (e) => {
        const date = e.target.value;
        formik.setFieldValue("date", date);
        updateTimes(date);
    };

    return (
        <VStack gap='24px'>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} isRequired>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                        id="firstName"
                        type="text"
                        {...formik.getFieldProps("firstName")}
                        aria-label="First name"
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName} isRequired>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                        id="lastName"
                        type="text"
                        {...formik.getFieldProps("lastName")}
                        aria-label="Last name"
                    />
                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email} isRequired>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        type="email"
                        {...formik.getFieldProps("email")}
                        aria-label="Email"
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.date && formik.errors.date} isRequired>
                    <FormLabel htmlFor="res-date" className='sub-header'>Choose date</FormLabel>
                    <Input
                        focusBorderColor='#F4CE14'
                        variant='outline'
                        type="date"
                        id="res-date"
                        value={formik.values.date}
                        onChange={handleDateChange}
                        onBlur={formik.handleBlur}
                        aria-label="Choose date"
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.time && formik.errors.time} isRequired>
                    <FormLabel htmlFor="res-time">Choose time</FormLabel>
                    <Select
                        variant='outline'
                        focusBorderColor='#F4CE14'
                        id="res-time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-label="Choose time"
                    >
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.guests && formik.errors.guests} isRequired>
                    <SliderInput
                        value={formik.values.guests}
                        onChange={(value) => formik.setFieldValue("guests", value)}
                    />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion} isRequired>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        variant='outline'
                        focusBorderColor='#F4CE14'
                        id="occasion"
                        value={formik.values.occasion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-label="Occasion"
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>

                <Button
                    isLoading={formik.isSubmitting}
                    style={{ marginTop: '20px' }}
                    align='center'
                    borderRadius='16px'
                    color='Black'
                    background={'#F4CE14'}
                    variant='solid'
                    size='lg'
                    type="submit"
                    aria-label="Make Your reservation"
                    isDisabled={!formik.isValid || formik.isSubmitting}
                >
                    Make Your reservation
                </Button>
            </form>
        </VStack>
    );
};

export default BookingForm;
