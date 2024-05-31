import React from 'react';
import NavLargeDisplay from './NavLargeDisplay';
import NavMobile from './NAvMobile';
import '../../stylesheets/App.css';

import { useMediaQuery } from '@chakra-ui/react';


function Nav() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

    return (
        <>
            {isLargerThan992 ? <NavLargeDisplay /> : <NavMobile />}
        </>
    );
}

export default Nav;
