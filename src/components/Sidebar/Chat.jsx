import React, { useState, useRef, useEffect } from "react";
import DirectList from "../../Data/DirectList";
import GroupList from "../../Data/GroupList";
import "./CSS/Chat.css";

import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import DirectChatList from "./DirectChatList";
import GroupChatList from "./GroupChatList";
import Search from "./Components/Search";

const Chat = () => {
  const [chatType, setChatType] = useState("Direct");
  const [isSearchList, setIsSearchList] = useState(false);

  return (
    <div className="Chat_Container">
      <Header />

      <Searchbar setIsSearchList={setIsSearchList} />
      {
        <div id={isSearchList ? "" : "Hidden"}>
          <Search setIsSearchList={setIsSearchList} />
        </div>
      }

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
        <div className="GroupChat_Scroll">
          {GroupList.map((item) => {
            return (
              <GroupChatList
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
      )}
    </div>
  );
};

export default Chat;
