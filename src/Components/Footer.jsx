import Image from '../Images/logo2.png'
import { Link } from 'react-router-dom';
import { Stack, Button, Text, Flex, useMediaQuery } from '@chakra-ui/react';

function Footer() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (
        <Flex
            bg='brand.primary'
            width="100%"
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            justifyContent="center"
            flexDirection={isLargerThan992 ? 'row' : 'column'}>

            <Flex
                maxWidth="1024px"
                flexDirection={isLargerThan992 ? 'row' : 'column'}>
                <Link to='/'>
                    <img src={Image} alt="restaurant logo" />
                </Link>
                <Stack direction='column' className='hover effect'>
                    <Text fontWeight='semibold' >Doormat navigation</Text>
                    <Button variant='link'>Home</Button>
                    <Button variant='link'>About</Button>
                    <Button variant='link'>Menu</Button>
                    <Button variant='link'>Reservations</Button>
                    <Button variant='link'>Order Online</Button>
                    <Button variant='link'>Login</Button>
                </Stack>
                <Stack direction='column' className='hover effect'>
                    <Text fontWeight='semibold'>Contact</Text>
                    <Button variant='link'>Address</Button>
                    <Button variant='link'>Phone Number</Button>
                    <Button variant='link'>Email</Button>
                </Stack>
                <Stack direction='column' className='hover effect'>
                    <Text fontWeight='semibold'>Social Media Links</Text>
                    <Button variant='link'>Instagram</Button>
                    <Button variant='link'>Facebook</Button>
                    <Button variant='link'>Twitter</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default Footer;