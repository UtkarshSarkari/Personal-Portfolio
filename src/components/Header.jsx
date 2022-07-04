import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css'; 
import './HeaderResponsive.css'; 

export default function header() {
  window.addEventListener('scroll',(e)=>{
    const header = document.querySelector('#header');
    if(window.pageYOffset>0){
      header.classList.add("add-shadow");
    }else{
      header.classList.remove("add-shadow");
    }
  });
  return (
    <div id='header'>
        <div className="header1">
          <span id="nameHeading">Utkarsh</span>
          <span id="dot">.</span>
        </div>
        <div className="header2">
          <ul>
            <li className="listItems"><Link to="#About">ABOUT</Link></li>
            <li className="listItems"><Link to="#line1">SKILLS</Link></li>
            <li className="listItems"><Link to="#line2">PROJECTS</Link></li>
            <li className="listItems"><Link to="#line3">EDUCATION</Link></li>
            <li className="listItems"><Link to="#line4">CERTIFICATIONS</Link></li>
            <li className="listItems"><Link to="#line5">CONTACT ME</Link></li>
          </ul>
        </div>
    </div>
  )
}
