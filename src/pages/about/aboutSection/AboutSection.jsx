import React from "react";
import "./styles.css";

import logo from "../../../assets/about/about-logo2.png";
import broch from "../../../assets/about/broch.png";

export default function AboutSection() {
  return (
    <div className="about_section">
      <div className="about_section_inner">
        <div className="main_title">
          <span>About us</span>
        </div>
        <img src={broch} className="broch" alt="" />
        <div className="description">
          <div className="title">
            <span>About us</span>
            <div className="divider">
              <img src={logo} alt="" />
              <div className=""></div>
            </div>
          </div>
          <p className="sub_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
