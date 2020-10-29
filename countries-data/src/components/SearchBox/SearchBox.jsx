import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <input 
                type="text" 
                placeholder="Search countries by name, city and languages"
                onChange={props.handleChange}
            />

            <div className="stats-btn">
                <a href="#stats">Stats</a>
            </div>
        </div>
    );
}
 

export default SearchBox;