import React from "react";
import Hero from "./homeComponents/Hero/Hero";
import Navbar from "./homeComponents/Navigation/Navbar";
import About from "./homeComponents/About/About";
import Banner from "./homeComponents/Banner/Banner";
import Invitation from "./homeComponents/Invitation/Invitation";
import Footer from "./homeComponents/Footer/Footer";

function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <Invitation />
      <Footer />
    </>
  );
}

export default Home;
