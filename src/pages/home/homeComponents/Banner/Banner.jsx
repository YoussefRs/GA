import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <div className="banner ">
      <div className="row h-100">
        <div className="col-md-9 col p-0">
          <div className="row h-50">
            <div className="col-md-9 col bg-wedding" data-aos={"flip-up"}>
              <div className="container d-flex flex-column">
                <div className="col-4 d-flex align-items-start justify-content-center flex-column">
                  <h1 className="title ">WEDDING</h1>
                  <p className="subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae sed reiciendis iste distinctio sunt omnis facilis
                    nam, consequuntur sit
                  </p>
                  <div className="banner-outer-container">
                    <div className="banner-dot-container">
                      <div className="banner-dot"></div>
                      <div className="banner-inner-circle"></div>
                      <p>MORE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-3 bg-breakfast" data-aos={"flip-right"}>
              <div className="d-flex align-items-start justify-content-center flex-column px-3">
                <h1 className="title text-black">BREAKFAST</h1>
                <p className="subtitle text-black">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae sed reiciendis iste distinctio sunt omnis facilis
                  nam, consequuntur sit
                </p>
                <div className="banner-outer-container">
                  <div className="banner-dot-container">
                    <div className="banner-dot"></div>
                    <div className="banner-inner-circle"></div>
                    <p>MORE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row h-50">
            <div className="col col-md-3 bg-foo" data-aos={"flip-left"}>
              <div className="container d-flex flex-column">
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <h1 className="title text-black">BUFFET</h1>
                  <p className="subtitle text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae sed reiciendis iste distinctio sunt omnis facilis
                    nam, consequuntur sit
                  </p>
                  <div className="banner-outer-container">
                    <div className="banner-dot-container">
                      <div className="banner-dot"></div>
                      <div className="banner-inner-circle"></div>
                      <p>MORE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-9 bg-wedding" data-aos={"flip-down"}>
              <div className="col-md-5 col d-flex align-items-start justify-content-center flex-column px-3">
                <h1 className="title ">BUSINESS</h1>
                <p className="subtitle">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae sed reiciendis iste distinctio sunt omnis facilis
                  nam, consequuntur sit
                </p>
                <div className="banner-outer-container">
                  <div className="banner-dot-container">
                    <div className="banner-dot"></div>
                    <div className="banner-inner-circle"></div>
                    <p>MORE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col bg-food" data-aos={"zoom-in"}>
          <div className="container d-flex flex-column">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="title ">FINGER FOOD</h1>
              <div className="banner-outer-container">
                <div className="banner-dot-container">
                  <div className="banner-dot"></div>
                  <div className="banner-inner-circle"></div>
                  <p>MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
