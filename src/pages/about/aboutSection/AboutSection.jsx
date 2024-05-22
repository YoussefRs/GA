import React from "react";
import "./styles.css";

import broch from "../../../assets/about/broch.png";
import AboutTitle from "../elements/AboutTitle";
import SubTitle from "../elements/SubTitle";

export default function AboutSection() {
  return (
    <div className="about_section">
      <div className="about_section_inner">
        <div className="main_title">
          <span>ÜBER UNS</span>
        </div>
        <img src={broch} className="broch" alt="" />
        <div className="description">
          <AboutTitle title={"ÜBER UNS"} />
          <SubTitle
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            alignText={"start"}
          />
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
