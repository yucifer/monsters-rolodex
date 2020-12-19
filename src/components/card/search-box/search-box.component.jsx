import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleSearch}) => {
    return (
        <input className="search"
            onChange={handleSearch}
            type="search"
            placeholder={placeholder}
        />
   
    )
}