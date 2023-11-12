import React, { useState } from "react";

import "./CSS/Image.css";

import ClickImage from "../../Modals/ClickImage";

const Image = ({ img, from }) => {
  const [isImageOpened, setIsImageOpened] = useState(false);
  return (
    <div>
      <div className="Image_Container">
        <img
          src={img}
          alt=""
          className="Image_Image"
          id="Image_Incoming"
          onClick={() => {
            setIsImageOpened(true);
          }}
        />
      </div>
      <div className="Image_Container">
        <img
          src={img}
          alt=""
          className="Image_Image"
          id="Image_Outgoing"
          onClick={() => {
            setIsImageOpened(true);
          }}
        />
      </div>
      {isImageOpened ? (
        <div
          className="ClickImage_Background"
          onClick={() => {
            setIsImageOpened(false);
          }}
        ></div>
      ) : null}
      {isImageOpened ? <ClickImage img={img} /> : null}
    </div>
  );
};

export default Image;
