import React from "react";
import "./CSS/Home.css";

import Header from "../components/Header/Header";
import Chat from "../components/Sidebar/Chat";
import Typing from "../components/Typing/Typing";
import Info from "../components/Info/Info";

const Home = () => {
  return (
    <div className="Home_Container">
      <Chat />

      <div className="Home_Main">
        <Header />
        <Typing />
      </div>

      <div className="Home_Chat_Info"></div>
    </div>
  );
};

export default Home;
