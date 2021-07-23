import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function About() {
  return (
    <div className="about__container">
      <img src="./profile.jpg" />
      <h1>Muhammad Bilal</h1>
      <h3>
        Hey! I am a full stack developer. I expertise in the MERN stack. I'm
        currently enrolled in a Computer Science degree!
        <br />
        <br />
        You can reach me using
      </h3>
      <div className="about__socials">
        <a href="https://www.facebook.com/bilaljavedkewl/" target="_blank">
          <i className="bi bi-facebook" />
        </a>
        <a href="https://www.instagram.com/bilaljavedkewl/" target="_blank">
          <i className="bi bi-instagram" />
        </a>
        <a href="https://www.linkedin.com/in/muhammadbilal2001/" target="_blank">
          <i className="bi bi-linkedin" />
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=bilaljavedblackops15@gmail.com&tf=cm" target="_blank">
          <i className="bi bi-envelope-fill" />
        </a>
        <a href= "https://github.com/BilalJaved15" target="_blank">
        <i className="bi bi-github"/>
        </a>
      </div>  
      <Link to="/">
        <button className="about_btn">
          <span>Back To Home</span>
        </button>
      </Link>
    </div>
  );
}

export default About;
