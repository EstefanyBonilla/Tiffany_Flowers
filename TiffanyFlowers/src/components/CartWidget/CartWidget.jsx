import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)
  
    return (
      <div>
        <Link to="/cart">
          <p>ICONITO DE CARRITO</p>
        </Link>
        <p>{cantidadTotal}</p>
      </div>
    );
  };
  
  export default CartWidget;




   
