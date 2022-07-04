import React from "react";
import "./Projects.css";
import zigzag from "./zigzag.png";

export default function Projects() {
  const notLive = (event) => {
    event.preventDefault();
    alert("This project is not Live yet");
  };
  return (
    <div id="Projects">
      <div className="Projects1">
        <div className="Projects1a">
          <span id="projectHeading">
            <h1>Projects</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="Projects1b">
          <p id="projectPara">
            I am inspired by creating different kind of projects by implementing
            my skills correctly. I always start something by the thought, as I
            am about building something awesome. I always ensure that my each
            project should be fully working, responsive and clean coded.
          </p>
        </div>
        <div className="Projects1c">
          <img src={zigzag} alt="" />
        </div>
      </div>
      <div className="Projects2">
        <div className="projects">
          <div className="box" id="box1"></div>
          <div className="details">
            <div className="projectName">
              <h3>CONVOFOBIA | April, 2022</h3>
            </div>
            <div className="projectdesc">
              A MERN Stack real time chat application with Socket.io
              connectivity and many useful features. User can send messages and
              receive messages in real time. User can create a single chat as
              well as group chat. <br />
              <span id="tech" style={{ fontWeight: 600 }}>
                Tech:&nbsp; &nbsp;
              </span>
              Mongo DB, Express.js, React Js, Node.js, Socket.io
            </div>
            <div className="links">
              <span onClick={notLive}>
                <a href="#" className="viewLive">
                  VIEW LIVE
                </a>
              </span>
              <a href="https://github.com/UtkarshSarkari/Convofobia-Frontend" target="_blank" className="viewCode">
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="box" id="box2"></div>
          <div className="details">
            <div className="projectName">
              <h3>LINKEDIN CLONE | March, 2022</h3>
            </div>
            <div className="projectdesc">
              Clone of world’s biggest professional networking and career
              development application, LinkedIn. User can login or register
              themselves. User can post a message and it will be stored in
              Firebase database. <br />
              <span id="tech" style={{ fontWeight: 600 }}>
                Tech:&nbsp; &nbsp;
              </span>
              React JS, Redux, Firebase to store post information
            </div>
            <div className="links">
              <span>
                <a href="https://linkedinclone-9cbc3.web.app/" target="_blank" className="viewLive">
                  VIEW LIVE
                </a>
              </span>
              <a href="https://github.com/UtkarshSarkari/linkedin-clone" target="_blank" className="viewCode">
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="box" id="box3"></div>
          <div className="details">
            <div className="projectName">
              <h3>UBER CLONE | January, 2022</h3>
            </div>
            <div className="projectdesc">
              A MERN Stack real time chat application with Socket.io
              connectivity and many useful features. User can send messages and
              receive messages in real time. User can create a single chat as
              well as group chat. <br />
              <span id="tech" style={{ fontWeight: 600 }}>
                Tech:&nbsp; &nbsp;
              </span>
              Mongo DB, Express.js, React Js, Node.js, Socket.io
            </div>
            <div className="links">
              <span onClick={notLive}>
                <a href="#" className="viewLive">
                  VIEW LIVE
                </a>
              </span>
              <a href="#" className="viewCode" onClick={notLive}>
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="line3"></div>
    </div>
  );
}
