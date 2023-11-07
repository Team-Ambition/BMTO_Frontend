import React, { useState } from "react";
import "./CSS/Home.css";

import Header from "../components/Header/Header";
import Chat from "../components/Sidebar/Chat";
import Typing from "../components/Typing/Typing";
import Info from "../components/Info/Info";
import Message from "../components/Message/components/Message";

const Home = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const getInfoState = (State) => {
    setIsInfoOpen(State);
  };

  const [isDirectGroup, setIstDirectGroup] = useState(true);

  const getDirectGroup = (State) => {
    setIstDirectGroup(State);
  };

  return (
    <div className="Home_Container">
      <Chat getDirectGroup={getDirectGroup} />

      <div className="Home_Main">
        <Header getInfoState={getInfoState} isDirectGroup={isDirectGroup} />
        <div className="Home_Chatting">
          <Message />
        </div>
        <Typing isInfoOpen={isInfoOpen} />
      </div>

      <div className="Home_Chat_Info">{isInfoOpen ? <Info /> : null}</div>
    </div>
  );
};

export default Home;
