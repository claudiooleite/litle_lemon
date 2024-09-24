import React from 'react';
import { Card, CardBody, Stack, Spacer, Heading, Text, SimpleGrid, CardFooter, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import MyButton from "./MyButton";
import Image1 from '../Images/greek salad.jpg';
import Image2 from '../Images/Bruchetta.jpg';
import Image3 from '../Images/moist-lemon-cake-180205-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

const specialDishes = [
    {
        name: "Greek Salad",
        price: "$25",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        imageSrc: Image1,
        altContent: "greek salad on a plate"
    },
    {
        name: "Bruchetta",
        price: "$25",
        imageSrc: Image2,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        altContent: "toasted bread with tomatoes and olive oil"
    },
    {
        name: "Lemon Cake",
        price: "$25",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: Image3,
        altContent: "lemon cake on a plate"
    }
];

function Highlights() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (
        <Flex
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            justifyContent={'center'} bg='brand.highlight_light'
        >
            <Flex
                gap='10'
                maxWidth="1024px"
                width='100%'
                flexDirection='column'
                alignItems={isLargerThan992 ? null : 'center'}>
                <Flex justifyContent={'center'}>
                    <Heading fontSize='2rem'>This week specials!</Heading>
                    {isLargerThan992 ? (
                        <>
                            <Spacer />
                            <MyButton to='/menu'>Online Menu</MyButton>
                        </>
                    ) : null}
                </Flex>
                <SimpleGrid justifyItems={'center'} gap={4} templateColumns={isLargerThan992 ? 'repeat(3, minmax(150px, 1fr))' : '2, minmax(150px, 1fr)'}>
                    {specialDishes.map((dish, index) => (
                        <Card key={index} maxW='m' bg='EDEFEE' borderRadius='lg' overflow='hidden'>
                            <CardBody p={0}>
                                {dish.imageSrc && (

                                    <Box borderRadius='lg' overflow='hidden'>
                                        <img className="image-highlights"
                                            src={dish.imageSrc}
                                            alt={dish.altContent}
                                        />
                                    </Box>
                                )}
                                <Stack mt='4' p={4} spacing='3'>
                                    <Flex justifyContent={'space-between'}>
                                        <Heading size='sm'>{dish.name}</Heading>
                                        <Text color='blue.600' fontSize='sm'>
                                            {dish.price}
                                        </Text>
                                    </Flex>
                                    <Text >
                                        {dish.description}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter p={4} pt={0}>
                                <Link to='/menu'>
                                    <Flex>
                                        <Text>Order a Delivery</Text> {" "}
                                        <FontAwesomeIcon style={{ marginLeft: '20px' }} icon={faPersonBiking} />
                                    </Flex>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
                {isLargerThan992 ? null :
                    (<>

                        <MyButton to='/menu'>Online Menu</MyButton>
                    </>
                    )}
            </Flex>
        </Flex >
    );
}

export default Highlights;

