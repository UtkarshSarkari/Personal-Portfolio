import React from "react";
import "./Education.css";
import zigzag from "./zigzag.png";

export default function Education() {
  return (
    <div id="Education">
      <div className="Education1">
        <div className="Education1a">
          <span id="educationHeading">
            <h1>Education</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="Education1b">
          <p id="educationPara">
            All my life I have been driven by my strong belief that education is
            important. I try to learn something new every single day.
          </p>
        </div>
        <div className="Education1c">
          <img src={zigzag} alt="" />
        </div>
      </div>
      <div className="Education2">
        <div className="Education2a">
          <div className="Education2a1">
            <span className="institute">
              <h3>LOVELY PROFESSIONAL UNIVERSITY</h3>
            </span>
            <span className="duration">
              <p>2019-Present</p>
            </span>
          </div>
          <div className="Education2a2">
            <span className="address">
              <p>Phagwara, Punjab</p>
            </span>
            <span className="course">
              <p>Bachelor of Technology (Computer Science)</p>
            </span>
          </div>
        </div>
        <div className="Education2a">
          <div className="Education2a1">
            <span className="institute">
              <h3>DAV CENTENARY PUBLIC SCHOOL</h3>
            </span>
            <span className="duration">
              <p>2018-2019</p>
            </span>
          </div>
          <div className="Education2a2">
            <span className="address"><p>Haridwar, Uttrakhand</p></span>
            <span className="course">
              <p>Senior Secondary (Computer Science)</p>
            </span>
          </div>
        </div>
        <div className="Education2a">
          <div className="Education2a1">
            <span className="institute">
              <h3>DAV CENTENARY PUBLIC SCHOOL</h3>
            </span>
            <span className="duration">
              <p>2016-2017</p>
            </span>
          </div>
          <div className="Education2a2">
            <span className="address"><p>Haridwar, Uttrakhand</p></span>
            <span className="course">
              <p>Secondary School (Computer Science)</p>
            </span>
          </div>
        </div>
      </div>
      <div id="line4"></div>
    </div>
  );
}
