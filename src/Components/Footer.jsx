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
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'><Link to='/'>Home</Link></Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'><Link to='/about'>About</Link></Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'><Link to='/menu'>Menu</Link></Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Reservations</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Order Online</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Login</Button>
                </Stack>
                <Spacer />
                <Stack direction='column' className='hover effect'>
                    <Text textAlign={'center'} fontSize='1.2rem' fontWeight='semibold'>Contact</Text>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Address</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Phone Number</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Email</Button>
                </Stack>
                <Spacer />
                <Stack direction='column' className='hover effect'>
                    <Text fontWeight='semibold' fontSize='1.2rem' textAlign={'center'}>Social Media Links</Text>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Instagram</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Facebook</Button>
                    <Button fontSize='1rem' color={'brand.highlight_light'} variant='link'>Twitter</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default Footer;