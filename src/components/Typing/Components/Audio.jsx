import React, { useEffect, useRef, useState } from "react";

function Audio({ isOpenedRecordModal, setIsOpenedRecordModal }) {
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
  const [onRec, setOnRec] = useState(true);
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
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecAudio = () => {
    setIsStopWatch(false);
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      URL.createObjectURL(audioUrl);
    }

    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });

    setDisabled(false);
    console.log(sound);
  };

  const play = () => {
    // 타이머 실행
    setIsTimerRunning(true);

    // 오디오 URL 가져와서 실행
    const audio = new Audio(URL.createObjectURL(audioUrl));
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  return (
    <>
      
      <p id="Timer">{time}</p>
    </>
  );
}

export default Audio;
