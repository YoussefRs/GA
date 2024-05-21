import React from "react";
import logo from "../../../assets/about/about-logo2.png";
import "./styles.css";

export default function AboutTitle2({ title }) {
  return (
    <div className="title_container">
      <p className="">{title}</p>
      <div className="divider">
        <div className=""></div>
        <img src={logo} alt="" />
        <div className=""></div>
      </div>
    </div>
  );
}
