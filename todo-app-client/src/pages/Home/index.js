import React from "react";
import "./style.css";
import { GET_ITEM } from "../../api/index.js";
import { useState, useEffect } from "react";
require("dotenv").config();

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    GET_ITEM()
      .then((res) => {
        if (res.data.success === 1) {
          setItems(res.data.data);
        } else throw Error();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list__container">
      <h4>Your Current List: </h4>
      <ul>
        {items &&
          items.map((item) => {
            return (<li><span>{item.title} <i className="bi bi-trash del-icon"/></span></li>);
          })}
      </ul>
    </div>
  );
}

export default Home;
