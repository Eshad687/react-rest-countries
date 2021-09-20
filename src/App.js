import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [country, setCountry] = useState([]);

  useEffect(() => {

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data));
  }, [])
  return (
    <div>
      <h1>Countries: {country.length}</h1>

    </div>
  );
}

function country(props) {

}

export default App;
