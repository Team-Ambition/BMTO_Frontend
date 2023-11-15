import React, { useState } from "react";
import { BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

import "./CSS/Typing.css";

import Audio from "./Components/Audio";

const Typing = ({ isInfoOpen }) => {
  const [isOpenedRecordModal, setIsOpenedRecordModal] = useState(false);

  return (
    <div
      className="Typing_Container"
      id={isInfoOpen ? "StateTypeTrue" : "StateTypeFalse"}
      style={!isOpenedRecordModal ? { justifyContent: "space-between" } : null}
    >
      {isOpenedRecordModal ? (
        <Audio
          isOpenedRecordModal={isOpenedRecordModal}
          setIssOpenedRecordModal={setIsOpenedRecordModal}
        />
      ) : (
        <>
          <div className="Typing_Input">
            <input
              type="text"
              placeholder="Message..."
              id={isInfoOpen ? "StateInputTrue" : "StateInputFalse"}
            />
          </div>
          <div className="Typing_Files">
            <BsMic
              size={25}
              className="Typing_File Typing_Icon"
              onClick={() => {
                setIsOpenedRecordModal(true);
              }}
            />
            <CiImageOn size={30} className="Typing_File Typing_Icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default Typing;
