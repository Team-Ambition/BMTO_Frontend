import React from "react";

import "./CSS/Divider.css";
const Divider = ({ text }) => {
  return (
    <div className="Divder_Container">
      <div className="Divider">
        <div className="Divider_InnerText">{text}</div>
      </div>
    </div>
  );
};

export default Divider;
