import '../stylesheets/Hero.css'
import { Button } from '@chakra-ui/react';
import Image from '../Images/restauranfood.jpg'
function Hero() {
    return (

        <div className='hero-section'>
            <div className='hero-content'>
                <h2 id='hero-title'>Little Lemon</h2>
                <h2 id='hero-subtitle'>Chicago</h2>
                <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with modern
                    twist.</p>
                <button className='button'>Reserve a table</button>
            </div>
            <div className='hero-image'>
                <img src={Image} alt="restaurant food" />
            </div>
        </div>

    )
}

export default Hero;