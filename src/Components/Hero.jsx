import image from '../Images/restaurant chef B.jpg';
import MyButton from './MyButton';
import { Flex, useMediaQuery, Heading, Text, Image, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (

        <Flex
            bg={"brand.primary"}
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            justifyContent="center"
        >
            <Flex
                maxWidth="1024px"
                maxHeight={isLargerThan992 ? "310px" : '1000px'}
                flexDirection={isLargerThan992 ? 'row' : 'column'}
                alignItems={isLargerThan992 ? 'flex-start' : 'center'}
            >
                <Flex
                    id='content'
                    flexDirection='column'
                    alignItems={isLargerThan992 ? 'stretch' : 'center'}
                    justifyContent="space-between"
                    height="100%"
                >
                    <Heading
                        fontSize={'2xl'}
                        fontWeight={'medium'}
                        id='hero-title'
                        color='brand.secondary'
                        lineHeight={{ base: "90%", md: "100%" }}
                    >
                        Little Lemon
                    </Heading>
                    <Heading
                        fontSize={'lg'}
                        fontWeight={'regular'}
                        color='brand.highlight_light'
                    >
                        <FontAwesomeIcon
                            size="2xs"
                            style={{ color: "#edefee" }}
                            icon={faLocationPin} />Chicago</Heading>
                    <Text
                        textAlign={isLargerThan992 ? 'inherit' : 'center'}
                        maxWidth='60ch' color='brand.highlight_light'>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Text>
                    <Box style={{ textAlign: 'center', padding: '1rem' }} >
                        <MyButton to='/bookingpage' size={'xs'} >Reserve a table</MyButton>
                    </Box>
                </Flex>
                <Flex
                    flex="1"
                    justifyContent={isLargerThan992 ? 'flex-end' : 'center'}
                    p={4}>
                    <Image
                        src={image}
                        alt="Delicious restaurant food"
                        maxWidth="100%"
                        maxHeight="310px"
                        objectFit="contain" />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Hero;

