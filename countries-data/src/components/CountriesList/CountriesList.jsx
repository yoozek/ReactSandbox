import React, { useEffect, useState } from 'react';

const CountriesList = (props) => {
    console.log('filtered countries', props)
    const [countriesState, setCountriesState] = useState([props.countries])
    
    useEffect(() => {
        if (countriesState !== props.countries) {
            setCountriesState(props.countries)
            console.log(props.countries)
        }
    }, [props])

    return (<div>
        {countriesState.map(c => <div>{c.name}</div>)}
    </div>);
}
 
export default CountriesList;