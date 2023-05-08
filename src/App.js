import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Tour from "./components/Tour";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Tour />
      <Footer />
    </React.Fragment>
  );
}

export default App;
