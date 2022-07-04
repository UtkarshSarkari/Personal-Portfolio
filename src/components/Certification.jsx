import React from 'react';
import './Certification.css';
import zigzag from "./zigzag.png";
import loading from './loading.png';
import dsa from './dsaCertificate.pdf';
import google from './googleCertificate.pdf';

export default function Certification() {
  const nocertificate = (e)=>{
    e.preventDefault();
    alert("No certificate available this time !");
  }
  return (
    <div id='Certi'>
        <div className="Certi1">
        <div className="Certi1a">
          <span id="certificateHeading">
            <h1>Certifications</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="Certi1b">
          <p id="certificatePara">
          Achievements are the signs of good student life. They show the talent, the worth and the status of a student. To achieve something we work hard and we become focused.
          </p>
        </div>
        <div className="Certi1c">
          <img src={zigzag} alt="" />
        </div>
      </div>
      <div className="Certi2">
        <div className="certi">
          <div className="box" id='box4'></div>
          <div className="details">
            <div className="certificateName"><h3>DSA SELF-PACED &nbsp; |&nbsp; GEEKSFORGEEKS &nbsp; | &nbsp; March, 2022</h3></div>
            <div className="certificatedesc">
              A real-time chat application with many useful features <br />
              MERN Stack application with Socket.io
            </div>
            <div className="links">
              <a href={dsa} className="viewLive" download="dsa">DOWNLOAD CERTIFICATE</a>
            </div>
          </div>
        </div>
        <div className="certi">
          <div className="box" id='box5'>
            <img src={loading} className="loading" alt="" />
          </div>
          <div className="details">
            <div className="certificateName"><h3>WEB DEVELOPMENT BOOTCAMP &nbsp; | &nbsp;UDEMY &nbsp;|&nbsp; January, 2022</h3></div>
            <div className="certificatedesc">
            A clone of world’s biggest professional networking and career <br /> development application, LinkedIn <br />
            HTML5, CSS3, JavaScript, React JS, Firebase, Redux
            </div>
            <div className="links">
              <a href="#" className="viewLive" onClick={nocertificate}>DOWNLOAD CERTIFICATE</a>
            </div>
          </div>
        </div>
        <div className="certi">
          <div className="box" id='box6'>
          {/* <img src={loading} className="loading" alt="" /> */}
          </div>
          <div className="details">
            <div className="certificateName"><h3>DIGITAL MARKETING &nbsp; | &nbsp; GOOGLE DIGITAL &nbsp;| &nbsp; January, 2022</h3></div>
            <div className="certificatedesc">
              A real-time chat application with many useful features <br />
              MERN Stack application with Socket.io
            </div>
            <div className="links">
              <a href={google} className="viewLive"download="google">DOWNLOAD CERTIFICATE</a>
            </div>
          </div>
        </div>
      </div>
      <div id="line5"></div>
    </div>
  )
}
