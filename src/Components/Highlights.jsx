import { Card, CardBody, Stack, Heading, Text, SimpleGrid, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import Image1 from '../Images/greek salad.jpg'
import Image2 from '../Images/bruchetta.svg'
import Image3 from '../Images/lemon dessert.jpg'
import '../stylesheets/highlights.css'

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
        name: "Greek Salad",
        price: "$25",
        description: " This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: Image3,
        altContent: "lemon cake on a plate"
    }

]



function Highlights() {
    return (
        <div className="highlights-main">
            <div className="highlights head">
                <h1>This week special!</h1>
                <button className="button">Online Menu</button>
            </div>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {specialDishes.map((dish, index) => (
                    <Card key={index} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <CardBody>
                            {dish.imageSrc && (
                                <img
                                    src={dish.imageSrc}
                                    alt={dish.altContent}
                                    borderRadius='lg'
                                />
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
                            <Text>Order a Delivery</Text>
                            {/* Add icon here */}
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid >
        </div>
    )
}

export default Highlights;