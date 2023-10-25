import React from 'react';
import "./itemlistcontainer.css"; 

const Itemlistcontainer = ({mensaje}) => {
    console.log(mensaje)
    return (
        <h1>{mensaje}</h1>
    );
};

export default Itemlistcontainer; 
    