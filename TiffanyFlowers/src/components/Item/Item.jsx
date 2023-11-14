import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({product}) => {



    return (
        <>
        <div className="container align-items-top d-flex">
            <div className='contenedor row g-4'>
                <Link to={`/item/${product.id}`}>
                    <h5>{product.nombre}</h5>
                </Link>
                <img className='foto' src={product.img} alt={product.nombre} /> 
            </div> 
        </div>
        </>
    );
};

export default Item;