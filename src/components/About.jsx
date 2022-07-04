import React from "react";
import "./About.css";
import pic from './pic4.JPG';
// import grid from './grid.png';
import { HashLink as Link } from "react-router-hash-link";
import cv from './cv.pdf';

export default function About() {
  return (
    <div id="About">
      <div id="About1">
        <div className="About1a">
          <span id="IamName">
            <h1>I am Utkarsh Sarkari</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="About1b">
          <p id="info">
            A hardworking enthusiast and a curious person interested in
            web-based technologies and have ability to learn and collaborate in
            any environment. I would like to be a part of an organization where
            I could use as well as enhance my knowledge and talent for both the
            organization and myself.
          </p>
        </div>
        <div className="About1c">
          <div className="About1c1">
            <span className="phone">PHONE</span><br />
            <span className="phone">EMAIL</span><br />
            <span className="phone">LINKEDIN</span><br />
            <span className="phone">GITHUB</span>
          </div>
          <div className="About1c2">
            <span className="number">9548078908</span><br />
            <span className="number"><a href="https://utkrsh2001@gmail.com" target="_blank">utkrsh2001@gmail.com</a></span><br />
            <span className="number"><a href="https://www.linkedin.com/in/utkarshsarkari/" target="_blank">https://www.linkedin.com/in/utkarshsarkari/</a></span><br />
            <span className="number"><a href="https://github.com/UtkarshSarkari" target="_blank">https://github.com/UtkarshSarkari</a></span>
          </div>
        </div>
        <div className="About1d">
          <Link to="#line5" id="contactMe">CONTACT ME</Link>
          <a href={cv} id="downloadCv" download='cv'>DOWNLOAD CV</a>
        </div>
        <div id="line1"></div>
      </div>
      <div id="About2">
        <img src={pic} id="profile" alt="" />
        {/* <img src={grid} id="grid" alt="" /> */}
        {/* <div className="mouse"></div> */}
      </div>
    </div>
  );
}
