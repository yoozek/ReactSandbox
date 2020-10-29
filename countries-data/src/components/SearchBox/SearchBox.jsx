import React from 'react';
import './style.css' 

const SearchBox = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search countries by name, city and languages" />

            <div className="stats-btn">
                <a href="#stats">Stats</a>
            </div>
        </div>
    );
}
 

export default SearchBox;