import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="header">
        <h1>TaskBook 📚 </h1>
        <h2>Focus on productive stuff, cuz TaskBook is here to handle your schedules 😉</h2>
      </div>
    </div>
  );
}

export default Header;
