import React, { useEffect, useState } from "react";
import './CSS/Page404.css'

const Page404 = () => {
  const [randomIcon, setRandomIcon] = useState(1);

  const IconArray = [
    "../..//Img/icon404/1.avif",
    "../..//Img/icon404/4.avif",
    "../..//Img/icon404/5.avif",
    "../..//Img/icon404/6.avif",
    "../..//Img/icon404/9.avif",
    "../..//Img/icon404/10.avif",
  ];

  useEffect(() => {
    const ImgNum = Math.round(Math.random() * 5);
    setRandomIcon(IconArray[ImgNum]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Page404_Container">
      <img src={randomIcon} alt="" />
    </div>
  );
};

export default Page404;
