import React from 'react';
import "./itemlistcontainer.css"; 

let styleMensaje = {
    fontWeight: 500,
    // textAlign: center,
    fontFamily: 'Playfair Display',
    fontSize: 32
};

const Itemlistcontainer = ({mensaje}) => {
    console.log(mensaje)
    return (
        <h1 style={styleMensaje}>{mensaje}</h1>
    );
};

export default Itemlistcontainer; 
    