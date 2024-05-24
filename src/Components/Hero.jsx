import '../stylesheets/Hero.css';
import Image from '../Images/restauranfood.jpg';

function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1 id='hero-title'>Little Lemon</h1>
                <h2 id='hero-subtitle'>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='button' aria-label="Reserve a table at Little Lemon">Reserve a table</button>
            </div>
            <div className='hero-image'>
                <img src={Image} alt="Delicious restaurant food" />
            </div>
        </div>
    );
}

export default Hero;

