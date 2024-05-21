import React, { useRef } from "react";
import "./styles.css";
import AboutTitle from "../../pages/about/elements/AboutTitle";
import { t } from "i18next";

export default function ReserveBox({ bg, formAlign }) {
  //   const dateRef = useRef(null);
  return (
    <div
      className="reserve_box_container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="_inner">
        <div
          className="reserve_form"
          style={{
            margin: formAlign === "right" ? "0 0 0 auto" : "0 auto 0 0",
          }}
        >
          <AboutTitle title={"reserve now !"} />
          <div className="_form">
            <input type="text" placeholder="first name" className="_input" />
            <input type="text" placeholder="last name" className="_input" />
            <input type="tel" placeholder="phone" className="_input" />
            <input type="email" placeholder="email" className="_input" />
            <input type="text" placeholder="subject" className="_input" />
            <input
              type="date"
              placeholder="date"
              className="_input"
              //   ref={dateRef}
              //   onFocus={() => (dateRef.current.type = "date")}
              //   onBlur={() => (dateRef.current.type = "text")}
            />

            <textarea
              name=""
              id=""
              placeholder="message"
              className="_input"
              rows={7}
            ></textarea>
          </div>
          <div className="_button">
            <div className="_dot"></div>
            <button>
              <span>Book !</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
