import React from "react";
import Header from "../../Components/Header";

function NoNavLayout(props) {
  return (
    <div className="headerLayout__container">
      <Header />
      <div className="headerLayout__listContainer">{props.children}</div>
    </div>
  );
}

export default NoNavLayout;
