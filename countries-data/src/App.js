import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import Stats from './components/Stats/Stats';

const countriesCount = 250

function App() {
  return (
    <div className="App">
      <Header count={countriesCount}/>
      <SearchBox />
      <CountriesList />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
