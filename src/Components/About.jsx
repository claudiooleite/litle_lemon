import React from 'react';
import { Heading, Spacer, useBreakpointValue, Flex, useMediaQuery, Text, Image, Box } from "@chakra-ui/react";
import PageContainer from './PageContainer';
import Mario_and_Adrian_A from "../Images/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../Images/Mario_and_Adrian_B.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function About() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });

    return (
        <PageContainer >
            <Flex
                justifyContent="center">
                <Flex
                    py={{ base: 4, md: 8 }}
                    px={{ base: 4, md: 8 }}
                    justifyContent='center' maxWidth="1024px"
                    width="100%">

                    <Box flexBasis={{ base: '100%', md: '50%' }} mb={{ base: 4, md: 0 }}>
                        <Heading
                            fontSize={headingSize}
                            fontWeight={'medium'}
                            id='hero-title'
                            color='brand.primary'
                            lineHeight={{ base: "90%", md: "100%" }}
                        >
                            Little Lemon
                        </Heading>
                        <Heading
                            fontSize={'lg'}
                            fontWeight={'regular'}
                            color='brand.tertiary'
                        >
                            <FontAwesomeIcon
                                size="2xs"
                                color='brand.tertiary'
                                icon={faLocationPin} />Chicago</Heading>
                        <Spacer padding='1rem' />
                        <Text maxWidth='60ch' color='brand.800' fontWeight='medium'>
                            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                        </Text>
                        <Spacer padding='1rem' />
                        <Text maxWidth='60ch' color='brand.800' fontWeight='medium'>
                            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                        </Text>
                    </Box>
                    <Box flexBasis={{ base: '100%', md: '50%' }} position="relative" height="400px">
                        <Image
                            src={Mario_and_Adrian_A}
                            alt="Mario and Adrian"
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="auto"
                            zIndex="1"
                        />
                        <Image
                            img src={Mario_and_Adrian_B}
                            alt="Mario and Adrian"
                            position="absolute"
                            top="20px"
                            left="20px"
                            width="100%"
                            height="auto"
                            zIndex="2"
                            opacity="0.8"
                        />
                    </Box>


                </Flex>
            </Flex>

        </PageContainer >
    )
}

export default About;