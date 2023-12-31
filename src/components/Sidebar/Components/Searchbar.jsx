import React from "react";
import { FiSearch } from "react-icons/fi";
import './CSS/Searchbar.css'

const Searchbar = ({ setIsSearchList }) => {
  return (
    <div
      className="Chat_Searchbar"
      onClick={() => {
        setIsSearchList(true);
        document.body.style.overflow = "hidden";
      }}
    >
      <FiSearch size={22} className="Searchbar_Icon" />
      <input type="text" placeholder="Searching Friends!" />
    </div>
  );
};

export default Searchbar;
