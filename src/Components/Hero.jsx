import '../stylesheets/Hero.css';
import Image from '../Images/restaurant chef B.jpg';
import MyButton from './MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1 id='hero-title'>Little Lemon</h1>
                <h2 id='hero-subtitle'><FontAwesomeIcon style={{ color: "#edefee" }} icon={faLocationPin} /> Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <MyButton to='/bookingpage'>Reserve a table</MyButton>
            </div>
            <div className='hero-image'>
                <img src={Image} alt="Delicious restaurant food" />
            </div>
        </div>
    );
}

export default Hero;

