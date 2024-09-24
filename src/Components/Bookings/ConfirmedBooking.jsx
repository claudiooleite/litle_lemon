import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import PageContainer from "../PageContainer";

const ConfirmedBooking = () => {
    const { state: bookingData } = useLocation();
    const headingSize = useBreakpointValue({ base: 'md', md: 'xl' });
    const textSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const containerPadding = useBreakpointValue({ base: 4, md: 10 });
    const vstackPadding = useBreakpointValue({ base: 4, md: 8 });

    return (
        <PageContainer>
            <Box textAlign="center" py={containerPadding} px={6} bg="brand.highlight_light">
                <Heading as="h1" size={headingSize} mb={4} color="brand.primary" fontFamily="heading">
                    Booking Confirmed!
                </Heading>
                <Text fontSize={textSize} color="brand.secondary" fontFamily="body" mb={6}>
                    We're excited to have you! Here's a quick summary of your booking:
                </Text>
                <VStack spacing={4} bg="white" p={vstackPadding} borderRadius="md" boxShadow="lg">
                    <Text fontSize={textSize}><strong>Name:</strong> {`${bookingData.firstName} ${bookingData.lastName}`}</Text>
                    <Text fontSize={textSize}><strong>Email:</strong> {bookingData.email}</Text>
                    <Text fontSize={textSize}><strong>Date:</strong> {bookingData.date}</Text>
                    <Text fontSize={textSize}><strong>Time:</strong> {bookingData.time}</Text>
                    <Text fontSize={textSize}><strong>Guests:</strong> {bookingData.guests}</Text>
                    <Text fontSize={textSize}><strong>Occasion:</strong> {bookingData.occasion}</Text>
                </VStack>
                <Text fontSize={textSize} color="brand.tertiary" fontFamily="body" mt={6}>
                    We can't wait to welcome you! If you need any changes, feel free to contact us.
                </Text>
            </Box>
        </PageContainer>
    );
};

export default ConfirmedBooking;
