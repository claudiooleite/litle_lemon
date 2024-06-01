import React from 'react';
import { Card, CardBody, Stack, Heading, Text, SimpleGrid, CardFooter, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import MyButton from "./MyButton";
import Image1 from '../Images/greek salad.jpg';
import Image2 from '../Images/Bruchetta.jpg';
import Image3 from '../Images/moist-lemon-cake-180205-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/highlights.css';

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
    return (
        <div className="highlights-main">
            <div className="highlights head">

                <h1>This week specials!</h1>
                <MyButton to='/menu'>Online Menu</MyButton>
            </div>
            <SimpleGrid className="highlights-cards" spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
                {specialDishes.map((dish, index) => (
                    <Card key={index} maxW='sm' bg='EDEFEE' borderRadius='lg' overflow='hidden'>
                        <CardBody>
                            {dish.imageSrc && (

                                <Box borderRadius='lg' overflow='hidden'>
                                    <img className="image-highlights"
                                        src={dish.imageSrc}
                                        alt={dish.altContent}
                                    />
                                </Box>
                            )}
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{dish.name}</Heading>
                                <Text color='blue.600' fontSize='2xl'>
                                    {dish.price}
                                </Text>
                                <Text>
                                    {dish.description}
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Link to='/menu'>
                                <Text>Order a Delivery</Text>
                                <FontAwesomeIcon icon={faPersonBiking} />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    );
}

export default Highlights;

