import React, { useEffect, useState, useRef } from "react";

import "./CSS/Audio.css";

const Audio = ({
  isOpenedRecordModal,
  setIsOpenedRecordModal,
  isRecording,
  setIsRecording,
}) => {
  return (
    <>
      <img
        src="../../../../Img/VoiceCancel.svg"
        alt=""
        id="voiceCancel"
        onClick={() => {}}
      />
      <div className={`DoneAndTimer ${1 ? "animate" : ""}`}>
        {isRecording ? (
          <img src="../../../../Img/VoiceDone.svg" alt="" onClick={() => {}} />
        ) : (
          <img src="../../../../Img/VoicePlay2.svg" alt="" />
        )}
        <p id="Timer">0:{String(3).padStart(2, "0")}</p>
      </div>
      <p id="Send">보내기</p>
    </>
  );
};
export default Audio;
