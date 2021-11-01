import React from "react";
import classes from "./SearchBox.module.css";

export const SearchBox = (props) => (
  <input
    className={classes.SearchBox}
    type="search"
    placeholder="search items"
    onChange={props.onSearchChange}
  />
);
