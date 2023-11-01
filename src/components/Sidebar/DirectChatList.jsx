import React from "react";
import { faker } from "@faker-js/faker";

import { BsCheckCircleFill } from "react-icons/bs";

const DirectChatList = ({ img, name, msg, time, unread, online }) => {
  return (
    <div className="DirectChat_FriendList_Container">
      <div className="DirectChat_FriendList">
        <div className="DirectChat_Left">
          <img src={img} alt="" className="Avatar_Img" />
          <div className="FriendList_Info">
            <p className="Info_Name">{name}</p>
            <p className="Info_LastMessage">{msg}</p>
          </div>
        </div>

        <div className="DirectChat_Right">
          <div className="MessageState">
            <p className="MessageState_Time">{time}</p>
            {unread == 0 ? (
              <div className="MessageState_Time_Icon">
                <BsCheckCircleFill size={20} />
              </div>
            ) : (
              <div>5</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectChatList;
