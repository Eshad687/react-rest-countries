import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>{countries.length} Countries</h1>
            <div className="country-container">
                {
                    countries.map(country => console.log(country))
                }
                {
                    countries.map(country => <Country key={country.numericCode} country={country}></Country>)
                    // sending the whole country becaus we need lots of information
                    //it is cleaner this way

                    // we need to some unique property so that it can be differentiated. it called key
                }
            </div>

        </div>
    );
};

export default Countries;