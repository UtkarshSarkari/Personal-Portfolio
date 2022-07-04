import React from "react";
import "./Skills.css";
import zigzag from "./zigzag.png";

export default function Skills() {
  return (
    <div id="Skills">
      <div className="Skills1">
        <div className="Skills1a">
          <span id="skillHeading">
            <h1>Skills</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="Skills1b">
          <p id="skillPara">
            Skilling myself with different web technologies and making the best use of my skills is all I am working on.
          </p>
        </div>
        <div className="Skills1c">
          <img src={zigzag} alt="" />
        </div>
      </div>
      <div className="Skills2">
        <div className="Skills2a">
          <div className="skillType">
            <h3>Web Development</h3>
          </div>
          <p className="skills">
            HTML5, CSS3, JavaScript, Bootstrap, ReactJS, Node.js, Express.js,
            jQuery, SCSS, Tailwind, Material UI, Chakra UI
          </p>
        </div>
        <div className="Skills2b">
          <div className="skillType">
            <h3>Database</h3>
          </div>
          <p className="skills">MongoDb, Firebase, MySql, Sql</p>
        </div>
      </div>
      <div className="Skills2">
        <div className="Skills2a">
          <div className="skillType">
            <h3>Languages</h3>
          </div>
          <p className="skills">C, C++, JavaScript, Php</p>
        </div>
        <div className="Skills2b">
          <div className="skillType">
            <h3>Also familiar with</h3>
          </div>
          <p className="skills">Git, GitHub, Socket.io, Redux</p>
        </div>
      </div>
      <div id="line2"></div>
    </div>
  );
}
