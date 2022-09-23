import React, { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry/SingleCountry';
import './Country.css';
const Country = () => {
    const [countries ,setCountries] = useState([])


    



























  useEffect(() => {
    

    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
    console.log(data.slice(0,20));
    })
  },[])
    return (        
        <div>                 
               <h1>Visiting every country of the world</h1>
      <p>Available Country : {countries.length}</p>
       <div className="country">
       {
        countries.slice(0,10).map(country => <SingleCountry country={country} key={country.cca3} />)
      }  
        </div>                                 
        </div>
    );
};



export default Country;