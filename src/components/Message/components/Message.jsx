import React from "react";

import "./CSS/Message.css";

import ChatHistory from "../../../Data/ChatHistory";

const Message = ({ message, from }) => {
  return (
    <div>
      <div className="Message_Container Message_Incoming">
        <div className="Message_Text">{message}</div>
      </div>
      <div className="Message_Container Message_Outgoing">
        <div className="Message_Text">{message}</div>
      </div>
    </div>
  );
};

export default Message;
