import React from 'react';

const CountryCard = ({country}) => {
    const languages = !country.languages || country.languages.map(l => l.name).join(', ')
    const currencies = !country.currencies || country.currencies.map(c => c.name).join(', ')

    return (
        !country ? <div></div> :
        <div className='country-card'>
            <div className='country-flag-wrapper'>
                <img className='country-flag' src={country.flag} />
            </div>

            <h3>{country.name}</h3>

            <div>
                <p><b>Capital:</b> {country.capital}</p>
                <p><b>Languages:</b> {languages ?? ""}</p>
                <p><b>Population:</b> {country.population}</p>
                <p><b>Currency:</b> {currencies}</p>
            </div>
        </div>
    );
}
 
export default CountryCard;