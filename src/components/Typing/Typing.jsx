import React, { useState, useRef, useEffect } from "react";
import { BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

import "./CSS/Typing.css";
import "./Components/CSS/Audio.css";
import Audio from "./Components/Audio";

const Typing = ({ isInfoOpen, isDirectGroup }) => {
  const [isOpenedRecordModal, setIsOpenedRecordModal] = useState(false);

  // 타이머
  const [time, setTime] = useState(0);
  const SaveTime = useRef(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isStopWatch, setIsStopWatch] = useState(false);

  // 시간 기록
  useEffect(() => {
    let timer;
    if (isStopWatch) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStopWatch]);

  // 시간 출력
  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    if (time === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, time]);

  // 음성녹음
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(false);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [disabled, setDisabled] = useState(true);

  const onRecAudio = () => {
    setIsStopWatch(true);
    setDisabled(true);

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 60) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
              const audioBlob = new Blob([e.data], { type: "audio/wav" });
              setAudioUrl(URL.createObjectURL(audioBlob)); // URL.createObjectURL로 저장
              setOnRec(true);
            }
          };
        }
      };
    });
  };

  const offRecAudio = () => {
    setIsStopWatch(false);

    if (stream) {
      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });

      media.stop();
      analyser.disconnect();
      source.disconnect();

      const sound = new File([audioUrl], "soundBlob", {
        lastModified: new Date().getTime(),
        type: "audio",
      });

      setDisabled(false);
      console.log(sound);

      // VoiceDone.svg를 누르면 onRec을 false로 설정
      setOnRec(false);
    }
  };

  const play = () => {
    // 타이머 실행
    setIsTimerRunning(true);

    if (audioUrl) {
      // 오디오 URL 가져와서 실행
      console.log(audioUrl); // 확인용
      const audio = new Audio(URL.createObjectURL(audioUrl));
      audio.loop = false;
      audio.volume = 1;

      // 재생이 끝나면 타이머 중지
      audio.onended = () => {
        setIsTimerRunning(false);
      };

      audio.play();
    }
  };

  console.log(onRec);

  return (
    <div
      className="Typing_Container"
      id={
        isInfoOpen & (isDirectGroup === "Direct")
          ? "StateTypeFalse"
          : " StateTypeTrue"
      }
      style={!isOpenedRecordModal ? { justifyContent: "space-between" } : null}
    >
      {isOpenedRecordModal ? (
        <>
          <img
            src="../../../../Img/VoiceCancel.svg"
            alt=""
            id="voiceCancel"
            onClick={() => {
              // VoiceCancel.svg를 누를 때 실행할 로직
              setOnRec(false);
              setIsOpenedRecordModal(false);
              offRecAudio();
            }}
          />
          <div className={`DoneAndTimer ${onRec ? "animate" : ""}`}>
            {onRec ? (
              <img
                src="../../../../Img/VoiceDone.svg"
                alt=""
                onClick={() => {
                  // VoiceDone.svg를 누를 때 실행할 로직
                  offRecAudio();
                }}
              />
            ) : (
              <img src="../../../../Img/VoicePlay2.svg" alt="" onClick={play} />
            )}
            <p id="Timer">0:{String(time).padStart(2, "0")}</p>
          </div>
          <p id="Send">보내기</p>
        </>
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
                // BsMic을 누를 때 실행할 로직
                setIsOpenedRecordModal(true);
                setOnRec(true);
                onRecAudio();
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
