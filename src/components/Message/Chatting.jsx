import React from "react";

import "./CSS/Chatting.css";

import Image from "./components/Image";
import Voice from "./components/Voice";
import Message from "./components/Message";

const Chatting = () => {
  return (
    <div className="Chatting_Container">
      <div className="Chatting_Divider">
        <div className="Chatting_Divider_InnerText">Today</div>
      </div>
      <div className="Chatting_Divider">
        <div className="Chatting_Divider_InnerText">Yesterday</div>
      </div>
    </div>
  );
};

export default Chatting;
