import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImage from "../../images/5-Things-to-know-to-become-a-Web-Developer-in-2021.jpeg"

const About = () => {
  return (
    <div className="mt-3 container">
      
      <h1>About Me</h1>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-5  mt-5">
          <img src={AboutImage} className="img-fluid" alt="" />
        </div>
        <div className="col-md-7  mt-5">
          <p className="text-start">
          This is Md. Tarequl Islam, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional website
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
