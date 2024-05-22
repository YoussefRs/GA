import React from "react";
import "./styles.css";

import bg from "../../assets/fingerfood/bg.png";
import bg2 from "../../assets/fingerfood/bg2.png";
import food1 from "../../assets/fingerfood/food1.png";
import food2 from "../../assets/fingerfood/food2.png";
import rWing from "../../assets/wedding/right-wing.png";
import lWing from "../../assets/wedding/left-wing.png";

import Hero from "../../components/hero/Hero";
import AboutTitle2 from "../about/elements/AboutTitle2";
import SubTitle from "../about/elements/SubTitle";
import ReserveBox from "../../components/reserveBox/ReserveBox";
import Achievements from "../../components/achievements/Achievements";
import Testimonials from "../home/homeComponents/Testimonials/Testimonials";
import Footer from "../home/homeComponents/Footer/Footer";

export default function FingerFood() {
  return (
    <div className="fingerfood_container">
      <Hero bgImg={bg} title={"CATERING/FINGER FOOD"} />
      <div className="fingerfood_content">
        <div className="_inner">
          <div className="_left_box">
            <img src={food1} alt="" />
            <img src={lWing} alt="" />
          </div>
          <div className="_center_box">
            <AboutTitle2 title={"finger food"} />
            <SubTitle
              content={"Lorem Ipsum is simply dummy text of the"}
              alignText={"center"}
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="_right_box">
            <img src={food2} alt="" />
            <img src={rWing} alt="" />
          </div>
        </div>
      </div>
      <ReserveBox bg={bg2} formAlign={"left"} />
      <Achievements />
      <Testimonials />
      <Footer />
    </div>
  );
}
