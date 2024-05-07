import Image from '../Images/Logo.svg'

function Footer() {
    return (
        <>
            <img src={Image} alt="restaurant logo" />
            <ul>
                <li>Doormat navigation</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Adress</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </>
    )
}

export default Footer;