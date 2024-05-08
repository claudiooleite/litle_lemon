import "../src/stylesheets/App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
