import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const { name, img, description, price} = service;
    return (
        <div className='service mt-4'>
            <img className='cusimg img-fluid'   src={img} alt="" />
            <h2 className='card-title text-dark font-weight-bold ' >{name}</h2>
            <p className=' card-text text-danger  font-weight-bold '>Price: ${price}</p>
            <p className=' card-text   font-weight-bold'><small>{description}</small></p>
            <button  className='btn btn-danger  '>Book: {name}</button>
        </div>
    );
};

export default Service;