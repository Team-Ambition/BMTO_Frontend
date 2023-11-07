import React from "react";

import "./CSS/Message.css";

const Message = () => {
  return (
    <div>
      <div className="Message_Container" id="Message_Incoming">
        <div className="Message_Text">안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</div>
      </div>
      <div className="Message_Container" id="Message_Outgoing">
        <div className="Message_Text">안녕하세요</div>
      </div>
    </div>
  );
};

export default Message;
