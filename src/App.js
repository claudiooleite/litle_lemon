import "../src/stylesheets/App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="parent">
      <Nav />
      <Hero />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
