import React from 'react';

const Header = (props) => {
    return ( 
        <header>
            <h1>World countries Data</h1>
            <h2>Currently, we have {props.count} countries</h2>
        </header>
     );
}
 
export default Header;