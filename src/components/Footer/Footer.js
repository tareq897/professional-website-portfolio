import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";



const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Md. Tarequl Islam</h1>
                <p>Alipur,Faridpur
Dhaka</p>
                <div className="icons-container d-flex text-center ">
                  
                  <div className="icon">
                  <i className="bi bi-instagram"></i>
                  </div>
                  <div className="icon">
                  <i class="bi bi-facebook"></i>
                  </div>
                  <div className="icon">
                  <i className="bi bi-youtube"></i>
                  </div>
                  <div className="icon">
                  <i className="bi bi-twitter"></i>
                  </div>
                </div>
                

              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container deep">
                <ul>
                  <li className="footer-menu deep">Get In Touch</li>
                  <li className="footer-menu deep">LinkedIn</li>
                  <li className="footer-menu deep">GitHub</li>
                  <li className="footer-menu deep">Email</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
             
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  
                  </div>
                  <div>
                    <h5 className="deep text-danger">Pages</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                    About
                      <br /> Dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
