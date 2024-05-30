import Image from '../Images/Logo.svg'
import { Link } from 'react-router-dom';
import { Stack, Button, Text } from '@chakra-ui/react';
import '../stylesheets/footer.css'
function Footer() {
    return (
        <div className='footer'>
            <Link to='/'>
                <img src={Image} alt="restaurant logo" />
            </Link>
            <Stack className='hover effect'>
                <Text fontWeight='semibold' >Doormat navigation</Text>
                <Button variant='link'>Home</Button>
                <Button variant='link'>About</Button>
                <Button variant='link'>Menu</Button>
                <Button variant='link'>Reservations</Button>
                <Button variant='link'>Order Online</Button>
                <Button variant='link'>Login</Button>
            </Stack>
            <Stack className='hover effect'>
                <Text fontWeight='semibold'>Contact</Text>
                <Button variant='link'>Address</Button>
                <Button variant='link'>Phone Number</Button>
                <Button variant='link'>Email</Button>
            </Stack>
            <Stack className='hover effect'>
                <Text fontWeight='semibold'>Social Media Links</Text>
                <Button variant='link'>Instagram</Button>
                <Button variant='link'>Facebook</Button>
                <Button variant='link'>Twitter</Button>
            </Stack>
        </div>
    )
}

export default Footer;