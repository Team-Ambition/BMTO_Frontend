import React from "react";

import "./CSS/Search.css";

import SearchList from "../../../Data/SearchList";

const Search = () => {
  return (
    <div className="Search_Container">
      {SearchList.map((item) => (
        <div className="SearchList_Container">
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
