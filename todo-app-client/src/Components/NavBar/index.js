import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <div class="navbar">
      <Link to="/add-item">
        <button>
          <span>Add Items</span>
        </button>
      </Link>
      <Link to="/about">
        <button>
          <span>Contact Developer</span>
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
