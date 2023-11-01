import React, { useState } from "react";
import DirectList from "../../Data/DirectList";
import "./CSS/Chat.css";

import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import DirectChatList from "./DirectChatList";
import GroupChatList from "./GroupChatList";

const Chat = () => {
  const [chatType, setChatType] = useState("Direct");
  return (
    <div className="DirectChat_Container">
      <Header />

      <Searchbar />

      <div className="DirectChat_to_GroupChat">
        <p
          className="DirectChat_to_GroupChat_Direct"
          onClick={() => setChatType("Direct")}
          id={
            chatType === "Direct" ? "DirectChat_to_GroupChat_Direct_Border" : ""
          }
        >
          Direct
        </p>
        <p
          className="DirectChat_to_GroupChat_Group"
          onClick={() => setChatType("Group")}
          id={
            chatType === "Group" ? "DirectChat_to_GroupChat_Direct_Border" : ""
          }
        >
          Group
        </p>
      </div>

      {chatType === "Direct" ? (
        <div className="DirectChat_Scroll">
          {DirectList.map((item) => {
            return (
              <DirectChatList
                img={item.img}
                name={item.name}
                msg={item.msg}
                time={item.time}
                unread={item.unread}
                online={item.online}
              />
            );
          })}
        </div>
      ) : (
        <GroupChatList />
      )}
    </div>
  );
};

export default Chat;
