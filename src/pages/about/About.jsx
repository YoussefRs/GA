import React from "react";
import Hero from "../../components/hero/Hero";
import './styles.css'

import bg from "../../assets/about/about-bg.png";
import AboutSection from "./aboutSection/AboutSection";
import ServicesSection from "./servicesSection/ServicesSection";

export default function About() {
  return (
    <div className="about_container">
          <Hero title={"ABOUT US"} bgImg={bg} />
          <AboutSection />
          <ServicesSection />
    </div>
  );
}
