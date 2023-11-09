import React from "react";
import { BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

import "./CSS/Typing.css";

const Typing = ({ isInfoOpen }) => {
  return (
    <div
      className="Typing_Container"
      id={isInfoOpen ? "StateTypeTrue" : "StateTypeFalse"}
    >
      <div className="Typing_Input">
        <input
          type="text"
          placeholder="Message..."
          id={isInfoOpen ? "StateInputTrue" : "StateInputFalse"}
        />
      </div>
      <div className="Typing_Files">
        <BsMic size={25} className="Typing_File Typing_Icon" />
        <CiImageOn size={30} className="Typing_File Typing_Icon" />
      </div>
    </div>
  );
};

export default Typing;
