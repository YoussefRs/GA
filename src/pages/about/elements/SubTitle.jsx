import React from "react";
import "./styles.css";

export default function SubTitle({ content, alignText }) {
  return <p className="sub_title" style={{textAlign: `${alignText}`}}>{content}</p>;
}
