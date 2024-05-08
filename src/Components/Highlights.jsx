import { Card, CardBody, Stack, Heading, Text, SimpleGrid, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import Image1 from '../Images/greek salad.jpg'
import Image2 from '../Images/bruchetta.svg'
import Image3 from '../Images/lemon dessert.jpg'

function Highlights() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card maxW='sm'>
                <CardBody>
                    <img
                        src={Image1}
                        alt='greek salad on a plate'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Greek Salad</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text>
                            The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </Text>

                    </Stack>
                </CardBody>

                <CardFooter>
                    <Text>Order a Delivery</Text>
                    {/* icon missing */}
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <img
                        src={Image2}
                        alt='toasted bread with tomatoes and olive oil'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Bruchetta</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text>
                            Our Bruschetta is made from grilled bread that
                            has been smeared with garlic and seasoned with salt
                            and olive oil.
                        </Text>

                    </Stack>
                </CardBody>

                <CardFooter>
                    <Text>Order a Delivery</Text>
                    {/* icon missing */}
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <img
                        src={Image3}
                        alt='lemon cake on a plate'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Lemon Dessert</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                        <Text>
                            This comes straight from grandma’s recipe book,
                            every last ingredient has been sourced and is as authentic as
                            can be imagined.
                        </Text>

                    </Stack>
                </CardBody>

                <CardFooter>
                    <Text>Order a Delivery</Text>
                    {/* icon missing */}
                </CardFooter>
            </Card>
        </SimpleGrid >
    )
}

export default Highlights;