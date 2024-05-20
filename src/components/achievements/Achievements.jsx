import React from "react";
import "./styles.css";
import AboutTitle from "../../pages/about/elements/AboutTitle";

import ach1 from "../../assets/achievements/achvmnt1.png";
import ach2 from "../../assets/achievements/achvmnt2.png";
import ach3 from "../../assets/achievements/achvmnt3.png";
import ach4 from "../../assets/achievements/achvmnt4.png";
import AchievementBox from "./AchievementBox";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Achievements() {
  const achievements = [
    {
      img: ach1,
      number: 1,
      name: "First Achievement",
    },
    {
      img: ach2,
      number: 2,
      name: "Second Achievement",
    },
    {
      img: ach3,
      number: 3,
      name: "Third Achievement",
    },
    {
      img: ach4,
      number: 4,
      name: "Fourth Achievement",
    },
    {
      img: ach4,
      number: 5,
      name: "Fifth Achievement",
    },
    {
      img: ach4,
      number: 6,
      name: "Sixth Achievement",
    },
  ];

  return (
    <div className="achievements_container">
      <div className="_inner_box">
        <AboutTitle title={"our achievements"} />
        <div className="achievements_box">
          <Swiper
            className="mySwiper"
            slidesPerView={"auto"}
            effect="fade"
          >
            {achievements.map((achv, i) => (
              <SwiperSlide>
                <AchievementBox data={achv} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
