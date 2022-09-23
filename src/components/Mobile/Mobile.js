import React, { useState } from 'react';

const Mobile = () => {

const [count,setCount]=useState(100)

function battery() {
    
    let newCount = count - 10
    if (newCount<0) {
        return
    }
    setCount(newCount)
}

    return (
        <div>
            <p>{count}%</p>
            <button onClick={battery}>battery down</button>
        </div>
    );
};

export default Mobile;