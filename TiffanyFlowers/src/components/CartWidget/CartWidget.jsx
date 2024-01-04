import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom;"

const CartWidget = () => {

const {getTotalItems} = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
                <a className="btn icono" href="/">
                    <i className="fas fa-shopping-cart"></i>
                </a>
            </Link>
            <p>{getTotalItems()}</p>
        </div>
    );
};

export default CartWidget;




   
