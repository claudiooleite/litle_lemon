import image from '../Images/favicon-32x32.png'
import { Link } from 'react-router-dom';
import { Stack, Button, Text, Flex, useMediaQuery, Image, Spacer } from '@chakra-ui/react';

function Footer() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (
        <Flex
            bg='brand.primary'
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            flexDirection={isLargerThan992 ? 'row' : 'column'}
            justifyContent='center'
        >

            <Flex
                id='footer'
                maxWidth="1024px"
                flexDirection={isLargerThan992 ? 'row' : 'column'}
                justifyContent={isLargerThan992 ? 'space-between' : 'center'} // Spread elements in row direction or center them in column direction
                width="100%"
            >

                {isLargerThan992 ? (<Link to='/'>
                    <Image width='3rem' src={image} alt="restaurant logo" />
                </Link>) : null}
                <Spacer />
                <Stack direction='column' className='hover effect'>
                    <Button variant='link'><Link to='/'>Home</Link></Button>
                    <Button variant='link'>About</Button>
                    <Button variant='link'>Menu</Button>
                    <Button variant='link'>Reservations</Button>
                    <Button variant='link'>Order Online</Button>
                    <Button variant='link'>Login</Button>
                </Stack>
                <Spacer />
                <Stack direction='column' className='hover effect'>
                    <Text textAlign={'center'} fontSize='sm' fontWeight='semibold'>Contact</Text>
                    <Button variant='link'>Address</Button>
                    <Button variant='link'>Phone Number</Button>
                    <Button variant='link'>Email</Button>
                </Stack>
                <Spacer />
                <Stack direction='column' className='hover effect'>
                    <Text fontWeight='semibold' fontSize='sm' textAlign={'center'}>Social Media Links</Text>
                    <Button variant='link'>Instagram</Button>
                    <Button variant='link'>Facebook</Button>
                    <Button variant='link'>Twitter</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default Footer;