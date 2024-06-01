import Footer from "./Footer";
import Nav from "./NavBarResponsive/Nav";
import { Image } from "@chakra-ui/react";
import Mario_and_Adrian_A from "../Images/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../Images/Mario_and_Adrian_B.jpg";

function About() {
    return (
        <>
            <Nav />
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-txt">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                </p>
                <p className="lead-txt">
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
                <Image img src={Mario_and_Adrian_A} alt="Mario and Adrian" />

                <Image img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
            </div>
            <Footer />
        </>
    )
}

export default About;