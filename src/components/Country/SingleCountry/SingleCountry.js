import React from 'react';
import './SingleCountry.css';
const SingleCountry = (props ) => {
    //console.log(props.country.slice(0,10));
     const  {population,capital,flags} =props.country
     const {common} =props.country.name
    return (
        <div >
           <p>Name:{common}</p>
       <img src={flags.png} alt="" />
       <p>pop: {capital}</p> 
       <p>pop: {population}</p> 
        </div>
    );
};

export default SingleCountry;

