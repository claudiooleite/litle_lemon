import '../stylesheets/Hero.css'
import Nav from './NavBarResponsive/Nav';
import Footer from './Footer';
function NoPage() {
    return (
        <>
            <Nav />
            <h1 id='hero-title'>Wrong way... 404</h1>;
            <Footer />
        </>
    )
};

export default NoPage;