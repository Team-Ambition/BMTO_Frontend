import React from "react";

import "./CSS/Chatting.css";

import Image from "./components/Image";
import Voice from "./components/Voice";
import Message from "./components/Message";
import Divider from "./components/Divider";
import ChatHistory from "../../Data/ChatHistory";

const Chatting = () => {
  return (
    <div className="Chatting_Container">
      {ChatHistory.map((item, index) => {
        switch (item.type) {
          case "Msg":
            return (
              <Message
                message={item.message}
                from={item.from}
              />
            );
          case "Img":
            return (
              <Image
                img={item.img}
                incoming={item.incoming}
              />
            );
          case "Voice":
            return (
              <Voice
                link={item.link}
                time={item.time}
                incoming={item.incoming}
              />
            );
          case "Divider":
            return <Divider text={item.text} />;
          default:
            return (
              <Message
                message={item.message}
                incoming={item.incoming}
              />
            );
        }
      })}
    </div>
  );
};

export default Chatting;
