import React from 'react';
import '../App.css'
import Image from "../Images/Logo.svg";

function Nav() {
    return (
        <div class="nav-main">
            <img id="logo-top" src={Image} alt="Logo Little Lemon restaurant" />
            <div class="nav-content">
                <ul class="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <div class="nav-icon">
                    {/* <!-- Icon goes here --> */}
                </div>
            </div>
        </div>
    )
}

export default Nav;