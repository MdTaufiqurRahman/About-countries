import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, capital, flag} = (props.country);
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = (props.handleAddCountry);
    return (
        <div style={countryStyle}>
            <h2>Name: {name}</h2>
            <img src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <button onClick={() =>handleAddCountry(props.country)} >Add Country</button>
        </div>
    );
};

export default Country;