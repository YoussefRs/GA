import React from "react";
import logo from "../../../assets/about/about-logo2.png";
import "./styles.css";

export default function AboutTitle({ title }) {
  return (
    <div className="title1">
      <span>{title}</span>
      <div className="divider">
        <img src={logo} alt="" />
        <div className=""></div>
      </div>
    </div>
  );
}
