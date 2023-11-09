import React from "react";
import { faker } from "@faker-js/faker";

import "./CSS/Image.css";

const Image = ({ img, incoming, outgoing }) => {
  return (
    <div>
      <div className="Image_Container">
        <img
          src={faker.image.avatar()}
          alt=""
          className="Image_Image"
          id="Image_Incoming"
        />
      </div>
      <div className="Image_Container">
        <img
          src={faker.image.avatar()}
          alt=""
          className="Image_Image"
          id="Image_Outgoing"
        />
      </div>
    </div>
  );
};

export default Image;
