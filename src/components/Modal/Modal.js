import React from 'react';

const Modal = (props) => {
    console.log(props.modal.name);
    const {name,birthday,occupation,status,img,category}=props.modal
    return (
        <div>
            
<label htmlFor="my-modal-4" className="btn modal-button btn-sm">View Details</label>


<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" for="">
    <h3 className="text-lg font-bold">{name}</h3>
    <img src={img} alt="" className='w-50% mx-auto '/> 
    <p className="py-4 text-3xl">{status}</p>
    <p className="font-bold">Birthday: {birthday}</p>
  </label>
</label>
        </div>
    );
};

export default Modal;