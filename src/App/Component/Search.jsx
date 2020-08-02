import React from "react";

import './search.css'

export default function Search(props)
{
    return (
     
        <input
          className="search"
          type="search"
          name="searchName"
          placeholder="search-monster"
          value={props.searchName}
          onChange={props.handleChange}
        />
    );
}