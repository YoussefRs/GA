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
      <div className="row h-100 w-100">
        <div className="col-md-9 col-12 p-0">
          <div className="row row_height">
            <div
              className="col-md-8 col-12 bg-wedding px-2 py-5"
              data-aos={"flip-up"}
            >
              <div className="container-md d-flex flex-column">
                <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
                  <h1 className="title ">WEDDING</h1>
                  <p className="subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae sed reiciendis
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
            <div
              className="col-12 col-md-4 bg-breakfast px-2 py-5"
              data-aos={"flip-right"}
            >
              <div className="d-flex align-items-start justify-content-center flex-column px-3">
                <h1 className="title text-black">BREAKFAST</h1>
                <p className="subtitle text-black">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae sed
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
          <div className="row row_height">
            <div
              className="col-12 col-md-4 bg-foo px-md-2 py-5"
              data-aos={"flip-left"}
            >
              <div className="container-md d-flex flex-column">
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <h1 className="title text-black">BUFFET</h1>
                  <p className="subtitle text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae sed reiciendis
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
            <div
              className="col-12 col-md-8 bg-wedding px-2 py-5"
              data-aos={"flip-down"}
            >
              <div className="col-md-6 d-flex align-items-start justify-content-center flex-column px-3">
                <h1 className="title ">BUSINESS</h1>
                <p className="subtitle">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae sed
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
        <div className="col-md-3 col-12 bg-food py-5" data-aos={"zoom-in"}>
          <div className="container d-flex flex-column">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="title ">
                FINGER
                <br />
                FOOD
              </h1>
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
