import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function AddItem() {
  return (
    <div className="addItem__formContainer">
      <h2>Add an Item</h2>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Task Description"
        ></textarea>
      </div>
      <div className="btn-container">
        <button>
          <span>Add Item!</span>
        </button>
        <Link to="/">
          <button>
            <span>Cancel</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddItem;
