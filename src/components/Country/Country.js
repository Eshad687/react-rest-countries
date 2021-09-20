import React from 'react';
import './Country.css'

const Country = (props) => {
    // using destucturig . props. country is an object
    const { name, capital, population, flag, region } = props.country;
    return (
        <div className="country-info">
            <h2>{name}</h2>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital} Population: {population}</p>

        </div>
    );
};

export default Country;