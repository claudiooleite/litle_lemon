import '../stylesheets/Hero.css';
import Image from '../Images/restaurant chef B.jpg';
import MyButton from './MyButton';
import { Flex, useMediaQuery, Heading, Text, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (
        <Box
            bg={"brand.primary"}
            width="100%"
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            textAlign="center"
        >

            <Flex flexDirection={isLargerThan992 ? 'row' : 'column'} alignItems={isLargerThan992 ? 'flex-start' : 'center'}>
                <Heading fontSize={'2xl'} fontWeight={'medium'} id='hero-title' color='brand.secondary' lineHeight={{base:"90%" , md:"100%"}} >Little Lemon</Heading>
                <Heading fontSize={'lg'} fontWeight={'regular'} id='hero-subtitle' color='brand.highlight_light'><FontAwesomeIcon size="2xs" style={{ color: "#edefee" }} icon={faLocationPin} />  Chicago</Heading>
                <Text textAlign={isLargerThan992 ? 'inherit' : 'center'} maxWidth='60ch' color='brand.highlight_light'>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                <div style={{ textAlign: 'center', padding:'1rem' }} >
                    <MyButton to='/bookingpage' size={'sm'} >Reserve a table</MyButton>
                </div>
            </Flex>
            <div >
                <img src={Image} alt="Delicious restaurant food" />
            </div>

        </Box>
    );
}

export default Hero;

