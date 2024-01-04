import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom;"

const CartWidget = () => {

const {cantidadTotal} = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
                <a className="btn icono" href="/">
                    <i className="fas fa-shopping-cart"></i>
                </a>
            </Link>
            <p>{cantidadTotal}</p>
        </div>
    );
};

export default CartWidget;




   
