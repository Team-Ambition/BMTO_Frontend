import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import "./CSS/GroupChatList.css";

const GroupChatList = ({ img, name, msg, time, unread, online }) => {
  return (
    <div className="GroupChat_FriendList_Container">
      <div className="GroupChat_FriendList">
        <div className="GroupChat_Left">
          <img src={img} alt="" className="Avatar_Img" />
          <div className="FriendList_Info">
            <p className="Info_Name">{name}</p>
            <p className="Info_LastMessage">{msg}</p>
          </div>
        </div>

        <div className="GroupChat_Right">
          <div className="MessageState">
            <p className="MessageState_Time">{time}</p>
            {unread === 0 ? (
              <div className="MessageState_Time_Icon">
                <BsCheckCircleFill size={20} />
              </div>
            ) : (
              <div className="MessageState_Unread_Container">
                <div className="MessageState_Unread">{unread}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChatList;
