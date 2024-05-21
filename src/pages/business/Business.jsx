import React from "react";
import "./styles.css";

import bg from "../../assets/business/bg.png";
import bg2 from "../../assets/business/bg2.png";
import food from "../../assets/business/food.png";

import Hero from "../../components/hero/Hero";
import ReserveBox from "../../components/reserveBox/ReserveBox";
import Achievements from "../../components/achievements/Achievements";
import Testimonials from "../home/homeComponents/Testimonials/Testimonials";
import Footer from "../home/homeComponents/Footer/Footer";
import AboutTitle from "../about/elements/AboutTitle";
import SubTitle from "../about/elements/SubTitle";

export default function Business() {
  return (
    <div className="breakfast_container">
      <Hero bgImg={bg} title={"CATERING/BREAKFAST"} />
      <div className="_breakfast_content">
        <div className="_inner">
          <div className="_left_box">
            <img src={food} alt="" />
          </div>
          <div className="_right_box">
            <AboutTitle title={"breakfast"} />
            <SubTitle content={"Lorem Ipsum is simply dummy text of the"} />
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
        </div>
      </div>
      <ReserveBox bg={bg2} formAlign={"left"} />
      <Achievements />
      <Testimonials />
      <Footer />
    </div>
  );
}
