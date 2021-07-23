import React from "react";
import Header from "../../Components/Header";
import LoginBar from "../../Components/LoginBar";
import NavBar from "../../Components/NavBar";
import "./style.css";

const myUser = {
    name: "Muhammad Bilal"
}

function HeadNavLayout(props) {
  return (
    <div>
      <LoginBar user={myUser}/>
      <div className="headerLayout__container">
        <Header />
        <NavBar />
        <div className="headerLayout__listContainer">{props.children}</div>
      </div>
    </div>
  );
}

export default HeadNavLayout;
