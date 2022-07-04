import React, {useRef, useState} from "react";
import "./Contact.css";
import zigzag from "./zigzag.png";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e)=>{
    name = e.target.value;
    setName(name);
  }
  const handleEmail = (e)=>{
    email = e.target.value;
    setEmail(email);
  }
  const handleMessage = (e)=>{
    message = e.target.value;
    setMessage(message);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4ioutd', 'template_z8x4qop', form.current, 'lgcgoXlxhj_vYhNRj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName("");
      setEmail("");
      setMessage("");
  };
  return (
    <div id="Contact">
      <div className="Contact1">
        <div className="Contact1a">
          <span id="contactHeading">
            <h1>Contact Me</h1>
          </span>
          <span id="dot">.</span>
        </div>
        <div className="Contact1b">
          <p id="contactPara">
            Get connected with me to work together and make things happen by crossing the limitations and possibilities.
          </p>
        </div>
        <div className="Contact1c">
          <img src={zigzag} alt="" />
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="Contact2">
        <div className="nameEmail">
          <input type="text" name="name" onChange={handleName} placeholder="Name" required />
          <input type="email" name="email" onChange={handleEmail} placeholder="Email" required />
        </div>
        <div className="message">
          <textarea name="message" id="message" onChange={handleMessage} cols="10" rows="10" placeholder="Message" required></textarea>
          <input type="submit" className="sendMessage" value="SEND MESSAGE" />
        </div>
      </form>
    </div>
  );
}
