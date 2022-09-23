import React, { useEffect, useState } from 'react';
import Bad from '../Bad/Bad';
import './ApiPractice.css';
const ApiPractice = ({addHandle}) => {
const [bad,setBad]=useState([])
console.log(bad);
   
useEffect(() => {

    fetch('https://breakingbadapi.com/api/characters')
    .then(res=>res.json())
    .then(data=>setBad(data))
    .catch(err=>console.error(err,"api problrem"))
},[])
    return (
        <div className="ApiPractice ">
            {
                bad.slice(0,20).map(b=><Bad addHandle={addHandle} bad={b}/>)
            }
          
        </div>
    );
};

export default ApiPractice;