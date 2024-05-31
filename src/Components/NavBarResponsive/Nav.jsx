import React from 'react';
import NavLargeDisplay from './NavLargeDisplay';
import NavMobile from './NAvMobile';
import '../../stylesheets/App.css';

import { Flex, useMediaQuery } from '@chakra-ui/react';


function Nav() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

    return (
        <Flex>
            {isLargerThan992 ? <NavLargeDisplay /> : <NavMobile />}
        </Flex >
    );
}

export default Nav;
