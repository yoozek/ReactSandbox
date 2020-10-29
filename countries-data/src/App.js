import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import Stats from './components/Stats/Stats';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  
  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      console.log(res.data)
      setCountries(res.data)
      setFilteredCountries(res.data)
    });
  }, [])

  const handleSearchBoxChange = (e) => {
    console.log(e.target.value)
    const searchValue = e.target.value
    if (searchValue) {
      setFilteredCountries(countries.filter(country => country.name.includes(searchValue)))
    } else {
      setFilteredCountries(countries)
    }
  }

  return (
    <div className="App">
      <Header count={!countries ? 0 : countries.length}/>
      <SearchBox handleChange={handleSearchBoxChange} />
      <CountriesList countries={filteredCountries}/>
      <Stats />
      <Footer />
    </div>
  );
}



export default App;
