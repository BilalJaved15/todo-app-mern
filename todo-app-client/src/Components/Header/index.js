import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="header">
        <h1>🚀 TODO App 🚀 </h1>
        <h3>Create a todo list for yourself, Simple and easy! 💯</h3>
      </div>
    </div>
  );
}

export default Header;
