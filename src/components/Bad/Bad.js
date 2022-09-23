import React from 'react';
import Modal from '../Modal/Modal';
import './Bad.css';
const Bad = (props) => {
    console.log(props.addHandle);
    const {name,birthday,occupation,status,img,category} =props.bad
    return (
        <div className="bad">
            <h2 className="text-lg font-bold">Name{name}</h2>
            <p >{birthday}</p>
            <p>{occupation}</p>
            <p className="">{status}</p>
            <p>{category}</p>
            <img className="h-44 my-5 w-44 mx-auto "src={img} alt=""/>
           <div className="flex flex-row justify-around my-3">
           <button onClick={()=>props.addHandle()} className=" btn btn-warning btn-sm">Buy A Bad </button>
            <Modal modal={props.bad}/>
           </div>

        </div>
    );
};

export default Bad;