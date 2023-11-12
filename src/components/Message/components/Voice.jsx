import React from "react";

import "./CSS/Voice.css";

const Voice = ({ link, time, from }) => {
  return (
    <div>
      <div className="Voice_Container" id="Voice_Incoming">
        <div className="Voice_Img">
          <img src="../../../Img/VoicePlay1.svg" alt="" />
          <img src="../../../Img/Voice1.svg" alt="" />
          <div className="Voice_Timer_Div">
            <p className="Voice_Timer">0:36</p>
          </div>
        </div>
      </div>
      <div className="Send_Time"></div>
      <div className="Voice_Container" id="Voice_Outgoing">
        <div className="Voice_Img">
          <img src="../../../Img/VoicePlay2.svg" alt="" />
          <img src="../../../Img/Voice2.svg" alt="" />
          <div className="Voice_Timer_Div">
            <p className="Voice_Timer">0:36</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
