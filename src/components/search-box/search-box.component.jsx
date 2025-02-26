import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange}) => {
 return <input
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
    className="search"
  />;
};
