import '../stylesheets/Hero.css'
import Image from '../Images/restauranfood.jpg'
function Hero() {
    return (

        <div className='hero-section'>
            <div>
                <h1 id='hero-title'>Little Lemon</h1>
                <h2 id='hero-subtitle'>Chicago</h2>
                <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with modern
                    twist.</p>
                <button>Reserve a table</button>
            </div>

            <img src={Image} alt="restaurant food" />

        </div>

    )
}

export default Hero;