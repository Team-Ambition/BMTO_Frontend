import React from "react";

import "./CSS/ClickImage.css";

const ClickImage = ({ img }) => {
  return (
    <div className="ClickImage_Container">
      <img src={img} alt="" className="ClickImage_Image" />
    </div>
  );
};

export default ClickImage;
