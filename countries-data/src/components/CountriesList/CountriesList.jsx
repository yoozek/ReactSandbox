import React, { useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';

const CountriesList = (props) => {
    const [countriesState, setCountriesState] = useState([props.countries])
    
    useEffect(() => {
        if (countriesState !== props.countries) {
            setCountriesState(props.countries)
        }
    }, [countriesState, props])

    return (
        <div className='country-list'>
            {
            !countriesState 
                ? <div>No countries found</div> 
                : countriesState.map(country => <CountryCard country={country} />)
            }
        </div>
    );
}
 
export default CountriesList;