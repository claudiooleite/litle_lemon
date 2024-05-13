import { Input } from "@chakra-ui/react";


function BookingForm() {
    return (
        <>
            <Input variant='filled' placeholder='Filled' />
            <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
        </>
    )
}

function BookingPage() {

    return (
        <BookingForm>

        </BookingForm>
    )
}

export default BookingPage;