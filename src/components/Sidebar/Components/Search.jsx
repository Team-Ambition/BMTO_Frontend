import React, { useRef, useEffect } from "react";

import "./CSS/Search.css";

import SearchList from "../../../Data/SearchList";

const Search = ({ setIsSearchList }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsSearchList(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => handleClickOutside(event);

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsSearchList]);

  return (
    <div className="Search_Container">
      {SearchList.map((item) => (
        <div className="SearchList_Container" ref={wrapperRef}>
          <img src={item.img} alt="" className="Search_Img" />
          <div className="Search_Profile">
            <p className="Search_Name">{item.name}</p>
            <p className="Search_Abracadabra">{item.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
