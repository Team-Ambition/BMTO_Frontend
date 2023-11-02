import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = ({ setIsSearchList }) => {
  return (
    <div
      className="Chat_Searchbar"
      onClick={() => {
        setIsSearchList(true);
      }}
    >
      <FiSearch size={22} className="Searchbar_Icon" />
      <input type="text" placeholder="Searching Friends!" />
    </div>
  );
};

export default Searchbar;
