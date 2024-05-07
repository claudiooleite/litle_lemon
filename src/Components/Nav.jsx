import React from 'react';
import Image from "../Images/Logo.svg";
function Nav() {
    return (
        <>
            <img src={Image} alt='Logo Little Lemon restaurant' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </>
    )
}

export default Nav;