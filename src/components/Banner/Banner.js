import React from "react";
import Resume from "./../Resume/Md. Tarequl Islam (1).pdf"

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className="col-md-6">
            <h1 className="title">
              I am Tareq <br /> A Front-End Developer
            </h1>
            <p className="text-white text-center mt-3">
              
            </p>
            <a
              className="download_btn"
              style={{ textDecoration: "none" }}
              href={Resume}
              download="resume"
            >
              Download Resume
            </a>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
