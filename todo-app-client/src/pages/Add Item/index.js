import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ADD_ITEM } from "../../api";
import "./style.css";


function AddItem() {
  const itemController = (title) => {
    if(title.length > 0){
      console.log("calling api")
      ADD_ITEM(title).then((res)=>{
        if(res.data.success === 1){
          console.log("ADDED! ", res.data.data)
        } else throw Error()
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  const [item, setItem] = useState("");
  return (
    <div className="addItem__formContainer">
      <h2>Add an Item</h2>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Task Description"
          onChange={(e) => {
            setItem(e.target.value);
            console.log(item);
          }}
        ></textarea>
      </div>
      <div className="btn-container">
        <button
        onClick= {() => itemController(item)}>
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
