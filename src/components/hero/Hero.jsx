import React, { useEffect } from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Hero({ title, bgImg }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <div className="reusable_hero" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="title_container">
        <p data-aos={"slide-right"}>Willkommen Bei Gastro Angel</p>
        <p data-aos={"slide-right"} data-aos-delay="400">
          {title}
        </p>
      </div>
    </div>
  );
}
