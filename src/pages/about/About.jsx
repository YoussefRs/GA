import React from "react";
import Hero from "../../components/hero/Hero";
import "./styles.css";

import bg from "../../assets/about/about-bg.png";
import AboutSection from "./aboutSection/AboutSection";
import ServicesSection from "./servicesSection/ServicesSection";
import Achievements from "../../components/achievements/Achievements";
import VideoSlider from "../home/homeComponents/Video/VideoSlider";
import Testimonials from "../home/homeComponents/Testimonials/Testimonials";
import Footer from "../home/homeComponents/Footer/Footer";

export default function About() {
  return (
    <div className="about_container">
      <Hero title={"ÜBER UNS"} bgImg={bg} />
      <AboutSection />
      <ServicesSection />
      <Achievements />
      <VideoSlider />
      <Testimonials />
      <Footer />
    </div>
  );
}
