import React from "react";
import "./styles.css";

export default function AchievementBox({ data }) {
  return (
    <div className="achievement_box">
      <div className="img">
        <img src={data.img} alt="" />
      </div>
      <div className="label">
        <span className="number">0{data.number}</span>
        <span className="name">{data.name}</span>
      </div>
    </div>
  );
}
