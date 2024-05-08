import Image from '../Images/Logo.svg'
import { List, ListItem } from '@chakra-ui/react';
function Footer() {
    return (
        <>
            <img src={Image} alt="restaurant logo" />
            <List>
                <ListItem>Doormat navigation</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Menu</ListItem>
                <ListItem>Reservations</ListItem>
                <ListItem>Order Online</ListItem>
                <ListItem>Login</ListItem>
            </List>
            <List>
                <ListItem>Contact</ListItem>
                <ListItem>Address</ListItem>
                <ListItem>Phone Number</ListItem>
                <ListItem>Email</ListItem>
            </List>
            <List>
                <ListItem>Social Media Links</ListItem>
                <ListItem>Instagram</ListItem>
                <ListItem>Facebook</ListItem>
                <ListItem>Twitter</ListItem>
            </List>
        </>
    )
}

export default Footer;