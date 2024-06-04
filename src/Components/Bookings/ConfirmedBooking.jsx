import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import PageContainer from "../PageContainer";

function ConfirmedBooking() {
    const location = useLocation();
    const bookingData = location.state;
    const headingSize = useBreakpointValue({ base: 'lg', md: '2xl' });
    const textSize = useBreakpointValue({ base: 'md', md: 'lg' });
    const containerPadding = useBreakpointValue({ base: 4, md: 10 });
    const vstackPadding = useBreakpointValue({ base: 4, md: 8 });

    return (
        <PageContainer>
            <Box textAlign="center" py={containerPadding} px={6} bg="brand.highlight_light">
                <Heading as="h1" size={headingSize} mb={4} color="brand.primary" fontFamily="heading">
                    Your Booking Is Confirmed!
                </Heading>
                <Text fontSize={textSize} color="brand.secondary" fontFamily="body" mb={6}>
                    Thank you for booking with us! We look forward to providing you with an exceptional dining experience.
                </Text>
                <VStack spacing={4} bg="white" p={vstackPadding} borderRadius="md" boxShadow="lg">
                    <Text fontSize={textSize}>
                        <strong>First Name:</strong> {bookingData.firstName}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Last Name:</strong> {bookingData.lastName}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Email:</strong> {bookingData.email}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Date:</strong> {bookingData.date}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Time:</strong> {bookingData.time}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Guests:</strong> {bookingData.guests}
                    </Text>
                    <Text fontSize={textSize}>
                        <strong>Occasion:</strong> {bookingData.occasion}
                    </Text>
                </VStack>
                <Text fontSize={textSize} color="brand.tertiary" fontFamily="body" mt={6}>
                    We are excited to welcome you and hope you have a memorable time with us!
                </Text>
            </Box>
        </PageContainer>
    );
}

export default ConfirmedBooking;
